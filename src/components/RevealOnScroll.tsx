"use client";

import { ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

type RevealVariant = "up" | "left" | "scale";

type RevealOnScrollProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
};

const VARIANT_CLASS: Record<RevealVariant, string> = {
  up: "reveal",
  left: "reveal-left",
  scale: "reveal-scale",
};

export default function RevealOnScroll({
  children,
  variant = "up",
  delay = 0,
  className = "",
}: RevealOnScrollProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${VARIANT_CLASS[variant]} ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
