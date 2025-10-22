import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = ["WEB DESIGN", "APP DESIGN", "DEVELOPMENT", "WEB FLOW", "BRANDING", "UI"];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden bg-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">👋</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hello! I'm{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                    Afsal U
                  </span>
                </span>
              </h1>
              
              <div className="flex items-center gap-3">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Java Developer
                </h2>
                <div className="flex items-center gap-1">
                  <div className="w-8 h-0.5 bg-primary"></div>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed border-l-2 border-primary pl-4">
              Hello! I'm Afsal U. I'm a UX leader, design thinker, product designer, experience strategist, generalist artist & human-loving introvert
            </p>
            
            <div className="space-y-3">
              {["Product must be authentic", "Solve pain points elegantly", "User testing, feedback, and validation"].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg viewBox="0 0 16 16" className="w-full h-full text-primary fill-current">
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                  </div>
                  <p className="text-sm md:text-base text-foreground">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-8 py-6 text-base font-semibold transition-smooth shadow-elegant"
              >
                Let's Talk
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground/20 hover:border-primary hover:text-primary transition-smooth rounded-full px-8 py-6 text-base font-semibold bg-transparent"
              >
                Download CV
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Dramatic lighting effect */}
              <div className="absolute inset-0 bg-gradient-hero rounded-lg blur-2xl opacity-60"></div>
              
              {/* Profile Image with dramatic lighting */}
              <div className="relative w-[350px] h-[450px] md:w-[400px] md:h-[500px]">
                <img
                  src={profileImage}
                  alt="Afsal U - Java Developer and Digital Marketing Strategist"
                  className="relative rounded-lg w-full h-full object-cover shadow-glow"
                  style={{
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 100%)',
                  }}
                />
                {/* Overlay gradient for dramatic effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-lg pointer-events-none"></div>
              </div>
              
              {/* Floating text element */}
              <div className="absolute -bottom-8 -left-8 bg-card/80 backdrop-blur-sm border border-border rounded-full p-6 shadow-lg">
                <p className="text-2xl font-bold text-foreground">Hello</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagonal Skills Banner */}
        <div className="absolute -bottom-24 left-0 right-0 overflow-hidden">
          <div className="relative h-32 -rotate-2 gradient-vibrant flex items-center justify-center">
            <div className="flex gap-12 animate-[scroll_20s_linear_infinite]">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-white text-xl md:text-2xl font-bold whitespace-nowrap uppercase tracking-wider">
                    {skill}
                  </span>
                  <span className="text-white text-2xl">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
