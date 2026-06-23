"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Home,
  Layers3,
  Menu,
  MessageCircle,
  Moon,
  PenLine,
  Sparkles,
  Sun,
  X,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: Sparkles },
  { id: "resume", label: "Resume", icon: BriefcaseBusiness },
  { id: "portfolio", label: "Portfolio", icon: Layers3 },
  { id: "blog", label: "Blog", icon: PenLine },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-38% 0px -58% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

    const updateProgress = () => {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveSection(id);
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-white/5">
        <div
          className="h-full bg-accent shadow-[0_0_18px_var(--accent)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header className="fixed top-5 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-[1120px] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/35 px-3 py-2 shadow-[0_18px_60px_rgba(0,0,0,.28)] backdrop-blur-2xl md:top-6 md:px-4">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="flex items-center gap-3 rounded-full px-2 py-1 transition-transform hover:scale-[1.02]"
          aria-label="Go to home"
        >
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-accent text-sm font-bold text-black shadow-[0_0_28px_rgba(230,255,0,.34)]">
            JS
            <span className="absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full border-2 border-black bg-emerald-400" />
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-text-primary sm:block">
            Jahanzaib
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`group flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-accent text-black shadow-[0_0_24px_rgba(230,255,0,.22)]"
                    : "text-text-secondary hover:bg-white/10 hover:text-text-primary"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="interactive-control"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="interactive-control lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <nav
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/75 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col items-center gap-5">
          {NAV_ITEMS.map((item, index) => (
            <li
              key={item.id}
              className="transition-all duration-500"
              style={{
                transform: menuOpen ? "translateY(0)" : "translateY(18px)",
                opacity: menuOpen ? 1 : 0,
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-4xl font-bold tracking-tight transition-colors duration-200 md:text-6xl ${
                  activeSection === item.id
                    ? "text-accent"
                    : "text-text-primary hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
