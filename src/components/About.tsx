import { GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="animate-slide-up shadow-elegant hover-lift border-gradient overflow-hidden group">
            <div className="absolute inset-0 gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <CardContent className="pt-6 relative z-10">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enthusiastic and detail-oriented Java Developer with a strong foundation in Core Java, OOPs concepts, 
                and web technologies like HTML, CSS, and JavaScript. Skilled in developing and debugging Java-based 
                applications using tools such as Eclipse and IntelliJ IDEA. Passionate about Cloud Engineering with 
                hands-on experience in cloud platforms like AWS and Azure, including services such as EC2, S3, Lambda, 
                and cloud infrastructure management. A creative individual seeking roles in Cloud Engineering and Digital 
                Marketing to utilize my skills in cloud solutions, SEO, social media marketing, and analytics to drive 
                digital growth and enhance brand visibility. Eager to apply technical skills and problem-solving 
                abilities to contribute to innovative software solutions in a dynamic development environment.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="animate-slide-in-left shadow-elegant hover-lift group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 gradient-glow rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-smooth">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">Bachelor of Engineering</h3>
                  <p className="text-muted-foreground">Computer Science and Engineering</p>
                  <p className="text-sm text-muted-foreground">
                    C. Abdul Hakeem College of Engineering and Technology
                  </p>
                  <p className="text-sm text-muted-foreground">2022 - 2026</p>
                  <p className="text-primary font-semibold mt-1">CGPA: 8.6</p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-in-right shadow-elegant hover-lift group overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 gradient-glow rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-accent/10 group-hover:scale-110 transition-smooth">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="font-semibold text-lg">Java Full Stack Intern</h3>
                  <p className="text-muted-foreground">Redback Solutions Pvt. Ltd.</p>
                  <p className="text-sm text-muted-foreground">July - August 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
