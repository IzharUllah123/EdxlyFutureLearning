import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Globe, BookOpen } from "lucide-react";
import connectedLogo from "@/assets/connected-logo.png";

const Footer = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [isGradeModalOpen, setIsGradeModalOpen] = useState(false);
  const navigate = useNavigate();

  // Grades Reception to 13
  const grades = [
    {
      id: "reception",
      title: "Reception",
      icon: "R"
    },
    ...Array.from({ length: 13 }, (_, i) => ({
      id: (i + 1).toString(),
      title: `Grade ${i + 1}`,
      icon: `${i + 1}`
    }))
  ];

  const handleSubjectClick = (subject: string) => {
    const normalizedSubject = subject.toLowerCase();
    if (normalizedSubject === 'mathematics' || normalizedSubject === 'english') {
      setSelectedSubject(subject);
      setIsGradeModalOpen(true);
    } else {
      alert(`${subject} is coming soon!`);
    }
  };

  const handleGradeSelect = (gradeId: string) => {
    if (selectedSubject) {
      const subjectSlug = selectedSubject.toLowerCase() === 'mathematics' ? 'math' : 'english';
      navigate(`/grade/${gradeId}/subject/${subjectSlug}`);
      setIsGradeModalOpen(false);
      setSelectedSubject(null);
    }
  };

  const countries = [
    { 
      name: "UK", 
      flag: "🇬🇧",
      content: {
        title: "United Kingdom",
        description: "Following the UK National Curriculum with GCSE and A-Level preparation",
        features: ["GCSE Preparation", "A-Level Support", "UK University Prep", "British Standards"],
        contact: "+44 20 7946 0958"
      }
    },
    { 
      name: "USA", 
      flag: "🇺🇸",
      content: {
        title: "United States",
        description: "Aligned with Common Core Standards and state-specific curricula",
        features: ["Common Core", "SAT/ACT Prep", "AP Courses", "College Readiness"],
        contact: "+1 (555) 123-4567"
      }
    },
    { 
      name: "CANADA", 
      flag: "🇨🇦",
      content: {
        title: "Canada",
        description: "Provincial curriculum alignment with bilingual French/English support",
        features: ["Provincial Standards", "Bilingual Support", "University Prep", "French Immersion"],
        contact: "+1 (416) 555-0123"
      }
    },
    { 
      name: "AUSTRALIA", 
      flag: "🇦🇺",
      content: {
        title: "Australia",
        description: "Australian Curriculum (AC) with ATAR and HSC preparation",
        features: ["Australian Curriculum", "ATAR Preparation", "HSC Support", "University Pathways"],
        contact: "+61 2 8005 4321"
      }
    },
    { 
      name: "SINGAPORE", 
      flag: "🇸🇬",
      content: {
        title: "Singapore",
        description: "Singapore curriculum with O-Level and A-Level preparation",
        features: ["MOE Curriculum", "O-Level Prep", "A-Level Prep", "Bilingual Education"],
        contact: "+65 6789 1234"
      }
    },
    { 
      name: "KUWAIT", 
      flag: "🇰🇼",
      content: {
        title: "Kuwait",
        description: "Kuwait curriculum with Arabic language support and cultural integration",
        features: ["Kuwait Curriculum", "Arabic Support", "Islamic Studies", "Cultural Integration"],
        contact: "+965 2234 5678"
      }
    },
    { 
      name: "OMAN", 
      flag: "🇴🇲",
      content: {
        title: "Oman",
        description: "Oman curriculum with bilingual Arabic/English instruction",
        features: ["Oman Curriculum", "Bilingual Instruction", "Cultural Context", "Local Standards"],
        contact: "+968 2456 7890"
      }
    },
    { 
      name: "BAHRAIN", 
      flag: "🇧🇭",
      content: {
        title: "Bahrain",
        description: "Bahrain curriculum with international perspectives and Arabic integration",
        features: ["Bahrain Curriculum", "International Focus", "Arabic Integration", "Modern Approach"],
        contact: "+973 1234 5678"
      }
    }
  ];

  const quickLinks = [
    // { name: "Learning", href: "/learning" },
    { name: "Assessment", href: "/assesment" },
    // { name: "Analytics", href: "/analytics" },
    { name: "Live Classes", href: "/live-classes" },
    // { name: "Inspiration", href: "/inspiration" },
  ];

  const subjects = [
    "Mathematics", "Physics", "Chemistry", "Science",
    "English", "Arabic", "Information Technology", "Artificial Intelligence"
  ];

  const support = [
    { name: "Help Center", href: "/help" },
    { name: "Contact Support", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ];

  return (
    <footer className="bg-muted/30 border-t">
      {/* International Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-bounce-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">International</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Curriculum tailored for students worldwide
            </p>
          </div>

          {/* Country Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            {countries.map((country, index) => (
              <Button
                key={country.name}
                variant={selectedCountry === country.name ? "default" : "outline"}
                onClick={() => setSelectedCountry(selectedCountry === country.name ? null : country.name)}
                className="h-auto p-4 flex flex-col items-center space-y-2 hover:scale-105 transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl">{country.flag}</span>
                <span className="text-xs font-medium">{country.name}</span>
              </Button>
            ))}
          </div>

          {/* Selected Country Details */}
          {selectedCountry && (
            <div className="animate-bounce-in">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <Globe className="mr-3 h-6 w-6 text-primary" />
                    {countries.find(c => c.name === selectedCountry)?.content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-lg">
                    {countries.find(c => c.name === selectedCountry)?.content.description}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3 text-primary">Key Features:</h3>
                      <ul className="space-y-2">
                        {countries.find(c => c.name === selectedCountry)?.content.features.map((feature) => (
                          <li key={feature} className="flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3 text-secondary">Contact Information:</h3>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-secondary" />
                        <span>{countries.find(c => c.name === selectedCountry)?.content.contact}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <img src={connectedLogo} alt="ConnectED" className="h-8 w-8" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                EDXLY
              </span>
            </Link>
            <p className="text-muted-foreground">
              Empowering students worldwide with personalized learning experiences and comprehensive K-12 education.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Subjects</h3>
            <ul className="space-y-2">
              {subjects.slice(0, 6).map((subject) => (
                <li key={subject}>
                  <button
                    onClick={() => handleSubjectClick(subject)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-left"
                  >
                    {subject}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@edxly.edu</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Global Headquarters</span>
              </div>
              
              {/* Newsletter */}
              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-2">Subscribe to our newsletter</p>
                <div className="flex space-x-2">
                  <Input placeholder="Enter your email" className="text-sm" />
                  <Button size="sm" className="px-3">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Support Links */}
        <div className="border-t pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-6">
            {support.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 EDXLY. All rights reserved. Empowering minds, connecting futures.
          </p>
        </div>
      </div>

      {/* Grade Selection Modal */}
      <Dialog open={isGradeModalOpen} onOpenChange={setIsGradeModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center">
              <BookOpen className="mr-3 h-6 w-6 text-primary" />
              Select Grade for {selectedSubject}
            </DialogTitle>
          </DialogHeader>
          <div className="py-6">
            <p className="text-muted-foreground mb-6">
              Choose your grade level to access {selectedSubject} curriculum and resources.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {grades.map((grade) => (
                <Button
                  key={grade.id}
                  onClick={() => handleGradeSelect(grade.id)}
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <span className="font-bold text-lg">{grade.icon}</span>
                  </div>
                  <span className="text-sm font-medium">{grade.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
