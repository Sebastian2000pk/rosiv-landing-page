---
title: "Fórmula del Dígito de Verificación en Excel Paso a Paso"
description: "Cómo armar la fórmula del dígito de verificación (DV) del NIT en Excel usando el módulo 11 de la DIAN, paso a paso, con la tabla de pesos exacta y los errores más comunes."
pubDate: 2026-09-02
keywords: "digito de verificacion excel, digito de verificacion dian excel, formula digito de verificacion, calcular digito de verificacion excel, modulo 11 excel"
faq:
  - question: "¿Cuál es la fórmula exacta del dígito de verificación en Excel?"
    answer: "No hay una función nativa de Excel para esto — hay que armarla combinando MID (o EXTRAE) para separar cada dígito del NIT, multiplicarlos por los pesos del módulo 11 en orden inverso, sumar los resultados con SUMAPRODUCTO, y aplicar RESIDUO respecto a 11 para obtener el dígito final."
  - question: "¿Por qué mi fórmula de Excel da un resultado distinto al de la DIAN?"
    answer: "El error más común es el orden de los pesos: deben aplicarse de derecha a izquierda sobre el NIT, no de izquierda a derecha. El segundo error común es olvidar el paso final: si el residuo es 0 o 1, el DV es ese mismo número; si es cualquier otro valor, el DV es 11 menos el residuo."
  - question: "¿Vale la pena armar la fórmula en Excel si solo necesito un DV puntual?"
    answer: "Si solo necesitas calcular el DV de un NIT una vez, no vale la pena armar la hoja de cálculo — es más rápido usar una calculadora en línea. La fórmula en Excel tiene sentido cuando necesitas calcular el DV de una lista larga de NITs de una sola vez, por ejemplo para validar una base de datos de clientes o proveedores."
---

Si administras una base de datos de NITs de clientes o proveedores, calcular el dígito de verificación uno por uno no es práctico — ahí es donde vale la pena armar la fórmula en Excel. Aquí está exactamente cómo hacerlo, con los mismos pesos que usa la DIAN.

## Antes de empezar: los pesos del módulo 11

La DIAN calcula el dígito de verificación con el algoritmo **módulo 11**, que usa esta tabla de pesos fijos, aplicados de derecha a izquierda sobre cada dígito del NIT:

```
Posición (desde la derecha): 1   2   3   4   5   6   7   8   9   10  11  12  13  14  15
Peso:                        3   7  13  17  19  23  29  37  41  43  47  53  59  67  71
```

Este orden es el error más común al armar la fórmula: si los pesos se aplican de izquierda a derecha, o en un orden distinto, el resultado no va a coincidir con el que calcula la DIAN.

## Paso a paso en Excel

Supongamos que el NIT está en la celda `A1`, sin puntos ni guiones (por ejemplo `900123456`).

**1. Separar cada dígito.** Usa `EXTRAE` (o `MID` en Excel en inglés) para obtener cada número por separado, contando desde la derecha.

**2. Multiplicar cada dígito por su peso.** El primer dígito desde la derecha se multiplica por 3, el segundo por 7, el tercero por 13, y así sucesivamente según la tabla de arriba.

**3. Sumar todos los productos.** La forma más limpia es con `SUMAPRODUCTO`, que multiplica y suma en un solo paso si tienes los dígitos y los pesos como dos rangos paralelos.

**4. Sacar el residuo de dividir esa suma entre 11.** Usa la función `RESIDUO(suma; 11)`.

**5. Aplicar la regla final:**
   - Si el residuo es **0 o 1**, el dígito de verificación es ese mismo número.
   - Si el residuo es **cualquier otro valor**, el dígito de verificación es `11 - residuo`.

Este último paso también se suele olvidar, y es la segunda causa más común de que el resultado en Excel no coincida con el DV real.

## Los dos errores que arruinan el resultado

- **Orden de los pesos invertido:** aplicar los pesos de izquierda a derecha en vez de derecha a izquierda cambia completamente el resultado, aunque la suma final "se vea" parecida.
- **Olvidar la regla del residuo 0 o 1:** si el residuo ya sale 0 o 1, ese es el DV directamente — no hay que restarle nada a 11. Aplicar la resta en ese caso da un número equivocado.

## Si solo necesitas un DV puntual, no arma la fórmula

Armar y probar esta fórmula tiene sentido si vas a calcular el DV de muchos NITs de una sola vez, por ejemplo para depurar una base de datos de clientes. Si solo necesitas el dígito de un NIT ahora mismo, es más rápido usar la [calculadora de dígito de verificación de Rosiv](/calcular-digito-verificacion-nit): escribes el NIT y te da el resultado al instante, sin abrir Excel.

## Cómo lo resuelve Rosiv

Más allá del DV, calcular manualmente cada dato de la factura es justo el tipo de trabajo que un sistema POS con facturación electrónica debería quitarte de encima. Rosiv genera cada factura con el NIT y el DV correctos automáticamente, sin fórmulas ni hojas de cálculo de por medio.

Puedes [probar Rosiv gratis](https://web.rosivhub.com) y dejar de mantener estas fórmulas a mano.
