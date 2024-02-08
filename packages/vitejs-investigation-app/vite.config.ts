import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    dedupe: ["picocolors"],
  },
  build: {
    minify: false
  }
});
