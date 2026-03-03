import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, Gamepad2, Users, BookOpen, Printer, Monitor, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";



const Resources = () => {
  const navigate = useNavigate();

  const handleResourceAction = (resource) => {
    if (resource.type === "Feature") {
      navigate("/comingsoon", { state: { name: resource.name } });
    } else if (resource.type === "Online") {
      // For now, let's assume games also go to coming soon or handle logic here
      navigate("/comingsoon", { state: { name: resource.name } });
    } else {
      // logic for PDF downloads
      console.log(`Downloading ${resource.name}...`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
            Educational Resources
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download free worksheets, guides, and games to support learning at home and in the classroom
          </p>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-primary" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{resource.type}</Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {resource.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {resource.downloads.toLocaleString()} downloads
                    </span>
                    <Button onClick={() => navigate("/comingsoon", { state: { name: resource.title } })}>
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resource Categories */}
        <div className="grid gap-8">
          {resourceCategories.map((category, index) => {
            const CategoryIcon = category.icon;
            return (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CategoryIcon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.resources.map((resource, resourceIndex) => (
                      <Card key={resourceIndex} className="p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h4 className="font-medium text-sm mb-1">{resource.name}</h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Badge variant="outline" className="text-xs">
                                {resource.type}
                              </Badge>
                              <span>{resource.size}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {resource.downloads} downloads
                          </span>
                          <Button size="sm" variant="outline" onClick={() => handleResourceAction(resource)}>
                            {resource.type === "Online" ? "Play" : resource.type === "Feature" ? "View" : <Download className="h-3 w-3" />}
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Resource Stats */}
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          <Card className="text-center p-6">
            <CardContent>
              <FileText className="h-8 w-8 mx-auto text-primary mb-3" />
              <h3 className="font-semibold mb-2">Study Guides</h3>
              <p className="text-2xl font-bold text-primary">50+</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent>
              <Printer className="h-8 w-8 mx-auto text-secondary mb-3" />
              <h3 className="font-semibold mb-2">Worksheets</h3>
              <p className="text-2xl font-bold text-secondary">200+</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent>
              <Gamepad2 className="h-8 w-8 mx-auto text-accent mb-3" />
              <h3 className="font-semibold mb-2">Games</h3>
              <p className="text-2xl font-bold text-accent">75+</p>
            </CardContent>
          </Card>
          <Card className="text-center p-6">
            <CardContent>
              <Download className="h-8 w-8 mx-auto text-success mb-3" />
              <h3 className="font-semibold mb-2">Downloads</h3>
              <p className="text-2xl font-bold text-success">50K+</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;