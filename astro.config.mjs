import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import yaml from "@rollup/plugin-yaml";
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  server: {
    host: true,
  },
  vite: {
    plugins: [yaml()],
  },
  redirects: {
    "/blog/1": "/blog",
  },
});
