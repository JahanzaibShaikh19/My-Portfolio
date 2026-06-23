"use client";

import { useReveal } from "@/lib/useReveal";

type SkillBarProps = {
  label: string;
  percent: number;
};

export default function SkillBar({ label, percent }: SkillBarProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="mb-5">
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="!text-base !leading-none !font-medium !m-0">{label}</h3>
        <span className="text-sm text-white/60">{percent}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className={`skill-bar-fill ${isVisible ? "in-view" : ""}`}
          style={{ "--target-width": `${percent}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
}
