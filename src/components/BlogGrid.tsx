import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/content";
import SectionTitle from "./SectionTitle";
import RevealOnScroll from "./RevealOnScroll";

export default function BlogGrid() {
  return (
    <section id="blog" className="px-6 md:px-10 lg:px-16 py-16">
      <RevealOnScroll variant="scale">
        <SectionTitle>Latest Posts</SectionTitle>
      </RevealOnScroll>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, idx) => (
          <RevealOnScroll key={post.slug} delay={idx * 80}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block portfolio-item aspect-[16/10]"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="figcap">
                <div className="inner px-4">
                  <div className="flex flex-wrap gap-2 justify-center mb-2">
                    {post.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[10px] uppercase tracking-widest text-accent border border-accent/40 px-2 py-0.5 rounded-full"
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
