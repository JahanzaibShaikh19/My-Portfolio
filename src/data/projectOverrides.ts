import type { WorkItem } from "./content";
import { airboardPreviewUrl } from "./airboardPreviewUrl";

const proofImages = {
  airboard: airboardPreviewUrl,
  happinessJar: "/images/works/proofs/happiness-jar-proof.svg",
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
