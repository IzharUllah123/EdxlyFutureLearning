import { useState, useEffect } from "react";
import { db, auth } from "@/firebase/config";
import { doc, getDoc, collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, FileText, TrendingUp, Calendar, AlertCircle, ChevronRight, CheckCircle2, Award, Target, Clock, Loader2 } from "lucide-react";

interface AssessmentRecord {
  id: string;
  topic: string;
  type: string;
  score: number;
  date: string;
  difficulty: string;
  totalQuestions?: number;
  correctAnswers?: number;
  timeSpent?: number;
  subject?: string;
  yearLevel?: string;
}

interface UserData {
  name?: string;
  email?: string;
  yearLevel?: string;
}

const AssessmentReport = () => {
  const [userStatus, setUserStatus] = useState({ isPremium: false, loading: true });
  const [history, setHistory] = useState<AssessmentRecord[]>([]);
  const [userData, setUserData] = useState<UserData>({});
  const [filterType, setFilterType] = useState<string>("all");
  const [isFetchingHistory, setIsFetchingHistory] = useState(false);

  useEffect(() => {
    const verifyAccessAndFetch = async () => {
      if (!auth.currentUser) {
        console.log("No user logged in yet.");
        return;
      }
      
      console.log("Logged in as:", auth.currentUser.uid);
      
      const userRef = doc(db, "users", auth.currentUser.uid);
      const snap = await getDoc(userRef);
      
      if (snap.exists()) {
        const data = snap.data();
        setUserData({
          name: data.name || auth.currentUser.displayName,
          email: data.email || auth.currentUser.email,
          yearLevel: data.yearLevel
        });
        setUserStatus({ isPremium: data.isPremium, loading: false });
      } else {
        console.log("No user document found in /users/ collection.");
        setUserStatus({ isPremium: false, loading: false });
      }

      // FETCH HISTORY FOR EVERYONE (Fixed the gate)
      fetchAssessmentHistory(auth.currentUser.uid);
    };

    verifyAccessAndFetch();
  }, []);

  const fetchAssessmentHistory = async (userId: string) => {
    setIsFetchingHistory(true);
    console.log("Querying Firestore for userId:", userId);
    
    try {
      const q = query(
        collection(db, "assessment_history"),
        where("userId", "==", userId),
        orderBy("createdAt", "desc")
      );
      
      const querySnapshot = await getDocs(q);
      console.log("Documents found in Firestore:", querySnapshot.size);

      const records = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          topic: data.topic || "Untitled Assessment",
          type: data.type || "quiz",
          score: data.score || 0,
          date: data.createdAt?.toDate().toLocaleDateString() || "N/A",
          difficulty: data.difficulty || "medium",
          totalQuestions: data.totalQuestions,
          correctAnswers: data.correctAnswers,
          timeSpent: data.timeSpent,
          subject: data.subject,
          yearLevel: data.yearLevel
        };
      }) as AssessmentRecord[];
      
      setHistory(records);
    } catch (error: any) {
      console.error("Firestore Fetch Error:", error);
      // If you see an "Index Required" error here, click the link in your browser console!
    } finally {
      setIsFetchingHistory(false);
    }
  };

  const getStats = () => {
    if (history.length === 0) return { avgScore: 0, totalAttempts: 0, bestScore: 0, recentTrend: 0 };
    
    const avgScore = Math.round(history.reduce((acc, curr) => acc + curr.score, 0) / history.length);
    const bestScore = Math.max(...history.map(h => h.score));
    
    const recent = history.slice(0, 3);
    const previous = history.slice(3, 6);
    const recentAvg = recent.length > 0 ? recent.reduce((acc, curr) => acc + curr.score, 0) / recent.length : 0;
    const previousAvg = previous.length > 0 ? previous.reduce((acc, curr) => acc + curr.score, 0) / previous.length : 0;
    const trend = recentAvg - previousAvg;
    
    return { avgScore, totalAttempts: history.length, bestScore, recentTrend: Math.round(trend) };
  };

  const stats = getStats();
  const filteredHistory = filterType === "all" 
    ? history 
    : history.filter(h => h.type.toLowerCase() === filterType.toLowerCase());

  const assessmentTypes = ["all", ...Array.from(new Set(history.map(h => h.type)))];

  return (
    <div className="container mx-auto p-4 space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <FileText className="w-8 h-8 text-primary" />
            Assessment Progress Report
          </h1>
          <p className="text-muted-foreground mt-1">
            {userData.name && <span className="font-medium text-foreground">{userData.name}</span>}
            {userData.yearLevel && <span> • Year {userData.yearLevel}</span>}
          </p>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="px-4 py-1">
            <TrendingUp className="w-4 h-4 mr-2" /> 
            {stats.recentTrend > 0 ? `+${stats.recentTrend}%` : stats.recentTrend < 0 ? `${stats.recentTrend}%` : "Stable"}
          </Badge>
          {userStatus.isPremium && <Badge className="bg-amber-500">Premium Member</Badge>}
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-1"><Target className="w-3 h-3" /> Average Score</CardDescription>
            <CardTitle className="text-3xl">{stats.avgScore}%</CardTitle>
          </CardHeader>
        </Card>
        
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Completed</CardDescription>
            <CardTitle className="text-3xl">{stats.totalAttempts}</CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-primary/5 border-primary/20">
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center gap-1"><Award className="w-3 h-3" /> Best Score</CardDescription>
            <CardTitle className="text-3xl">{stats.bestScore}%</CardTitle>
          </CardHeader>
        </Card>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader className="pb-2">
            <CardDescription className="text-primary-foreground/80">Next Step</CardDescription>
            <CardTitle className="text-xl">New Assessment</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="secondary" size="sm" className="w-full">Start Now</Button>
          </CardContent>
        </Card>
      </div>

      {/* Filter Tabs */}
      {history.length > 0 && (
        <div className="flex gap-2 flex-wrap">
          {assessmentTypes.map(type => (
            <Button
              key={type}
              variant={filterType === type ? "default" : "outline"}
              size="sm"
              onClick={() => setFilterType(type)}
              className="capitalize"
            >
              {type}
            </Button>
          ))}
        </div>
      )}

      {/* DETAILED HISTORY TABLE */}
      <div className="pt-4">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" /> 
          Assessment History
          {isFetchingHistory && <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />}
        </h2>
        
        <div className="bg-card border rounded-xl overflow-hidden shadow-sm">
          {filteredHistory.length > 0 ? (
            <div className="divide-y">
              {filteredHistory.map((item) => (
                <div key={item.id} className="p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                        <CheckCircle2 className="text-primary w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm sm:text-base truncate">{item.topic}</p>
                        <div className="flex gap-2 items-center mt-1 flex-wrap">
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                          <span className="text-[10px] uppercase font-bold text-muted-foreground/60 px-1.5 border rounded">{item.type}</span>
                          {item.difficulty && <span className="text-[10px] uppercase font-bold text-muted-foreground/60 px-1.5 border rounded">{item.difficulty}</span>}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <div className="text-right">
                        <p className={`font-mono font-bold text-lg ${item.score >= 80 ? 'text-green-600' : item.score >= 60 ? 'text-amber-600' : 'text-red-600'}`}>
                          {item.score}%
                        </p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center px-4">
              <AlertCircle className="w-12 h-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No assessment data found</h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                {isFetchingHistory ? "Checking records..." : "Complete your first assessment to see your results here."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AssessmentReport;