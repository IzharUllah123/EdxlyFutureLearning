import { db, auth } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export const saveAssessmentResult = async (data: {
  topic: string;
  subject: string;
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  type: string;
  difficulty?: string;
}) => {
  const user = auth.currentUser;
  if (!user) return;

  try {
    await addDoc(collection(db, "assessment_history"), {
      userId: user.uid,
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("Progress saved successfully!");
  } catch (error) {
    console.error("Error saving progress:", error);
  }
};