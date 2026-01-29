import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Improve chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor chunks for better caching
          "react-vendor": ["react", "react-dom"],
          "animation-vendor": ["framer-motion"],
          "swiper-vendor": ["swiper"],
        },
      },
    },
    // Inline small assets to reduce HTTP requests
    assetsInlineLimit: 4096,
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Target modern browsers for smaller bundle
    target: "esnext",
  },
});
