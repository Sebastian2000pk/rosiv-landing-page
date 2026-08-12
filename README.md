# Rosiv — landing page

Sitio construido con [Astro](https://astro.build) (output estático) y desplegado en GitHub Pages.

## Desarrollo

```sh
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # genera dist/
pnpm preview   # sirve dist/ localmente
```

## Estructura

- `src/pages/index.astro` — landing principal.
- `src/pages/blog/` — índice y rutas dinámicas del blog.
- `src/content/blog/*.md` — artículos del blog (Content Collections).
- `src/components/` — secciones de la landing.
- `src/layouts/Layout.astro` — SEO compartido (meta, OG, JSON-LD).
- `src/layouts/BlogPost.astro` — layout de artículo (JSON-LD `Article`).
- `src/styles/global.css` — estilos globales.
- `public/` — assets estáticos servidos tal cual (favicons, `robots.txt`, `llms.txt`, `CNAME`, `assets/`, `ws/`).

El deploy a GitHub Pages corre automáticamente vía `.github/workflows/deploy.yml` en cada push a `master`.
