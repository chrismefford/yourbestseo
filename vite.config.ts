import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React - loaded on every page
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          // UI framework - loaded on every page but in separate chunk
          "ui-vendor": ["@radix-ui/react-slot", "@radix-ui/react-tooltip", "class-variance-authority", "clsx", "tailwind-merge"],
          // Animation library - commonly used but can be deferred
          "framer": ["framer-motion"],
          // Heavy charting library - only needed on specific pages
          "charts": ["recharts"],
          // Form handling
          "forms": ["react-hook-form", "@hookform/resolvers", "zod"],
          // Supabase client
          "supabase": ["@supabase/supabase-js"],
        },
      },
    },
    // Increase chunk size warning limit slightly
    chunkSizeWarningLimit: 600,
  },
  // SSG configuration for vite-react-ssg
  ssgOptions: {
    script: "async",
    dirStyle: "nested",
    mock: true,
  },
}));
