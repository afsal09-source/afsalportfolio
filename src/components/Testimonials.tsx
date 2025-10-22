import { Quote } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="flex items-start justify-between mb-6">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground">
            CLIENT FEEDBACK
          </h2>
        </div>
        
        <div className="relative">
          <Quote className="absolute top-0 left-0 w-16 h-16 text-primary opacity-20" />
          
          <div className="max-w-4xl">
            <p className="text-3xl md:text-5xl font-bold text-foreground leading-tight mb-8">
              I just wanted to share a quick note and let you know that you guys do a really good job.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-4xl">👤</div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">Client Name</h3>
                <p className="text-muted-foreground">CEO, Company Name</p>
                <div className="flex gap-1 mt-2">
                  <div className="w-8 h-1 bg-primary rounded"></div>
                  <div className="w-8 h-1 bg-muted rounded"></div>
                  <div className="w-8 h-1 bg-muted rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
