import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Award, Star, Target, Crown } from "lucide-react";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Math Champion",
      description: "Complete 100 math problems",
      color: "from-yellow-500 to-yellow-600",
      progress: 85
    },
    {
      icon: Medal,
      title: "Science Explorer",
      description: "Finish 5 science experiments",
      color: "from-blue-500 to-blue-600",
      progress: 92
    },
    {
      icon: Award,
      title: "Reading Master",
      description: "Read 20 books this semester",
      color: "from-green-500 to-green-600",
      progress: 76
    },
    {
      icon: Star,
      title: "Perfect Attendance",
      description: "Join all live sessions this month",
      color: "from-purple-500 to-purple-600",
      progress: 100
    },
    {
      icon: Target,
      title: "Goal Achiever",
      description: "Complete learning milestones",
      color: "from-red-500 to-red-600",
      progress: 68
    },
    {
      icon: Crown,
      title: "Academic Excellence",
      description: "Maintain 90%+ average score",
      color: "from-indigo-500 to-indigo-600",
      progress: 94
    }
  ];

  const globalAchievements = [
    { title: "Global Recognition", subtitle: "UNESCO Partner", icon: "🏆" },
    { title: "Educational Excellence", subtitle: "Best Learning Platform 2024", icon: "🥇" },
    { title: "Student Choice", subtitle: "Most Loved Platform", icon: "❤️" },
    { title: "Innovation Award", subtitle: "AI-Powered Learning", icon: "🚀" },
    { title: "Safety First", subtitle: "Child Protection Certified", icon: "🛡️" },
    { title: "Accessibility", subtitle: "Inclusive Design Award", icon: "♿" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Student Achievements */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-bounce-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unlock Amazing <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Gamified learning experience with rewards, badges, and recognition for your progress
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-xl animate-bounce-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium text-primary">{achievement.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${achievement.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${achievement.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Achievements */}
        <div>
          <div className="text-center mb-16 animate-bounce-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Award-Winning <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Recognized globally for excellence in educational technology and student outcomes
            </p>
          </div>

          {/* Moving Achievement Strip */}
          <div className="relative h-32 overflow-hidden bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl">
            <div className="absolute inset-0 flex items-center">
              <div className="slide-left flex items-center space-x-8">
                {[...globalAchievements, ...globalAchievements].map((achievement, index) => (
                  <div
                    key={`${achievement.title}-${index}`}
                    className="flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg min-w-[280px] hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">{achievement.icon}</div>
                      <h3 className="font-bold text-lg text-primary mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;