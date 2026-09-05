import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rosivhub.com",
  integrations: [
    sitemap({
      customPages: ["https://rosivhub.com/ws/privacy-policy.html"],
      // Fuera del sitemap: /gracias y las páginas-redirect de slugs viejos.
      filter: (page) =>
        page !== "https://rosivhub.com/gracias/" && !/-2026(-|\/)/.test(page),
    }),
  ],
});
