import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import DownloadCVButton from "@/components/DownloadCVButton";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden py-8 px-2 sm:px-4 md:px-8 lg:px-12 xl:px-24">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-glow opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-2 sm:px-4 md:px-6 relative z-10 w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-center text-white animate-fade-in gap-6 sm:gap-8 lg:gap-12 mb-4">
          {/* Profile Picture Div */}
          <div className="flex justify-center items-center w-full lg:w-auto flex-shrink-0 order-1 lg:order-1">
            <img
              src="/tahir pic.jpg"
              alt="Profile"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover rounded-xl border-4 border-blue-500 shadow-[0_0_40px_0_rgba(37,99,235,0.3)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_60px_0_rgba(37,99,235,0.5)]"
              style={{ maxWidth: '85vw', background: 'rgba(40,40,50,0.7)' }}
            />
          </div>
          {/* Details Div */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto text-center lg:text-left max-w-full order-2 lg:order-2 px-2 sm:px-4 lg:px-0">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 text-center lg:text-left break-words max-w-full">
              Tahir <span className="text-primary-glow">Mehmood</span>
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl text-white/90 font-light mb-4 max-w-full text-center lg:text-left leading-relaxed break-words">
              Front-End Developer based in Stockholm, Sweden.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Currently studying at Hyper Island.
            </p>
            <div className="flex flex-col items-center lg:items-start gap-2 sm:gap-3 text-white/80 mb-5 text-xs sm:text-sm md:text-base max-w-full w-full">
              <div className="flex items-center gap-2 justify-center lg:justify-start w-full lg:w-auto max-w-full">
                <MapPin className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-center lg:text-left break-words">Stockholm, Sweden</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start w-full lg:w-auto max-w-full">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-center lg:text-left break-all text-xs sm:text-sm">tahirmehmood2222@icloud.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start w-full lg:w-auto max-w-full">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                <span className="text-center lg:text-left break-words">+46 728 368 178</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center animate-slide-up w-full max-w-full">
              <Button 
                className="btn-hero"
                asChild
              >
                <Link to="/projects">View My Work</Link>
              </Button>
              <DownloadCVButton 
                variant="outline" 
                className="btn-outline-professional"
              />
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