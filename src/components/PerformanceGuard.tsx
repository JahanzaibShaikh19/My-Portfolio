"use client";

import { useEffect } from "react";

function shouldUseLiteMode() {
  const connection = (navigator as Navigator & {
    connection?: { saveData?: boolean; effectiveType?: string };
  }).connection;
  const deviceMemory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;

  return Boolean(
    connection?.saveData ||
      connection?.effectiveType === "2g" ||
      connection?.effectiveType === "slow-2g" ||
      (typeof deviceMemory === "number" && deviceMemory <= 4) ||
      window.innerWidth < 520
  );
}

export default function PerformanceGuard() {
  useEffect(() => {
    const root = document.documentElement;
    const liteMode = shouldUseLiteMode();

    if (liteMode) {
      root.classList.add("perf-lite");
    }

    let scrollTimer = 0;
    const handleScroll = () => {
      root.classList.add("is-scrolling");
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        root.classList.remove("is-scrolling");
      }, 140);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      root.classList.remove("is-scrolling");
      root.classList.remove("perf-lite");
      window.clearTimeout(scrollTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
