"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "[role='button']",
  ".interactive-card",
  ".portfolio-item",
  ".filter-pill",
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
    let visible = false;
    let hovering = false;
    let frame = 0;

    root.classList.add("custom-cursor-active");

    const setVisible = (next: boolean) => {
      if (visible === next) return;
      visible = next;
      root.setAttribute("data-cursor-visible", next ? "true" : "false");
    };

    const setHovering = (next: boolean) => {
      if (hovering === next) return;
      hovering = next;
      root.setAttribute("data-cursor-hover", next ? "true" : "false");
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.34;
      currentY += (targetY - currentY) * 0.34;

      const velocityX = currentX - lastX;
      const velocityY = currentY - lastY;
      const speed = Math.min(Math.hypot(velocityX, velocityY) / 52, 0.22);
      const angle = Math.atan2(velocityY, velocityX || 0.001);

      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) rotate(${angle}rad) scale(${1 + speed}, ${1 - speed * 0.18})`;

      lastX = currentX;
      lastY = currentY;
      frame = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setVisible(true);

      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest(INTERACTIVE_SELECTOR)));
    };

    const handlePointerDown = () => root.setAttribute("data-cursor-pressed", "true");
    const handlePointerUp = () => root.setAttribute("data-cursor-pressed", "false");
    const handlePointerLeave = () => {
      setVisible(false);
      setHovering(false);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });

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
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
