"use client";

import { useEffect, useMemo, useState } from "react";

type TypedTextProps = {
  strings: string[];
  typeSpeed?: number;
  backDelay?: number;
  deleteSpeed?: number;
  className?: string;
};

export default function TypedText({
  strings,
  backDelay = 1800,
  className = "",
}: TypedTextProps) {
  const [stringIndex, setStringIndex] = useState(0);

  const minWidth = useMemo(() => {
    const longest = strings.reduce((max, item) => Math.max(max, item.length), 0);
    return `${Math.max(longest, 10)}ch`;
  }, [strings]);

  useEffect(() => {
    if (strings.length <= 1) return;
    const timer = setInterval(() => {
      setStringIndex((index) => (index + 1) % strings.length);
    }, backDelay);
    return () => clearInterval(timer);
  }, [strings, backDelay]);

  return (
    <span
      className={`typed-element ${className}`}
      style={{ display: "inline-block", minWidth }}
      aria-live="polite"
    >
      {strings[stringIndex] ?? ""}
      <span className="typed-cursor">|</span>
    </span>
  );
}
