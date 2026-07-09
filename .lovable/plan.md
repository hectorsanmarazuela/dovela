# Nueva sección "Servicios" en home

Añadir un bloque de servicios en `src/routes/index.tsx` entre la sección de proyectos y la de "Hablamos de tu proyecto" (contacto), inspirado en designhoist.com y en la captura adjunta, adaptado al lenguaje visual de Dovela (negro #0A0A0A, lima #C7F751, off-white #FAFAFA).

## Estructura visual

- Contenedor exterior con fondo `#FAFAFA` (el de la web) que deja ver márgenes laterales.
- Dentro, una **tarjeta rectangular con esquinas redondeadas grandes** (radius ~28px), fondo `#0A0A0A`, con padding generoso y un sutil grano/ruido + glow lima muy tenue en las esquinas para dar profundidad (igual que la referencia).
- Ancho máximo alineado al resto del home (`max-w-[1280px]`), con `px-6` laterales para que se vea el blanco alrededor.

## Layout interno (2 columnas)

```text
┌─ Tarjeta negra ──────────────────────────────────────────┐
│  [25%]                    [75%]                          │
│  ● Eyebrow (Somos los mejores en...) Título gigante      |
|                            "Servicios" centrado          │
│                                                          │
│  ── divider ─────────────────────────────────────────    │
│  (001)   Diseño y desarrollo web            [ – / + ]    │
│          ▼ (expandido)                                   │
│          Wireframe 2:1  |  Descripción + Incluye (pills) │
│  ── divider ─────────────────────────────────────────    │
│  (002)   Posicionamiento SEO                [ + ]        │
│  ── divider ─────────────────────────────────────────    │
│  (003)   Pack completo                      [ + ]        │
└──────────────────────────────────────────────────────────┘
```

- Columna izquierda ~25%: numeración `(001)`, `(002)`, `(003)` en gris tenue, alineada arriba de cada fila.
- Columna derecha ~75%: título del servicio grande (blanco), botón circular `+ / –` a la derecha, y al abrir muestra el panel del servicio.
- Filas separadas por hairline `rgba(255,255,255,0.08)`.
- Solo un servicio abierto a la vez (acordeón). Por defecto abierto el primero.
- Animación de apertura y cierre del acordeón es mecánica y extremadamente smooth y moderna.

## Contenido del panel abierto

Dos sub-columnas dentro del panel:

- **Izquierda**: wireframe con `aspect-ratio: 2/1`, borde `0.5px rgba(255,255,255,0.15)`, fondo con grid lines sutiles + glow lima. Un simple mockup abstracto (header bar, bloques de contenido, botón lima) hecho en SVG/divs — sin imagen real.
- **Derecha**:
  - Descripción principal (blanca).
  - Texto secundario/extras (extras del copy) en `#888`.
  - Encabezado `Incluye` en label-eyebrow.
  - **Pills** para cada feature (estilo píldora blanca sobre negro como la referencia): fondo `rgba(255,255,255,0.06)`, borde `0.5px rgba(255,255,255,0.15)`, texto blanco.
  - Las features con `/` usan un componente `AltPill` que rota entre los dos textos cada 3.5s con transición mecánica (reutilizamos la lógica de `AltPair` de `servicios.tsx`, pero adaptada al estilo pill).
  - Notas con `*` renderizadas fuera de la lista como chips destacados con fondo `var(--color-lime-subtle)` y borde negro sutil, o como texto con punto lima al inicio — visualmente distintas de las pills.

## Detalles verdes (lima #C7F751)

- Punto lima brillante junto al eyebrow "Somos los mejores en…".
- Botón `+` de la fila abierta: fondo lima, ícono negro. Cerradas: borde blanco tenue, ícono blanco.
- Glow lima radial en dos esquinas de la tarjeta.
- Un pequeño acento lima dentro del wireframe (botón/pill).
- Notas `*` con dot lima.

## Contenido (copy exacto del usuario)

1. **Diseño y desarrollo web** — intro + extra + 6 features (algunas con `/`) + 2 notas `*`.
2. **Posicionamiento SEO** — intro + 5 features + 1 nota `*`.
3. **Pack completo** — intro + 1 nota `*` (sin lista de features).

## Comportamiento

- Acordeón controlado con `useState<number | null>`.
- Transición de apertura: `max-height` + `opacity` con `transition: 400ms cubic-bezier(.7,0,.2,1)`.
- `AltPill` interno para textos con `/`, rotación cada 3.5s con `translateY` + `opacity`.
- Sin dependencias nuevas.

## Detalles técnicos

- Todo el código va en `src/routes/index.tsx` como un nuevo componente `ServicesSection` insertado entre `<ProjectsSection />` y `<ContactSection />` (los nombres reales se confirmarán al leer el archivo en build).
- Sin cambios de rutas, sin tocar `servicios.tsx`, sin nuevas deps.
- Sin cambios de lógica de negocio ni backend.