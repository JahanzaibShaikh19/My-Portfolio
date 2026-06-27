import type { WorkItem } from "./content";
import { workPreviewUrls } from "./workPreviewUrls";

const edrisImages = [
  workPreviewUrls.edrisHome,
  workPreviewUrls.edrisDashboard,
  workPreviewUrls.edrisCourses,
  workPreviewUrls.edrisDark,
];

export function withEdrisLmsOverride(work: WorkItem): WorkItem {
  if (work.slug !== "edris-lms") return work;

  return {
    ...work,
    categoryLabel: "Premium EdTech Platform",
    cover: workPreviewUrls.edrisHome,
    gridCover: workPreviewUrls.edrisHome,
    images: edrisImages,
    client: "Edris LMS",
    description:
      "A premium learning platform experience for AI tutors, expert-led courses, live community, and verified learning progress.",
    details:
      "Edris LMS is designed around learning confidence: a clear hero journey, easy course discovery, AI tutor assistance, student progress visibility, certification trust, and a focused dashboard workspace. The interface uses calm green accents, readable messaging, guided CTAs, and visual proof sections so learners understand the value quickly without feeling overwhelmed.",
    tags: ["Next.js", "AI Tutors", "LMS", "Certificates", "Dashboard UX"],
    date: "2025",
    link: "https://edris-lms.com",
  };
}
