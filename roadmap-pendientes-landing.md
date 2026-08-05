# Roadmap: qué falta implementar (y cómo actualizar la landing cuando esté listo)

Este archivo es una checklist viva. Cada sección es algo que la landing ya
"vende" como visión pero que **todavía no existe en el sistema real** (o está
a medias). Cuando el sistema alcance ese punto, marca la casilla y sigue las
instrucciones para actualizar el copy en `index.html`.

---

## 1. Facturación electrónica DIAN por WhatsApp

**Estado actual:** en integración final. El sistema ya es un POS real y
factura, pero el envío automático de la factura por WhatsApp todavía no está
activo para clientes.

Hoy aparece marcado como "próximamente / muy pronto" en:

- Hero → floating card `WhatsApp: muy pronto`
- Sección Features → tarjeta "Envío por WhatsApp" con badge `Próximamente`
- Plan Pro → línea "Envío por WhatsApp (muy pronto)"
- FAQ → pregunta "¿Ya puedo facturar por WhatsApp?"

**Cuando esté activo en producción:**

- [ ] Quitar "muy pronto" / el badge `Próximamente` en esos 3 puntos.
- [ ] Cambiar la respuesta del FAQ a algo como: "Sí, tu factura llega directo
      al WhatsApp de tu cliente en segundos."
- [ ] Revisar si el plan Gratis debe seguir sin esta función (bullet
      deshabilitado "Sin envío automático por WhatsApp") o si también aplica.
- [ ] El badge del hero ("Muy pronto: tu equipo de empleados con IA") puede
      quedar igual, ya que apunta a los empleados virtuales, no a esto.

---

## 2. Empleados virtuales con IA (Mía, Leo, Sofía)

**Estado actual:** no existen todavía. Se presentan únicamente como visión /
roadmap, con la etiqueta "Próximamente" bien visible, para diferenciar a
Rosiv sin prometer algo que no se puede entregar hoy.

Aparecen en:

- Hero → badge "Muy pronto: tu equipo de empleados con IA"
- Sección oscura `#empleados-ia` con las 3 tarjetas (Mía / Leo / Sofía)
- Plan Pro → línea "Acceso anticipado a los empleados virtuales"

**Cuando el primer agente (ej. Mía) esté en beta real:**

- [ ] Cambiar el badge de la sección de "Próximamente" a "Beta" o "Nuevo".
- [ ] Reescribir el copy de esa tarjeta en presente/indicativo real (ya no
      "cobrará, facturará...", sino "cobra, factura...").
- [ ] Evaluar mover la sección más arriba en la página (el brief original
      la posiciona como diferenciador central una vez sea real).
- [ ] Actualizar el mockup del celular del hero para mostrar la conversación
      real con el agente (hoy muestra solo un tiquete de venta, a propósito,
      para no simular una función que no existe).
- [ ] Si aplica, agregar "1 empleado virtual básico" al plan Gratis (así lo
      sugiere el brief), pero solo cuando sea real.

---

## 3. Acceso al sistema (registro / login)

**Estado actual:** ✅ resuelto (2026-08-05). El sistema real ya está en
`https://web.rosivhub.com` — ahí la gente se registra, entra y lo prueba.
Los botones principales de "Empieza gratis" / "Probar 7 días gratis" en el
nav, el hero, y los planes Gratis y Pro ahora llevan directo a ese link
(antes todos apuntaban a WhatsApp). WhatsApp se dejó como canal secundario
("¿Prefieres hablar antes?") en el CTA final, y como único canal para
"Hablar con ventas" (plan Empresa) y el ícono del footer.

**Aún pendiente:**

- [ ] Todavía no hay link de descarga para desktop ni para la app mobile.
      Por ahora la landing no promete descarga — solo dirige al sistema web
      (`web.rosivhub.com`). Cuando existan esos links:
  - Agregar botones o una sección de "Descarga la app" (desktop/mobile) en
    el hero o en el CTA final, sin quitar el acceso web.
  - Revisar si conviene distinguir "Prueba desde tu navegador" vs
    "Descarga la app" como dos caminos distintos.
- [ ] Confirmar si `https://web.rosivhub.com` es la URL correcta para TODOS
      los CTAs, o si el registro de nuevos usuarios debería vivir en una
      ruta distinta (ej. `/signup`) en vez de la raíz del dominio.

---

## 4. Datos de contacto reales

**Estado actual:** los botones de WhatsApp que quedan (Plan Empresa, CTA
final secundario, footer) usan el número de ejemplo
`https://wa.me/573000000000`.

- [ ] Reemplazar `573000000000` por el número real en todo `index.html`
      (buscar ese texto para encontrarlas todas).
- [ ] Definir si se quiere un correo de contacto visible además de WhatsApp.

---

## 5. Prueba social real

**Estado actual:** no se agregaron testimonios. El brief recomienda
testimonios cortos con nombre, tipo de negocio y ciudad (o un video corto),
pero no existían casos reales para usar, así que no se inventó ninguno.

- [ ] Cuando haya 2-3 clientes dispuestos a dar su testimonio, agregar una
      sección "Lo que dicen los negocios que ya usan Rosiv" con nombre real,
      tipo de negocio y ciudad.
- [ ] Confirmar antes de cada actualización que la cifra "76.000+ ventas
      procesadas" (usada en el hero) sigue siendo correcta.

---

## 6. Redes sociales del footer

**Estado actual:** se dejó solo el ícono de WhatsApp en el footer. Instagram
y LinkedIn se quitaron porque apuntaban a `href="#"` (enlaces muertos).

- [ ] Si existen perfiles reales, volver a agregarlos en `.footer-social`
      con su URL real.

