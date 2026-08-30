---
title: "Qué es el Dígito de Verificación del NIT y por qué la DIAN lo pide"
description: "Explicación completa del dígito de verificación (DV) del NIT y el RUT en Colombia: para qué sirve, cómo se calcula con la fórmula módulo 11, y qué hacer cuando una factura se rechaza por este error."
pubDate: 2026-08-29
keywords: "qué es el dígito de verificación, dígito de verificación NIT, DV NIT, dígito de verificación RUT, módulo 11 DIAN, para qué sirve el DV"
faq:
  - question: "¿Qué pasa si mi dígito de verificación está mal en una factura?"
    answer: "La DIAN rechaza el documento porque el NIT y el DV no coinciden según la fórmula oficial. Es el error de facturación electrónica más común y casi siempre se debe a un error de digitación al escribir el NIT, no a un problema del sistema."
  - question: "¿El dígito de verificación es parte del NIT o es un número aparte?"
    answer: "Es un número adicional, no parte del NIT en sí. El NIT identifica al contribuyente; el DV solo sirve para confirmar que ese NIT está bien escrito. Por eso siempre se muestra separado con un guion, por ejemplo 900123456-8."
  - question: "¿Todas las empresas y personas tienen dígito de verificación?"
    answer: "Sí, toda persona natural o jurídica inscrita en el RUT tiene un dígito de verificación calculado a partir de su NIT o cédula, sin excepción — es parte del proceso de inscripción ante la DIAN."
---

Si alguna vez te ha rechazado una factura electrónica, es muy probable que el mensaje de error haya mencionado el "dígito de verificación". Aquí explicamos qué es exactamente, para qué sirve y cómo se calcula, sin tecnicismos.

## ¿Qué es el dígito de verificación (DV)?

El dígito de verificación es un número de control, del 0 al 9, que la DIAN calcula a partir de tu NIT o cédula usando una fórmula matemática fija. No es un número que tú eliges ni que te asignan al azar: sale directamente de los dígitos de tu NIT, aplicando siempre la misma operación.

Su función es simple: confirmar que un NIT está bien escrito antes de usarlo en una factura, un contrato o cualquier trámite. Si alguien digita mal un solo número del NIT, el dígito de verificación ya no coincide — y eso es justamente lo que permite detectar el error automáticamente, sin que una persona tenga que revisarlo a mano.

## ¿Por qué existe este número?

Antes de la facturación electrónica, un NIT mal escrito en un documento en papel podía pasar desapercibido durante meses. Con sistemas digitales que cruzan información automáticamente, ese tipo de error se volvió más costoso: una factura con NIT incorrecto puede quedar mal asociada a otra empresa, generar problemas de trazabilidad para la DIAN, o simplemente ser rechazada.

El dígito de verificación resuelve esto de forma automática. Cualquier sistema que reciba tu NIT puede recalcular el DV en el momento y confirmar, sin depender de un ser humano, si el número tiene un error de digitación.

## ¿Cómo se calcula el dígito de verificación?

La DIAN usa el algoritmo conocido como **módulo 11**. El proceso, en resumen:

1. A cada dígito del NIT (contado de derecha a izquierda) se le asigna un peso fijo: 3, 7, 13, 17, 19, 23, 29, 37, 41, 43, 47, 53, 59, 67, 71.
2. Se multiplica cada dígito del NIT por su peso correspondiente.
3. Se suman todos esos resultados.
4. Esa suma se divide entre 11 y se toma el residuo.
5. Si el residuo es 0 o 1, el dígito de verificación es ese mismo residuo. Si es cualquier otro número, el DV es 11 menos el residuo.

Es un cálculo mecánico, pero fácil de equivocarse a mano — un solo error en el orden de los pesos cambia el resultado completo. Por eso lo más práctico es usar una calculadora que aplique la fórmula exacta.

## DV del NIT y DV del RUT: la misma cosa

Una confusión común es pensar que el "DV del RUT" es un número distinto al "DV del NIT". No lo es: el RUT es el documento donde la DIAN registra tu NIT junto con su dígito de verificación. Cuando alguien te pide el DV de tu RUT, te está pidiendo exactamente el mismo dígito que corresponde a tu NIT.

## Cuándo vas a necesitar el DV en el día a día de tu negocio

- Al inscribir o actualizar tu RUT ante la DIAN.
- Al configurar por primera vez un sistema de facturación electrónica.
- Cuando un proveedor o cliente te pide tu "NIT completo", que incluye el DV.
- Cuando una factura sale rechazada y necesitas confirmar que el número esté bien digitado.

## Calcula tu dígito de verificación gratis

Si necesitas el DV de tu NIT o cédula ahora mismo, puedes calcularlo al instante con la [calculadora de dígito de verificación de Rosiv](/calcular-digito-verificacion-nit), que aplica la fórmula oficial de la DIAN y te da el número completo listo para copiar.

## Cómo lo resuelve Rosiv

Calcular el DV a mano es solo el primer paso de facturar bien. Rosiv es un sistema POS con facturación electrónica DIAN incluida: genera cada factura con el NIT y el DV correctos automáticamente, sin que tengas que calcular nada a mano cada vez que vendes.

Puedes [probar Rosiv gratis](https://web.rosivhub.com) y dejar de preocuparte por errores de digitación en tus facturas.
