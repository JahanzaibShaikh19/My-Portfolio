import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Layers3,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import { works } from "@/data/content";
import { extraWorks } from "@/data/extraWorks";
import { getPortfolioWork } from "@/data/projectOverrides";
import { withEdrisLmsOverride } from "@/data/edrisLmsOverride";
import { siteConfig } from "@/config/site";
import WorkCarousel from "@/components/WorkCarousel";
import WorkThinkingLayer from "@/components/WorkThinkingLayer";
import ProjectImage from "@/components/ProjectImage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = { params: { slug: string } };

const portfolioItems = [...extraWorks, ...works];

function resolveWork(work: (typeof portfolioItems)[number]) {
  return withEdrisLmsOverride(getPortfolioWork(work));
}

export function generateStaticParams() {
  return portfolioItems.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props) {
  const baseWork = portfolioItems.find((w) => w.slug === params.slug);
  const work = baseWork ? resolveWork(baseWork) : null;

  if (!work) {
    return {
      title: "Project",
    };
  }

  const path = `/work/${work.slug}`;

  return {
    title: `${work.title} — Project Case Study`,
    description: work.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${work.title} — Jahanzaib Shaikh`,
      description: work.description,
      url: `${siteConfig.url}${path}`,
      type: "article",
      images: [
        {
          url: work.cover,
          width: 1200,
          height: 675,
          alt: work.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${work.title} — Jahanzaib Shaikh`,
      description: work.description,
      images: [work.cover],
    },
  };
}

export default function WorkPage({ params }: Props) {
  const index = portfolioItems.findIndex((w) => w.slug === params.slug);
  if (index === -1) notFound();

  const work = resolveWork(portfolioItems[index]);
  const prevWork = portfolioItems[index - 1] ?? null;
  const nextWork = portfolioItems[index + 1] ?? null;

  return (
    <main className="relative z-10">
      <Header />

      <div className="work-detail-shell mx-auto max-w-[1240px] px-6 pb-16 pt-32 md:px-10 lg:px-16">
        <section className="work-hero-card">
          <div className="work-hero-light" aria-hidden="true" />
          <div className="work-hero-grid" aria-hidden="true" />

          <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:items-end">
            <div>
              <Link href="/#portfolio" className="work-back-link">
                <ArrowLeft className="h-4 w-4" />
                Back to portfolio
              </Link>

              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="work-chip work-chip-accent">
                  <Sparkles className="h-3.5 w-3.5" />
                  {work.categoryLabel}
                </span>
                <span className="work-chip">
                  <CalendarDays className="h-3.5 w-3.5" />
                  {work.date}
                </span>
              </div>

              <h1 className="work-detail-title">{work.title}</h1>
              <p className="work-detail-lede">{work.description}</p>
            </div>

            <aside className="work-facts-card">
              <span className="work-facts-kicker">Project snapshot</span>
              <h2>{work.client}</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {work.tags.slice(0, 5).map((tag) => (
                  <span key={tag} className="work-stack-pill">
                    {tag}
                  </span>
                ))}
              </div>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-live-link"
                >
                  View live project
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </aside>
          </div>
        </section>

        <section className="work-media-frame">
          <div className="work-media-header">
            <span className="work-window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            <span className="work-window-label">Product preview</span>
          </div>
          <WorkCarousel images={work.images} />
        </section>

        <section className="work-story-grid">
          <article className="work-story-card">
            <span className="work-facts-kicker">Case study</span>
            <h2>What was built</h2>
            <p>{work.details}</p>
          </article>

          <aside className="work-stack-card">
            <div className="work-stack-icon">
              <Layers3 className="h-5 w-5" />
            </div>
            <span className="work-facts-kicker">Delivery stack</span>
            <div className="work-stack-list">
              {work.tags.map((tag) => (
                <span key={tag} className="work-stack-row">
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <WorkThinkingLayer work={work} />

        {work.images.length > 1 && (
          <section className="work-gallery-grid">
            {work.images.slice(1).map((img, idx) => (
              <div key={idx} className="work-gallery-card">
                <ProjectImage
                  src={img}
                  alt={`${work.title} gallery ${idx + 2}`}
                  className="object-contain p-3"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </section>
        )}

        <nav className="work-case-nav" aria-label="Case study navigation">
          {prevWork ? (
            <Link href={`/work/${prevWork.slug}`} className="work-nav-link work-nav-prev">
              <ArrowLeft className="h-5 w-5" />
              <span>
                <small>Previous</small>
                {prevWork.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link href="/#portfolio" className="work-nav-grid" aria-label="Back to portfolio grid">
            <LayoutGrid className="h-5 w-5" />
          </Link>

          {nextWork ? (
            <Link href={`/work/${nextWork.slug}`} className="work-nav-link work-nav-next">
              <span>
                <small>Next</small>
                {nextWork.title}
              </span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          ) : (
            <div />
          )}
        </nav>
      </div>

      <Footer />
    </main>
  );
}
