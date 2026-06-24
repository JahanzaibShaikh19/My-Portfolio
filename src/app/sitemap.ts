import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { works, blogPosts } from "@/data/content";
import { extraWorks } from "@/data/extraWorks";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const portfolioItems = [...extraWorks, ...works];

  const staticRoutes = [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: `${siteConfig.url}/resume`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  const workRoutes = portfolioItems.map((work) => ({
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
