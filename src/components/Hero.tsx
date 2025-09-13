import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-glow opacity-20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent opacity-20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center text-white animate-fade-in gap-12 mb-8">
          {/* Profile Picture Div */}
          <div className="flex justify-center items-center w-full md:w-auto">
            <img
              src="/tahir pic.jpg"
              alt="Profile"
              className="object-cover rounded-xl border-4 border-blue-500 shadow-[0_0_40px_0_rgba(37,99,235,0.3)] transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_60px_0_rgba(37,99,235,0.5)]"
              style={{ width: '380px', height: '380px', maxWidth: '100%', marginRight: '2rem', background: 'rgba(40,40,50,0.7)' }}
            />
          </div>
          {/* Details Div */}
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-2">
              Tahir <span className="text-primary-glow">Mehmood</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light mb-2">
              Front-End Developer based in Stockholm, Sweden.<br />Currently studying at Hyper Island.
            </p>
            <div className="flex flex-wrap gap-4 text-white/80 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Stockholm, Sweden</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>tahirmehmood2222@icloud.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+46 728 368 178</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center animate-slide-up">
              <Button 
                className="btn-hero"
                asChild
              >
                <a href="/projects">View My Work</a>
              </Button>
              <Button 
                variant="outline" 
                className="btn-outline-professional"
                asChild
              >
                <a href="/contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;