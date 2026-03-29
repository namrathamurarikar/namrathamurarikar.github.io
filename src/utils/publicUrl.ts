/** Absolute URL for files under `public/` (respects Vite `base`). */
export function publicUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const path = relativePath.startsWith("/")
    ? relativePath.slice(1)
    : relativePath;
  return `${base}${path}`;
}
