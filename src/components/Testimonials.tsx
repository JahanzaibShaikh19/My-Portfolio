"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-16">
      <RevealOnScroll variant="scale">
        <SectionTitle>What People Are Saying</SectionTitle>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          className="pb-12"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex gap-5 h-full">
                <div className="text-accent shrink-0">
                  <Quote className="w-7 h-7" />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-sm leading-relaxed">{item.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-xs text-white/50">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </RevealOnScroll>
    </section>
  );
}
