"use client";

const PARTICLES = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: `${(index % 5) * 0.55}s`,
  duration: `${16 + (index % 5) * 2}s`,
}));

export default function AmbientBackground() {
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
