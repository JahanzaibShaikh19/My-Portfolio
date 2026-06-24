"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("portfolio-preloader-seen");
    if (alreadySeen) return;

    sessionStorage.setItem("portfolio-preloader-seen", "true");
    setVisible(true);

    const t1 = window.setTimeout(() => setHiding(true), 420);
    const t2 = window.setTimeout(() => setVisible(false), 620);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center
                  transition-opacity duration-200 ${hiding ? "opacity-0" : "opacity-100"}`}
      aria-hidden="true"
    >
      <div className="relative grid h-20 w-20 place-items-center rounded-full border border-white/10 bg-white/[0.04] shadow-[0_18px_60px_rgba(0,0,0,.45)]">
        <span className="text-lg font-black tracking-[-0.16em] text-accent">JS</span>
        <span className="absolute inset-0 rounded-full border border-accent/35 animate-[preloaderSpin_.62s_linear_infinite] border-t-accent" />
      </div>

      <style>{`
        @keyframes preloaderSpin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
