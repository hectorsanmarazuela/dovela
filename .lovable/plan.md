
## Hero

- Cambiar el gris de "Si te buscan" de `rgba(255,255,255,0.28)` a `rgba(255,255,255,0.55)` para mejor legibilidad.
- Devolver los CTA a su posición original abajo-izquierda (revisar el contenedor del hero: el H1, párrafo y botones deben quedar apilados a la izquierda tal como estaban).
- Añadir `ArrowCircle` (variante outline sobre fondo oscuro, ej. `bg="#FAFAFA" fg="#0A0A0A"` dentro del pill) al botón "Conoce nuestros servicios" para que iguale el patrón del CTA verde.

## Por qué Dovela

- Reformatear el H2 en dos líneas exactas:
  - Línea 1: "Construimos webs usables" en gris (`#888`).
  - Línea 2: "para que vendas" en negro (`#0A0A0A`), sin resaltado lima.
- Eliminar por completo el grid de 4 bullets (Estudio en Segovia / Entrega en 2 semanas / Comunicación directa / Resultados medibles) y borrar el array `items`.
- Cambiar el texto del botón de "Conocer el estudio →" a "Descubre el servicio" (mantener flecha con `ArrowCircle`).

## Sección Plan (tarjetas)

- Invertir la paleta entre las dos tarjetas: la que ahora es oscura pasa a clara y viceversa (fondo, texto y acentos).
- Renombrar títulos:
  - "Antes de decidir" → "3 sencillos pasos".
  - "Cuando dices que sí, esto te garantizamos" → "Garantías".
- Alinear verticalmente los bullets de ambas tarjetas: usar la misma estructura (mismo padding superior, mismo gap, misma altura por item) para que cada bullet de la izquierda esté a la misma altura que su equivalente de la derecha. Si el número de items difiere, igualar el conteo o usar filas de altura fija con `grid-auto-rows`.
- Reemplazar el contenido del punto 3 de "3 sencillos pasos" por un componente nuevo `RotatingSeal`:
  - Badge circular con el texto "PERSONALIZADA Y GRATUITA · " repetido alrededor del círculo, en mayúsculas, rotando lentamente sobre sí mismo (animación CSS `@keyframes spin` ~20s linear infinite).
  - Icono estático centrado (por ejemplo una flecha o check en negro).
  - Fondo `#C7F751`, texto `#0A0A0A`. Sin borde, sin sombra.
  - Texto curvo con SVG `<textPath>` sobre un `<path>` circular.
  - Etiqueta del paso: "Recibe tu propuesta visual".
- Añadir un botón "Reserva tu llamada" al final de la tarjeta "3 sencillos pasos" (pill verde lima con `ArrowCircle`, mismo estilo que el CTA del hero).

## Lead magnet

- Invertir colores del texto destacado en el titular:
  - "El progreso" → blanco (`#FAFAFA`).
  - "consiste en renovarse" → lima (`#C7F751`).
- Mantener el resto del componente igual.

## Animación de flechas

- Sin cambios (ya se rehizo en el turno anterior).

## Archivos afectados

- `src/routes/index.tsx` (todos los cambios).
- Posible añadido de keyframe `spin-slow` en `src/styles.css` para el sello rotatorio.
