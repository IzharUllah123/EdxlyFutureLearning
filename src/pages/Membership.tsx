import { useState, useEffect } from "react";
import { auth } from "../firebase/config"; // Import your firebase config
import { onAuthStateChanged } from "firebase/auth";
import PricingModal from "../components/PricingModal";
import AuthModal from "../components/AuthModal"; // You'll need this for the login trigger
import { useNavigate } from "react-router-dom";

const MembershipPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const navigate = useNavigate();

  // 1. Sync authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user && !user.isAnonymous && user.emailVerified);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto py-20 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Membership Plans
      </h1>
      
     <PricingModal 
  isOpen={true} 
  onClose={() => navigate("/")} // This will redirect to the home page
  isLoggedIn={isLoggedIn}
  onLoginClick={() => setAuthModalOpen(true)}
/>

      {/* 2. Add the AuthModal so the "Sign In" flow works here too */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        view="sign_in"
        onAuthSuccess={() => setAuthModalOpen(false)}
      />
    </div>
  );
};

export default MembershipPage;