---
title: "Cómo consultar el dígito de verificación de un NIT o RUT"
description: "Dónde encontrar el DV de una empresa o persona: en el RUT, en la factura, en el certificado de cámara de comercio, o calculándolo desde el NIT cuando no tienes el documento a mano."
pubDate: 2026-09-05
keywords: "consultar digito de verificacion, consultar dígito de verificación rut, digito de verificacion cedula, como saber el dv de una empresa, digito de verificacion rut, buscar dv nit"
faq:
  - question: "¿Dónde puedo consultar el dígito de verificación de un NIT?"
    answer: "Aparece en el RUT del contribuyente (después del NIT, separado por un guion), en el certificado de existencia y representación de la cámara de comercio, y en cualquier factura que esa empresa haya emitido. Si no tienes ninguno de esos documentos, el DV se puede calcular a partir del número del NIT con la fórmula oficial de la DIAN."
  - question: "¿El dígito de verificación de mi cédula es el mismo del NIT?"
    answer: "Para una persona natural, el NIT es el mismo número de la cédula, así que el DV se calcula sobre ese número y es el mismo en ambos casos. Aparece en tu RUT justo después del número de documento."
  - question: "¿Cómo sé el DV de una empresa si solo tengo su NIT?"
    answer: "No hace falta buscarlo en ningún registro: el DV se deduce matemáticamente del NIT con la fórmula de módulo 11 que usa la DIAN. Con el número del NIT completo se puede calcular el dígito exacto, y va a coincidir con el que aparece en sus documentos oficiales."
  - question: "¿Se puede consultar el dígito de verificación en la página de la DIAN?"
    answer: "El DV aparece en el RUT que se descarga desde el portal de la DIAN con las credenciales del contribuyente. Para consultar el de un tercero sin acceso a su RUT, lo práctico es tomarlo de una factura suya, del certificado de cámara de comercio, o calcularlo desde el NIT."
  - question: "¿Por qué el DV que calculé no coincide con el de la factura?"
    answer: "Casi siempre es un error de digitación en el NIT: un dígito de más, de menos, o cambiado de orden. También pasa cuando se intenta calcular el DV incluyendo el propio DV dentro del número, o cuando se usa un NIT con puntos y espacios mal copiados."
---

Hay dos preguntas que parecen la misma y no lo son: *"¿cómo calculo el DV?"* y *"¿dónde consulto el DV?"*

Si estás llenando una factura y necesitas el dígito de verificación de un cliente, no quieres una fórmula — quieres el número. Esta guía es para ese caso.

## Los cuatro lugares donde ya está escrito

Antes de calcular nada, revisa si tienes a mano alguno de estos. El DV ya está ahí:

**1. El RUT.** Es el lugar oficial. Aparece justo después del NIT, separado por un guion: `900123456-8`. Ese `8` es el DV. Si es tu propio DV, descargas tu RUT desde el portal de la DIAN con tus credenciales.

**2. Una factura de esa empresa.** Toda factura lleva el NIT completo del emisor con su DV. Si el cliente ya te facturó alguna vez, o tienes una factura suya, ahí está.

**3. El certificado de cámara de comercio.** El certificado de existencia y representación legal incluye el NIT con su dígito de verificación.

**4. La cédula, para personas naturales.** Si es una persona natural, su NIT **es** su número de cédula. El DV se calcula sobre ese número y aparece en su RUT.

## Cuando no tienes ninguno de los cuatro

Aquí está la parte que mucha gente no sabe: **el DV no es un dato secreto que haya que buscar en un registro. Es un número que se deduce del NIT.**

La DIAN lo calcula con una fórmula pública (módulo 11). Eso significa que si tienes el NIT completo, puedes obtener el DV exacto sin consultarle nada a nadie — y va a coincidir con el que aparece en los documentos oficiales de esa empresa.

Puedes hacerlo directo en nuestra [calculadora de dígito de verificación](/calcular-digito-verificacion-nit): escribes el NIT y te da el DV.

## Por qué esto importa al facturar

El error más común de la facturación electrónica en Colombia es exactamente este: **NIT y DV que no coinciden.** La DIAN rechaza el documento, y el rechazo casi nunca es culpa del sistema — es una digitación mala.

Los casos típicos:

- Se copió el NIT sin el DV y se puso uno "de memoria".
- Se copió con el DV incluido dentro del número del NIT (por ejemplo, escribir `9001234568` como si fuera el NIT).
- El NIT venía con puntos o espacios y se copió mal.
- Se confundió el DV del cliente con el de otro.

## Cómo evitar el problema de raíz

Tres prácticas que ahorran muchos rechazos:

1. **Guarda el cliente una sola vez, bien.** Si el que siempre pide factura queda registrado con su NIT y DV correctos, no vuelves a digitarlo nunca.
2. **Que el sistema valide el DV al escribirlo.** Si el sistema calcula el DV a partir del NIT y avisa cuando no coincide, el error se detecta antes de emitir, no cuando la DIAN rechaza.
3. **Copia el NIT de un documento, no de memoria.** Del RUT, de una factura, del certificado. Nunca de lo que alguien dictó por teléfono sin verificar.

## Un detalle sobre "consultar el DV de un tercero"

No existe un buscador público donde metas un nombre de empresa y salga su NIT con DV. La información del RUT de un tercero no es de acceso abierto.

Lo que sí puedes hacer, y es lo práctico: **pídele el NIT completo al cliente** (con DV), o toma el NIT de un documento suyo y calcula el DV. El resultado es el mismo.

## Cómo lo resuelve Rosiv

En Rosiv guardas los datos del cliente que factura frecuente una sola vez, con su NIT y DV, para que las siguientes facturas salgan sin volver a digitar ni arriesgarte a un rechazo por un dígito mal escrito.

Puedes [empezar gratis con Rosiv](https://web.rosivhub.com).
