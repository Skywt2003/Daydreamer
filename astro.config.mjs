import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  server: {
    host: true,
  },
  vite: {
    plugins: [yaml()],
  },
  redirects: {
    "/blog/1": "/blog",
  },
  site: "https://skywt.cn",
});
