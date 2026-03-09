import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInAnonymously } from "firebase/auth"; // Added signInAnonymously
import { getFirestore } from "firebase/firestore"; // Added Firestore

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app); // Export database
export const googleProvider = new GoogleAuthProvider();

// Function to sign in guests silently so we can track them
export const ensureAnonymousUser = async () => {
  if (!auth.currentUser) {
    try {
      await signInAnonymously(auth);
      console.log("Guest user signed in silently");
    } catch (error) {
      console.error("Anonymous auth failed", error);
    }
  }
};

export default app;