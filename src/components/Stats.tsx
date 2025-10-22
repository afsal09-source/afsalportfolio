import { Briefcase, Users, Award, Coffee } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "2450",
      label: "Project Completed",
    },
    {
      icon: Users,
      value: "1085",
      label: "Happy Clients",
    },
    {
      icon: Award,
      value: "07",
      label: "Years Experience",
    },
    {
      icon: Coffee,
      value: "2790",
      label: "Cup of Coffee",
    },
  ];

  return (
    <section className="py-16 px-4 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-lg bg-muted/50 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
