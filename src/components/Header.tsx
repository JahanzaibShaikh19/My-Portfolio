"use client";

import { useEffect, useRef, useState } from "react";
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
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    let currentSection = "home";
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && currentSection !== entry.target.id) {
            currentSection = entry.target.id;
            setActiveSection(entry.target.id);
          }
        }
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

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const value = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${value})`);
    };

    const requestProgress = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress, { passive: true });
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
    };
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuOpen(false);
      return;
    }

    setActiveSection(id);
    setMenuOpen(false);
    window.location.assign(`/#${id}`);
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
          ref={progressRef}
          className="h-full origin-left scale-x-0 bg-accent shadow-[0_0_18px_var(--accent)] will-change-transform"
        />
      </div>

      <header className="fixed top-5 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-[1120px] -translate-x-1/2 items-center justify-between rounded-full border border-white/10 bg-black/35 px-3 py-2 shadow-[0_18px_60px_rgba(0,0,0,.28)] backdrop-blur-2xl md:top-6 md:px-4">
        <a
          href="/#home"
          onClick={(e) => handleNavClick(e, "home")}
          className="group flex items-center gap-3 rounded-full px-3 py-2 transition-transform hover:scale-[1.02]"
          aria-label="Go to home"
        >
          <span className="relative h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_18px_rgba(230,255,0,.5)]" />
          <span className="text-sm font-semibold tracking-tight text-text-primary">
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
                href={`/#${item.id}`}
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
                href={`/#${item.id}`}
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
