import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      category: "WEB DESIGN",
      title: "Movie Ticket Booking Website",
      description: "A frontend-based movie ticket booking system with interactive UI for browsing movies, selecting seats, and booking tickets.",
    },
    {
      category: "FULL-STACK",
      title: "ATM Simulation System",
      description: "Full-stack Java application simulating ATM operations including balance inquiry, cash withdrawal, deposit, and PIN authentication.",
    },
    {
      category: "DIGITAL MARKETING",
      title: "Digital Marketing for Coffee Shop",
      description: "Comprehensive digital marketing strategy that boosted local brand awareness by 30% through social media campaigns and content design.",
    },
  ];

  return (
    <section id="portfolio" className="py-32 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex items-start justify-between mb-12">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
            CASE STUDY
          </h2>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden bg-card border-border hover:border-primary transition-smooth"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Image placeholder */}
                  <div className="relative h-64 md:h-80 bg-muted/30 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <div className="w-full h-48 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                          <span className="text-6xl opacity-20">📱</span>
                        </div>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center space-y-6">
                    <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
                      {project.category}
                    </Badge>
                    
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="w-fit group/btn p-0 h-auto font-semibold text-primary hover:text-primary hover:bg-transparent"
                    >
                      See Details
                      <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-smooth" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
