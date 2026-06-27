import { siteConfig } from "@/config/site";
import type { WorkItem } from "@/data/content";

const personId = `${siteConfig.url}/#person`;
const websiteId = `${siteConfig.url}/#website`;
const serviceId = `${siteConfig.url}/#professional-service`;
const brandId = `${siteConfig.url}/#brand`;

export function absoluteUrl(path = "") {
  if (!path) return siteConfig.url;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  if (path.startsWith("data:")) return `${siteConfig.url}/images/Profile.png`;
  return new URL(path, siteConfig.url).toString();
}

export function rootJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.legalName,
        alternateName: ["Jahanzaib", "Jahanzaib Shaikh", "JahanzaibShaikh19"],
        url: siteConfig.url,
        image: absoluteUrl("/images/Profile.png"),
        email: siteConfig.email,
        jobTitle: ["Full Stack Engineer", "AI Automation Developer", "SaaS Developer", "Product Engineer"],
        description: siteConfig.shortDescription,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Sukkur",
          addressCountry: "PK",
        },
        knowsLanguage: siteConfig.languages,
        knowsAbout: siteConfig.expertise,
        sameAs: [
          siteConfig.links.github,
          siteConfig.links.linkedin,
          siteConfig.links.twitter,
          siteConfig.links.upwork,
        ],
        worksFor: {
          "@id": brandId,
        },
      },
      {
        "@type": "Organization",
        "@id": brandId,
        name: "HyperLogic Studio",
        url: "https://www.hyperlogic.studio",
        founder: { "@id": personId },
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        inLanguage: "en",
        publisher: { "@id": personId },
        author: { "@id": personId },
        about: { "@id": personId },
      },
      {
        "@type": "ProfessionalService",
        "@id": serviceId,
        name: "Jahanzaib Shaikh Full Stack Engineering Services",
        url: siteConfig.url,
        image: absoluteUrl("/images/Profile.png"),
        description: siteConfig.description,
        founder: { "@id": personId },
        areaServed: siteConfig.serviceArea,
        provider: { "@id": personId },
        serviceType: siteConfig.services.map((service) => service.name),
        knowsAbout: siteConfig.expertise,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Engineering services",
          itemListElement: siteConfig.services.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
              provider: { "@id": personId },
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: siteConfig.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${siteConfig.url}/#featured-projects`,
        name: "Featured full stack and AI automation projects by Jahanzaib Shaikh",
        itemListElement: siteConfig.featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: `${siteConfig.url}/work/${project.slug}`,
          name: project.name,
          description: project.description,
        })),
      },
    ],
  };
}

export function breadcrumbsJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function caseStudyJsonLd(work: WorkItem) {
  const projectUrl = `${siteConfig.url}/work/${work.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${projectUrl}#case-study`,
    name: `${work.title} case study`,
    headline: `${work.title} — ${work.categoryLabel}`,
    description: work.description,
    abstract: work.details,
    url: projectUrl,
    image: absoluteUrl(work.cover),
    datePublished: work.date,
    creator: { "@id": personId },
    author: { "@id": personId },
    publisher: { "@id": personId },
    mainEntityOfPage: projectUrl,
    keywords: work.tags.join(", "),
    about: work.tags.map((tag) => ({ "@type": "Thing", name: tag })),
    audience: {
      "@type": "Audience",
      audienceType: "Founders, startups, agencies, product teams, and technical decision makers",
    },
    isPartOf: { "@id": websiteId },
  };
}

export function blogArticleJsonLd(input: {
  slug: string;
  title: string;
  description: string;
  image: string;
  datePublished: string;
  keywords: string[];
}) {
  const articleUrl = `${siteConfig.url}/blog/${input.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${articleUrl}#article`,
    headline: input.title,
    description: input.description,
    image: absoluteUrl(input.image),
    url: articleUrl,
    datePublished: input.datePublished,
    dateModified: input.datePublished,
    author: { "@id": personId },
    publisher: { "@id": personId },
    mainEntityOfPage: articleUrl,
    keywords: input.keywords.join(", "),
    isPartOf: { "@id": websiteId },
  };
}
