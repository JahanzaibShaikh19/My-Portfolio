"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type WorkCarouselProps = { images: string[] };

export default function WorkCarousel({ images }: WorkCarouselProps) {
  return (
    <div className="rounded-xl overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={images.length > 1}
        className="aspect-[16/8] w-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx} className="relative">
            <Image
              src={src}
              alt={`Slide ${idx + 1}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority={idx === 0}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
