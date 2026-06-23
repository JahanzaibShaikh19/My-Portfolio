"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { personal } from "@/data/content";

export default function Preloader() {
  const [visible, setVisible] = useState(false);
  const [hiding, setHiding] = useState(false);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("portfolio-preloader-seen");
    if (alreadySeen) return;

    sessionStorage.setItem("portfolio-preloader-seen", "true");
    setVisible(true);

    const t1 = setTimeout(() => setHiding(true), 650);
    const t2 = setTimeout(() => setVisible(false), 950);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center
                  transition-opacity duration-300 ${hiding ? "opacity-0" : "opacity-100"}`}
      aria-hidden="true"
    >
      <div className="relative w-20 h-20">
        <div className="w-full h-full rounded-full overflow-hidden">
          <Image
            src={personal.loaderImage}
            alt="Loading"
            width={80}
            height={80}
            className="object-cover w-full h-full"
            priority
          />
        </div>

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
            style={{ animation: "drawCircle 0.75s ease forwards" }}
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
