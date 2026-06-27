import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectImage from "@/components/ProjectImage";
import { blogPosts } from "@/data/content";
import { blogCoverMap } from "@/data/blogCovers";
import { blogDetails } from "@/data/blogDetails";
import { siteConfig } from "@/config/site";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  const detail = post ? blogDetails[post.slug] : null;

  if (!post || !detail) {
    return { title: "Blog Post", robots: { index: false, follow: false } };
  }

  const path = `/blog/${post.slug}`;
  const image = blogCoverMap[post.slug] ?? post.image;
  const title = `${post.title} — Jahanzaib Shaikh`;

  return {
    title,
    description: detail.excerpt,
    keywords: [...post.categories, "Jahanzaib Shaikh", "full stack engineering", "AI automation", "software development"],
    alternates: { canonical: path },
    openGraph: {
      title,
      description: detail.excerpt,
      url: `${siteConfig.url}${path}`,
      type: "article",
      publishedTime: post.date,
      authors: [siteConfig.author],
      images: [{ url: image, width: 1400, height: 875, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: detail.excerpt,
      images: [image],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  const detail = post ? blogDetails[post.slug] : null;

  if (!post || !detail) notFound();

  const image = blogCoverMap[post.slug] ?? post.image;
  const articleUrl = `${siteConfig.url}/blog/${post.slug}`;
  const pageJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: detail.excerpt,
      image: image.startsWith("http") ? image : `${siteConfig.url}${image}`,
      url: articleUrl,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Person",
        name: siteConfig.author,
        url: siteConfig.url,
      },
      mainEntityOfPage: articleUrl,
      keywords: post.categories.join(", "),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/#blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
      ],
    },
  ];

  return (
    <main className="relative z-10 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Header />

      <article className="mx-auto max-w-[1120px] px-6 md:px-10 lg:px-16 pt-32 pb-16">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to posts
        </Link>

        <section className="section-panel overflow-hidden p-0 mb-8">
          <div className="relative aspect-[16/9] bg-black/30">
            <ProjectImage
              src={image}
              alt={post.title}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1120px"
              priority
            />
          </div>
          <div className="p-5 md:p-8 lg:p-10">
            <div className="flex flex-wrap items-center gap-3 mb-5 text-xs uppercase tracking-[0.22em] text-text-muted">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="h-4 w-4 text-accent" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                {detail.readTime}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-5">
              {post.categories.map((category) => (
                <span key={category} className="trust-chip">
                  {category}
                </span>
              ))}
            </div>

            <h1 className="!text-4xl md:!text-5xl !leading-tight !mb-5">
              {post.title}
            </h1>
            <p className="!text-base md:!text-lg !leading-relaxed max-w-3xl">
              {detail.intro}
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-6 mb-8">
          <aside className="section-panel p-5 md:p-6 self-start">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-5 w-5 text-accent" />
              <h2 className="!text-xl !mb-0">Quick scan</h2>
            </div>
            <ul className="space-y-3">
              {detail.keyPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm text-text-secondary leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </aside>

          <div className="section-panel p-5 md:p-7">
            <p className="!text-sm md:!text-base !leading-loose !mb-0">
              {detail.excerpt}
            </p>
          </div>
        </section>

        <section className="space-y-6">
          {detail.sections.map((section) => (
            <div key={section.heading} className="section-panel p-5 md:p-7">
              <h2 className="!text-2xl !mb-3">{section.heading}</h2>
              <p className="!text-sm md:!text-base !leading-loose">{section.body}</p>
              {section.bullets && (
                <ul className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-text-secondary"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        <section className="section-panel mt-8 p-5 md:p-7 border-accent/25">
          <p className="text-xs uppercase tracking-[0.22em] text-accent mb-3">Takeaway</p>
          <p className="!text-base md:!text-lg !leading-relaxed !mb-0">
            {detail.takeaway}
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}
