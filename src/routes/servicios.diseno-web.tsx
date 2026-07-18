import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import { ServicioDetail } from "@/components/ServicioDetail";

export const Route = createFileRoute("/servicios/diseno-web")({
  head: () => ({
    meta: [
      { title: "Diseño y desarrollo web — Dovela | Segovia" },
      {
        name: "description",
        content:
          "Diseño y desarrollo web a medida para negocios locales en Segovia. Webs rápidas, claras y pensadas para convertir.",
      },
      { property: "og:title", content: "Diseño y desarrollo web — Dovela" },
      {
        property: "og:description",
        content:
          "Webs a medida para tu negocio. Diseñadas para que el visitante entienda en 3 segundos qué haces, por qué y cómo llamarte.",
      },
      { property: "og:url", content: "https://dovelaestudio.es/servicios/diseno-web" },
      { name: "twitter:title", content: "Diseño y desarrollo web — Dovela" },
      {
        name: "twitter:description",
        content:
          "Diseño y desarrollo web a medida para negocios locales en Segovia.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dovelaestudio.es/servicios/diseno-web" },
    ],
  }),
  component: DisenoWebPage,
});

function DisenoWebPage() {
  return (
    <main className="bg-[#FAFAFA] text-[#0A0A0A]" style={{ overflowX: "clip" }}>
      <Nav />
      <ServicioDetail
        n="001"
        eyebrow="Servicios de diseño web en Segovia"
        title="Un canal de ventas que no requiere de tu tiempo"
        intro="Desarrollamos páginas web fáciles de usar a medida para tu negocio. Creamos estructuras pensadas para que cualquier visitante entienda en 3 segundos qué haces, por qué eres la solución que busca y cómo contactarte. Cada proyecto se diseña desde cero para tu negocio y tu cliente, optimizado hasta que carga de manera instantánea y se adapta perfectamente a cualquier dispositivo."
        includeTitle="¿Qué incluye nuestro servicio de Diseño Web?"
        includes={[
          {
            title: "Estrategia y propuesta visual previa",
            description:
              "Define con nosotros la estructura y el estilo visual del proyecto, asegurando concordancia total con tu idea.",
          },
          {
            title: "Copywriting profesional",
            description:
              "Redactamos textos persuasivos que conectan con tu cliente y le empujan a llamar.",
          },
          {
            title: "Velocidad de carga",
            description:
              "Optimizamos el rendimiento técnico según los estándares de Google (Core Web Vitals).",
          },
          {
            title: "SEO Básico de lanzamiento",
            description:
              "Dejamos la web lista para que Google la indexe correctamente desde el primer día: estructura de encabezados, metaetiquetas, sitemap y optimización de imágenes.",
          },
          {
            title: "Diseño 100% Responsive",
            description:
              "Tu web se verá y funcionará perfectamente en teléfonos móviles.",
          },
          {
            title: "Lanzamiento en 14 días",
            description:
              "Nos comprometemos con los plazos. Si tenemos el material listo, tu web estará online en dos semanas.",
          },
        ]}
        disclaimerTitle="¿Y después del lanzamiento?"
        disclaimerText="El primer mes de soporte técnico va incluido. A partir de ahí, ofrecemos un servicio mensual que incluye hosting, copias de seguridad, actualizaciones técnicas y 2 horas de ediciones para los cambios que necesites."
      />
      <Footer />
    </main>
  );
}
