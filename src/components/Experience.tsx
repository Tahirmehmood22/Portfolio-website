import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "education",
      title: "Diploma in Front-End Development",
      company: "Hyperisland Stockholm",
      period: "2024 - 2026",
      description: "Two-year intensive program focusing on Front-End development. Learning and practicing cutting-edge technologies like React, Node.js, and modern web development practices.",
      current: true
    },
    {
      type: "work",
      title: "Part Time Foodora Rider",
      company: "Foodora",
      period: "2023 - Current",
      description: "Working as a part-time delivery rider in Stockholm area while pursuing my studies in Front-End development.",
      current: true
    },
    {
      type: "work",
      title: "General Banking Officer",
      company: "Askari Bank Limited Pakistan",
      period: "2020 - 2022",
      description: "Managed customer accounts, processed transactions, and provided comprehensive banking services to clients.",
      current: false
    },
    {
      type: "work",
      title: "Customer Service Representative",
      company: "United Bank Limited Pakistan",
      period: "2015 - 2020",
      description: "Provided excellent customer service, handled inquiries, and maintained strong client relationships in a fast-paced banking environment.",
      current: false
    },
    {
      type: "education",
      title: "Master in Commerce",
      company: "University of Sargodha, Pakistan",
      period: "2015",
      description: "Comprehensive business education covering finance, marketing, and management principles.",
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
            Experience & <span className="text-primary">Education</span>
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex gap-8 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-elegant">
                    {exp.type === 'education' ? (
                      <GraduationCap className="h-8 w-8" />
                    ) : (
                      <Briefcase className="h-8 w-8" />
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 professional-card p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-primary font-semibold">{exp.period}</span>
                        {exp.current && (
                          <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-accent mb-3">{exp.company}</h4>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;