import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Play, FileText, Gamepad2, Calculator, Book, Microscope, Globe, Languages } from "lucide-react";

const subjects = [
  { name: "Math", icon: Calculator, color: "grade-1" },
  { name: "Language Arts", icon: Book, color: "grade-2" },
  { name: "Science", icon: Microscope, color: "grade-3" },
  { name: "Social Studies", icon: Globe, color: "grade-4" },
  { name: "Spanish", icon: Languages, color: "grade-prek" }
];

const grades = ["Pre-K", "Kindergarten", "1st Grade", "2nd Grade", "3rd Grade", "4th Grade"];

const skillsBySubjectAndGrade = {
  "Math": {
    "Pre-K": [
      { category: "Numbers to 3", skills: ["Identify numbers - up to 3", "Choose the number that you hear - up to 3"] },
      { category: "Counting to 3", skills: ["Learn to count - up to 3", "Count pictures - up to 3", "Count dots - up to 3", "Count shapes - up to 3", "Count cubes - up to 3", "Count on frames - up to 3"] },
      { category: "One more and one less", skills: ["One more with pictures - up to 5", "One less with pictures - up to 5", "One more with pictures - up to 10", "One less with pictures - up to 10"] },
      { category: "Numbers and counting to 20", skills: ["Identify numbers - up to 20", "Count pictures - up to 20", "Count dots - up to 20", "Count shapes - up to 20"] }
    ],
    "Kindergarten": [
      { category: "Numbers to 10", skills: ["Count to 10", "Number recognition", "Number writing", "Comparing numbers"] },
      { category: "Addition", skills: ["Add with pictures", "Add within 5", "Add within 10"] },
      { category: "Subtraction", skills: ["Subtract with pictures", "Subtract within 5", "Subtract within 10"] }
    ]
  },
  "Language Arts": {
    "Pre-K": [
      { category: "Letter Recognition", skills: ["Identify uppercase letters", "Identify lowercase letters", "Match uppercase and lowercase letters"] },
      { category: "Phonics", skills: ["Beginning sounds", "Ending sounds", "Rhyming words"] }
    ],
    "Kindergarten": [
      { category: "Reading", skills: ["Sight words", "Short vowels", "Consonant sounds", "Simple sentences"] },
      { category: "Writing", skills: ["Letter formation", "Name writing", "Simple words"] }
    ]
  }
};

const Explore = () => {
  const { subject } = useParams();
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedSubject, setSelectedSubject] = useState(subject || "");

  const currentSubject = subjects.find(s => s.name.toLowerCase().replace(/\s+/g, '-') === subject);
  const currentSkills = selectedGrade && selectedSubject 
    ? skillsBySubjectAndGrade[selectedSubject as keyof typeof skillsBySubjectAndGrade]?.[selectedGrade] || []
    : [];

  // If we have a subject from URL, show that subject's content
  if (subject && currentSubject) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <currentSubject.icon className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {currentSubject.name}
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore {currentSubject.name.toLowerCase()} concepts with interactive lessons, videos, and games
            </p>
          </div>

          {/* Grade Selector */}
          <div className="max-w-md mx-auto mb-8">
            <Select value={selectedGrade} onValueChange={setSelectedGrade}>
              <SelectTrigger>
                <SelectValue placeholder="Select Grade Level" />
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

          {/* Skills Display */}
          {currentSkills.length > 0 ? (
            <div className="grid gap-6">
              {currentSkills.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.skills.map((skill, skillIndex) => (
                        <Card key={skillIndex} className="p-4 hover:bg-muted/50 transition-colors cursor-pointer group">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors">{skill}</h4>
                            <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="text-xs">
                              <Play className="h-3 w-3 mr-1" />
                              Lesson
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              <FileText className="h-3 w-3 mr-1" />
                              Practice
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              <Gamepad2 className="h-3 w-3 mr-1" />
                              Game
                            </Badge>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : selectedGrade ? (
            <Card className="text-center py-12">
              <CardContent>
                <BookOpen className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Content Coming Soon</h3>
                <p className="text-muted-foreground">
                  We're working on adding {currentSubject.name} content for {selectedGrade}
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <currentSubject.icon className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Select a Grade Level</h3>
                <p className="text-muted-foreground">
                  Choose your grade level to explore {currentSubject.name} topics
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    );
  }

  // Default explore page - show all subjects
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Explore Learning
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover engaging lessons, interactive activities, and educational content across all subjects
          </p>
        </div>

        {/* Subject Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {subjects.map((subject) => {
            const SubjectIcon = subject.icon;
            return (
              <Link
                key={subject.name}
                to={`/curriculum/${subject.name.toLowerCase().replace(/\s+/g, '-')}/Pre-K`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:scale-105 grade-hover">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 mx-auto rounded-full ${subject.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <SubjectIcon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {subject.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription>
                      {subject.name === "Math" && "Numbers, algebra, geometry and problem solving"}
                      {subject.name === "Language Arts" && "Reading, writing, grammar and vocabulary"}
                      {subject.name === "Science" && "Biology, chemistry, physics and earth science"}
                      {subject.name === "Social Studies" && "History, geography, civics and culture"}
                      {subject.name === "Spanish" && "Learn Spanish vocabulary and grammar"}
                    </CardDescription>
                    <div className="flex justify-center gap-2 mt-4">
                      <Badge variant="outline">Skills</Badge>
                      <Badge variant="outline">Lessons</Badge>
                      <Badge variant="outline">Games</Badge>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Learning Features */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="text-center p-6">
            <CardContent>
              <Play className="h-8 w-8 mx-auto text-primary mb-3" />
              <h3 className="font-semibold mb-2">Interactive Lessons</h3>
              <p className="text-sm text-muted-foreground">Step-by-step guided learning</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent>
              <Gamepad2 className="h-8 w-8 mx-auto text-secondary mb-3" />
              <h3 className="font-semibold mb-2">Educational Games</h3>
              <p className="text-sm text-muted-foreground">Fun and engaging activities</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent>
              <FileText className="h-8 w-8 mx-auto text-accent mb-3" />
              <h3 className="font-semibold mb-2">Practice Exercises</h3>
              <p className="text-sm text-muted-foreground">Reinforce your learning</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent>
              <BookOpen className="h-8 w-8 mx-auto text-success mb-3" />
              <h3 className="font-semibold mb-2">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">Monitor your growth</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Explore;