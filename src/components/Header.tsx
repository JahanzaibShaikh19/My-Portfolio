"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "resume", label: "Resume" },
  { id: "portfolio", label: "Portfolio" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <header className="fixed top-6 right-6 md:top-8 md:right-10 z-50 flex flex-col items-end gap-4">
      <div className="flex items-center gap-4">
        {/* Theme Toggle */}
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="w-11 h-11 rounded-full bg-white flex items-center justify-center relative z-50 shrink-0 hover:scale-105 transition-transform"
        >
          {theme === "dark" ? (
            <svg xmlns="http://www.3000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
          ) : (
            <svg xmlns="http://www.3000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
          )}
        </button>
      {/* Hamburger */}
      <button
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen((v) => !v)}
        className="w-11 h-11 rounded-full bg-white flex items-center justify-center relative z-50 shrink-0 hover:scale-105 transition-transform"
      >
        <span className="relative block w-5 h-[10px]">
          <span
            className={`absolute left-0 right-0 top-0 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`absolute left-0 right-0 bottom-0 h-[2px] bg-black transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </span>
      </button>
      </div>

      {/* Nav links */}
      <nav
        className={`fixed inset-0 bg-background z-40 flex flex-col items-center justify-center transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 md:gap-10">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`text-4xl md:text-6xl font-bold transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-accent line-through"
                    : "text-text-primary hover:text-accent"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
