import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
  <footer className="py-12" style={{background: 'linear-gradient(135deg, #232526 0%, #414345 100%)', color: 'white'}}>
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Tahir Mehmood</h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Front-End Developer passionate about creating beautiful, functional, 
            and user-friendly web experiences. Let's build something amazing together.
          </p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a 
              href="mailto:tahir.mehmood@hyperisland.se"
              className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com/Tahirmehmood22"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
          
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Tahir Mehmood. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;