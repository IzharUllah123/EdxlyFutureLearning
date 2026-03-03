import studentsImage from "@/assets/students-collage.jpg";

const StudentsSection = () => {
  const students = [
    { id: 1, name: "Alex", grade: "Grade 8", subject: "Math", image: "👨‍🎓" },
    { id: 2, name: "Emma", grade: "Grade 6", subject: "Science", image: "👩‍🎓" },
    { id: 3, name: "Marcus", grade: "Grade 10", subject: "Physics", image: "👨‍💻" },
    { id: 4, name: "Sofia", grade: "Grade 5", subject: "English", image: "👩‍💻" },
    { id: 5, name: "Dylan", grade: "Grade 9", subject: "Chemistry", image: "👨‍🔬" },
    { id: 6, name: "Zara", grade: "Grade 7", subject: "AI", image: "👩‍🔬" },
    { id: 7, name: "Ryan", grade: "Grade 11", subject: "IT", image: "👨‍💼" },
    { id: 8, name: "Maya", grade: "Grade 4", subject: "Arabic", image: "👩‍🏫" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join Millions of <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Happy Students</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Students from around the world are already learning and growing with EDXLY
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 animate-bounce-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <img
              src={studentsImage}
              alt="Students learning with EDXLY"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent">
              <div className="absolute bottom-6 left-6 text-white">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium">🌟 17+ Million Students Learning Daily</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Moving Students Strip */}
        <div className="relative h-24 overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl mb-16">
          <div className="absolute inset-0 flex items-center">
            <div className="slide-left flex items-center space-x-8">
              {[...students, ...students].map((student, index) => (
                <div
                  key={`${student.id}-${index}`}
                  className="flex-shrink-0 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg min-w-[200px] hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{student.image}</div>
                    <div>
                      <p className="font-semibold text-sm">{student.name}</p>
                      <p className="text-xs text-muted-foreground">{student.grade} • {student.subject}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { number: "17M+", label: "Active Students", icon: "👨‍🎓" },
            { number: "200+", label: "Countries", icon: "🌍" },
            { number: "95%", label: "Success Rate", icon: "🎯" },
            { number: "24/7", label: "Support", icon: "💬" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-in"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentsSection;