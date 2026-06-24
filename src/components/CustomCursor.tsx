"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "[role='button']",
  ".interactive-card",
  ".portfolio-item",
  ".filter-pill",
  "input",
  "textarea",
  "select",
].join(",");

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) return;

    const root = document.documentElement;
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let lastX = targetX;
    let lastY = targetY;
    let frame = 0;

    root.classList.add("custom-cursor-active");

    const setCursorVisible = () => root.setAttribute("data-cursor-visible", "true");
    const setCursorHidden = () => root.setAttribute("data-cursor-visible", "false");

    const animate = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;

      currentX += dx * 0.18;
      currentY += dy * 0.18;

      const velocityX = currentX - lastX;
      const velocityY = currentY - lastY;
      const speed = Math.min(Math.hypot(velocityX, velocityY) / 38, 0.38);
      const angle = Math.atan2(velocityY, velocityX || 0.001);

      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${1 + speed}, ${1 - speed * 0.22})`;

      lastX = currentX;
      lastY = currentY;
      frame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setCursorVisible();
    };

    const handlePointerDown = () => root.setAttribute("data-cursor-pressed", "true");
    const handlePointerUp = () => root.setAttribute("data-cursor-pressed", "false");

    const updateHoverState = (event: Event) => {
      const target = event.target as HTMLElement | null;
      const isInteractive = Boolean(target?.closest(INTERACTIVE_SELECTOR));
      root.setAttribute("data-cursor-hover", isInteractive ? "true" : "false");
    };

    const clearHoverState = () => root.setAttribute("data-cursor-hover", "false");

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointerleave", setCursorHidden, { passive: true });
    document.addEventListener("pointerover", updateHoverState, { passive: true });
    document.addEventListener("pointerout", clearHoverState, { passive: true });

    frame = window.requestAnimationFrame(animate);

    return () => {
      root.classList.remove("custom-cursor-active");
      root.removeAttribute("data-cursor-hover");
      root.removeAttribute("data-cursor-visible");
      root.removeAttribute("data-cursor-pressed");
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointerleave", setCursorHidden);
      document.removeEventListener("pointerover", updateHoverState);
      document.removeEventListener("pointerout", clearHoverState);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
