import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Monitor, 
  BarChart3, 
  Users, 
  Calendar, 
  Award, 
  BookOpen, 
  Video, 
  MessageCircle,
  Brain,
  Target,
  TrendingUp,
  Shield
} from "lucide-react";

const FeaturesSection = () => {
  const studentFeatures = [
    {
      icon: Monitor,
      title: "Interactive Dashboard",
      description: "Personalized learning dashboard with progress tracking and recommendations",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Video,
      title: "Live Class Management",
      description: "Join interactive live sessions with expert teachers and classmates",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Calendar,
      title: "Session History & Recordings",
      description: "Access all past sessions and recordings for review and practice",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracker",
      description: "Real-time analytics and progress reports to monitor your learning journey",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Award,
      title: "Achievement System",
      description: "Earn badges, certificates, and rewards for completing milestones",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: BookOpen,
      title: "Content Library",
      description: "Comprehensive digital library with books, videos, and interactive content",
      color: "from-red-500 to-red-600"
    }
  ];

  const adminFeatures = [
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user administration with role-based access control",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: BookOpen,
      title: "Course Management",
      description: "Create, organize, and manage courses and learning materials",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Video,
      title: "Live Session Engine",
      description: "Integrated video conferencing with screen sharing and whiteboard",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Detailed insights and analytics on student performance and engagement",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: MessageCircle,
      title: "Feedback Management",
      description: "Collect and manage student feedback and reviews effectively",
      color: "from-lime-500 to-lime-600"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with data protection and privacy controls",
      color: "from-gray-500 to-gray-600"
    }
  ];

  const learningFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Adaptive learning algorithms that adjust to your pace and style",
      highlight: true
    },
    {
      icon: Target,
      title: "Skill-Based Learning",
      description: "Master specific skills with targeted practice and assessments",
      highlight: true
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "Connect with peers, join study groups, and learn together",
      highlight: false
    },
    {
      icon: Award,
      title: "Gamified Experience",
      description: "Engaging gamification elements to make learning fun and motivating",
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Modern Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools and features designed to enhance the learning experience for students, teachers, and administrators
          </p>
        </div>

        {/* Online Learning Highlights */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Why Choose <span className="text-primary">Online Learning</span>?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className={`text-center hover:scale-105 transition-all duration-300 animate-bounce-in ${
                  feature.highlight ? 'border-primary/50 bg-gradient-to-br from-primary/5 to-secondary/5' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${
                    feature.highlight ? 'from-primary to-secondary' : 'from-muted to-muted-foreground'
                  } flex items-center justify-center mb-4`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default FeaturesSection;
