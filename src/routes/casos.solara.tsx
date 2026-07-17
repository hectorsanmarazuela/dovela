import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav, Footer } from "./index";
import solara1 from "@/assets/solara-case-1.webp.asset.json";
import solara2 from "@/assets/solara-case-2.webp.asset.json";
import solara3 from "@/assets/solara-case-3.webp.asset.json";
import author from "@/assets/jose2.png.asset.json";

export const Route = createFileRoute("/casos/solara")({
  head: () => ({
    meta: [
      { title: "Caso de estudio: Solara — Pilates de autor en Santander | Dovela" },
      {
        name: "description",
        content:
          "Cómo diseñamos la web de Solara, estudio de pilates en Santander: identidad premium, comunidad y SEO local para atraer más reservas.",
      },
      { property: "og:title", content: "Caso de estudio: Solara — Dovela" },
      {
        property: "og:description",
        content:
          "Diseño web premium, SEO local y conversión para el estudio de pilates de referencia en Santander.",
      },
      { property: "og:image", content: solara1.url },
    ],
    links: [{ rel: "canonical", href: "/casos/solara" }],
  }),
  component: SolaraCasePage,
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 14px",
        borderRadius: 999,
        background: "rgba(24,24,27,0.06)",
        color: "#18181B",
        fontSize: 13,
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

function CaseImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-auto my-10 rounded-2xl"
      style={{ display: "block" }}
    />
  );
}

function SolaraCasePage() {
  return (
    <main className="bg-[#F0F0ED] text-[#18181B]" style={{ overflowX: "clip" }}>
      <Nav />

      <article className="max-w-3xl mx-auto px-4 pt-32 pb-16">
        {/* Author card */}
        <div
          className="flex items-center gap-4 mb-12"
          style={{
            padding: 12,
            borderRadius: 14,
            background: "rgba(255,255,255,0.6)",
            border: "0.5px solid rgba(24,24,27,0.10)",
            width: "fit-content",
          }}
        >
          <img
            src={author.url}
            alt="Héctor — Dovela"
            loading="lazy"
            className="w-12 h-12 rounded-lg object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-semibold text-[15px]">Made by Héctor</span>
            <span className="text-[13px]" style={{ color: "rgba(24,24,27,0.6)" }}>
              Desarrollador Web y SEO
            </span>
          </div>
        </div>

        {/* Header */}
        <h1
          className="h-display"
          style={{
            fontSize: "clamp(36px, 5vw, 56px)",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            fontWeight: 600,
            margin: 0,
          }}
        >
          Solara: Pilates de Autor en Santander.
        </h1>

        <div className="flex flex-wrap gap-2 mt-6 mb-4">
          <Pill>Diseño Web Premium</Pill>
          <Pill>SEO local</Pill>
          <Pill>Conversión</Pill>
        </div>

        {/* Body */}
        <CaseImage src={solara1.url} alt="Solara — Hero de la web" />
        <p className="text-[17px] leading-relaxed" style={{ color: "rgba(24,24,27,0.85)" }}>
          Un espacio premium necesita un escaparate a la altura. Solara buscaba
          consolidarse como el estudio de pilates de referencia en Santander. Su
          público son mujeres que valoran el entrenamiento consciente y la
          atención personalizada en un entorno sumamente cuidado. Cuando nos
          contactaron buscando nuestros servicios de{" "}
          <Link
            to="/servicios/diseno-web"
            style={{ color: "#18181B", textDecoration: "underline", textUnderlineOffset: 3 }}
          >
            diseño web
          </Link>
          , tuvimos claro que el desafío de Dovela residía en digitalizar esa
          atmósfera de calma y exclusividad, logrando una página que atrajera
          reservas sin perder nunca ese toque premium.
        </p>

        <CaseImage src={solara2.url} alt="Solara — Sobre nosotras" />
        <p className="text-[17px] leading-relaxed" style={{ color: "rgba(24,24,27,0.85)" }}>
          <strong>Estética y comunidad como motores de confianza.</strong> En
          lugar de montar la típica página del sector fitness llena de llamadas
          a la acción agresivas, apostamos por la elegancia y la prueba social.
          Construimos una identidad apoyada en tonos cálidos, espacios en blanco
          y tipografías serifa que elevan la marca. Además, integramos desde el
          primer momento el sentido de pertenencia: destacamos sus más de 300
          alumnas y el 4,9 de valoración en Google. La idea era simple: que la
          usuaria sintiera el respaldo de una comunidad nada más entrar.
        </p>

        <CaseImage src={solara3.url} alt="Solara — Comunidad y reservas" />
        <p className="text-[17px] leading-relaxed" style={{ color: "rgba(24,24,27,0.85)" }}>
          <strong>Conversión fluida y posicionamiento local.</strong> De nada
          sirve un entorno digital precioso si no asegura la venta. Por eso,
          acompañamos la estética con dos acciones técnicas fundamentales:
        </p>
        <p
          className="text-[17px] leading-relaxed mt-4"
          style={{ color: "rgba(24,24,27,0.85)" }}
        >
          <strong>Experiencia de usuario (UX) enfocada a la primera reserva:</strong>{" "}
          Organizamos sus servicios —clases grupales, sesiones privadas y
          programas— de forma muy limpia. Guiamos a la usuaria de forma natural
          hacia el pack de «Bienvenida», haciendo que dar el paso de apuntarse a
          la clase de prueba sea muy intuitivo.
        </p>
        <p
          className="text-[17px] leading-relaxed mt-4"
          style={{ color: "rgba(24,24,27,0.85)" }}
        >
          <strong>SEO Local:</strong> El posicionamiento orgánico requiere
          tiempo, así que estamos trabajando el SEO paso a paso desde los
          cimientos. Hemos optimizado la estructura interna, nos hemos asegurado
          de que el estudio figure en todos los directorios relevantes y estamos
          construyendo un Google Business Profile totalmente optimizado para
          empezar a traccionar y escalar posiciones en las búsquedas locales de
          Santander.
        </p>

        {/* CTA */}
        <div
          className="mt-20 text-center"
          style={{
            padding: "48px 24px",
            borderRadius: 24,
            background: "rgba(255,255,255,0.55)",
            border: "0.5px solid rgba(24,24,27,0.10)",
          }}
        >
          <h2
            className="h-display"
            style={{
              fontSize: "clamp(28px, 3.4vw, 40px)",
              letterSpacing: "-0.02em",
              margin: 0,
              color: "#18181B",
            }}
          >
            Hablemos de tu proyecto.
          </h2>
          <p
            className="mt-4 mx-auto"
            style={{
              maxWidth: 480,
              fontSize: 16,
              lineHeight: 1.6,
              color: "rgba(24,24,27,0.7)",
            }}
          >
            Diseñamos webs que transmiten la esencia de tu negocio y captan al
            cliente adecuado.
          </p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-3 hover:brightness-95 transition mt-8"
            style={{
              padding: "12px 12px 12px 20px",
              borderRadius: 999,
              background: "#C7F751",
              color: "#18181B",
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            Cuéntanos tu idea
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                background: "#18181B",
                color: "#C7F751",
                display: "inline-grid",
                placeItems: "center",
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </span>
          </a>
        </div>
      </article>

      <Footer />
    </main>
  );
}
