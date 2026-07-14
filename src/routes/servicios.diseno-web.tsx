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
        title="Diseño y desarrollo web"
        intro="Webs a medida para tu negocio. Diseñadas para que el visitante entienda en 3 segundos qué haces, por qué y cómo llamarte."
        extras={[
          "Todo proyecto se perfecciona hasta que carga de forma instantánea y se adapta a cualquier dispositivo.",
        ]}
        features={[
          "Propuesta visual gratuita",
          "Copywriting / Texto persuasivo para tu cliente",
          "Web Core Vitals / Métricas vitales de Google",
          "SEO básico / Headers, meta tags, sitemap",
          "Diseño responsive móvil",
          "1 mes de mantenimiento incluido",
        ]}
        notes={[
          "Mantenimiento mensual aparte — 2 horas de ediciones incluidas",
          "Entrega promedio en 14 días",
        ]}
        pills={["Figma", "React", "Framer Motion", "Accesibilidad AA"]}
        heroLabel="Web Design"
      />
      <Footer />
    </main>
  );
}
