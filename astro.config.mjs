import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rosivhub.com",
  integrations: [
    sitemap({
      customPages: ["https://rosivhub.com/ws/privacy-policy.html"],
    }),
  ],
});
