import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Wrench, Palette, TrendingUp, MessageCircle } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: Code,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "text-primary",
    },
    {
      title: "Back-End",
      icon: Database,
      skills: ["Java"],
      color: "text-accent",
    },
    {
      title: "Database",
      icon: Database,
      skills: ["SQL"],
      color: "text-primary",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["VS Code", "LeetCode", "ChatGPT", "Eclipse", "IntelliJ IDEA"],
      color: "text-accent",
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      skills: ["SEO", "SEM", "Google Ads", "Social Media Marketing", "Facebook Ads"],
      color: "text-primary",
    },
    {
      title: "Design & Soft Skills",
      icon: MessageCircle,
      skills: ["Canva Designing", "Adaptability", "Good Communication", "Problem Solving"],
      color: "text-accent",
    },
  ];

  const otherSkills = {
    title: "Basics",
    icon: Palette,
    skills: ["Python", "C Programming"],
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="animate-bounce-in shadow-elegant hover-lift group overflow-hidden relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}

          <Card className="animate-bounce-in shadow-elegant hover-lift group overflow-hidden relative" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-0 gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Palette className="h-5 w-5 text-primary" />
                </div>
                {otherSkills.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="flex flex-wrap gap-2">
                {otherSkills.skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 hover:-translate-y-1"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
