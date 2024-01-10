import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  prefetch: true,
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
