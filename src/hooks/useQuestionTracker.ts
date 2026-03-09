import { useState, useEffect } from "react";
import { auth, db, ensureAnonymousUser } from "@/firebase/config";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const FREE_DAILY_LIMIT = 10;
const FREE_ANONYMOUS_LIMIT = 10;

export const useQuestionTracker = () => {
  const [remaining, setRemaining] = useState(FREE_DAILY_LIMIT);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(true);

  useEffect(() => {
    // Ensure user is signed in (even anonymously)
    ensureAnonymousUser();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setLoading(false);
        return;
      }

      const anonymous = user.isAnonymous;
      setIsAnonymous(anonymous);

      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const data = userDoc.data();

          // Check if user has subscription
          const hasSub = data.subscription === "active";
          setHasSubscription(hasSub);

          // If subscribed, unlimited questions
          if (hasSub) {
            setRemaining(999);
            setIsLimitReached(false);
            setLoading(false);
            return;
          }

          if (anonymous) {
            // For anonymous users, use total questions, no reset
            const totalCount = data.totalQuestions || 0;
            const left = Math.max(0, FREE_ANONYMOUS_LIMIT - totalCount);
            setRemaining(left);
            setIsLimitReached(left === 0);
          } else {
            // For authenticated free users, daily reset
            const today = new Date().toDateString();
            const lastReset = data.lastResetDate || "";

            if (lastReset !== today) {
              // New day - reset counter
              await updateDoc(userDocRef, {
                dailyQuestions: 0,
                lastResetDate: today,
              });
              setRemaining(FREE_DAILY_LIMIT);
              setIsLimitReached(false);
            } else {
              // Same day - check count
              const count = data.dailyQuestions || 0;
              const left = Math.max(0, FREE_DAILY_LIMIT - count);
              setRemaining(left);
              setIsLimitReached(left === 0);
            }
          }
        } else {
          // New user - create document
          await setDoc(userDocRef, {
            dailyQuestions: 0,
            totalQuestions: 0,
            lastResetDate: new Date().toDateString(),
            subscription: "free",
            createdAt: new Date().toISOString(),
          });
          setRemaining(anonymous ? FREE_ANONYMOUS_LIMIT : FREE_DAILY_LIMIT);
          setIsLimitReached(false);
        }
      } catch (error) {
        console.error("Error tracking questions:", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const incrementQuestion = async () => {
    const user = auth.currentUser;
    if (!user || hasSubscription) return;

    try {
      const userDocRef = doc(db, "users", user.uid);
      const updateData: any = {};
      const today = new Date().toDateString();

      if (isAnonymous) {
        updateData.totalQuestions = increment(1);
      } else {
        updateData.dailyQuestions = increment(1);
        updateData.lastResetDate = today;
      }

    // ✅ Update local state FIRST — before Firestore
setRemaining((prev) => {
  const newRemaining = Math.max(0, prev - 1);
  setIsLimitReached(newRemaining === 0);
  return newRemaining;
});

// Then Firestore in background
await updateDoc(userDocRef, updateData);
    } catch (error) {
      console.error("Error incrementing question:", error);
    }
  };

  return {
    remaining,
    isLimitReached,
    hasSubscription,
    incrementQuestion,
    loading,
    isAnonymous,
  };
};
