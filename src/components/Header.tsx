import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Language } from "@/lib/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navKeys = [
  { key: "nav.services", id: "services" },
  { key: "nav.techAdvisors", id: "tech-advisors" },
  { key: "nav.method", id: "methodology" },
  { key: "nav.cases", id: "case" },
];

const languages: { code: Language; label: string }[] = [
  { code: "pt-BR", label: "PT" },
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const atTop = currentY < 80;
      setIsAtTop(atTop);

      if (atTop) {
        setVisible(true);
        if (hideTimer.current) clearTimeout(hideTimer.current);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
        if (hideTimer.current) clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => setVisible(false), 1500);
      } else {
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

  const currentLangLabel = languages.find((l) => l.code === language)?.label ?? "PT";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${isAtTop ? "" : "bg-foreground/80 backdrop-blur-md shadow-lg"}`}
    >
      <div className="w-full px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <div
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src="/images/tessa-logo-white.png" alt="Tessa" className="h-12 lg:h-14 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]" />
          </div>

          <nav className="hidden md:flex items-center gap-10 lg:gap-14">
            {navKeys.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-white transition-colors font-semibold text-[13px] lg:text-sm tracking-[0.08em] uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
              >
                {t(item.key)}
              </button>
            ))}

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white/90 hover:text-white transition-colors font-semibold text-sm tracking-wide outline-none">
                {currentLangLabel}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[80px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={lang.code === language ? "font-bold" : ""}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <button className="md:hidden p-2 rounded-md bg-primary/90" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20 animate-fade-in bg-foreground/80 backdrop-blur-md rounded-b-lg">
            <nav className="flex flex-col gap-4 px-2">
              {navKeys.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-white transition-colors font-medium text-left py-2"
                >
                  {t(item.key)}
                </button>
              ))}
              {/* Mobile language selector */}
              <div className="flex gap-3 pt-2 border-t border-white/20">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                      lang.code === language
                        ? "bg-primary text-primary-foreground"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
