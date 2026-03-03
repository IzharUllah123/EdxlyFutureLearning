import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Parent of 8th grader",
      image: "👩‍💼",
      rating: 5,
      text: "EDXLY has transformed my daughter's learning experience. The personalized approach and interactive content keep her engaged, and her grades have improved significantly.",
      highlight: "Grades improved by 40%"
    },
    {
      id: 2,
      name: "David Chen",
      role: "High School Teacher",
      image: "👨‍🏫",
      rating: 5,
      text: "As an educator, I'm impressed by the comprehensive curriculum and analytics. The platform helps me track student progress in real-time and adapt my teaching accordingly.",
      highlight: "Real-time analytics"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "9th Grade Student",
      image: "👩‍🎓",
      rating: 5,
      text: "I love how EDXLY makes learning fun! The gamification and interactive sessions make even difficult subjects like chemistry enjoyable. Best learning platform ever!",
      highlight: "Makes learning fun"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      role: "School Principal",
      image: "👨‍💼",
      rating: 5,
      text: "We've implemented EDXLY across our entire school district. The results are outstanding - student engagement is up 85% and academic performance has improved across all grades.",
      highlight: "85% engagement increase"
    },
    {
      id: 5,
      name: "Maria Santos",
      role: "Homeschool Mom",
      image: "👩‍🏫",
      rating: 5,
      text: "EDXLY provides everything I need for homeschooling my three children. The curriculum is comprehensive, and the live sessions give them the social interaction they need.",
      highlight: "Perfect for homeschooling"
    },
    {
      id: 6,
      name: "Alex Thompson",
      role: "11th Grade Student",
      image: "👨‍🎓",
      rating: 5,
      text: "The AI-powered recommendations help me focus on areas where I need improvement. I've gone from struggling with math to loving it! EDXLY is a game-changer.",
      highlight: "AI-powered learning"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Community Says</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from students, parents, and educators who are transforming their learning experience with EDXLY
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {getVisibleTestimonials().map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${currentIndex}`}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-xl animate-bounce-in relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10">
                    <Quote className="h-8 w-8" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Highlight */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-3 mb-4">
                    <p className="text-sm font-semibold text-primary">
                      ✨ {testimonial.highlight}
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full hover:scale-110 transition-transform duration-300"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full hover:scale-110 transition-transform duration-300"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { metric: "4.9/5", label: "Average Rating", icon: "⭐" },
            { metric: "50K+", label: "Reviews", icon: "💬" },
            { metric: "95%", label: "Satisfaction", icon: "😊" },
            { metric: "24/7", label: "Support", icon: "🤝" }
          ].map((item, index) => (
            <div 
              key={item.label}
              className="text-center p-4 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
            >
              <div className="text-2xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-primary mb-1">{item.metric}</div>
              <div className="text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;