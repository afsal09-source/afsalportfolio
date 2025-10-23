import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Layers, TrendingUp, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layers,
      title: "Full-Stack Web Development",
      description: "Building responsive and dynamic web applications using modern technologies including Java, HTML, CSS, and JavaScript.",
    },
    {
      icon: Code2,
      title: "Java Application Development",
      description: "Developing robust Java-based applications with strong focus on OOPs concepts, clean code, and efficient problem-solving.",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Strategy",
      description: "Creating comprehensive digital marketing campaigns using SEO, SEM, Google Ads, and social media marketing to boost brand visibility.",
    },
    {
      icon: Palette,
      title: "Front-End UI Design",
      description: "Designing intuitive and engaging user interfaces using HTML, CSS, JavaScript, and Canva for visual content creation.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Offering a unique blend of technical development and digital marketing expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="animate-slide-up shadow-elegant hover-lift group overflow-hidden relative border-gradient"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <CardHeader className="relative z-10">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-elegant group-hover:shadow-glow">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
