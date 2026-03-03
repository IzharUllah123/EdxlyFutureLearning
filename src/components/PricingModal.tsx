import { X, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent } from "./ui/dialog";
// --- FIREBASE IMPORTS ---
// Using relative paths to ensure resolution in the current environment
import { auth, db } from "../firebase/config";
import { doc, updateDoc, getDoc } from "firebase/firestore";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLoginClick: () => void;
  isAnonymous?: boolean;
}

const PricingModal = ({ isOpen, onClose, isLoggedIn, onLoginClick, isAnonymous }: PricingModalProps) => {
  
  const handleSubscribe = async (plan: string) => {
    const user = auth.currentUser;

    // 1. Redirect to Sign In if not logged in OR if user is anonymous/guest
    if (!user || user.isAnonymous || !isLoggedIn) {
        onLoginClick(); // Switches view to sign-in in the parent Header component
        return;
    }
    
    // 2. Check for email verification
    if (!user.emailVerified) {
      alert("Please verify your email address before subscribing to a plan.");
      return;
    }

    try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        // 3. Check if the user is already subscribed
        if (userDocSnap.exists() && userDocSnap.data()?.subscription === "active") {
            alert(`You are already subscribed! Your current plan is: ${userDocSnap.data()?.plan || 'Active'}.`);
            onClose();
            return;
        }

        // 4. Simulate Redirect to Payment / Fee Processing
        // In production, this would redirect to a Stripe checkout session.
        // Here we simulate success by updating Firestore.
        await updateDoc(userDocRef, {
            subscription: "active",
            plan: plan,
            updatedAt: new Date().toISOString()
        });

        alert(`Payment processed successfully! Welcome to the ${plan} Scholar plan.`);
        onClose();
        
    } catch (error) {
        console.error("Subscription error:", error);
        alert("Something went wrong with the payment process. Please try again.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-background border-border shadow-2xl max-h-[90vh] flex flex-col">
        {/* Custom Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-50 rounded-full bg-secondary/80 p-1.5 hover:bg-secondary transition-colors shadow-sm text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header Section - Tightened padding */}
        <div className="p-5 text-center bg-card border-b border-border shrink-0">
          <h2 className="text-2xl font-extrabold mb-1 text-foreground tracking-tight">Unlock Your Full Potential</h2>
          <p className="text-muted-foreground text-xs max-w-md mx-auto">
            Choose a plan to get unlimited access to all features.
          </p>
        </div>

        {/* Pricing Grid - Reduced padding and scrollable if content overflows */}
        <div className="grid md:grid-cols-3 gap-4 px-6 py-5 bg-background overflow-y-auto">
          {/* Monthly Plan */}
          <div className="border border-border rounded-xl p-4 bg-card hover:border-primary/50 transition-all flex flex-col group h-full">
            <h3 className="text-lg font-bold mb-0.5 text-foreground">Monthly Learner</h3>
            <p className="text-muted-foreground text-[10px] mb-2">Flexible access</p>
            <div className="mb-3">
              <span className="text-2xl font-black text-foreground">£ 9.99</span>
              <span className="text-muted-foreground text-xs ml-1">/mo</span>
            </div>
            <ul className="space-y-1.5 mb-4 flex-grow">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-[11px] text-foreground/90">Unlimited Practice Questions</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-[11px] text-foreground/90">Comprehensive Curriculum</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-[11px] text-foreground/90">Real-time Insights</span>
              </li>
            </ul>
            <Button 
              onClick={() => handleSubscribe("Monthly")} 
              className="w-full py-3 text-xs font-semibold" 
              variant="outline"
            >
              Start Monthly
            </Button>
          </div>

          {/* Yearly Plan (Featured) */}
          <div className="border-2 border-primary rounded-xl p-4 bg-card relative shadow-lg transition-all flex flex-col overflow-hidden ring-4 ring-primary/5 h-full">
            <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground py-0.5 text-center text-[9px] font-black uppercase tracking-widest z-10">
              BEST VALUE - SAVE 33%
            </div>
            
            <h3 className="text-lg font-bold mb-0.5 mt-2 text-foreground relative z-10">Yearly Scholar</h3>
            <p className="text-muted-foreground text-[10px] mb-2 relative z-10">Our most popular plan</p>
            <div className="mb-3 relative z-10">
              <span className="text-2xl font-black text-foreground">£ 79.99</span>
              <span className="text-muted-foreground text-xs ml-1">/yr</span>
            </div>
            <ul className="space-y-1.5 mb-4 flex-grow relative z-10">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span className="text-[11px] font-medium text-foreground">Everything in Monthly</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span className="text-[11px] font-medium text-foreground">Priority Updates</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <span className="text-[11px] font-bold text-foreground">Exclusive Guides</span>
              </li>
            </ul>
            <Button 
              onClick={() => handleSubscribe("Yearly")} 
              className="w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground relative z-10 text-sm font-bold shadow-md shadow-primary/20"
            >
              Get Started Now
            </Button>
          </div>

          {/* Family Plan */}
          <div className="border border-border rounded-xl p-4 bg-card hover:border-primary/50 transition-all flex flex-col group h-full">
            <h3 className="text-lg font-bold mb-0.5 text-foreground">Family Plan</h3>
            <p className="text-muted-foreground text-[10px] mb-2">Up to 4 profiles</p>
            <div className="mb-3">
              <span className="text-2xl font-black text-foreground">£ 129.00</span>
              <span className="text-muted-foreground text-xs ml-1">/yr</span>
            </div>
            <ul className="space-y-1.5 mb-4 flex-grow">
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-[11px] text-foreground/90">Up to 4 Child Profiles</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-[11px] text-foreground/90">Parent Dashboard</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                <span className="text-[11px] text-foreground/90">Advanced Tools</span>
              </li>
            </ul>
            <Button 
              onClick={() => handleSubscribe("Family")} 
              className="w-full py-3 text-xs font-semibold" 
              variant="outline"
            >
              Start Family
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PricingModal;