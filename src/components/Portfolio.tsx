import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Film, CreditCard, Globe } from "lucide-react";
const Portfolio = () => {
  const projects = [{
    icon: Film,
    title: "Movie Ticket Booking Website",
    description: "A frontend-based movie ticket booking system with interactive UI for browsing movies, selecting seats, and booking tickets.",
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: ["Responsive Design", "Interactive Seat Selection", "User-Friendly Interface"]
  }, {
    icon: CreditCard,
    title: "ATM Simulation System",
    description: "Full-stack Java application simulating ATM operations including balance inquiry, cash withdrawal, deposit, and PIN authentication.",
    technologies: ["Java", "SQL", "Full-Stack"],
    highlights: ["Secure Authentication", "Transaction Management", "Database Integration"]
  }, {
    icon: Globe,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React.js showcasing projects, skills, and professional experience.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS"],
    highlights: ["Responsive Design", "Interactive Components", "Smooth Animations"]
  }];
  return <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A showcase of my development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => {
          const Icon = project.icon;
          return <Card key={index} className="animate-bounce-in shadow-elegant hover-lift group overflow-hidden relative border-gradient" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-elegant group-hover:shadow-glow">
                    <Icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-base min-h-[60px]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => <Badge key={techIndex} variant="secondary" className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1">
                        {tech}
                      </Badge>)}
                  </div>
                  <div className="space-y-1">
                    {project.highlights.map((highlight, highlightIndex) => <div key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground group/item hover:text-foreground transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/item:scale-150 transition-transform"></div>
                        {highlight}
                      </div>)}
                  </div>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>
    </section>;
};
export default Portfolio;