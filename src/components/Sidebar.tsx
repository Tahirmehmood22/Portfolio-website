import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Home, User, Briefcase, Award, Folder, Mail, Menu } from "lucide-react";

const sidebarItems = [
  { href: "/", icon: <Home />, label: "Home" },
  { href: "/about", icon: <User />, label: "About" },
  { href: "/experience", icon: <Briefcase />, label: "Experience" },
  { href: "/skills", icon: <Award />, label: "Skills" },
  { href: "/projects", icon: <Folder />, label: "Projects" },
  { href: "/contact", icon: <Mail />, label: "Contact" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const navigate = useNavigate();
  const handleNavClick = (href: string) => {
    navigate(href);
  };

  return (
    <aside className={`fixed top-0 left-0 h-full z-50 transition-all duration-300 bg-gradient-to-b from-[#232526] to-[#414345] shadow-xl flex flex-col items-center py-8 px-2 ${isOpen ? "w-20" : "w-0"}`}>
      <button
        className="mb-8 p-2 rounded-full bg-background text-foreground hover:bg-accent"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Sidebar"
      >
        <Menu className="h-6 w-6" />
      </button>
      {isOpen && (
  <nav className="flex flex-col gap-12 items-center">
          {sidebarItems.map((item) => (
            <div key={item.href} className="group relative flex flex-col items-center w-full">
              <button
                onClick={() => handleNavClick(item.href)}
                className="flex flex-col items-center text-foreground hover:text-primary transition-colors"
                aria-label={item.label}
              >
                {item.icon}
              </button>
              <span
                className="absolute left-1/2 top-full mt-2 -translate-x-1/2 bg-background text-foreground text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 pointer-events-none transition-all duration-300 whitespace-nowrap z-20"
                style={{transition: 'opacity 0.3s, transform 0.3s'}}
              >
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      )}
    </aside>
  );
};

export default Sidebar;
