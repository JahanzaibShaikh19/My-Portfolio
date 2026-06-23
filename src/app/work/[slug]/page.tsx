import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import { works } from "@/data/content";
import WorkCarousel from "@/components/WorkCarousel";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props) {
  const work = works.find((w) => w.slug === params.slug);
  return {
    title: work ? `${work.title} — Jahanzaib` : "Project",
  };
}

export default function WorkPage({ params }: Props) {
  const index = works.findIndex((w) => w.slug === params.slug);
  if (index === -1) notFound();

  const work = works[index];
  const prevWork = works[index - 1] ?? null;
  const nextWork = works[index + 1] ?? null;

  return (
    <main>
      <Header />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-16">
        {/* Work hero */}
        <div className="mb-8">
          <p className="text-sm text-white/50 mb-1">{work.categoryLabel}</p>
          <h1 className="!text-4xl md:!text-5xl !leading-tight">{work.title}</h1>
        </div>

        {/* Swiper carousel */}
        <WorkCarousel images={work.images} />

        {/* Project info */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10 mt-10">
          <div>
            <h3 className="!text-2xl mb-4">{work.client}</h3>
            <p className="!text-base !leading-loose">{work.details}</p>
          </div>
          <ul className="flex flex-col gap-3 border-l border-white/10 pl-8 self-start">
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

        {/* Extra gallery images */}
        {work.images.length > 1 && (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {work.images.slice(1).map((img, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src={img}
                  alt={`${work.title} gallery ${idx + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}

        {/* Navigation */}
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
