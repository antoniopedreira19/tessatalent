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

const FlagBR = ({ className = "w-5 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 640 480" className={className}>
    <rect width="640" height="480" fill="#009b3a" />
    <polygon points="320,39 609,240 320,441 31,240" fill="#fedf00" />
    <circle cx="320" cy="240" r="95" fill="#002776" />
    <path d="M195,240 Q320,170 445,240 Q320,200 195,240Z" fill="#fff" />
  </svg>
);

const FlagUS = ({ className = "w-5 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 640 480" className={className}>
    <rect width="640" height="480" fill="#bd3d44" />
    <rect y="37" width="640" height="37" fill="#fff" />
    <rect y="111" width="640" height="37" fill="#fff" />
    <rect y="185" width="640" height="37" fill="#fff" />
    <rect y="259" width="640" height="37" fill="#fff" />
    <rect y="333" width="640" height="37" fill="#fff" />
    <rect y="407" width="640" height="37" fill="#fff" />
    <rect width="260" height="259" fill="#192f5d" />
  </svg>
);

const FlagES = ({ className = "w-5 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 640 480" className={className}>
    <rect width="640" height="480" fill="#c60b1e" />
    <rect y="120" width="640" height="240" fill="#ffc400" />
  </svg>
);

const flagComponents: Record<Language, React.FC<{ className?: string }>> = {
  "pt-BR": FlagBR,
  en: FlagUS,
  es: FlagES,
};

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
      setIsAtTop(currentY < 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const currentLang = languages.find((l) => l.code === language);
  const CurrentFlag = flagComponents[language];

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
            <img src="/images/tessa-logo-white.png" alt="Tessa" className="h-16 lg:h-20 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]" />
          </div>

          <nav className="hidden md:flex items-center gap-14 lg:gap-20">
            {navKeys.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-white transition-colors font-semibold text-sm lg:text-[15px] tracking-[0.08em] uppercase drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]"
              >
                {t(item.key)}
              </button>
            ))}

            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 text-white/90 hover:text-white transition-colors font-semibold text-sm tracking-wide outline-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]">
                <CurrentFlag className="w-5 h-3.5 rounded-[2px] overflow-hidden shadow-sm" />
                {currentLang?.label}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[110px]">
                {languages.map((lang) => {
                  const Flag = flagComponents[lang.code];
                  return (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setLanguage(lang.code)}
                      className={`gap-2 ${lang.code === language ? "font-bold" : ""}`}
                    >
                      <Flag className="w-5 h-3.5 rounded-[2px] overflow-hidden" />
                      {lang.label}
                    </DropdownMenuItem>
                  );
                })}
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
                {languages.map((lang) => {
                  const Flag = flagComponents[lang.code];
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
                        lang.code === language
                          ? "bg-primary text-primary-foreground"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      <Flag className="w-5 h-3.5 rounded-[2px] overflow-hidden" />
                      {lang.label}
                    </button>
                  );
                })}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
