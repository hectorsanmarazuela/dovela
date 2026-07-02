import { createFileRoute } from "@tanstack/react-router";
import { Nav, Services, Footer } from "./index";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Dovela | Diseño web y SEO local en Segovia" },
      {
        name: "description",
        content:
          "Diseño web, SEO Local, Google Business y mantenimiento para negocios locales de Segovia.",
      },
      { property: "og:title", content: "Servicios — Dovela" },
      {
        property: "og:description",
        content:
          "Servicios de diseño web y SEO local pensados para que tu negocio reciba más clientes.",
      },
    ],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <main className="bg-[#FAFAFA] text-[#0A0A0A]">
      <Nav />
      <div style={{ paddingTop: 100 }}>
        <Services />
      </div>
      <Footer />
    </main>
  );
}
