import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { VitePWA } from "vite-plugin-pwa";
import { visualizer } from "rollup-plugin-visualizer";

// Set ANALYZE=true to emit a bundle treemap at dist/stats.html
const analyze = process.env.ANALYZE === "true";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Compress images (png/jpg/webp/svg) during the build
    ViteImageOptimizer(),
    // Installable, offline-capable PWA
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["logo.svg", "apple-touch-icon.png", "CV_LAKTAB.pdf"],
      manifest: {
        name: "Noureddine Laktab | Full-Stack Web Developer",
        short_name: "N. Laktab",
        description:
          "Portfolio of Noureddine Laktab, a Full-Stack Web Developer specializing in React and Laravel.",
        theme_color: "#0f172a",
        background_color: "#0f172a",
        display: "standalone",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
    // Bundle analysis (only when ANALYZE=true)
    ...(analyze
      ? [
          visualizer({
            filename: "dist/stats.html",
            gzipSize: true,
            brotliSize: true,
          }),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Improve chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate vendor chunks for better caching
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("/react/")) {
              return "react-vendor";
            }
            if (id.includes("framer-motion")) {
              return "animation-vendor";
            }
            if (id.includes("swiper")) {
              return "swiper-vendor";
            }
          }
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
