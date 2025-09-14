import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import DownloadCVButton from "@/components/DownloadCVButton";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tahirmehmood2222@icloud.com",
      href: "mailto:tahirmehmood2222@icloud.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+46 728 368 178",
      href: "tel:+46728368178"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Stockholm, Sweden",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
            Let's Work <span className="text-primary">Together</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold mb-8 text-foreground">Get In Touch</h3>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a conversation about web development and technology. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-foreground font-medium animated-underline hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="text-lg font-semibold mb-4 text-foreground">Connect With Me</h4>
                <div className="flex gap-4 flex-wrap">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="btn-outline-professional w-12 h-12"
                    onClick={() => window.open('https://www.linkedin.com/feed/', '_blank')}
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="btn-outline-professional w-12 h-12"
                    onClick={() => window.open('https://github.com/Tahirmehmood22', '_blank')}
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* CV Download */}
                <div className="mt-6">
                  <h5 className="text-md font-medium mb-3 text-foreground">View My Resume</h5>
                  <DownloadCVButton 
                    variant="default" 
                    className="btn-hero"
                  />
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="professional-card p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      id="firstName" 
                      placeholder="Your first name"
                      className="w-full"
                      autoComplete="given-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      id="lastName" 
                      placeholder="Your last name"
                      className="w-full"
                      autoComplete="family-name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="w-full"
                    autoComplete="email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="w-full"
                    autoComplete="off"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project or how I can help..."
                    rows={5}
                    className="w-full resize-none"
                    autoComplete="off"
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;