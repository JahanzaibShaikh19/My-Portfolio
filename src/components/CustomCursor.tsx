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
    let frame = 0;
    let visible = false;
    let hovering = false;
    let pressed = false;

    root.classList.add("custom-cursor-active");

    const setOpacity = (next: boolean) => {
      if (visible === next) return;
      visible = next;
      dot.style.opacity = next ? "1" : "0";
      ring.style.opacity = next ? "1" : "0";
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.58;
      currentY += (targetY - currentY) * 0.58;

      const scale = pressed ? 0.82 : hovering ? 1.65 : 1;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${scale})`;

      const distance = Math.abs(targetX - currentX) + Math.abs(targetY - currentY);
      if (distance > 0.12 || pressed || hovering) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const startLoop = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      setOpacity(true);
      startLoop();
    };

    const handlePointerOver = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      hovering = Boolean(target?.closest(INTERACTIVE_SELECTOR));
      startLoop();
    };

    const handlePointerOut = (event: PointerEvent) => {
      const target = event.relatedTarget as HTMLElement | null;
      hovering = Boolean(target?.closest(INTERACTIVE_SELECTOR));
      startLoop();
    };

    const handlePointerDown = () => {
      pressed = true;
      startLoop();
    };

    const handlePointerUp = () => {
      pressed = false;
      startLoop();
    };

    const handlePointerLeave = () => {
      setOpacity(false);
      hovering = false;
      pressed = false;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    window.addEventListener("pointerout", handlePointerOut, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      root.classList.remove("custom-cursor-active");
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      window.removeEventListener("pointerout", handlePointerOut);
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
