import type { WorkItem } from "./content";
import { projectProofImages } from "./projectImages";

const overrides: Record<string, Partial<WorkItem>> = {
  myairboard: {
    categoryLabel: "Property SaaS",
    cover: projectProofImages.airboard,
    gridCover: projectProofImages.airboard,
    images: [projectProofImages.airboard],
    description:
      "A single, intuitive hosting hub for bookings, rentals, property operations, revenue visibility, and modern host decision-making.",
    details:
      "MyAirBoard centralizes everything modern hosts and agencies need to manage rentals smoothly: bookings, properties, calendars, revenue visibility, expenses, reports, and operational tasks. The product experience is designed around a low-cognitive-load dashboard, clear action states, and fast decision-making for property operators.",
    tags: ["SaaS", "Property Ops", "Analytics", "Dashboard"],
    date: "2025",
    link: undefined,
  },
  "happiness-jar": {
    categoryLabel: "Wellbeing App",
    cover: projectProofImages.happinessJar,
    gridCover: projectProofImages.happinessJar,
    images: [projectProofImages.happinessJar],
    description:
      "A calm wellbeing experience for collecting memories, calming thoughts, and carrying happiness wherever users go.",
    details:
      "Happiness Jar turns the physical gratitude-jar concept into a digital wellbeing experience. Users can save positive memories, revisit them later, and build a personal archive of meaningful moments. The interface direction is intentionally calm, dark, and low-distraction so the emotional action stays simple.",
    tags: ["Wellbeing", "Mobile-first", "Emotional UX", "React"],
    date: "2025",
    link: undefined,
  },
};

export function getPortfolioWork(work: WorkItem): WorkItem {
  const override = overrides[work.slug];
  return override ? { ...work, ...override } : work;
}

export function getPortfolioWorks(works: WorkItem[]): WorkItem[] {
  return works.map(getPortfolioWork);
}
