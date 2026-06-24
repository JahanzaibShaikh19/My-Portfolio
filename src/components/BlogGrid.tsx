import Link from "next/link";
import { blogPosts } from "@/data/content";
import { blogCoverMap } from "@/data/blogCovers";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";
import ProjectImage from "./ProjectImage";

export default function BlogGrid() {
  return (
    <section id="blog" className="px-6 md:px-10 lg:px-16 py-16">
      <RevealOnScroll variant="scale">
        <SectionTitle>Latest Posts</SectionTitle>
        <p className="mx-auto -mt-4 mb-10 max-w-2xl text-center !text-sm !leading-relaxed !text-text-secondary">
          Practical notes from building products, automation systems, and client-ready engineering workflows.
        </p>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <RevealOnScroll key={post.slug} delay={idx * 80}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block portfolio-item interactive-card aspect-[16/10] rounded-2xl bg-surface relative"
            >
              <ProjectImage
                src={blogCoverMap[post.slug] ?? post.image}
                alt={post.title}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="figcap">
                <div className="inner px-4">
                  <div className="flex flex-wrap gap-2 justify-center mb-2">
                    {post.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[10px] uppercase tracking-widest text-accent border border-accent/40 px-2 py-0.5 rounded-full bg-black/30"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="!text-base !leading-snug !m-0">{post.title}</h3>
                </div>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
