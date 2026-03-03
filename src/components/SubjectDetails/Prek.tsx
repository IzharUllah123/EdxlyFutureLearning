import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Video, Gamepad2 } from "lucide-react";
import { curriculumDatabase } from "@/data/curriculum";

const Perk = () => {
  const { gradeId, subjectId } = useParams();

  // --- Find Data ---
  const gradeData = curriculumDatabase[gradeId as keyof typeof curriculumDatabase];
  const subjectData = gradeData
    ? gradeData[subjectId as keyof typeof gradeData]
    : null;

  // --- Handle Missing Data ---
  if (!subjectData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Coming Soon!</h2>
        <p className="text-muted-foreground mb-6">
          We're working hard to add this curriculum. Check back soon!
        </p>
        <Button asChild>
          <Link to="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Grades
          </Link>
        </Button>
      </div>
    );
  }

  // --- Render Page ---
  return (
    <section className="py-6 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        
        {/* --- Header Section --- */}
        <div className="mb-6 border-b pb-6">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-primary">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Link>
            </Button>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              {subjectData.title}
            </h2>
          </div>

          <p className="text-base text-gray-600 max-w-3xl mb-4">
            {subjectData.description}
          </p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="px-2 py-0.5 bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 text-xs">
              <BookOpen className="w-3 h-3 mr-1.5" />
              {subjectData.stats.skills} skills
            </Badge>
            <Badge variant="secondary" className="px-2 py-0.5 bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200 text-xs">
              <Video className="w-3 h-3 mr-1.5" />
              {subjectData.stats.videos} videos
            </Badge>
            <Badge variant="secondary" className="px-2 py-0.5 bg-green-50 text-green-700 hover:bg-green-100 border-green-200 text-xs">
              <Gamepad2 className="w-3 h-3 mr-1.5" />
              {subjectData.stats.games} games
            </Badge>
          </div>
        </div>

        {/* --- TOPICS LAYOUT (MASONRY STYLE) --- */}
        {/* This uses 'columns' instead of 'grid' to remove vertical gaps */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          
          {subjectData.topics.map((topic) => (
            // 'break-inside-avoid' ensures a topic isn't split between two columns
            <div key={topic.id} className="break-inside-avoid mb-8">
              
              {/* Topic Title */}
              <h3 className="text-base font-bold text-gray-900 mb-2 flex items-baseline">
                <span className="text-lg mr-1.5 text-primary font-extrabold">{topic.id}.</span>
                {topic.title}
              </h3>

              {/* Skill List */}
              <ul className="space-y-0.5">
                {topic.skills.map((skill, index) => (
                  <li key={skill.id} className="group">
                    <Link
                      to={`/learn/${gradeId}/${subjectId}/${skill.id}`}
                      className="flex items-start text-[13px] text-gray-600 group-hover:text-primary group-hover:underline transition-colors py-0.5"
                    >
                      <span className="mr-2 text-gray-400 font-medium text-[11px] pt-0.5 min-w-[1rem]">
                        {index + 1}
                      </span>
                      <span className="leading-snug">
                        {skill.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Perk;