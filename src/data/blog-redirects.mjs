/**
 * Slugs de /blog/ que ya no existen y a dónde apuntan ahora.
 *
 * Lo leen dos sitios: src/pages/blog/[...redirect].astro (genera la página de
 * redirect) y astro.config.mjs (las saca del sitemap). Por eso vive aparte y
 * en .mjs: el config de Astro corre en Node sin pasar por Vite.
 *
 * Se pueden borrar las entradas cuando Search Console deje de reportar
 * impresiones en la URL vieja (~6 meses).
 */
export const BLOG_REDIRECTS = {
  // Slugs anuales que pasaron a evergreen (sept. 2026).
  "topes-para-facturar-electronicamente-2026": "/blog/topes-para-facturar-electronicamente",
  "tabla-regimen-simple-tienda-restaurante-2026": "/blog/tabla-regimen-simple-tienda-restaurante",
  "calendario-tributario-2026-tienda-restaurante": "/blog/calendario-tributario-tienda-restaurante",
  "cuanto-cuesta-un-empleado-2026-salario-minimo": "/blog/cuanto-cuesta-un-empleado-salario-minimo",

  // Consolidación de clusters (oct. 2026): varias URLs competían por la misma
  // búsqueda y ninguna rankeaba. Una URL por intención — ver MANTENIMIENTO-SEO.md.
  "que-es-el-digito-de-verificacion-nit": "/blog/consultar-digito-de-verificacion-nit-rut",
  "digito-verificacion-excel-formula": "/blog/consultar-digito-de-verificacion-nit-rut",
  "que-significa-pos-punto-de-venta": "/blog/que-es-un-pos-y-para-que-sirve",
  "que-is-un-pos-y-por-que-tu-negocio-lo-necesita": "/blog/que-es-un-pos-y-para-que-sirve",
  "diferencia-cufe-cune-cude": "/blog/que-es-el-cufe-factura-electronica",
  "verificar-si-una-factura-es-real-dian": "/validar-cufe-dian",
};
