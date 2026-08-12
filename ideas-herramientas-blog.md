# Ideas de herramientas gratuitas tipo calculadora (pendiente)

Mismo formato que `/calcular-digito-verificacion-nit`: herramienta gratis sin registro +
contenido educativo corto + FAQ + upsell hacia Rosiv. Buscan tráfico SEO transaccional
("calculadora de X") y convierten a gente que ya tiene el dolor específico en el momento
exacto en que lo tiene.

## 1. Calculadora de precio de venta / margen de ganancia

- Input: costo del producto + margen deseado (%) → Output: precio de venta sugerido.
  O al revés: precio de venta + costo → margen real que estás dejando.
- Público: tenderos y restaurantes que hoy ponen precios "al ojo" y no saben si están
  ganando o regalando el producto.
- Menor volumen de búsqueda que "dígito de verificación NIT", pero conecta directo con
  el dolor diario de fijar precios, más cercano al uso real de un POS.
- Upsell natural: "Rosiv calcula esto automáticamente por cada producto de tu inventario".

## 2. Calculadora de IVA (con/sin IVA, 19% / 5% / exento)

- Input: valor + tipo de tarifa → Output: valor con IVA, valor sin IVA, y el IVA como tal.
- Alto volumen de búsqueda en Colombia ("calcular IVA Colombia").
- Público: tenderos y restaurantes armando precios o verificando cuánto declarar.
- Riesgo: hay muchos competidores ya posicionados para esta keyword (más que para DV NIT).
- Upsell natural: "Rosiv calcula el IVA automático en cada factura, sin que tengas que
  sacar cuentas".

## Notas generales para cuando se retomen

- Reusar la misma estructura de página (hero con calculadora + explicación + FAQ + upsell)
  ya montada en `src/pages/calcular-digito-verificacion-nit.astro`.
- Verificar fórmulas con fuente oficial (DIAN) antes de programar, igual que se hizo con
  el algoritmo módulo 11 del DV.
- Considerar extraer el layout de "página herramienta" a un componente compartido si se
  hacen 2+ calculadoras más, para no duplicar estilos.
