---
title: "Qué es el CUFE de una factura electrónica: CUFE, CUDE y CUNE"
description: "Qué es el CUFE (Código Único de Factura Electrónica), quién lo genera, dónde encontrarlo en la factura y en qué se diferencia del CUDE y el CUNE de la DIAN."
pubDate: 2026-08-29
updatedDate: 2026-10-09
keywords: "qué es el CUFE, CUFE factura electrónica, código único de factura electrónica, CUFE CUDE diferencia, CUNE DIAN, qué es el CUDE"
faq:
  - question: "¿El CUFE es obligatorio en todas las facturas electrónicas?"
    answer: "Sí. Toda factura electrónica de venta válida en Colombia tiene un CUFE. Si un documento no lo tiene, no es una factura electrónica de venta, sin importar qué formato tenga."
  - question: "¿Quién genera el CUFE, la DIAN o el emisor?"
    answer: "Lo calcula el sistema de facturación de quien emite la factura, a partir de los datos del documento y una clave técnica que le asigna la DIAN. Luego la DIAN valida la factura y deja el CUFE registrado, que es lo que permite consultarlo después."
  - question: "¿Qué diferencia hay entre CUFE, CUDE y CUNE?"
    answer: "El CUFE identifica facturas electrónicas de venta. El CUDE identifica otros documentos electrónicos, como notas crédito, notas débito, documentos soporte y el documento equivalente electrónico. El CUNE identifica los documentos de nómina electrónica."
  - question: "Si tengo una tienda o restaurante, ¿cuál código me aplica?"
    answer: "Casi siempre el CUFE, porque es el de las facturas de venta. El CUDE aparece cuando corriges una factura con una nota crédito o débito, y el CUNE solo si tienes empleados y reportas nómina electrónica."
  - question: "¿Puedo usar el CUFE como soporte de un gasto o costo?"
    answer: "Sí: si recibes una factura de un proveedor y su CUFE aparece en la DIAN con los mismos datos del documento, tienes la confirmación de que es un soporte válido para tu contabilidad."
---

Si recibes o emites facturas electrónicas en Colombia, seguramente has visto un código larguísimo llamado CUFE cerca del QR de la factura. Aquí está qué es, de dónde sale y en qué se diferencia de los otros dos códigos que se le parecen: el CUDE y el CUNE.

Si lo que quieres es comprobar una factura concreta, ve directo al [validador de CUFE](/validar-cufe-dian/).

## Qué es el CUFE

CUFE significa **Código Único de Factura Electrónica**. Es una cadena de 96 caracteres (números y letras de la *a* a la *f*) que identifica a una sola factura electrónica de venta en Colombia.

Funciona como una huella digital: se calcula a partir de los datos exactos de la factura —NIT del emisor, número, fecha, valores, impuestos— y de una clave técnica que la DIAN le asigna al emisor. Si alguien altera un solo dato del documento, el CUFE ya no corresponde.

### Quién lo genera

Una confusión común es pensar que el CUFE lo "pone" la DIAN. En realidad:

1. El **sistema de facturación del emisor** calcula el CUFE al crear la factura.
2. La factura se envía a la **DIAN**, que la valida.
3. Una vez validada, el CUFE queda registrado y **cualquiera puede consultarlo** para confirmar que la factura existe.

Por eso el CUFE no se puede inventar: un PDF puede copiar el logo y el formato de una factura, pero no puede traer un CUFE que la DIAN tenga registrado con esos mismos datos.

## Para qué sirve

- **Confirma que la factura fue validada por la DIAN.** No es un documento armado a mano.
- **Sirve como soporte de costos y gastos.** Si recibes facturas de proveedores, el CUFE te da certeza de que puedes contabilizarlas.
- **Da trazabilidad.** Permite ubicar el documento exacto sin depender de una copia física que se puede perder o alterar.

## Dónde encontrar el CUFE en una factura

- **En la representación gráfica** (el PDF o el impreso), normalmente abajo o cerca del código QR.
- **Dentro del código QR.** Es la vía más rápida: escanearlo en vez de transcribir 96 caracteres a mano.
- **En el archivo XML**, si te enviaron la factura completa y no solo el PDF.

## CUFE, CUDE y CUNE: cuál es cuál

Los tres cumplen la misma función —ser la huella de un documento electrónico registrado ante la DIAN—; la diferencia es **qué tipo de documento** identifica cada uno:

| Código | Significa | Identifica |
|---|---|---|
| **CUFE** | Código Único de Factura Electrónica | Facturas electrónicas de venta |
| **CUDE** | Código Único de Documento Electrónico | Notas crédito y débito, documento soporte, documento equivalente electrónico (como el tiquete POS electrónico) |
| **CUNE** | Código Único de Nómina Electrónica | Documentos de nómina electrónica de los empleados |

**Si tienes una tienda, un restaurante o una peluquería**, el que te importa en el día a día es el CUFE: es el de cada factura de venta. Te vas a topar con un CUDE cuando corrijas una factura con una nota crédito, y con el CUNE solo si tienes empleados y reportas nómina electrónica.

Si buscaste "CUNE" pensando en una factura de venta, lo que necesitas es el CUFE.

## Cómo comprobar una factura con el CUFE

Una factura electrónica es legítima cuando:

1. **El CUFE tiene el formato correcto:** 96 caracteres, sin espacios ni símbolos extraños.
2. **Aparece en la DIAN** al consultarlo.
3. **Los datos que devuelve la DIAN coinciden** con los de la factura que tienes: emisor, valor, fecha y destinatario.

El [validador de CUFE de Rosiv](/validar-cufe-dian/) revisa el formato al instante y te lleva a la consulta oficial de la DIAN, con lo que tienes que comparar y qué hacer si la factura no aparece.

## Cómo lo resuelve Rosiv

Validar CUFEs sirve para revisar facturas que ya existen. Cuando eres tú quien factura, Rosiv genera el CUFE de cada venta y transmite la factura a la DIAN en el momento —o apenas vuelve el internet, si estabas sin conexión—, sin que tengas que copiar ni revisar códigos.

Puedes [probar Rosiv gratis](https://web.rosivhub.com).
