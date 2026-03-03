import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Clock, Star, Play } from "lucide-react";

const GradeSelector = () => {
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  // --- Scroll Logic (Existing) ---
  useEffect(() => {
    if (selectedGrade && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  }, [selectedGrade]);

  // --- NEW: Listen for events from HeroSection ---
  useEffect(() => {
    const handleGradeSelection = (event: Event) => {
      // Cast event to CustomEvent to access 'detail'
      const customEvent = event as CustomEvent;
      if (customEvent.detail) {
        setSelectedGrade(customEvent.detail);
      }
    };

    window.addEventListener('gradeSelected', handleGradeSelection);

    // Cleanup listener
    return () => {
      window.removeEventListener('gradeSelected', handleGradeSelection);
    };
  }, []);

  const subjects = [
    "Math", "Physics", "Chemistry", "Science", 
    "English", "Arabic", "Information Technology", "Artificial Intelligence"
  ];

  const getHoverColor = (id: string) => {
    switch (id) {
      case 'reception': return 'hover:border-purple-400';
      case '1':    return 'hover:border-green-500';
      case '2':    return 'hover:border-purple-500';
      case '3':    return 'hover:border-red-500';
      case '4':    return 'hover:border-blue-500';
      case '5':    return 'hover:border-yellow-500';
      case '6':    return 'hover:border-pink-500';
      case '7':    return 'hover:border-indigo-500';
      case '8':    return 'hover:border-teal-500';
      case '9':    return 'hover:border-lime-500';
      case '10':   return 'hover:border-fuchsia-500';
      case '11':   return 'hover:border-sky-500';
      case '12':   return 'hover:border-rose-500';
      case '13':   return 'hover:border-slate-500';
      default:     return 'hover:border-primary';
    }
  };

  const getGlowColor = (id: string) => {
    switch (id) {
      case 'reception': return 'hover:shadow-purple-400/50';
      case '1':    return 'hover:shadow-green-500/50';
      case '2':    return 'hover:shadow-purple-500/50';
      case '3':    return 'hover:shadow-red-500/50';
      case '4':    return 'hover:shadow-blue-500/50';
      case '5':    return 'hover:shadow-yellow-500/50';
      case '6':    return 'hover:shadow-pink-500/50';
      case '7':    return 'hover:shadow-indigo-500/50';
      case '8':    return 'hover:shadow-teal-500/50';
      case '9':    return 'hover:shadow-lime-500/50';
      case '10':   return 'hover:shadow-fuchsia-500/50';
      case '11':   return 'hover:shadow-sky-500/50';
      case '12':   return 'hover:shadow-rose-500/50';
      case '13':   return 'hover:shadow-slate-500/50';
      default:     return 'hover:shadow-primary/50';
    }
  };

  const getIconColor = (id: string) => {
    switch (id) {
      case '5':  return 'bg-yellow-500';
      case '6':  return 'bg-pink-500';
      case '7':  return 'bg-indigo-500';
      case '8':  return 'bg-teal-500';
      case '9':  return 'bg-lime-500';
      case '10': return 'bg-fuchsia-500';
      case '11': return 'bg-sky-500';
      case '12': return 'bg-rose-500';
      case '13': return 'bg-slate-500';
      default:   return 'bg-primary';
    }
  };

  const grades = [
    {
      id: "reception",
      title: "Reception",
      description: "Foundation skills, counting objects, letter recognition, and basic concepts",
      color: "grade-prek", 
      icon: "R",
      skills: { Math: 184, English: 120, Science: 85, "Social Studies": 92 },
      features: ["Interactive Games", "Story Time", "Music & Arts", "Basic Skills"]
    },
  
    {
      id: "1",
      title: "Year 1",
      description: "Addition and subtraction, reading comprehension, light and sound",
      color: "grade-1", 
      icon: "1",
      skills: { Math: 347, English: 150, Science: 67, "Social Studies": 67 },
      features: ["Reading Fluency", "Math Operations", "Science Experiments", "Writing Skills"]
    },
    {
      id: "2",
      title: "Year 2",
      description: "Multi-digit numbers, story elements, matter and materials",
      color: "grade-2",
      icon: "2",
      skills: { Math: 425, English: 200, Science: 78, "Social Studies": 82 },
      features: ["Advanced Reading", "Problem Solving", "Hands-on Science", "Research Skills"]
    },
    {
      id: "3",
      title: "Year 3",
      description: "Multiplication, character analysis, ecosystems and habitats",
      color: "grade-3",
      icon: "3",
      skills: { Math: 398, English: 250, Science: 89, "Social Studies": 95 },
      features: ["Critical Thinking", "Research Projects", "Scientific Method", "Essay Writing"]
    },
    {
      id: "4",
      title: "Year 4",
      description: "Fractions and decimals, informational texts, energy and motion",
      color: "grade-4",
      icon: "4",
      skills: { Math: 456, English: 300, Science: 112, "Social Studies": 118 },
      features: ["Complex Math", "Literature Analysis", "Lab Experiments", "Presentation Skills"]
    }
  ];

  const upperGrades = [
    { id: "5", title: "Year 5", icon: "5" },
    { id: "6", title: "Year 6", icon: "6" },
    { id: "7", title: "Year 7", icon: "7" },
    { id: "8", title: "Year 8", icon: "8" },
    { id: "9", title: "Year 9", icon: "9" },
    { id: "10", title: "Year 10", icon: "10" },
    { id: "11", title: "Year 11", icon: "11" },
    { id: "12", title: "Year 12", icon: "12" },
    { id: "13", title: "Year 13", icon: "13" }
  ];

  const allGrades = [...grades, ...upperGrades.map(grade => ({
    ...grade,
    description: `Curriculum for ${grade.title} students`,
    color: getIconColor(grade.id),
    skills: {
      Math: 500 + parseInt(grade.id) * 50,
      English: 300 + parseInt(grade.id) * 30,
      Science: 150 + parseInt(grade.id) * 25,
      "Social Studies": 120 + parseInt(grade.id) * 20,
      Physics: parseInt(grade.id) >= 9 ? 200 + (parseInt(grade.id) - 9) * 50 : 0,
      Chemistry: parseInt(grade.id) >= 10 ? 180 + (parseInt(grade.id) - 10) * 40 : 0,
      "Information Technology": parseInt(grade.id) >= 6 ? 150 + (parseInt(grade.id) - 6) * 30 : 0,
      "Artificial Intelligence": parseInt(grade.id) >= 11 ? 100 + (parseInt(grade.id) - 11) * 50 : 0
    },
    features: ["Advanced Analytics", "Live Sessions", "Peer Collaboration", "Expert Tutoring"]
  }))];

  const slugify = (text: string) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };

  return (
    <section id="grade-selector" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Grade Level</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive curriculum designed for every learning stage, from Pre-K to Grade 12
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {allGrades.map((grade, index) => {
            const hoverBorderClass = getHoverColor(grade.id);
            const glowClass = getGlowColor(grade.id); 

            return (
              <Card 
                key={grade.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 border-2 animate-bounce-in ${
                  selectedGrade === grade.id 
                    ? 'border-primary shadow-lg' 
                    : `border-border hover:shadow-2xl ${hoverBorderClass} ${glowClass}` 
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedGrade(selectedGrade === grade.id ? null : grade.id)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${grade.color || 'bg-primary'}`}>
                      {grade.icon}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <Star className="w-3 h-3 mr-1" />
                      New
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{grade.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {grade.description}
                  </p>
                  
                  <div className="space-y-2">
                    {Object.entries(grade.skills || {}).slice(0, 3).map(([subject, count]) => {
                      const subjectId = slugify(subject);
                      return (
                        <div key={subject} className="flex justify-between text-xs">
                          <span className="text-muted-foreground">{subject}</span>
                          <Link
                            to={`/grade/${grade.id}/subject/${subjectId}`}
                            className="font-medium text-primary hover:underline"
                            onClick={(e) => e.stopPropagation()} 
                          >
                            {count} skills
                          </Link>
                        </div>
                      );
                    })}
                    {Object.keys(grade.skills || {}).length > 3 && (
                      <p className="text-xs text-muted-foreground">
                        +{Object.keys(grade.skills || {}).length - 3} more subjects
                      </p>
                    )}
                  </div>

                  <Button 
                    variant={selectedGrade === grade.id ? "default" : "outline"} 
                    className="w-full text-sm"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Explore Curriculum
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedGrade && (
          <div 
            ref={detailsRef}
            className="animate-bounce-in scroll-mt-24"
          >
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <BookOpen className="mr-3 h-6 w-6 text-primary" />
                  {allGrades.find(g => g.id === selectedGrade)?.title} Curriculum
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-secondary" />
                    Available Subjects
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {subjects.map((subject) => {
                      const skills = allGrades.find(g => g.id === selectedGrade)?.skills;
                      const skillCount = skills?.[subject as keyof typeof skills] || 0;
                      const subjectId = slugify(subject);
                      return (
                        <Link
                          key={subject}
                          to={`/grade/${selectedGrade}/subject/${subjectId}`}
                        >
                          <Button 
                            variant="outline" 
                            className="btn-grade h-auto p-4 flex flex-col items-center text-center w-full"
                          >
                            <span className="font-medium text-sm">{subject}</span>
                            {skillCount > 0 && (
                              <span className="text-xs text-primary mt-1">{skillCount} skills</span>
                            )}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Clock className="mr-2 h-5 w-5 text-accent" />
                    Learning Features
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {(allGrades.find(g => g.id === selectedGrade)?.features || []).map((feature) => (
                      <Badge key={feature} variant="secondary" className="p-2 justify-center text-center">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center pt-4">
                  <Button size="lg" className="btn-hero">
                    <Play className="mr-2 h-5 w-5" />
                    Start Learning {allGrades.find(g => g.id === selectedGrade)?.title}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default GradeSelector;