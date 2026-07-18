import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import { ServicioDetail } from "@/components/ServicioDetail";

export const Route = createFileRoute("/servicios/seo")({
  head: () => ({
    meta: [
      { title: "Posicionamiento SEO — Dovela | Segovia" },
      {
        name: "description",
        content:
          "Posicionamiento SEO local en Segovia. Estrategia personalizada para llevar tu negocio al inicio de los resultados de búsqueda.",
      },
      { property: "og:title", content: "Posicionamiento SEO — Dovela" },
      {
        property: "og:description",
        content:
          "Estrategia personalizada para llevar y mantener a tu negocio al inicio de los resultados de búsqueda.",
      },
      { property: "og:url", content: "https://dovelaestudio.es/servicios/seo" },
      { name: "twitter:title", content: "Posicionamiento SEO — Dovela" },
      {
        name: "twitter:description",
        content:
          "Posicionamiento SEO local en Segovia para negocios que quieren más clientes.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dovelaestudio.es/servicios/seo" },
    ],
  }),
  component: SeoPage,
});

function SeoPage() {
  return (
    <main className="bg-[#FAFAFA] text-[#0A0A0A]" style={{ overflowX: "clip" }}>
      <Nav />
      <ServicioDetail
        n="002"
        eyebrow="Posicionamiento SEO local en Segovia"
        title="Una fuente de clientes que no depende de anuncios ni del boca a boca"
        intro="Diseñamos estrategias SEO a medida para colocar tu negocio en los primeros resultados de búsqueda. Consigue tráfico estable, orgánico y predecible."
        includeTitle="¿Qué incluye nuestro servicio SEO?"
        includes={[
          {
            title: "Auditoría y estudio de palabras clave",
            description:
              "Analizamos qué busca tu cliente y lo incorporamos en tu página para que tu negocio sea el primero que encuentre.",
          },
          {
            title: "Optimización On-Page",
            description:
              "Perfeccionamos tu web a nivel técnico, de velocidad y de contenido para que Google te favorezca frente a tu competencia.",
          },
          {
            title: "Optimización de Google Business Profile",
            description:
              "Pulimos y actualizamos semanalmente tu ficha de Google Maps para convertirla en un imán de llamadas y visitas.",
          },
          {
            title: "Construcción de Backlinks",
            description:
              "Aumentamos la autoridad de tu web en internet para que Google te tome en serio y te suba de posiciones.",
          },
          {
            title: "Estrategia de Contenidos",
            description:
              "Publicamos contenido relevante de forma consistente para que tu web gane autoridad progresivamente.",
          },
        ]}
        disclaimerTitle="¿Cómo trabajamos?"
        disclaimerText="Tarifa única de configuración y optimización inicial, más una cuota mensual que incluye auditorías periódicas, informes de rendimiento y optimización continua."
      />
      <Footer />
    </main>
  );
}
