"use client";

import { useReveal } from "@/lib/useReveal";

type PieChartProps = {
  percent: number;
  label: string;
  size?: number;
};

export default function PieChart({ percent, label, size = 120 }: PieChartProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  const strokeWidth = 8;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = isVisible
    ? circumference - (percent / 100) * circumference
    : circumference;

  return (
    <div ref={ref} className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--accent)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="square"
            style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(0.22,1,0.36,1)" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-lg font-medium">
          {percent}
        </div>
      </div>
      <h6 className="text-sm font-medium">{label}</h6>
    </div>
  );
}
