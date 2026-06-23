"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { personal } from "@/data/content";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHiding(true), 1800);
    const t2 = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center
                  transition-opacity duration-500 ${hiding ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative w-24 h-24">
        {/* Profile image */}
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src={personal.loaderImage}
            alt="Loading"
            width={96}
            height={96}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Spinning SVG rings */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="301"
            strokeDashoffset="301"
            style={{
              animation: "drawCircle 1.6s ease forwards",
            }}
          />
        </svg>
      </div>

      <style>{`
        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}
