---
title: "Dígito de verificación (DV) del NIT: qué es, cómo consultarlo y calcularlo"
description: "Qué es el dígito de verificación del NIT y el RUT, dónde consultarlo cuando no tienes el documento, cómo se calcula con el módulo 11 de la DIAN y la fórmula lista para Excel."
pubDate: 2026-09-05
updatedDate: 2026-10-09
keywords: "digito de verificacion, consultar digito de verificacion, digito de verificacion nit, digito de verificacion rut, digito de verificacion excel, que es el dv, modulo 11 dian"
faq:
  - question: "¿Dónde puedo consultar el dígito de verificación de un NIT?"
    answer: "Aparece en el RUT del contribuyente (después del NIT, separado por un guion), en el certificado de existencia y representación de la cámara de comercio, y en cualquier factura que esa empresa haya emitido. Si no tienes ninguno de esos documentos, el DV se puede calcular a partir del número del NIT con la fórmula oficial de la DIAN."
  - question: "¿El dígito de verificación es parte del NIT o es un número aparte?"
    answer: "Es un número adicional, no parte del NIT en sí. El NIT identifica al contribuyente; el DV solo sirve para confirmar que ese NIT está bien escrito. Por eso siempre se muestra separado con un guion, por ejemplo 900123456-8."
  - question: "¿El dígito de verificación de mi cédula es el mismo del NIT?"
    answer: "Para una persona natural, el NIT es el mismo número de la cédula, así que el DV se calcula sobre ese número y es el mismo en ambos casos. Aparece en tu RUT justo después del número de documento."
  - question: "¿Se puede consultar el dígito de verificación en la página de la DIAN?"
    answer: "El DV aparece en el RUT que se descarga desde el portal de la DIAN con las credenciales del contribuyente. Para consultar el de un tercero sin acceso a su RUT, lo práctico es tomarlo de una factura suya, del certificado de cámara de comercio, o calcularlo desde el NIT."
  - question: "¿Por qué mi fórmula de Excel da un resultado distinto al de la DIAN?"
    answer: "El error más común es el orden de los pesos: deben aplicarse de derecha a izquierda sobre el NIT, no de izquierda a derecha. El segundo es olvidar la regla final: si el residuo es 0 o 1, el DV es ese mismo número; si es cualquier otro valor, el DV es 11 menos el residuo."
  - question: "¿Por qué el DV que calculé no coincide con el de la factura?"
    answer: "Casi siempre es un error de digitación en el NIT: un dígito de más, de menos, o cambiado de orden. También pasa cuando se calcula el DV incluyendo el propio DV dentro del número, o cuando el NIT se copió con puntos y espacios."
---

Si necesitas el dígito de verificación de un NIT, hay dos caminos: **buscarlo en un documento donde ya está escrito** o **calcularlo desde el NIT**, porque sale de una fórmula pública de la DIAN. Esta guía cubre los dos, más la fórmula lista para Excel si tienes que sacarlo para una lista entera.

Si solo quieres el número ya, usa la [calculadora de dígito de verificación](/calcular-digito-verificacion-nit/): escribes el NIT o la cédula y te da el DV.

## Qué es el dígito de verificación (DV)

Es un número de control, del 0 al 9, que la DIAN calcula a partir de tu NIT o cédula. No lo eliges tú ni te lo asignan al azar: sale siempre de la misma operación sobre los dígitos del NIT, así que **un mismo NIT siempre tiene el mismo DV**.

Sirve para detectar errores de digitación. Si alguien escribe mal un solo número del NIT, el DV deja de coincidir, y cualquier sistema —el de la DIAN, el de facturación, el del banco— lo detecta sin que una persona lo revise.

Se escribe separado con un guion: en `900123456-8`, el NIT es `900123456` y el DV es `8`.

**DV del NIT y DV del RUT son lo mismo.** El RUT es el documento donde la DIAN registra tu NIT junto con su dígito. Cuando alguien te pide "el DV del RUT", te pide ese mismo número.

## Dónde consultarlo: los cuatro lugares donde ya está escrito

**1. El RUT.** Es el lugar oficial. Aparece justo después del NIT, separado por un guion. Si es tu propio DV, descargas tu RUT desde el portal de la DIAN con tus credenciales.

**2. Una factura de esa empresa.** Toda factura lleva el NIT completo del emisor con su DV.

**3. El certificado de cámara de comercio.** El certificado de existencia y representación legal incluye el NIT con su DV.

**4. La cédula, para personas naturales.** Si es una persona natural, su NIT **es** su número de cédula y el DV se calcula sobre ese número. Si tienes dudas con ese caso, mira [cómo calcular tu NIT a partir de la cédula](/blog/calcular-nit-desde-cedula/).

### Un detalle sobre consultar el DV de un tercero

