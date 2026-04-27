// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://michaelmaher2252001-create.github.io",
  base: "/",               // ✅ REQUIRED for username.github.io sites
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
});
