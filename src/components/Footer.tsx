import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-50"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} <span className="font-semibold text-gradient">Afsal U</span>. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/afsal09-source"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:shadow-elegant"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/afsal-afsal-8987a9302"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-muted-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:shadow-elegant"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:afsalsharma09@gmail.com"
              className="p-2 rounded-full text-muted-foreground hover:text-primary-foreground hover:bg-primary transition-all duration-300 hover:scale-125 hover:-translate-y-1 hover:shadow-elegant"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
