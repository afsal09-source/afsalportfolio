import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Afsal U</span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground space-y-2">
              <p className="font-semibold">Java Developer</p>
              <p className="font-semibold">Full-Stack Enthusiast</p>
              <p className="font-semibold">Digital Marketing Strategist</p>
            </div>
            <p className="text-lg text-muted-foreground max-w-xl">
              Passionate about building innovative software solutions and driving digital growth through creative marketing strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="gradient-primary hover:opacity-90 transition-smooth shadow-elegant"
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/afsal09-source"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/afsal-afsal-8987a9302"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:afsalsharma09@gmail.com"
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 gradient-primary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Afsal U"
                className="relative rounded-full w-80 h-80 object-cover shadow-elegant border-4 border-background"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
