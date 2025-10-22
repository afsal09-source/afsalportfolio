import { Palette, Monitor, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "UI/UX CREATIVE DESIGN",
      description: "Designing intuitive and engaging user interfaces using HTML, CSS, JavaScript, and Canva for visual content creation.",
      number: "01",
    },
    {
      icon: Monitor,
      title: "VISUAL GRAPHIC DESIGN",
      description: "Building responsive and dynamic web applications using modern technologies including Java, HTML, CSS, and JavaScript.",
      number: "02",
    },
    {
      icon: TrendingUp,
      title: "STRATEGY & DIGITAL MARKETING",
      description: "Creating comprehensive digital marketing campaigns using SEO, SEM, Google Ads, and social media marketing to boost brand visibility.",
      number: "03",
    },
  ];

  return (
    <section id="services" className="py-32 px-4 bg-background relative">
      {/* Background decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto">
        <div className="mb-16 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-px h-16 bg-primary"></div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">MY SERVICES</p>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold max-w-lg">
            WHAT I'M <br />
            <span className="text-foreground">OFFERING</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-smooth"
            >
              <CardContent className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="p-4 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-smooth">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <span className="text-6xl font-bold text-muted/20">{service.number}</span>
                </div>
                
                <h3 className="text-xl font-bold uppercase tracking-wide">{service.title}</h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary hover:bg-transparent"
                >
                  READ MORE
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-smooth" />
                </Button>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-smooth origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
