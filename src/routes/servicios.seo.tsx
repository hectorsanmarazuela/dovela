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
    <main className="bg-mesh-warm bg-grain text-[#0A0A0A]" style={{ overflowX: "clip" }}>
      <Nav />
      <ServicioDetail
        variant="seo"
        n="002"
        eyebrow="Posicionamiento SEO local en Segovia"
        title="Posicionamiento SEO"
        intro="Estrategia personalizada para llevar y mantener a tu negocio al inicio de los resultados de búsqueda."
        features={[
          "Estudio de palabras clave gratuito",
          "Optimización on-page y off-page",
          "Optimización de Google Business Profile",
          "Construcción de backlinks",
          "Estrategia de blogs / Por separado",
        ]}
        notes={["Tarifa única de proyecto + cuota de SEO mensual"]}
        pills={["Google Search Console", "Ahrefs", "SEO Local", "Analytics 4"]}
        heroLabel="SEO Strategy"
      />
      <Footer />
    </main>
  );
}
