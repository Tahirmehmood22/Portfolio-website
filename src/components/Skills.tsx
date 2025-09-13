import { Code, Database, Globe, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Technologies",
      skills: ["JavaScript", "React", "HTML5", "CSS3", "TypeScript", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Backend & Database",
      skills: ["Node.js", "MongoDB", "Express.js", "RESTful APIs"]
    },
    {
      icon: Globe,
      title: "Tools & Methodologies",
      skills: ["Git", "Agile", "Scrum", "UX/UI Design", "Responsive Design", "SEO"]
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: ["Team Collaboration", "Problem Solving", "Communication", "Adaptability", "Self-motivated"]
    }
  ];

  const languages = [
    { name: "English", level: 4, maxLevel: 4 },
    { name: "Swedish", level: 3, maxLevel: 4 }
  ];

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          
          {/* Technical Skills */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl text-center animate-scale-in shadow-2xl bg-gradient-to-br from-[#23243a] via-[#23243a] to-[#1a1b2e] border border-gray-800 w-full max-w-md mx-auto hover:shadow-primary-glow transition-shadow duration-300"
                style={{ animationDelay: `${index * 0.1}s`, minWidth: '220px' }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-8 text-white tracking-wide drop-shadow-md">{category.title}</h3>
                <div className={`grid grid-cols-2 ${index >= 2 ? 'gap-x-2 gap-y-3' : 'gap-x-6 gap-y-5'} justify-items-center`}>
                  <ul className="list-disc list-inside text-left mx-auto w-fit space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-white text-base font-medium leading-6 flex items-center">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Languages */}
          <div className="professional-card p-8 max-w-2xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Languages</h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {languages.map((lang, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{lang.name}</h4>
                  <div className="flex justify-center gap-1">
                    {[...Array(lang.maxLevel)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded-full ${
                          i < lang.level 
                            ? 'bg-primary shadow-glow' 
                            : 'bg-border'
                        }`}
                      />
                    ))}
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

export default Skills;