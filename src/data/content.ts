// ============================================================
// SITE CONTENT — edit everything here to personalize the site
// ============================================================

export const personal = {
  name: "Jahanzaib",
  role: "developer.",
  rolesLoop: [" developer.", " designer.", " engineer.", " architect."],
  greeting: "Hello Everyone",
  birthDate: "01.09.2004",
  whatsapp: "https://wa.me/923270550231",
  whatsappLabel: "+923270550231",
  email: "jahanzaib@hyperlogic.studio",
  location: "Sukkur, Pakistan",
  bio: "I'm a Full Stack Engineer and co-founder at HyperLogic Studio. I spend most of my time building web platforms, AI-powered tools, and automation systems — turning ideas into shipped products using the most sophisticated technologies available today.",
  profileImage: "/images/Profile.png",
  loaderImage: "/images/profile-loader.jpg",
};

export const socialLinks = [
  { label: "Gh.", href: "https://github.com/JahanzaibShaikh19" },
  { label: "Tw.", href: "https://x.com/jahanzaib699" },
  { label: "Li.", href: "https://www.linkedin.com/in/jahanzaib-shaikh-9a6199215/" },
  { label: "Up.", href: "https://www.upwork.com/freelancers/~01820b1bf7899b4aed?mp_source=share" },
];

export const services = [
  { icon: "code", title: ["Web Sites and", "Platforms"] },
  { icon: "smartphone", title: ["Mobile", "Applications"] },
  { icon: "bot", title: ["AI Tools &", "Automation"] },
  { icon: "database", title: ["Backend &", "Databases"] },
  { icon: "trending-up", title: ["SEO", "Optimization"] },
  { icon: "blocks", title: ["Block Chain", "Dev"] },
];

export const testimonials = [
  {
    quote:
      "Working with Jahanzaib was a great experience. Communication was clear, the code was clean, and the project shipped on time.",
    name: "Faizan Muhammad",
    title: "Project Manager",
    image: "/images/comment-1.jpg",
  },
  {
    quote:
      "Delivered exactly what we asked for and then some. Highly recommend for any full stack or AI automation work.",
    name: "Kumail Bukhari",
    title: "Founder",
    image: "/images/comment-2.jpg",
  },
  {
    quote:
      "Fast, reliable, and genuinely understands both the technical and business side of a project.",
    name: "Maqsood Jhakro",
    title: "Project Manager",
    image: "/images/comment-3.jpg",
  },
];

export const workExperience = [
  {
    period: "2025 - Present",
    title: "Co-founder & Lead Engineer — HyperLogic Studio",
    description:
      "Leading full stack and AI service delivery for clients — building web platforms, automation pipelines, and AI-driven tools end to end.",
  },
  {
    period: "2024 - 2025",
    title: "Freelance Full Stack Developer",
    description:
      "Built and shipped multiple production platforms across property management, LMS, and B2B portals using React, Node.js, and PostgreSQL.",
  },
  {
    period: "2023 - 2024",
    title: "Junior MERN Developer — Various Projects",
    description:
      "Started building real projects, learning the stack from frontend to backend, and contributing to early freelance work.",
  },
];

export const education = [
  {
    period: "2022 - 2026",
    title: "Sukkur IBA University",
    description:
      "BS Computer Science — coursework spanning Enter-prise Application Development, mobile applications, distributed computing, computer vision, and deep learning.",
  },
  {
    period: "2023 - 2024",
    title: "IT BOOTCAMP MERN STACK",
    description:
      "Successfully completed the Govt IT Readiness Bootcamp Program, earning a professional certification as a MERN Stack Developer with rigorous hands-on training.",
  },
];

export const languageSkills = [
  { label: "English", percent: 92 },
  { label: "Urdu", percent: 100 },
  { label: "Hindi", percent: 80 },
];

export const frontendSkills = [
  { label: "React / Next.js", percent: 92 },
  { label: "Tailwind CSS", percent: 88 },
  { label: "GSAP", percent: 70 },
  { label: "TypeScript", percent: 80 },
];

export const mobileSkills = [
  { label: "Flutter", percent: 80 },
  { label: "Dart", percent: 78 },
  { label: "Kotlin (Android)", percent: 72 },
];

export const languagesSkills = [
  { label: "JavaScript", percent: 92 },
  { label: "Java", percent: 75 },
  { label: "Rust", percent: 60 },
];

