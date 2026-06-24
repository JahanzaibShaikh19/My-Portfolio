import type { WorkItem } from "./content";
import { neuroversePreviewDataUri } from "./neuroversePreview";

export const extraWorks: WorkItem[] = [
  {
    slug: "neuroverse",
    title: "Neuroverse",
    category: "other",
    categoryLabel: "AI Product Platform",
    cover: neuroversePreviewDataUri,
    gridCover: neuroversePreviewDataUri,
    images: [neuroversePreviewDataUri],
    client: "Founder and Developer",
    description:
      "Own Your Data. Fuel the Future — a modern AI product experience focused on user-owned data, privacy, and digital value.",
    details:
      "Neuroverse is a polished AI platform concept with a Next.js interface, Supabase-powered data layer, connected account flows, extension-ready architecture, and a clean product narrative around ethical data contribution. My work covered product strategy, interface design, frontend implementation, backend planning, and delivery polish.",
    tags: ["Next.js", "Supabase", "Product UX", "Extension", "AI Platform"],
    date: "Jun 30, 2025",
  },
];
