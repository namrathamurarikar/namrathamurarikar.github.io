/** Encode only the filename so paths with spaces / parens / apostrophes work in href. */
export function safeWorkHref(href: string): string {
  if (/^https?:\/\//i.test(href)) return href;
  const slash = href.lastIndexOf("/");
  if (slash === -1) return encodeURI(href);
  return `${href.slice(0, slash + 1)}${encodeURIComponent(href.slice(slash + 1))}`;
}

/**
 * Opens `public/video-player.html` in a new tab with an embedded HTML5 video.
 * Avoids SPA hosts returning index.html for direct `.mp4` URLs when the file is missing
 * or rewrite rules catch unknown paths.
 */
export function videoDemoHref(videoBasename: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const root = base.endsWith("/") ? base : `${base}/`;
  return `${root}video-player.html?f=${encodeURIComponent(videoBasename)}`;
}
