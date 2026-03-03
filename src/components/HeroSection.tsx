import { Button } from "@/components/ui/button";
import { Play, Users, BookOpen, Award, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import learning from "@/assets/learning.png"
import {
  DropdownMenu,
  DropdownMenuContent,
    DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import StudentsSection from "./StudentsSection";

const HeroSection = () => {
  // UPDATED: Labels now match "Year" format to align with GradeSelector
  const grades = [
    { id: "reception", label: "Reception" },
    { id: "1", label: "Year 1" },
    { id: "2", label: "Year 2" },
    { id: "3", label: "Year 3" },
    { id: "4", label: "Year 4" },
    { id: "5", label: "Year 5" },
    { id: "6", label: "Year 6" },
    { id: "7", label: "Year 7" },
    { id: "8", label: "Year 8" },
    { id: "9", label: "Year 9" },
    { id: "10", label: "Year 10" },
    { id: "11", label: "Year 11" },
    { id: "12", label: "Year 12" },
    { id: "13", label: "Year 13" },
  ];

  // Function to handle smooth scrolling to curriculum
  const scrollToCurriculum = () => {
    const element = document.getElementById('grade-selector');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle Grade Selection
  const handleGradeSelect = (gradeId: string) => {
    // 1. Scroll to the section
    scrollToCurriculum();
    
    // 2. Dispatch event to open the card
    // We use a slight delay to ensure the scroll happens smoothly before the state update
    setTimeout(() => {
      const event = new CustomEvent('gradeSelected', { detail: gradeId });
      window.dispatchEvent(event);
    }, 100);
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-full float-animation opacity-20"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-secondary to-secondary/50 rounded-lg rotate-45 float-animation opacity-20" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-gradient-to-br from-accent to-accent/50 rounded-full float-animation opacity-20" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-10 h-10 bg-gradient-to-br from-grade-k to-grade-k/50 rounded-lg float-animation opacity-20" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 animate-bounce-in">
          <div className="space-y-4">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium animate-bounce-in" style={{ animationDelay: '0.2s' }}>
              🚀 Welcome to the Future of Learning
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                EDXLY
              </span>
              <br />
              <span className="text-foreground">
                Personalized Learning
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Comprehensive K-12 curriculum with Math, Science, English, and more. 
              Trusted by educators and loved by students worldwide.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-bounce-in" style={{ animationDelay: '0.4s' }}>
            
            {/* --- DROPDOWN MENU --- */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="lg" className="btn-hero text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  Start Learning Now
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 h-64 overflow-y-auto">
                {grades.map((grade) => (
                  <DropdownMenuItem 
                    key={grade.id} 
                    onClick={() => handleGradeSelect(grade.id)}
                    className="cursor-pointer text-base py-2"
                  >
                    {grade.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* --- EXPLORE BUTTON --- */}
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 hover:scale-105 transform transition-all duration-300"
              onClick={scrollToCurriculum}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Explore Curriculum
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 animate-bounce-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-6 w-6 text-primary mr-1" />
                <span className="text-2xl md:text-3xl font-bold text-primary">17M+</span>
              </div>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="h-6 w-6 text-secondary mr-1" />
                <span className="text-2xl md:text-3xl font-bold text-secondary">160B+</span>
              </div>
              <p className="text-sm text-muted-foreground">Questions</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="h-6 w-6 text-accent mr-1" />
                <span className="text-2xl md:text-3xl font-bold text-accent">95%</span>
              </div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative animate-bounce-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
            <img
              src={heroImage}
              alt="Students learning with EDXLY"
              className="w-full h-50 object-cover hover:scale-105 transition-transform duration-700"
            />
 

            
            {/* Overlay Stats */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 space-y-2">
                  <p className="text-sm font-medium">🎯 Adaptive Learning</p>
                  <p className="text-sm font-medium">📊 Real-time Progress</p>
                  <p className="text-sm font-medium">🏆 Personalized Path</p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Achievement Badge */}
          <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent to-warning text-white p-4 rounded-full shadow-lg float-animation">
            <Award className="h-8 w-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;