import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: `My personal portfolio website showcasing my skills, projects, and contact information. Built with React, TypeScript, Vite, and Tailwind CSS for a modern, responsive experience.\n\nKey Features:\n- Sidebar navigation\n- Multi-page routing\n- Downloadable CV\n- Professional UI/UX\n- Deployed on Netlify`,
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn-ui"],
      category: "Portfolio",
      featured: true,
      github: "https://github.com/Tahirmehmood22/Portfolio-website",
      live: "https://portfolio-website-a46f68.netlify.app/",
  screenshot: "/portfolio-website.png"
    },
    {
      title: "Fullstack Project",
      description: `A fullstack web application featuring both frontend and backend functionality. Built with modern technologies for a seamless user experience.\n\nKey Features:\n- RESTful API integration\n- User authentication\n- Responsive design\n- Deployed on Netlify`,
      technologies: ["React", "Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
      category: "Fullstack",
      featured: true,
      github: "https://github.com/Tahirmehmood22/Backend-Project",
      live: "https://backend-project-66.netlify.app/",
      screenshot: "/fullstack.png"
    },
    {
      title: "Quiz Game",
      description: `A fun and interactive quiz game built with HTML, CSS, and JavaScript. Test your knowledge with multiple-choice questions and get instant feedback.\n\nKey Features:\n- Multiple-choice questions\n- Score tracking\n- Responsive design\n- User-friendly interface`,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Game",
      featured: true,
      github: "https://github.com/Tahirmehmood22/Project-1-Quize",
      live: "https://quize-game-f1aeee.netlify.app/",
      screenshot: "/quiz game.png"
    },
    {
      title: "Calculator App",
      description: `A simple and responsive calculator app built with HTML, CSS, and JavaScript. Perform basic arithmetic operations with a clean and intuitive interface.\n\nKey Features:\n- Responsive design\n- User-friendly interface\n- Fast and accurate calculations`,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Utility",
      featured: true,
      github: "https://github.com/Tahirmehmood22/Calculator",
      live: "https://tahirmehmood22.github.io/Calculator/",
      screenshot: "/Calculator screenshot.png"
    },
    {
      title: "Tic Tac Toe Game",
      description: `A classic Tic Tac Toe game built with HTML, CSS, and JavaScript. Play against a friend in a simple, interactive browser-based experience.\n\nKey Features:\n- Two-player mode\n- Responsive design\n- Simple and intuitive UI`,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "Game",
      featured: true,
      github: "https://github.com/Tahirmehmood22/Tic-tac-toe",
      live: "https://tahirmehmood22.github.io/Tic-tac-toe/",
      screenshot: "/Tic tac toe screenshot.png"
    },
    {
      title: "Developer Villa (Web XR Project)",
  description: `An interactive WebXR storytelling project built with A-Frame, HTML, CSS, and JavaScript. The virtual villa represents my developer journey, where users explore rooms and objects that reveal skills I’ve learned.\n\nKey Features:\n- Works on desktop, mobile AR, and VR headsets\n- Interactive elements (clickable doors, trees, popups, ambient sounds)\n- Hosted on Netlify with local 3D assets`,
      technologies: ["WebXR", "Three.js", "React", "TypeScript"],
      category: "Web XR",
      featured: true,
      github: "https://github.com/Tahirmehmood22/Developer-Villa",
      live: "https://developer-villa.netlify.app/",
      screenshot: "/Web XR Project Screenshot.png"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground animate-fade-in">
            Featured <span className="text-primary">Projects</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`professional-card p-6 ${project.featured ? 'lg:col-span-1' : ''} animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                    {project.featured && (
                      <span className="ml-2 bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                {/* Screenshot for this project */}
                {project.screenshot && (
                  <img
                    src={project.screenshot}
                    alt={project.title + " Screenshot"}
                    className="w-full h-64 object-cover rounded-lg mb-6 border border-gray-700 shadow-md"
                  />
                )}
                <h3 className="text-xl font-bold mb-4 text-foreground animated-underline">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-pill">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="btn-outline-professional"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button 
                      size="sm" 
                      className="btn-hero text-sm px-4 py-2"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              More projects are in development. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;