const fallbackSiteUrl = "https://jahanzaibshaikh.dev";

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
  legalName: "Jahanzaib Shaikh",
  title: "Jahanzaib Shaikh — Full Stack Engineer, SaaS Developer & AI Automation Specialist",
  tagline: "Full-stack product engineering for SaaS, dashboards, mobile apps, AI automation, and founder-led product builds.",
  description:
    "Jahanzaib Shaikh is a full stack engineer and AI automation developer building SaaS platforms, dashboards, mobile apps, backend systems, and production-ready digital products with Next.js, React, Node.js, Supabase, Firebase, Flutter, and automation tools.",
  shortDescription:
    "Full stack engineer for SaaS platforms, AI automation, dashboards, mobile apps, and production-ready web systems.",
  url: getSiteUrl(),
  author: "Jahanzaib Shaikh",
  email: "jahanzaib@hyperlogic.studio",
  location: "Sukkur, Pakistan",
  serviceArea: "Worldwide remote, Pakistan, United Kingdom, United States, Gulf region",
  languages: ["English", "Urdu", "Hindi"],
  keywords: [
    "Jahanzaib Shaikh",
    "Jahanzaib Shaikh Portfolio",
    "Full Stack Developer Pakistan",
    "Full Stack Engineer Pakistan",
    "AI Automation Engineer",
    "AI Automation Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Supabase Developer",
    "Firebase Developer",
    "Flutter Developer",
    "SaaS Developer",
    "MERN Developer",
    "Dashboard Developer",
    "Web Application Developer",
    "Mobile App Developer",
    "Product Engineer",
    "HyperLogic Studio",
    "Portfolio",
  ],
  expertise: [
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Firebase",
    "Flutter",
    "Dart",
    "Tailwind CSS",
    "SaaS Development",
    "Dashboard UX",
    "AI Automation",
    "API Integrations",
    "Product Engineering",
    "Performance Optimization",
    "SEO Optimization",
  ],
  services: [
    {
      name: "Full-stack SaaS development",
      description: "Design and development of production-ready SaaS platforms, dashboards, admin panels, auth flows, APIs, and analytics experiences.",
    },
    {
      name: "AI automation and workflow systems",
      description: "AI-powered workflows, automations, lead systems, chatbot integrations, LLM/API integrations, and operational dashboards for founders and agencies.",
    },
    {
      name: "Mobile app development",
      description: "Flutter and mobile-first application development with Firebase, Supabase, real-time features, maps, authentication, and cloud-backed workflows.",
    },
    {
      name: "UI/UX and product interface engineering",
      description: "Premium interfaces, glassmorphism systems, low-cognitive-load dashboards, responsive design, performance tuning, and conversion-focused product pages.",
    },
  ],
  featuredProjects: [
    {
      name: "MyAirBoard",
      slug: "myairboard",
      description: "Property management SaaS for bookings, properties, guest operations, analytics, expenses, and P&L visibility.",
    },
    {
      name: "Edris LMS",
      slug: "edris-lms",
      description: "Premium learning platform with AI tutor experience, course discovery, student progress, and dashboard UX.",
    },
    {
      name: "Paiya",
      slug: "ride-hailing-app",
      description: "Ride-hailing and local delivery platform using Flutter, Dart, Firebase, Cloud Functions, and Google APIs.",
    },
    {
      name: "SustainBite",
      slug: "sustainbite",
      description: "Nutrition and sustainability platform for meal planning, healthier choices, and reducing food waste.",
    },
    {
      name: "Neuroverse",
      slug: "neuroverse",
      description: "AI product concept focused on user-owned data, privacy, and digital value workflows.",
    },
  ],
  faq: [
    {
      question: "Who is Jahanzaib Shaikh?",
      answer:
        "Jahanzaib Shaikh is a full stack engineer and AI automation developer from Pakistan who builds SaaS platforms, dashboards, mobile apps, backend systems, and production-ready product experiences.",
    },
    {
      question: "What does Jahanzaib Shaikh build?",
      answer:
        "He builds full-stack web applications, SaaS products, admin dashboards, AI automation systems, mobile apps, API integrations, Firebase/Supabase backends, and premium UI/UX product interfaces.",
    },
    {
      question: "Which technologies does Jahanzaib Shaikh use?",
      answer:
        "His core stack includes Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase, Firebase, Flutter, Dart, Tailwind CSS, API integrations, and AI automation tools.",
    },
    {
      question: "Is Jahanzaib Shaikh available for remote projects?",
      answer:
        "Yes. He works on remote product builds, SaaS development, dashboards, mobile apps, AI automation, and full-stack engineering projects for founders, startups, and agencies.",
    },
    {
      question: "What kind of projects are a good fit?",
      answer:
        "Best-fit projects include SaaS platforms, dashboards, AI automation systems, mobile applications, property tech, edtech, marketplaces, APIs, and product MVPs that need clean execution and premium UI/UX.",
    },
  ],
  links: {
    github: "https://github.com/JahanzaibShaikh19",
    linkedin: "https://www.linkedin.com/in/jahanzaib-shaikh-9a6199215/",
    twitter: "https://x.com/jahanzaib699",
    upwork:
      "https://www.upwork.com/freelancers/~01820b1bf7899b4aed?mp_source=share",
  },
};
