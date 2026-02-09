import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo Container */}
          <div
            className="flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="flex flex-col items-start">
              <span className="text-xl lg:text-2xl font-bold text-primary tracking-[0.15em]">TESSA</span>
              <span className="text-[7px] lg:text-[8px] text-muted-foreground uppercase w-full flex justify-between">
                <span>T</span><span>E</span><span>A</span><span>M</span><span>S</span><span className="opacity-0">.</span><span>A</span><span>S</span><span className="opacity-0">.</span><span>A</span><span className="opacity-0">.</span><span>S</span><span>E</span><span>R</span><span>V</span><span>I</span><span>C</span><span>E</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-16">
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("methodology")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Metodologia
            </button>
            <button
              onClick={() => scrollToSection("case")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Cases
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Diferenciais
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/30 animate-fade-in bg-background/95 backdrop-blur-md">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("methodology")}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
              >
                Metodologia
              </button>
              <button
                onClick={() => scrollToSection("case")}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
              >
                Cases
              </button>
              <button
                onClick={() => scrollToSection("why-choose")}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-left py-2"
              >
                Diferenciais
              </button>
              <Button variant="cta" size="default" onClick={() => scrollToSection("contact")} className="mt-2">
                Falar com Especialista
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
