import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/** GitHub Pages: project site uses /repo-name/; user site (repo named *.github.io) uses /. */
function viteBase(): string {
  const raw = process.env.VITE_BASE_URL?.trim();
  if (!raw || raw === "/") return "/";
  const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
  return withSlash.endsWith("/") ? withSlash : `${withSlash}/`;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: viteBase(),
});
