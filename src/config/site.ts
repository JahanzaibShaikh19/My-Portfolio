const fallbackSiteUrl = "https://jahanzaibshaikh.vercel.app";

function getSiteUrl() {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!rawUrl) return fallbackSiteUrl;

  const normalizedUrl = rawUrl.startsWith("http://") || rawUrl.startsWith("https://")
    ? rawUrl
    : `https://${rawUrl}`;

  try {
    return new URL(normalizedUrl).origin;
  } catch {
    return fallbackSiteUrl;
  }
}

export const siteConfig = {
  name: "Jahanzaib Shaikh Portfolio",
  title: "Jahanzaib Shaikh — Full Stack Engineer & AI Automation Developer",
  description:
    "Portfolio of Jahanzaib Shaikh, a full stack engineer building SaaS platforms, mobile apps, dashboards, AI automations, and production-ready web systems.",
  url: getSiteUrl(),
  author: "Jahanzaib Shaikh",
  email: "jahanzaib@hyperlogic.studio",
  keywords: [
    "Jahanzaib Shaikh",
    "Full Stack Developer",
    "Full Stack Engineer",
    "AI Automation Engineer",
    "Next.js Developer",
    "React Developer",
    "SaaS Developer",
    "MERN Developer",
    "HyperLogic Studio",
    "Portfolio",
  ],
  links: {
    github: "https://github.com/JahanzaibShaikh19",
    linkedin: "https://www.linkedin.com/in/jahanzaib-shaikh-9a6199215/",
    twitter: "https://x.com/jahanzaib699",
    upwork:
      "https://www.upwork.com/freelancers/~01820b1bf7899b4aed?mp_source=share",
  },
};
