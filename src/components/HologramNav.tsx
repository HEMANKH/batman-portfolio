import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Award, Code2, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/projects", icon: Briefcase, label: "Projects" },
  { path: "/certificates", icon: Award, label: "Certificates" },
  { path: "/skills", icon: Code2, label: "Skills" },
  { path: "/contact", icon: Mail, label: "Contact" },
];

export const HologramNav = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-4 md:gap-6 glass-card hologram-border px-6 py-4 rounded-2xl animate-fade-in">
      {navItems.map((item, index) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className="group relative"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={cn(
                "relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300",
                "hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--hologram-cyan)/0.6)]",
                "animate-hologram",
                isActive && "shadow-[0_0_30px_hsl(var(--hologram-cyan)/0.6)] scale-110 bg-primary/10"
              )}
            >
              <Icon
                className={cn(
                  "w-5 h-5 transition-all duration-300",
                  isActive ? "hologram-text" : "text-secondary",
                  "group-hover:hologram-text group-hover:animate-glow"
                )}
              />
              
              {/* Hologram effect overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            
            {/* Label tooltip */}
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              <div className="glass-card px-4 py-2 rounded-lg whitespace-nowrap hologram-border">
                <span className="text-sm font-['Orbitron'] font-semibold hologram-text">
                  {item.label}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </nav>
  );
};
