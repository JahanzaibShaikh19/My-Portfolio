"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { works, type WorkItem } from "@/data/content";
import { extraWorks } from "@/data/extraWorks";
import { getPortfolioWorks } from "@/data/projectOverrides";
import { withEdrisLmsOverride } from "@/data/edrisLmsOverride";
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

const portfolioWorks = getPortfolioWorks([...extraWorks, ...works]).map(withEdrisLmsOverride);

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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
      >
        <AnimatePresence mode="popLayout">
          {filteredWorks.map((work) => (
            <motion.div
              key={work.slug}
              layout
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className="h-full">
                <Link
                  href={`/work/${work.slug}`}
                  className="portfolio-item portfolio-glass-card group block h-full overflow-hidden rounded-[28px] relative"
                >
                  <div className="portfolio-card-light" aria-hidden="true" />
                  <div className="portfolio-card-grid" aria-hidden="true" />

                  <div className="portfolio-shot-wrap">
                    <ProjectImage
                      src={work.gridCover ?? work.cover}
                      alt={work.title}
                      className="portfolio-shot object-contain p-3 md:p-4"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM4ODgiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+"
                    />
                    <span className="portfolio-shot-vignette" aria-hidden="true" />
                  </div>

                  <div className="portfolio-card-body">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <span className="portfolio-kicker">{work.categoryLabel}</span>
                        <h3 className="portfolio-card-title">{work.title}</h3>
                      </div>
                      <span className="portfolio-open-icon" aria-hidden="true">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>

                    <p className="portfolio-card-copy">{work.description}</p>

                    <div className="portfolio-tag-row">
                      {work.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="portfolio-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="portfolio-hover-cta" aria-hidden="true">
                    <span>Open case study</span>
                    <ArrowUpRight className="h-4 w-4" />
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
