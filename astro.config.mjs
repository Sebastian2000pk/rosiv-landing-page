import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import path from "node:path";

const SITE = "https://rosivhub.com";
const BLOG_DIR = "./src/content/blog";

// lastmod real de cada post, leído del frontmatter (updatedDate ?? pubDate).
// No se usa el mtime del archivo: el CI compila desde un checkout limpio y
// todos los archivos tendrían la fecha del build, que es una fecha falsa.
const blogLastmod = new Map();
for (const file of fs.readdirSync(BLOG_DIR)) {
  if (!file.endsWith(".md")) continue;
  const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf-8");
  const frontmatter = raw.split("\n---")[0];
  const pubDate = frontmatter.match(/^pubDate:\s*(\S+)/m)?.[1];
  const updatedDate = frontmatter.match(/^updatedDate:\s*(\S+)/m)?.[1];
  const fecha = updatedDate ?? pubDate;
  if (fecha) {
    blogLastmod.set(
      `${SITE}/blog/${file.replace(/\.md$/, "")}/`,
      new Date(fecha).toISOString()
    );
  }
}

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // Fuera del sitemap: /gracias, las páginas-redirect de slugs viejos y
      // /ws/privacy-policy.html (es un redirect con canonical a otra URL;
      // el archivo sigue existiendo porque Meta lo exige para WhatsApp API,
      // pero una URL canonicalizada a otra parte no va en el sitemap).
      filter: (page) =>
        page !== `${SITE}/gracias/` && !/-2026(-|\/)/.test(page),
      // Solo se declara lastmod donde hay una fecha real. Un lastmod inventado
      // hace que Google deje de confiar en el del sitio entero.
      serialize: (item) => {
        const lastmod = blogLastmod.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
});
