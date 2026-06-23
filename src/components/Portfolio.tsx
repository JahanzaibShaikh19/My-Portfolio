"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { works } from "@/data/content";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";

type FilterKey = "all";

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: "all", label: "My Work" },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredWorks =
    activeFilter === "all"
      ? works
      : works.filter((w) => w.category === activeFilter);

  return (
    <section id="portfolio" className="px-6 md:px-10 lg:px-16 py-16">
      <RevealOnScroll variant="scale">
        <SectionTitle>Portfolio</SectionTitle>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeFilter === filter.key
                  ? "text-accent"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredWorks.map((work) => (
            <motion.div
              key={work.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
            >
              <article className="h-full">
                <Link
                  href={`/work/${work.slug}`}
                  className="portfolio-item aspect-[4/3] block h-full rounded-xl overflow-hidden bg-surface relative"
                >
                <Image
                  src={work.gridCover ?? work.cover}
                  alt={work.title}
                  fill
                  className="object-cover transition-opacity duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM4ODgiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+"
                />
                <div className="figcap">
                  <div className="inner">
                    <span className="text-xs uppercase tracking-widest text-accent block mb-1">
                      {work.categoryLabel}
                    </span>
                    <h3 className="!text-xl !leading-tight !m-0">
                      {work.title}
                    </h3>
                  </div>
                </div>
                </Link>
              </article>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
