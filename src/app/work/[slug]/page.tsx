import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { works } from "@/data/content";
import { getPortfolioWork } from "@/data/projectOverrides";
import { siteConfig } from "@/config/site";
import WorkCarousel from "@/components/WorkCarousel";
import ProjectImage from "@/components/ProjectImage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props) {
  const baseWork = works.find((w) => w.slug === params.slug);
  const work = baseWork ? getPortfolioWork(baseWork) : null;

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
  const index = works.findIndex((w) => w.slug === params.slug);
  if (index === -1) notFound();

  const work = getPortfolioWork(works[index]);
  const prevWork = works[index - 1] ?? null;
  const nextWork = works[index + 1] ?? null;

  return (
    <main className="relative z-10">
      <Header />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-16">
        <div className="mb-8 section-panel p-5 md:p-7">
          <p className="text-sm text-text-muted mb-2">{work.categoryLabel}</p>
          <h1 className="!text-4xl md:!text-5xl !leading-tight !mb-3">{work.title}</h1>
          <p className="!text-sm md:!text-base !leading-relaxed max-w-3xl">
            {work.description}
          </p>
        </div>

        <WorkCarousel images={work.images} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 mt-10">
          <div className="section-panel p-5 md:p-7">
            <h3 className="!text-2xl mb-4">{work.client}</h3>
            <p className="!text-base !leading-loose">{work.details}</p>
          </div>
          <ul className="flex flex-col gap-3 border border-white/10 rounded-2xl p-6 self-start bg-white/[0.03]">
            {work.tags.map((tag) => (
              <li key={tag} className="text-sm text-white/70">
                {tag}
              </li>
            ))}
            <li className="text-sm text-white/40">{work.date}</li>
            {work.link && (
              <li>
                <a
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  View Live →
                </a>
              </li>
            )}
          </ul>
        </div>

        {work.images.length > 1 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {work.images.slice(1).map((img, idx) => (
              <div key={idx} className="relative aspect-[16/9] rounded-xl overflow-hidden bg-black/30 border border-white/10">
                <ProjectImage
                  src={img}
                  alt={`${work.title} gallery ${idx + 2}`}
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-16 pt-8 border-t border-white/10">
          {prevWork ? (
            <Link
              href={`/work/${prevWork.slug}`}
              className="flex items-center gap-3 group"
            >
              <ArrowLeft className="w-5 h-5 text-accent group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                Prev Case
              </span>
            </Link>
          ) : (
            <div />
          )}

          <Link href="/#portfolio" className="text-white/50 hover:text-white transition-colors">
            <LayoutGrid className="w-5 h-5" />
          </Link>

          {nextWork ? (
            <Link
              href={`/work/${nextWork.slug}`}
              className="flex items-center gap-3 group"
            >
              <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                Next Case
              </span>
              <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