---

## 7. Identidad de marca

- [x] Colores oficiales (`#5F1BBF`) y tipografía Aristotelica Display +
      Inter ya aplicados en `styles.css` (2026-08-05).
- [ ] Pendiente: comprar la licencia completa de Aristotelica Display antes
      de publicar en producción — hoy se usan los `.ttf` de prueba en
      `assets/fonts/`.

---

## 8. Otros pendientes técnicos

- [x] Favicon generado y enlazado (`favicon-16x16.png`, `favicon-32x32.png`,
      `apple-touch-icon.png`, `icon-192x192.png`, `icon-512x512.png`), a partir
      de `assets/brand/ROSIV LOGO REDES SOCIALES 2.png` (isotipo a bordes
      rectos, sin redondeo — ideal para que iOS/Android apliquen su propia
      máscara) (2026-08-05).
- [ ] Confirmar que `og-image.jpg` (usado para compartir en redes) existe.
- [ ] El toggle de precio mensual/anual se quitó de la sección de Precios
      porque no tenía lógica funcional detrás. Si en el futuro se define un
      descuento anual real, se puede reintroducir con su JS correspondiente.

---

## 9. SEO / visibilidad en buscadores e IAs (ChatGPT, Perplexity, Gemini)

**Estado actual:** el sitio estaba prácticamente invisible — sin datos
estructurados, con `og-image.jpg` roto (404), y con archivos viejos
(`2.html`, `4.html`, `test.html`, `styles_new.css`, `styles_old.css`) del
diseño anterior servidos en vivo en producción con un título desactualizado
("Potencia tu Restaurante con Tecnología Inteligente"), compitiendo con la
página real. `site:rosivhub.com` no devolvía ningún resultado en Google.

**Lo que se hizo (2026-08-05):**

- [x] Se eliminaron los archivos viejos huérfanos que estaban en
      producción (`2.html`, `4.html`, `test.html`, `styles_new.css`,
      `styles_old.css`) — eran contenido duplicado/desactualizado que
      confundía a los buscadores.
- [x] Se creó `og-image.jpg` (1200x630, antes daba 404) a partir del
      isotipo de marca, para que los links compartidos en WhatsApp,
      redes y buscadores muestren una vista previa correcta.
- [x] Se agregaron datos estructurados (`application/ld+json`) de tipo
      `Organization`, `SoftwareApplication` y `FAQPage` en `index.html`,
      para que Google y las IAs puedan entender y citar con precisión
      qué es Rosiv, sus planes y las preguntas frecuentes.
- [x] Se reescribió el `<title>` y `meta description` para incluir
      palabras clave reales de búsqueda ("sistema POS Colombia",
      "facturación electrónica DIAN", "tenderos", "pymes") en vez de
      solo el eslogan de marca.
- [x] Se agregaron las palabras "tenderos, restaurantes familiares y
      peluquerías" (la audiencia real del brief) al hero y a Features,
      para calzar con búsquedas específicas de esos negocios.
- [x] Se actualizó `robots.txt` para permitir explícitamente a los
      rastreadores de IA (GPTBot, ClaudeBot, PerplexityBot,
      Google-Extended, etc.), no solo a los buscadores tradicionales.
- [x] Se creó `llms.txt` en la raíz — un resumen del producto pensado
      para que los asistentes de IA lo lean directamente al responder
      preguntas sobre Rosiv.
- [x] Se limpió `sitemap.xml` (los links con `#ancla` no son páginas
      indexables reales; se dejaron solo la home y la política de
      privacidad) y se actualizaron las fechas.
- [x] Se agregó `preconnect` para las fuentes y Font Awesome (mejora
      velocidad de carga, que también es señal de ranking).

**Lo que falta y requiere una acción tuya (no la puedo hacer yo):**

- [ ] **Google Search Console**: registrar `rosivhub.com`, verificar
      propiedad y enviar el sitemap (`https://rosivhub.com/sitemap.xml`)
      para pedirle a Google que indexe el sitio ahora. Sin esto, puede
      tardar semanas en aparecer solo.
- [ ] **Bing Webmaster Tools**: lo mismo, para aparecer en Bing/Copilot.
- [ ] **Google Business Profile**: crear un perfil de negocio (aparece
      en Google Maps y en el panel lateral cuando alguien busca "POS
      Colombia" o similar) — requiere una cuenta de Google del negocio.
- [ ] **Backlinks reales**: pedir que directorios de software
      colombianos (ComparaSoftware, SoftwareSuggest, Capterra, etc.) y
      medios locales enlacen a rosivhub.com — los enlaces externos son
      la señal más fuerte para posicionar contra competidores ya
      establecidos (Alegra, Aliaddo, SandigoPOS, POS Colombia).
- [ ] **Contenido**: un blog corto (2-4 posts) respondiendo preguntas
      reales como "cómo facturar electrónicamente si tengo una tienda
      de barrio" ayuda mucho más a aparecer en ChatGPT/Perplexity que
      la landing sola, porque esos motores citan contenido informativo,
      no solo páginas de venta.
- [ ] Confirmar que `og-image.jpg` (ya generado) se ve bien al compartir
      el link real en WhatsApp/Twitter una vez esté desplegado.

---

## Nota sobre el mensaje general de la landing

La landing vende la visión completa (POS + facturación por WhatsApp +
empleados virtuales) porque así conecta mejor con la audiencia, pero cada
pieza que aún no existe está marcada explícitamente como "próximamente" o
"muy pronto" — nunca como disponible. Mantén esa distinción cada vez que
agregues una función nueva: primero lánzala como visión marcada, y solo
quita la etiqueta cuando esté funcionando de verdad para el cliente final.
