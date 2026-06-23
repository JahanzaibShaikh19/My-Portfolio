import Image from "next/image";
import { clientLogos } from "@/data/content";

export default function ClientLogos() {
  // Duplicate the array so the seamless marquee loop works
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <div className="px-6 md:px-10 lg:px-16 py-10 border-y border-white/10 overflow-hidden">
      <div className="marquee-track">
        {doubled.map((logo, idx) => (
          <div
            key={idx}
            className="relative w-28 h-12 mx-8 shrink-0 opacity-50 hover:opacity-100 transition-opacity"
          >
            <Image
              src={logo}
              alt={`Client ${(idx % clientLogos.length) + 1}`}
              fill
              className="object-contain"
              sizes="112px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
