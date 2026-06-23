"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProjectImage from "./ProjectImage";

import "swiper/css";
import "swiper/css/pagination";

type WorkCarouselProps = { images: string[] };

export default function WorkCarousel({ images }: WorkCarouselProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/35">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        loop={images.length > 1}
        className="aspect-[16/9] w-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="relative bg-black/40">
            <ProjectImage
              src={src}
              alt={`Project screenshot ${idx + 1}`}
              className="object-contain p-3"
              sizes="100vw"
              priority={idx === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
