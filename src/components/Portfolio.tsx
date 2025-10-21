import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Film, CreditCard, Globe, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      icon: Film,
      title: "Movie Ticket Booking Website",
      description: "A frontend-based movie ticket booking system with interactive UI for browsing movies, selecting seats, and booking tickets.",
      technologies: ["HTML", "CSS", "JavaScript"],
      highlights: ["Responsive Design", "Interactive Seat Selection", "User-Friendly Interface"],
    },
    {
      icon: CreditCard,
      title: "ATM Simulation System",
      description: "Full-stack Java application simulating ATM operations including balance inquiry, cash withdrawal, deposit, and PIN authentication.",
      technologies: ["Java", "SQL", "Full-Stack"],
      highlights: ["Secure Authentication", "Transaction Management", "Database Integration"],
    },
    {
      icon: Globe,
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React.js showcasing projects, skills, and professional experience.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS"],
      highlights: ["Responsive Design", "Interactive Components", "Smooth Animations"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing for Coffee Shop",
      description: "Comprehensive digital marketing strategy that boosted local brand awareness by 30% through social media campaigns and content design.",
      technologies: ["Social Media Marketing", "Canva", "Facebook Ads", "Instagram"],
      highlights: ["30% Brand Awareness Increase", "Social Media Growth", "Content Creation"],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing for Recruitment",
      description: "Strategic digital marketing campaign designed to enhance recruitment efforts and attract qualified candidates.",
      technologies: ["SEO", "SEM", "Google Ads", "LinkedIn Marketing"],
      highlights: ["Lead Generation", "Targeted Campaigns", "Analytics-Driven"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my development projects and digital marketing campaigns
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card
                key={index}
                className="animate-fade-in shadow-elegant hover-scale group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base min-h-[60px]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
