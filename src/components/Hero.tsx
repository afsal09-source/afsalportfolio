import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-glow rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-glow rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-block">
                <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-wider mb-2">
                  Welcome to my portfolio
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                    Afsal U
                  </span>
                </span>
              </h1>
            </div>
            
            <div className="space-y-3">
              {["Java Developer", "Full-Stack Enthusiast", "Cloud Engineer", "Digital Marketing Strategist"].map((role, index) => (
                <div
                  key={role}
                  className="flex items-center gap-3 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-2 h-2 rounded-full bg-primary group-hover:scale-150 transition-smooth"></div>
                  <p className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {role}
                  </p>
                </div>
              ))}
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Passionate about building innovative software solutions and driving digital growth through creative marketing strategies.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="gradient-primary hover:opacity-90 hover:scale-105 transition-smooth shadow-elegant hover:shadow-glow group relative overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 hover:border-primary hover:text-primary transition-smooth hover:scale-105 hover:shadow-elegant relative overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Button>
            </div>
            
            <div className="flex gap-5 pt-6">
              {[
                { href: "https://github.com/afsal09-source", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/afsal-afsal-8987a9302", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:afsalsharma09@gmail.com", icon: Mail, label: "Email" }
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth hover:scale-125 hover:-translate-y-2 shadow-md hover:shadow-glow group relative overflow-hidden"
                  aria-label={label}
                >
                  <Icon className="h-6 w-6 relative z-10 group-hover:rotate-12 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-8 gradient-primary rounded-full blur-3xl opacity-40 animate-pulse-glow"></div>
              
              {/* Middle ring */}
              <div className="absolute -inset-4 gradient-hero rounded-full backdrop-blur-sm border border-primary/20"></div>
              
              {/* Inner glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              
              {/* Profile Image */}
              <div className="relative animate-float">
                <img
                  src={profileImage}
                  alt="Afsal U - Java Developer and Digital Marketing Strategist"
                  className="relative rounded-full w-80 h-80 md:w-96 md:h-96 object-cover shadow-glow border-4 border-background ring-2 ring-primary/50"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
