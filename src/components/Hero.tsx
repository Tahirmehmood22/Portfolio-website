import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden py-8 px-2 sm:px-4 md:px-12 lg:px-24">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-glow opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-6 relative z-10 w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center text-white animate-fade-in gap-6 md:gap-12 mb-4">
          {/* Profile Picture Div */}
          <div className="flex justify-center items-center w-full md:w-auto flex-shrink-0">
            <img
              src="/tahir pic.jpg"
              alt="Profile"
              className="object-cover rounded-xl border-4 border-blue-500 shadow-[0_0_40px_0_rgba(37,99,235,0.3)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_60px_0_rgba(37,99,235,0.5)]"
              style={{ width: '220px', height: '220px', maxWidth: '90vw', background: 'rgba(40,40,50,0.7)' }}
            />
          </div>
          {/* Details Div */}
          <div className="flex flex-col items-center md:items-start w-full md:w-auto text-center md:text-left max-w-full">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 break-words">
              Tahir <span className="text-primary-glow">Mehmood</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 font-light mb-3 max-w-full break-words">
              Front-End Developer based in Stockholm, Sweden.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Currently studying at Hyper Island.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-1 sm:gap-2 md:gap-4 text-white/80 mb-4 text-xs sm:text-sm md:text-base max-w-full">
              <div className="flex items-center gap-1 sm:gap-2 justify-center md:justify-start">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="break-words">Stockholm, Sweden</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 justify-center md:justify-start">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-xs sm:text-sm md:text-base break-all">tahirmehmood2222@icloud.com</span>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 justify-center md:justify-start">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="break-words">+46 728 368 178</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center animate-slide-up w-full max-w-full">
              <Button 
                className="btn-hero"
                asChild
              >
                <Link to="/projects">View My Work</Link>
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-professional"
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;