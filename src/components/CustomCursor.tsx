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

function shouldDisableCursor() {
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;

  return Boolean(
    connection?.saveData ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g" ||
      (typeof deviceMemory === "number" && deviceMemory <= 4)
  );
}

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion || shouldDisableCursor()) return;

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
    let lastHoverTarget: EventTarget | null = null;

    root.classList.add("custom-cursor-active");

    const setOpacity = (next: boolean) => {
      if (visible === next) return;
      visible = next;
      dot.style.opacity = next ? "1" : "0";
      ring.style.opacity = next ? "1" : "0";
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.5;
      currentY += (targetY - currentY) * 0.5;

      const scale = pressed ? 0.82 : hovering ? 1.58 : 1;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${scale})`;

      const distance = Math.abs(targetX - currentX) + Math.abs(targetY - currentY);
      if (distance > 0.14 || pressed || hovering) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const startLoop = () => {
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const updateHoverState = (eventTarget: EventTarget | null) => {
      if (lastHoverTarget === eventTarget) return;
      lastHoverTarget = eventTarget;
      const target = eventTarget as HTMLElement | null;
      hovering = Boolean(target?.closest(INTERACTIVE_SELECTOR));
    };

    const handlePointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      updateHoverState(event.target);
      setOpacity(true);
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
      lastHoverTarget = null;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave, { passive: true });

    return () => {
      root.classList.remove("custom-cursor-active");
      if (frame) window.cancelAnimationFrame(frame);
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
