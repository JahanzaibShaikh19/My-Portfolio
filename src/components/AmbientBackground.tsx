"use client";

import { useEffect } from "react";

const PARTICLES = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: `${(index % 9) * 0.42}s`,
  duration: `${7 + (index % 6)}s`,
}));

export default function AmbientBackground() {
  useEffect(() => {
    const root = document.documentElement;

    const handlePointerMove = (event: PointerEvent) => {
      root.style.setProperty("--spotlight-x", `${event.clientX}px`);
      root.style.setProperty("--spotlight-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />
      <div className="cyber-grid" />
      <div className="depth-rings" />
      <div className="particle-field">
        {PARTICLES.map((particle) => (
          <span
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
      <div className="spotlight-layer" />
      <div className="noise-layer" />
    </div>
  );
}
