const pagePreviewUrl = (url: string, width = 1600) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;

export const workPreviewUrls = {
  paiya: pagePreviewUrl("https://www.paiya.com.pk", 1600),
  sustainbite: pagePreviewUrl("https://sustainbite.com", 1600),
  edrisHome: pagePreviewUrl("https://edris-lms.com", 1600),
  edrisDashboard: pagePreviewUrl("https://edris-lms.com/dashboard", 1600),
  edrisCourses: pagePreviewUrl("https://edris-lms.com/#courses", 1600),
  edrisDark: pagePreviewUrl("https://edris-lms.com?theme=dark", 1600),
};
