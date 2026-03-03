import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronLeft, Play, Edit, BookOpen } from "lucide-react";

const subjects = [
  { id: "math", name: "Math", color: "grade-prek" },
  { id: "language-arts", name: "Language arts", color: "grade-k" },
  { id: "science", name: "Science", color: "grade-1" },
  { id: "social-studies", name: "Social studies", color: "grade-2" },
  { id: "spanish", name: "Spanish", color: "grade-3" },
];

const grades = ["Pre-K", "Kindergarten", "First grade", "Second grade", "Third grade", "Fourth grade"];

const curriculumData = {
  "Pre-K": {
    math: {
      "Numbers to 3": [
        "Identify numbers - up to 3",
        "Choose the number that you hear - up to 3",
      ],
      "Counting to 3": [
        "Learn to count - up to 3",
        "Count pictures - up to 3",
        "Count dots - up to 3",
        "Count shapes - up to 3",
        "Count cubes - up to 3",
        "Count on ten frames - up to 3",
      ],
      "One more and one less": [
        "One more with pictures - up to 5",
        "One less with pictures - up to 5", 
        "One more with pictures - up to 10",
        "One less with pictures - up to 10",
      ],
      "Numbers and counting to 20": [
        "Identify numbers - up to 20",
        "Count pictures - up to 20",
        "Count dots - up to 20",
        "Count shapes - up to 20",
      ]
    },
    "language-arts": {
      "Letter Recognition": [
        "Identify uppercase letters A-Z",
        "Identify lowercase letters a-z",
        "Match uppercase and lowercase letters",
      ],
      "Phonics": [
        "Letter sounds A-Z",
        "Beginning sounds",
        "Rhyming words",
      ]
    }
  },
  "Kindergarten": {
    math: {
      "Numbers to 10": [
        "Identify numbers - up to 10",
        "Count objects - up to 10",
        "Number order - up to 10",
      ],
      "Addition": [
        "Add with pictures - sums to 5",
        "Add with pictures - sums to 10",
        "Addition sentences",
      ]
    }
  }
};

const Curriculum = () => {
  const { subject: urlSubject, grade: urlGrade } = useParams();
  const [selectedSubject, setSelectedSubject] = useState(urlSubject || "math");
  const [selectedGrade, setSelectedGrade] = useState(urlGrade || "Pre-K");
  
  const currentSubject = subjects.find(s => s.id === selectedSubject);
  const currentData = curriculumData[selectedGrade as keyof typeof curriculumData]?.[selectedSubject as keyof typeof curriculumData["Pre-K"]];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link to="/explore" className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-4 w-4" />
            Back to Explore
          </Link>
        </div>

        {/* Subject Tabs */}
        <Tabs value={selectedSubject} onValueChange={setSelectedSubject} className="mb-6">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            {subjects.map((subject) => (
              <TabsTrigger 
                key={subject.id} 
                value={subject.id}
                className="flex items-center gap-2"
              >
                <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                {subject.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* View By Options */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-muted-foreground">View by:</span>
          <div className="flex gap-2">
            <Button variant="default" className="bg-primary text-primary-foreground">
              Grades
            </Button>
            <Button variant="ghost">Topics</Button>
            <Button variant="ghost">Weekly plans</Button>
            <Button variant="ghost">Skill plans</Button>
          </div>
        </div>

        {/* Grade Selector */}
        <div className="mb-8">
          <Select value={selectedGrade} onValueChange={setSelectedGrade}>
            <SelectTrigger className="w-[300px]">
              <SelectValue placeholder="Select a grade" />
            </SelectTrigger>
            <SelectContent>
              {grades.map((grade) => (
                <SelectItem key={grade} value={grade}>
                  {grade}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Subject Title */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">
            {selectedGrade} {currentSubject?.name}
          </h1>
          <p className="text-muted-foreground">
            EDXLY offers more than 100 {selectedGrade.toLowerCase()} {currentSubject?.name} skills, lessons, and games to explore and learn! Not sure where to start? Go to your personalized Recommendations wall to find a skill that looks interesting, or select a skill plan that aligns with your textbook, state standards, or standardized test.
          </p>
        </div>

        {/* Skills Content */}
        <div className="grid gap-6">
          {currentData ? Object.entries(currentData).map(([category, skills], index) => (
            <Card key={category} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-success">
                    {String.fromCharCode(65 + Math.floor(index / 2))}.
                  </span>
                  <span className="text-success text-xl">{category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {(skills as string[]).map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 border border-transparent hover:border-border transition-colors group">
                      <div className="flex items-center gap-3">
                        <span className="text-muted-foreground font-medium">
                          {skillIndex + 1}
                        </span>
                        <span className="group-hover:text-primary transition-colors">
                          {skill}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Play className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )) : (
            <Card>
              <CardContent className="text-center py-12">
                <BookOpen className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">Content Coming Soon</h3>
                <p className="text-muted-foreground">
                  {currentSubject?.name} content for {selectedGrade} is being developed.
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Curriculum;