import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { works, blogPosts } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];

  const workRoutes = works.map((work) => ({
    url: `${siteConfig.url}/work/${work.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
