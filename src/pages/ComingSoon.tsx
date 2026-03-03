import { Button } from "@/components/ui/button";
import { Timer, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation

const ComingSoon = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // This reads the name we sent from the Resources page
  const featureName = location.state?.name || "This feature";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6 bg-background">
      <div className="bg-primary/10 p-6 rounded-full mb-6 animate-pulse">
        <Timer className="h-16 w-16 text-primary" />
      </div>
      
      <h2 className="text-4xl font-bold mb-3 tracking-tight">Coming Soon!</h2>
      
      <p className="text-muted-foreground text-lg max-w-md mb-8">
        We're working hard to bring <span className="text-foreground font-semibold underline decoration-primary/30">{featureName}</span> to you. 
        It will be available in a future update.
      </p>
      
      <Button 
        onClick={() => navigate(-1)} 
        size="lg" 
        className="gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        Go Back
      </Button>
    </div>
  );
};

export default ComingSoon;