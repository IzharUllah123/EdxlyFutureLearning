import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GradeSelector from "@/components/GradeSelector";
import FeaturesSection from "@/components/FeaturesSection";
import StudentsSection from "@/components/StudentsSection";
import AchievementsSection from "@/components/AchievementsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import AIAssistantButton from "@/components/AIAssistantButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <GradeSelector />
        <FeaturesSection />
        <StudentsSection />
        <AchievementsSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <AIAssistantButton />
    </div>
  );
};

export default Index;