No existe un buscador público donde metas el nombre de una empresa y salga su NIT con DV: el RUT de un tercero no es de acceso abierto. Lo práctico es **pedirle al cliente el NIT completo**, o tomar el NIT de un documento suyo y calcular el DV. El resultado es el mismo que aparece en sus documentos oficiales.

## Cómo se calcula: el módulo 11 de la DIAN

1. A cada dígito del NIT, **contando de derecha a izquierda**, se le asigna un peso fijo: 3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71.
2. Se multiplica cada dígito por su peso.
3. Se suman todos los productos.
4. Se divide la suma entre 11 y se toma el residuo.
5. Si el residuo es **0 o 1**, el DV es ese mismo número. Si es cualquier otro, el DV es **11 − residuo**.

### Ejemplo resuelto: el NIT de la DIAN (800197268)

| Posición desde la derecha | Dígito | Peso | Producto |
|---|---|---|---|
| 1 | 8 | 3 | 24 |
| 2 | 6 | 7 | 42 |
| 3 | 2 | 13 | 26 |
| 4 | 7 | 17 | 119 |
| 5 | 9 | 19 | 171 |
| 6 | 1 | 23 | 23 |
| 7 | 0 | 29 | 0 |
| 8 | 0 | 37 | 0 |
| 9 | 8 | 41 | 328 |

La suma es **733**. 733 ÷ 11 da residuo **7**. Como no es 0 ni 1, el DV es 11 − 7 = **4**. El NIT completo de la DIAN es `800197268-4`.

## La fórmula en Excel

Calcular el DV a mano tiene sentido para entenderlo; para una base de datos de clientes o proveedores, lo práctico es Excel. Con el NIT en la celda `A1`, sin puntos, guiones ni DV:

**Excel en español** (Microsoft 365 o Excel 2021 en adelante):

```
=LET(n;TEXTO(A1;"0");L;LARGO(n);p;{3;7;13;17;19;23;29;37;41;43;47;53;59;67;71};r;RESIDUO(SUMAPRODUCTO(EXTRAE(n;L-SECUENCIA(L)+1;1)*INDICE(p;SECUENCIA(L)));11);SI(r>1;11-r;r))
```

**Excel en inglés:**

```
=LET(n,TEXT(A1,"0"),L,LEN(n),p,{3;7;13;17;19;23;29;37;41;43;47;53;59;67;71},r,MOD(SUMPRODUCT(MID(n,L-SEQUENCE(L)+1,1)*INDEX(p,SEQUENCE(L))),11),IF(r>1,11-r,r))
```

Copias la fórmula en `B1`, la arrastras hacia abajo y tienes el DV de toda la lista. Qué hace cada parte:

- `EXTRAE(n;L-SECUENCIA(L)+1;1)` separa los dígitos del NIT empezando por la derecha.
- `INDICE(p;SECUENCIA(L))` toma un peso por cada dígito, en el mismo orden.
- `SUMAPRODUCTO` multiplica y suma, y `RESIDUO(...;11)` saca el residuo.
- `SI(r>1;11-r;r)` aplica la regla final del 0 y el 1.

Si tu Excel usa coma como separador en vez de punto y coma, cambia los `;` que separan argumentos por `,` (los de la lista de pesos entre llaves se quedan igual). En versiones anteriores a 2021 no existen `LET` ni `SECUENCIA`; ahí es más fácil usar la calculadora o actualizar Excel.

**Pruébala con un NIT conocido** antes de usarla en tu lista: `800197268` debe dar `4` y `900123456` debe dar `8`.

## Por qué importa al facturar

El error más común de la facturación electrónica en Colombia es exactamente este: **NIT y DV que no coinciden.** La DIAN rechaza el documento, y casi nunca es culpa del sistema sino de una digitación. Los casos típicos:

- Se copió el NIT sin el DV y se puso uno "de memoria".
- Se copió con el DV pegado al número (escribir `9001234568` como si fuera el NIT).
- El NIT venía con puntos o espacios y se copió mal.
- Se confundió el DV de un cliente con el de otro.

Tres prácticas que ahorran la mayoría de los rechazos:

1. **Guarda cada cliente una sola vez, bien.** Si el que siempre pide factura queda registrado con su NIT y DV correctos, no vuelves a digitarlo.
2. **Que el sistema valide el DV al escribirlo.** Si calcula el DV a partir del NIT y avisa cuando no coincide, el error aparece antes de emitir, no cuando la DIAN rechaza.
3. **Copia el NIT de un documento, no de memoria.** Del RUT, de una factura, del certificado. Nunca de lo que alguien dictó por teléfono.

## Cómo lo resuelve Rosiv

En Rosiv guardas los datos del cliente que factura seguido una sola vez, con su NIT y DV, y cada factura electrónica sale con el número correcto sin volver a digitarlo ni arriesgarte a un rechazo.

Puedes [empezar gratis con Rosiv](https://web.rosivhub.com).
