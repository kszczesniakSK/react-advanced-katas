import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

import "vitest/config";

// Generate visualization for your app bundle.

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: "bundle-stats.html",
      template: "treemap",
    }),
  ],
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
});
