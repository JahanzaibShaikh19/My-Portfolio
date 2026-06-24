"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { works, type WorkItem } from "@/data/content";
import { extraWorks } from "@/data/extraWorks";
import { getPortfolioWorks } from "@/data/projectOverrides";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import ProjectImage from "./ProjectImage";

type FilterKey = "all" | "platform" | "ai" | "mobile";

const FILTERS: { key: FilterKey; label: string; matcher?: (work: WorkItem) => boolean }[] = [
  { key: "all", label: "All Proof" },
  {
    key: "platform",
    label: "Platforms",
    matcher: (work) =>
      /platform|lms|web|property|energy|saas|product/i.test(`${work.categoryLabel} ${work.title} ${work.tags.join(" ")}`),
  },
  {
    key: "ai",
    label: "AI / Automation",
    matcher: (work) =>
      /ai|automation|bot|signal|n8n|data/i.test(`${work.categoryLabel} ${work.title} ${work.tags.join(" ")}`),
  },
  {
    key: "mobile",
    label: "Mobile",
    matcher: (work) =>
      /mobile|react native|app|wellbeing|extension/i.test(`${work.categoryLabel} ${work.title} ${work.tags.join(" ")}`),
  },
];

const portfolioWorks = getPortfolioWorks([...extraWorks, ...works]);

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");

  const filteredWorks = useMemo(() => {
    if (activeFilter === "all") return portfolioWorks;
    const filter = FILTERS.find((item) => item.key === activeFilter);
    return filter?.matcher ? portfolioWorks.filter(filter.matcher) : portfolioWorks;
  }, [activeFilter]);

  return (
    <section id="portfolio" className="px-6 md:px-10 lg:px-16 py-16 scroll-mt-28">
      <RevealOnScroll variant="scale">
        <SectionTitle>Portfolio</SectionTitle>

        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="trust-chip mb-4 justify-center">Decision-ready project proof</span>
          <p className="!text-sm !leading-relaxed !text-text-secondary">
            Each card uses category labels, visual preview, tags, and hover feedback so visitors
            can recognize fit quickly instead of hunting for proof.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              aria-pressed={activeFilter === filter.key}
              className={`filter-pill ${
                activeFilter === filter.key ? "filter-pill-active" : ""
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => (
            <motion.div
              key={work.slug}
              layout
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="h-full">
                <Link
                  href={`/work/${work.slug}`}
                  className="portfolio-item interactive-card aspect-[16/9] block h-full rounded-2xl overflow-hidden bg-surface relative"
                >
                  <ProjectImage
                    src={work.gridCover ?? work.cover}
                    alt={work.title}
                    className="object-contain transition-opacity duration-300 p-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM4ODgiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+"
                  />
                  <div className="figcap">
                    <div className="inner px-5">
                      <span className="text-xs uppercase tracking-widest text-accent block mb-2">
                        {work.categoryLabel}
                      </span>
                      <h3 className="!text-xl !leading-tight !m-0">
                        {work.title}
                      </h3>
                      <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {work.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-[10px] text-white/80">
                            {tag}
                          </span>
                        ))}
                      </div>
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
