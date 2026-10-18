import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { stripSeoFallback } from "./scripts/seo-html";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    { name: "route-seo-head", transformIndexHtml: stripSeoFallback },
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // SSG configuration for vite-react-ssg
  ssgOptions: {
    script: "async",
    dirStyle: "nested",
    mock: true,
    onBeforePageRender: (_route: string, html: string) => stripSeoFallback(html),
  },
}));
