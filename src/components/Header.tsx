import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const navItems = [
  { label: "Serviços", id: "services" },
  { label: "Tech Advisors", id: "tech-advisors" },
  { label: "Método", id: "methodology" },
  { label: "Cases", id: "case" },
  { label: "Conteúdos", id: "content" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const atTop = currentY < 80;
      setIsAtTop(atTop);

      if (atTop) {
        // Always visible at top of page
        setVisible(true);
        if (hideTimer.current) clearTimeout(hideTimer.current);
      } else if (currentY < lastScrollY.current) {
        // Scrolling up → show header
        setVisible(true);
        // Reset hide timer
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setVisible(false), 1500);
      } else {
        // Scrolling down → hide
        setVisible(false);
        if (hideTimer.current) clearTimeout(hideTimer.current);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${isAtTop ? "" : "bg-foreground/80 backdrop-blur-md shadow-lg"}`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src="/images/tessa-logo-white.png" alt="Tessa" className="h-12 lg:h-14" />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-white transition-colors font-semibold text-base tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="md:hidden p-2 rounded-md bg-primary/90" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
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
