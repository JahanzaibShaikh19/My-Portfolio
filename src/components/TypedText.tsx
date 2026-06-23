"use client";

import { useEffect, useState } from "react";

type TypedTextProps = {
  strings: string[];
  typeSpeed?: number;
  backDelay?: number;
  deleteSpeed?: number;
  className?: string;
};

/**
 * Lightweight replacement for Typed.js — types out each string in
 * `strings`, pauses, deletes it, then moves to the next, looping
 * forever. Used for the "I am a developer / designer / ..." rotator.
 */
export default function TypedText({
  strings,
  typeSpeed = 60,
  backDelay = 1500,
  deleteSpeed = 30,
  className = "",
}: TypedTextProps) {
  const [stringIndex, setStringIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">(
    "typing"
  );

  useEffect(() => {
    const current = strings[stringIndex] ?? "";

    if (phase === "typing") {
      if (text.length < current.length) {
        const t = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typeSpeed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("pausing"), backDelay);
        return () => clearTimeout(t);
      }
    }

    if (phase === "pausing") {
      const t = setTimeout(() => setPhase("deleting"), 0);
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (text.length > 0) {
        const t = setTimeout(() => {
          setText(text.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(t);
      } else {
        setStringIndex((i) => (i + 1) % strings.length);
        setPhase("typing");
      }
    }
  }, [text, phase, stringIndex, strings, typeSpeed, backDelay, deleteSpeed]);

  return (
    <span className={`typed-element ${className}`}>
      {text}
      <span className="typed-cursor">|</span>
    </span>
  );
}
