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

## 3. Datos de contacto reales

**Estado actual:** todos los botones de WhatsApp usan el número de ejemplo
`https://wa.me/573000000000` (nav, hero, los 3 planes de precios, CTA final
y footer — son ~8 apariciones).

- [ ] Reemplazar `573000000000` por el número real en todo `index.html`
      (buscar ese texto para encontrarlas todas).
- [ ] Definir si se quiere un correo de contacto visible además de WhatsApp.

---

## 4. Prueba social real

**Estado actual:** no se agregaron testimonios. El brief recomienda
testimonios cortos con nombre, tipo de negocio y ciudad (o un video corto),
pero no existían casos reales para usar, así que no se inventó ninguno.

- [ ] Cuando haya 2-3 clientes dispuestos a dar su testimonio, agregar una
      sección "Lo que dicen los negocios que ya usan Rosiv" con nombre real,
      tipo de negocio y ciudad.
- [ ] Confirmar antes de cada actualización que la cifra "76.000+ ventas
      procesadas" (usada en el hero) sigue siendo correcta.

---

## 5. Redes sociales del footer

**Estado actual:** se dejó solo el ícono de WhatsApp en el footer. Instagram
y LinkedIn se quitaron porque apuntaban a `href="#"` (enlaces muertos).

- [ ] Si existen perfiles reales, volver a agregarlos en `.footer-social`
      con su URL real.

---

## 6. Identidad de marca

- [x] Colores oficiales (`#5F1BBF`) y tipografía Aristotelica Display +
      Inter ya aplicados en `styles.css` (2026-08-05).
- [ ] Pendiente: comprar la licencia completa de Aristotelica Display antes
      de publicar en producción — hoy se usan los `.ttf` de prueba en
      `assets/fonts/`.

---

## 7. Otros pendientes técnicos

- [ ] Confirmar que `favicon.ico` y `apple-touch-icon.png` (referenciados en
      `<head>`) existen en el servidor de producción — no están en este repo.
- [ ] Confirmar que `og-image.jpg` (usado para compartir en redes) existe.
- [ ] El toggle de precio mensual/anual se quitó de la sección de Precios
      porque no tenía lógica funcional detrás. Si en el futuro se define un
      descuento anual real, se puede reintroducir con su JS correspondiente.

---

## Nota sobre el mensaje general de la landing

La landing vende la visión completa (POS + facturación por WhatsApp +
empleados virtuales) porque así conecta mejor con la audiencia, pero cada
pieza que aún no existe está marcada explícitamente como "próximamente" o
"muy pronto" — nunca como disponible. Mantén esa distinción cada vez que
agregues una función nueva: primero lánzala como visión marcada, y solo
quita la etiqueta cuando esté funcionando de verdad para el cliente final.
