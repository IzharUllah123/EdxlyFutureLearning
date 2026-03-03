import React, { useState } from "react";
import { 
  X, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Loader2, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription 
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { 
  auth, 
  db 
} from "../firebase/config";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail,
  updateProfile,
  sendEmailVerification
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  view: "sign_in" | "sign_up" | "forgot_password";
  onAuthSuccess?: () => void;
}

const AuthModal = ({ isOpen, onClose, view: initialView, onAuthSuccess }: AuthModalProps) => {
  const [currentView, setCurrentView] = useState<"sign_in" | "sign_up" | "forgot_password">(initialView);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [resetSent, setResetSent] = useState(false);

  // Form States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  // Sync internal view with prop when modal opens
  React.useEffect(() => {
    setCurrentView(initialView);
    setError(null);
    setResetSent(false);
  }, [initialView, isOpen]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (currentView === "sign_up") {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: fullName });
        
        // Create user document in Firestore
        await setDoc(doc(db, "users", userCredential.user.uid), {
          uid: userCredential.user.uid,
          displayName: fullName,
          email: email,
          createdAt: serverTimestamp(),
          subscription: "free"
        });

        await sendEmailVerification(userCredential.user);
        alert("Verification email sent! Please check your inbox.");
        onAuthSuccess?.();
      } 
      else if (currentView === "sign_in") {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        if (!userCredential.user.emailVerified) {
          setError("Please verify your email address before signing in.");
          setLoading(false);
          return;
        }
        onAuthSuccess?.();
      }
      else if (currentView === "forgot_password") {
        await sendPasswordResetEmail(auth, email);
        setResetSent(true);
      }
    } catch (err: any) {
      console.error("Auth error:", err);
      if (err.code === "auth/user-not-found") setError("No account found with this email.");
      else if (err.code === "auth/wrong-password") setError("Incorrect password.");
      else if (err.code === "auth/email-already-in-use") setError("Email already registered.");
      else setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] p-0 overflow-hidden border-none shadow-2xl">
        <div className="bg-gradient-to-br from-primary/10 via-background to-background p-6">
          <DialogHeader className="space-y-2 pb-4 text-center">
            <DialogTitle className="text-2xl font-bold tracking-tight">
              {currentView === "sign_in" && "Welcome Back"}
              {currentView === "sign_up" && "Create Account"}
              {currentView === "forgot_password" && "Reset Password"}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              {currentView === "sign_in" && "Enter your credentials to access your dashboard"}
              {currentView === "sign_up" && "Join our learning community today"}
              {currentView === "forgot_password" && "We'll send a recovery link to your email"}
            </DialogDescription>
          </DialogHeader>

          {resetSent ? (
            <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">Check your email</h3>
                <p className="text-sm text-muted-foreground px-6">
                  We've sent a password reset link to <span className="font-medium text-foreground">{email}</span>
                </p>
              </div>
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={() => { setResetSent(false); setCurrentView("sign_in"); }}
              >
                Back to Sign In
              </Button>
            </div>
          ) : (
            <form onSubmit={handleAuth} className="space-y-4">
              {error && (
                <div className="bg-destructive/10 text-destructive text-xs p-3 rounded-lg flex items-center gap-2 border border-destructive/20 animate-in fade-in slide-in-from-top-1">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <p>{error}</p>
                </div>
              )}

              <div className="space-y-3">
                {currentView === "sign_up" && (
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="name" 
                        placeholder="John Doe" 
                        className="pl-9" 
                        required 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="name@example.com" 
                      className="pl-9" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {currentView !== "forgot_password" && (
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      {currentView === "sign_in" && (
                        <button 
                          type="button"
                          onClick={() => setCurrentView("forgot_password")}
                          className="text-xs text-primary hover:underline font-medium"
                        >
                          Forgot password?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••" 
                        className="pl-9" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full group" disabled={loading}>
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    {currentView === "sign_in" && "Sign In"}
                    {currentView === "sign_up" && "Create Account"}
                    {currentView === "forgot_password" && "Send Reset Link"}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground pt-2">
                {currentView === "sign_in" ? (
                  <p>
                    Don't have an account?{" "}
                    <button 
                      type="button"
                      onClick={() => setCurrentView("sign_up")}
                      className="text-primary font-semibold hover:underline"
                    >
                      Sign Up
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{" "}
                    <button 
                      type="button"
                      onClick={() => setCurrentView("sign_in")}
                      className="text-primary font-semibold hover:underline"
                    >
                      Sign In
                    </button>
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;