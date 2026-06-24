import type { WorkItem } from "./content";
import { airboardPreviewUrl } from "./airboardPreviewUrl";
import { workPreviewUrls } from "./workPreviewUrls";

const proofImages = {
  airboard: airboardPreviewUrl,
  happinessJar: "/images/works/proofs/happiness-jar-proof.svg",
  paiya: workPreviewUrls.paiya,
  sustainbite: workPreviewUrls.sustainbite,
} as const;

const overrides: Record<string, Partial<WorkItem>> = {
  myairboard: {
    categoryLabel: "Property SaaS",
    cover: proofImages.airboard,
    gridCover: proofImages.airboard,
    images: [proofImages.airboard],
    description:
      "A single, intuitive hosting hub for bookings, rentals, property operations, revenue visibility, and modern host decision-making.",
    details:
      "MyAirBoard centralizes the core rental workflow for modern hosts and agencies: bookings, properties, calendars, revenue visibility, expenses, reports, and daily operating tasks. The product proof focuses on a low-cognitive-load dashboard with clear action states and fast decision-making for property operators.",
    tags: ["SaaS", "Property Ops", "Analytics", "Dashboard"],
    date: "2025",
    link: "",
  },
  sustainbite: {
    categoryLabel: "Food & Sustainability",
    cover: proofImages.sustainbite,
    gridCover: proofImages.sustainbite,
    images: [proofImages.sustainbite],
    description:
      "A clean nutrition and sustainability platform for personalized meal planning, healthier choices, and reducing everyday food waste.",
    details:
      "SustainBite helps users plan nutrient-rich meals, choose diet preferences, generate grocery flows, and reduce food waste through a calm, guided interface. The project focuses on clear onboarding, lightweight decision paths, SEO-ready content, and fast web performance.",
    tags: ["Sustainability", "Nutrition UX", "Next.js", "SEO"],
    date: "2025",
    link: "https://sustainbite.com",
  },
  "ride-hailing-app": {
    title: "Paiya",
    categoryLabel: "Ride Hailing + Delivery",
    cover: proofImages.paiya,
    gridCover: proofImages.paiya,
    images: [proofImages.paiya],
    client: "Paiya",
    description:
      "A ride-hailing and local delivery platform for affordable bike rides, package delivery, rider onboarding, and real-time trip operations.",
    details:
      "Paiya is built around everyday movement: quick bike rides, fast parcel delivery, earning as a rider, live location flows, booking states, rider and driver experiences, Firebase-backed real-time operations, Cloud Functions automation, Google Maps APIs, and mobile-first app delivery.",
    tags: ["Flutter", "Dart", "Firebase", "Cloud Functions", "Google APIs"],
    date: "2025",
    link: "https://www.paiya.com.pk",
  },
  "happiness-jar": {
    categoryLabel: "Wellbeing App",
    cover: proofImages.happinessJar,
    gridCover: proofImages.happinessJar,
    images: [proofImages.happinessJar],
    description:
      "A calm wellbeing experience for collecting memories, calming thoughts, and carrying happiness wherever users go.",
    details:
      "Happiness Jar is a simple digital wellbeing experience. Users can save positive memories, revisit them later, and build a personal archive of meaningful moments. The interface direction is calm, dark, and low-distraction so the emotional action stays simple.",
    tags: ["Wellbeing", "Mobile-first", "Emotional UX", "React"],
    date: "2025",
    link: "",
  },
};

export function getPortfolioWork(work: WorkItem): WorkItem {
  const override = overrides[work.slug];
  return override ? { ...work, ...override } : work;
}

export function getPortfolioWorks(works: WorkItem[]): WorkItem[] {
  return works.map(getPortfolioWork);
}