export const backendSkills = [
  { label: "Node.js / Express", percent: 88 },
  { label: "PostgreSQL / Supabase", percent: 82 },
  { label: "Firebase", percent: 80 },
];

export const web3Skills = [
  { label: "Solidity / Hardhat", percent: 78 },
  { label: "Ethers.js / Web3.js", percent: 75 },
  { label: "Polygon / EVM", percent: 72 },
];

export const aiToolingSkills = [
  { label: "AI Integrations (APIs)", percent: 85 },
  { label: "n8n / Automation", percent: 78 },
  { label: "Git / DevOps", percent: 90 },
];

export type WorkItem = {
  slug: string;
  title: string;
  category: "branding" | "photography" | "other";
  categoryLabel: string;
  cover: string;
  gridCover?: string;
  images: string[];
  client: string;
  description: string;
  details: string;
  tags: string[];
  date: string;
  link?: string;
};

export const works: WorkItem[] = [
  {
    slug: "myairboard",
    title: "MyAirBoard",
    category: "other",
    categoryLabel: "Web Platform",
    cover: "/images/works/work-1/01.jpg",
    images: ["/images/works/work-1/01.jpg", "/images/works/work-1/02.jpg", "/images/works/work-1/03.jpg"],
    client: "Property Management",
    description:
      "A full stack property management platform built with PostgreSQL and Prisma, handling listings, tenants, and operations.",
    details:
      "MyAirBoard streamlines property management workflows — from listings and bookings to tenant communication and reporting. Built end to end with a Next.js frontend, a Node/Express API, and a PostgreSQL database modeled with Prisma for type-safe queries and migrations.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Node.js"],
    date: "2024",
  },
  {
    slug: "edris-lms",
    title: "Edris LMS",
    category: "branding",
    categoryLabel: "EdTech",
    cover: "/images/works/work-2/01.jpg",
    gridCover: "/images/works/work-2/01-grid.jpg",
    images: ["/images/works/work-2/01.jpg", "/images/works/work-2/02.jpg", "/images/works/work-2/03.jpg"],
    client: "Education",
    description:
      "A learning management system with blockchain-verified certificates and AI-powered features for students and instructors.",
    details:
      "Edris LMS combines a familiar course/quiz/assignment workflow with two modern additions: certificates that are verifiable on-chain, and AI features that help instructors generate content and help students get personalized support.",
    tags: ["LMS", "Blockchain", "AI", "Full Stack"],
    date: "2024",
  },
  {
    slug: "crypto-hyper-bot",
    title: "Crypto Hyper Bot",
    category: "other",
    categoryLabel: "Trading System",
    cover: "/images/works/work-3/01.jpg",
    images: ["/images/works/work-3/01.jpg", "/images/works/work-3/02.jpg", "/images/works/work-3/03.jpg"],
    client: "Personal Project",
    description:
      "A multi-pipeline cryptocurrency trading signal bot combining technical, sentiment, fundamental, correlation, and event analysis.",
    details:
      "Designed to run on a minimal VPS at near-zero API cost, the bot pulls data from Binance public endpoints, CoinGecko, and RSS/social sources, then combines five independent pipelines — technical analysis, sentiment, fundamentals, cross-asset correlation, and event detection — into a single trading signal.",
    tags: ["Python", "Binance API", "CoinGecko", "Automation"],
    date: "2025",
  },
  {
    slug: "sustainbite",
    title: "SustainBite",
    category: "photography",
    categoryLabel: "Food & Sustainability",
    cover: "/images/works/work-4/01.jpg",
    images: ["/images/works/work-4/01.jpg", "/images/works/work-4/02.jpg", "/images/works/work-4/03.jpg"],
    client: "Sustainbite",
    description:
      "A platform connecting users with sustainable food options, built with a focus on clean UI and fast performance.",
    details:
      "SustainBite is a consumer-facing platform highlighting sustainable food choices — restaurants, recipes, and tips — with a focus on a clean, fast, mobile-first experience.",
    tags: ["Next.js", "Tailwind", "Web Platform"],
    date: "2023",
  },
  {
    slug: "auspower",
    title: "AusPower",
    category: "other",
    categoryLabel: "Energy",
    cover: "/images/works/work-5/01.jpg",
    images: ["/images/works/work-5/01.jpg", "/images/works/work-5/02.jpg", "/images/works/work-5/03.jpg"],
    client: "AusPower",
    description:
      "An energy services web platform with a focus on lead capture and service area information.",
    details:
      "AusPower is a marketing and lead-generation site for an energy services business, built for fast load times and high conversion on both desktop and mobile.",
    tags: ["Web Design", "Next.js", "Lead Generation"],
    date: "2023",
  },
  {
    slug: "ride-hailing-app",
    title: "Ride-hailing App",
    category: "other",
    categoryLabel: "Mobile + Backend",
    cover: "/images/works/work-6/01.jpg",
    images: ["/images/works/work-6/01.jpg", "/images/works/work-6/02.jpg", "/images/works/work-6/03.jpg"],
    client: "Personal / Client Project",
    description:
      "A full stack ride-hailing platform with rider and driver apps backed by a real-time matching system.",
    details:
      "A ride-hailing platform covering rider and driver apps, real-time location tracking, ride matching, and a backend API to tie it all together.",
    tags: ["React Native", "Node.js", "Real-time"],
    date: "2023",
  },
  {
    slug: "khabardar",
    title: "Khabardar",
    category: "branding",
    categoryLabel: "News / Awareness",
    cover: "/images/works/work-7/01.jpg",
    images: ["/images/works/work-7/01.jpg", "/images/works/work-7/02.jpg"],
    client: "Khabardar",
    description:
      "A news and awareness platform focused on clear information delivery and accessibility.",
    details:
      "Khabardar is a content-focused platform built for fast reading experiences, clean typography, and accessibility across devices.",
    tags: ["Next.js", "Content Platform"],
    date: "2023",
  },
  {
    slug: "happiness-jar",
    title: "Happiness Jar",
    category: "photography",
    categoryLabel: "Wellbeing App",
    cover: "/images/works/work-9/01.jpg",
    images: ["/images/works/work-9/01.jpg"],
    client: "Personal Project",
    description:
      "A simple wellbeing app for journaling small moments of happiness over time.",
    details:
      "Happiness Jar lets users quickly log small positive moments throughout their day, building a personal archive they can revisit — a small, focused product built end to end.",
    tags: ["React", "Mobile-first"],
    date: "2022",
  },
];

