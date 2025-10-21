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
          <Card className="animate-fade-in shadow-elegant hover-scale">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Enthusiastic and detail-oriented Java Developer with a strong foundation in Core Java, OOPs concepts, 
                and web technologies like HTML, CSS, and JavaScript. Skilled in developing and debugging Java-based 
                applications using tools such as Eclipse and IntelliJ IDEA. A passionate and creative individual seeking 
                an entry-level role in Digital Marketing to utilize my skills in SEO, social media marketing, and analytics 
                to drive digital growth and enhance brand visibility. Eager to apply technical skills and problem-solving 
                abilities to contribute to innovative software solutions in a dynamic development environment.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="animate-fade-in shadow-elegant hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
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

            <Card className="animate-fade-in shadow-elegant hover-scale">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-6 w-6 text-accent" />
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
