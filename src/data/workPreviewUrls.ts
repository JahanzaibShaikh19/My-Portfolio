const pagePreviewUrl = (url: string, width = 1600) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;

export const workPreviewUrls = {
  paiya: pagePreviewUrl("https://www.paiya.com.pk", 1600),
  sustainbite: pagePreviewUrl("https://sustainbite.com", 1600),
};
