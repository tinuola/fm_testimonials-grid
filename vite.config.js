import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "/fm_testimonials-grid/",
  outDir: "public",
  assetsDir: "build",
  publicDir: "/public",
});
