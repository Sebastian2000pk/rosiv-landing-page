# Mantenimiento del contenido SEO

Qué revisar y cuándo, para que el blog no envejezca mal.

## 1. Cada enero (obligatorio) — la UVT cambia

La DIAN fija el valor de la UVT en diciembre para el año siguiente. Cuando eso pase,
estos posts quedan desactualizados **el 1 de enero**, con cifras en pesos incorrectas.

**Los slugs ya NO llevan el año** (decisión de sept. 2026), así que actualizarlos no
requiere renombrar archivos, crear redirects ni arreglar enlaces internos: se editan
las cifras y el título visible, y listo.

| Post | Qué actualizar |
|---|---|
| `topes-para-facturar-electronicamente.md` | Valor UVT, tope en pesos (3.500 UVT), promedio mensual, año en título/slug/keywords |
| `tabla-regimen-simple-tienda-restaurante.md` | Valor UVT, toda la tabla de rangos en pesos, nº de resolución DIAN, año |
| `calendario-tributario-tienda-restaurante.md` | Todas las fechas de vencimiento del nuevo calendario |
| `cuanto-cuesta-un-empleado-salario-minimo.md` | Salario mínimo, auxilio de transporte, cálculo de carga prestacional |

**Cómo actualizarlos — importante para el SEO:**

NO crear un post nuevo `...-2027.md`. Eso parte la autoridad acumulada y deja el
viejo rankeando con datos incorrectos. El slug es evergreen justamente para evitarlo.
Para cada post:

1. Editar las cifras (UVT, tablas en pesos, fechas, nº de resolución DIAN).
2. Cambiar el **año en el título y en `keywords`** (`...en 2026` → `...en 2027`).
   El año sigue estando en el título — que es lo que ve la gente en Google — solo
   que ya no en la URL.
3. Añadir `updatedDate` con la fecha del cambio. Se muestra como "Actualizado el…"
   y alimenta `dateModified` del schema.
4. Buscar menciones al año viejo en el cuerpo: `grep -rn "2026" src/content/blog/`

No hay que tocar URLs, redirects ni enlaces internos.

### Redirects de los slugs viejos

`src/pages/blog/[...redirect].astro` mantiene vivas las 4 URLs con año que existieron
antes (`...-2026`). GitHub Pages no soporta 301 de servidor, así que son páginas con
`rel=canonical` + `noindex` + meta refresh — Google consolida la señal en el destino.

Se pueden borrar cuando Search Console deje de reportar tráfico a esas URLs (~6 meses).
No hay que añadir entradas nuevas: los slugs actuales ya no cambian.

## 2. Menciones a productos de la competencia

Estos posts hablan de Siigo, Alegra y Loyverse:

- `siigo-alegra-pos-comparacion-negocio-pequeno.md`
- `loyverse-alternativa-colombia-facturacion-dian.md`

**Regla: no poner precios ni cifras de planes de la competencia.** Cambian sin aviso,
y un dato viejo sobre un competidor es el único punto ahí que podría leerse como
engañoso (Ley 256 de 1996, competencia desleal). Los posts hoy están escritos
sin cifras a propósito — mantenerlo así.

**Revisar ~cada 6 meses** que sigan siendo ciertas las afirmaciones estructurales:

- Que Loyverse no está habilitado como facturador electrónico ante la DIAN.
- Que Siigo y Alegra no operan sin conexión.

Si alguno lanza modo offline o habilitación DIAN, hay que corregir el post. Es la
clase de afirmación verificable sobre la que se juzga la publicidad comparativa.

## 3. Afirmaciones sobre Rosiv

**Rosiv emite factura electrónica a través de un proveedor tecnológico habilitado**
(confirmado sept. 2026), no con habilitación propia. Los posts están redactados así:

> "Emite factura electrónica válida ante la DIAN, a través de un proveedor
> tecnológico habilitado que ya viene integrado."

Es exacto y no pierde fuerza comercial: para el cliente lo relevante es que la factura
sea válida y salga de la misma venta, no el mecanismo legal de fondo.

**No escribir** "Rosiv está habilitado como facturador electrónico ante la DIAN" —
eso afirma habilitación propia. Si algún día Rosiv la obtiene, actualizar y quitar
esta nota. Revisar con:

    grep -rn "Rosiv.*habilitad\|habilitad.*Rosiv" src/

Nota relacionada: el post `sistema-pos-colombia-como-elegir` explica que las dos vías
(habilitación propia o vía proveedor) producen facturas igual de válidas, y pone el
criterio de comparación donde sí importa — si la factura sale de la misma venta o toca
abrir otro sistema. Mantener ese encuadre; un criterio del tipo "¿tiene habilitación
propia?" descalificaría a Rosiv sin describir ninguna diferencia real para el usuario.

También revisar tras cualquier cambio de planes o precios:

    grep -rn "Plan Pro\|plan gratuito\|gratis" src/content/blog/ | grep -i rosiv

## 4. Contenido evergreen (bajo mantenimiento)

Estos no llevan cifras que caduquen y no requieren revisión periódica:
`que-es-un-pos-y-para-que-sirve`, `que-significa-pos-punto-de-venta`,
`sistema-pos-colombia-como-elegir`, `sistema-pos-gratis-colombia-que-esperar`,
`loyverse-alternativa-colombia-facturacion-dian`,
`siigo-alegra-pos-comparacion-negocio-pequeno`,
y los de operación del negocio (fiado, food cost, punto de equilibrio, mesas).

Se escribieron a propósito sin cifras fijas: los topes se mencionan como
"el tope en UVT que fija la DIAN" y se enlaza al post anual, que es el único
sitio donde vive el número. Mantener ese patrón al escribir contenido nuevo —
**una sola fuente de verdad por cifra.**

## 5. Chequeo rápido antes de publicar contenido nuevo

- ¿Hay una cifra en pesos que suba cada año? → enlazar al post anual, no repetirla.
- ¿Hay un precio de la competencia? → quitarlo.
- ¿Hay un "actualmente" o "este año"? → cambiar por algo sin fecha implícita.
- ¿Editaste un post viejo? → añadirle `updatedDate`.

## 6. Verificar que nada se rompió

    npx astro build

    # enlaces internos rotos
    grep -rho 'href="/blog/[a-z0-9-]*' dist | sed 's|href="/blog/||' | sort -u > /tmp/links.txt
    ls dist/blog | sort > /tmp/pages.txt
    comm -23 /tmp/links.txt /tmp/pages.txt   # vacío = todo bien
