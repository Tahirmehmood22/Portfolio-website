import React, { useState } from "react";
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

const Sidebar = ({ isOpen: controlledOpen, setIsOpen: setControlledOpen }) => {
  // Use controlled state from App if provided, else fallback to internal state
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const setIsOpen = setControlledOpen !== undefined ? setControlledOpen : setInternalOpen;
  const navigate = useNavigate();
  const handleNavClick = (href: string) => {
    setIsOpen(false); // Close drawer on mobile after navigation
    navigate(href);
  };

  return (
    <>
      {/* Overlay for mobile drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
          style={{ pointerEvents: 'auto' }}
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 bg-gradient-to-b from-[#232526] to-[#414345] shadow-xl flex flex-col items-center justify-center px-2
        w-20 md:w-20
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:static`}
        style={{ minWidth: '5rem', width: '5rem', paddingTop: 0 }}
      >
        {/* Toggle button always visible on mobile, hidden on desktop */}
        <button
          className="mb-8 p-2 rounded-full bg-background text-foreground hover:bg-accent md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Sidebar"
          style={{ position: 'absolute', top: 16, left: 16, zIndex: 60 }}
        >
          <Menu className="h-6 w-6" />
        </button>
        {/* Sidebar nav: visible if open on mobile, always on desktop */}
        {(isOpen || window.innerWidth >= 768) && (
          <nav className="flex flex-col gap-12 items-center justify-center h-full">
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
                  style={{ transition: 'opacity 0.3s, transform 0.3s' }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </nav>
        )}
      </aside>
      {/* Floating menu button for mobile, only visible when sidebar is closed */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-full bg-background text-foreground hover:bg-accent md:hidden shadow-lg"
          onClick={() => setIsOpen(true)}
          aria-label="Open Sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
      )}
    </>
  );
};

export default Sidebar;
