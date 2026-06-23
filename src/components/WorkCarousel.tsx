"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type WorkCarouselProps = { images: string[] };

export default function WorkCarousel({ images }: WorkCarouselProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/35">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={images.length > 1}
        className="aspect-[16/9] w-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="relative bg-black/40">
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority={idx === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
