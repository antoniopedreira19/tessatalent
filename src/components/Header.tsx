import { Menu, X } from "lucide-react";
import { useState } from "react";
import tessaLogo from "@/assets/tessa-logo-white.png";

const navItems = [
  { label: "Serviços", id: "services" },
  { label: "Tech Advisors", id: "tech-advisors" },
  { label: "Método", id: "methodology" },
  { label: "Cases", id: "case" },
  { label: "Conteúdos", id: "content" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={tessaLogo} alt="Tessa" className="h-8 lg:h-10" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-fade-in bg-foreground/80 backdrop-blur-md rounded-b-lg">
            <nav className="flex flex-col gap-4 px-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-white transition-colors font-medium text-left py-2"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