export const blogPosts = [
  {
    slug: "building-a-multi-pipeline-trading-bot",
    title: "Building a multi-pipeline crypto trading signal bot",
    image: "/images/blog-1.jpg",
    categories: ["Engineering", "Python"],
    date: "2025",
  },
  {
    slug: "shipping-fast-as-a-two-person-studio",
    title: "How we ship fast as a two-person dev studio",
    image: "/images/blog-2.jpg",
    categories: ["Process", "Studio"],
    date: "2025",
  },
  {
    slug: "lessons-from-freelance-outreach",
    title: "What I learned from a year of freelance outreach",
    image: "/images/blog-3.jpg",
    categories: ["Freelancing", "Career"],
    date: "2024",
  },
  {
    slug: "prisma-postgres-for-real-projects",
    title: "Using Prisma and PostgreSQL on real client projects",
    image: "/images/blog-4.jpg",
    categories: ["Backend", "Database"],
    date: "2024",
  },
  {
    slug: "automation-with-n8n",
    title: "Automating lead generation with n8n",
    image: "/images/blog-5.jpg",
    categories: ["Automation", "n8n"],
    date: "2024",
  },
  {
    slug: "computer-vision-fundamentals",
    title: "Notes on computer vision fundamentals",
    image: "/images/blog-6.jpg",
    categories: ["AI", "Computer Vision"],
    date: "2024",
  },
];

export const clientLogos = [
  "/images/clients/client-1d.png",
  "/images/clients/client-2d.png",
  "/images/clients/client-3d.png",
  "/images/clients/client-4d.png",
  "/images/clients/client-5d.png",
  "/images/clients/client-6d.png",
  "/images/clients/client-7d.png",
];

export const contactInfo = {
  email: "jahanzaib@hyperlogic.studio",
  addressLine1: "Sukkur, Pakistan",
  socials: [
    { label: "GitHub", href: "https://github.com/JahanzaibShaikh19" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jahanzaib-shaikh-9a6199215/" },
    { label: "Upwork", href: "https://www.upwork.com/freelancers/~01820b1bf7899b4aed?mp_source=share" },
    { label: "Twitter", href: "https://x.com/jahanzaib699" },
  ],
};
