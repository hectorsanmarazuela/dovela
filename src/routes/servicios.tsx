import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer } from "./index";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Dovela | Diseño web y SEO local en Segovia" },
      {
        name: "description",
        content:
          "Diseño y desarrollo web, posicionamiento SEO y pack completo para negocios locales de Segovia.",
      },
      { property: "og:title", content: "Servicios — Dovela" },
      {
        property: "og:description",
        content:
          "Diseño web y SEO local pensados para que tu negocio reciba más clientes.",
      },
      {
        name: "twitter:title",
        content: "Servicios — Dovela | Diseño web y SEO local en Segovia",
      },
      {
        name: "twitter:description",
        content:
          "Diseño y desarrollo web, posicionamiento SEO y pack completo para negocios locales de Segovia.",
      },
    ],
  }),
  component: ServiciosPage,
});

/* Rotating pair every 3.5s with mechanical transition */
function AltPair({ a, b }: { a: string; b: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % 2), 3500);
    return () => clearInterval(t);
  }, []);
  const items = [a, b];
  return (
    <span
      style={{
        display: "inline-block",
        position: "relative",
        verticalAlign: "bottom",
        minHeight: "1.4em",
        overflow: "hidden",
      }}
    >
      {items.map((t, idx) => (
        <span
          key={idx}
          style={{
            display: idx === i ? "inline-block" : "block",
            position: idx === i ? "relative" : "absolute",
            top: 0,
            left: 0,
            transition:
              "transform 500ms cubic-bezier(.7,0,.2,1), opacity 400ms cubic-bezier(.7,0,.2,1)",
            transform: idx === i ? "translateY(0)" : "translateY(-100%)",
            opacity: idx === i ? 1 : 0,
            whiteSpace: "nowrap",
          }}
        >
          {t}
        </span>
      ))}
    </span>
  );
}

/* Custom diamond bullet in lime */
function DiamondBullet() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      style={{ marginTop: 6, flexShrink: 0 }}
      aria-hidden
    >
      <path
        d="M7 1 L13 7 L7 13 L1 7 Z"
        fill="#C7F751"
        stroke="#0A0A0A"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function Feature({ text }: { text: string }) {
  const parts = text.split("/").map((s) => s.trim());
  return (
    <li
      className="flex items-start gap-3"
      style={{
        padding: "12px 0",
        fontSize: 16,
        color: "#0A0A0A",
        lineHeight: 1.5,
      }}
    >
      <DiamondBullet />
      <span>
        {parts.length === 2 ? <AltPair a={parts[0]} b={parts[1]} /> : text}
      </span>
    </li>
  );
}

function Note({ text }: { text: string }) {
  return (
    <div
      style={{
        marginTop: 14,
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "8px 14px",
        border: "0.5px solid #0A0A0A",
        borderRadius: 999,
        background: "var(--color-lime-subtle)",
        fontSize: 13,
        fontWeight: 500,
        color: "#0A0A0A",
      }}
    >
      <span
        aria-hidden
        style={{ width: 5, height: 5, borderRadius: 999, background: "#0A0A0A" }}
      />
      {text}
    </div>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "6px 14px",
        borderRadius: 999,
        background: "#0A0A0A",
        color: "#C7F751",
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: "0.02em",
        border: "0.5px solid #0A0A0A",
      }}
    >
      {text}
    </span>
  );
}

function CtaButton() {
  return (
    <a
      href="#contacto"
      className="group inline-flex items-center gap-3 transition"
      style={{
        marginTop: 28,
        padding: "14px 14px 14px 22px",
        borderRadius: 999,
        background: "#C7F751",
        color: "#0A0A0A",
        fontSize: 15,
        fontWeight: 600,
        border: "0.5px solid #0A0A0A",
        boxShadow: "0 6px 20px rgba(199,247,81,0.35)",
      }}
    >
      Comenzar proyecto
      <span
        style={{
          width: 30,
          height: 30,
          borderRadius: 999,
          background: "#0A0A0A",
          color: "#C7F751",
          display: "inline-grid",
          placeItems: "center",
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </span>
    </a>
  );
}

type Block = {
  n: string;
  eyebrow: string;
  title: string;
  intro: string;
  extras?: string[];
  features?: string[];
  notes?: string[];
  pills: string[];
  imageTint: string;
  imageLabel: string;
};

const BLOCKS: Block[] = [
  {
    n: "01",
    eyebrow: "Diseño & Desarrollo",
    title: "Diseño y desarrollo web",
    intro:
      "Webs a medida para tu negocio. Diseñadas para que el visitante entienda en 3 segundos qué haces, por qué y cómo llamarte.",
    extras: [
      "Todo proyecto se perfecciona hasta que carga de forma instantánea y se adapta a cualquier dispositivo.",
    ],
    features: [
      "Propuesta visual gratuita",
      "Copywriting / Texto persuasivo para tu cliente",
      "Web Core Vitals / Métricas vitales de Google",
      "SEO básico / Headers, meta tags, sitemap, etc",
      "Diseño responsive móvil",
      "1er mes de mantenimiento incluido",
    ],
    notes: [
      "Mantenimiento mensual aparte — 2 horas de ediciones mensuales incluidas",
      "Entrega promedio en 14 días",
    ],
    pills: ["Figma", "React", "Framer Motion", "Accesibilidad AA"],
    imageTint: "linear-gradient(135deg, #1a1a1a 0%, #2A2A2A 60%, #3a3a2a 100%)",
    imageLabel: "Web Design",
  },
  {
    n: "02",
    eyebrow: "Posicionamiento",
    title: "Posicionamiento SEO",
    intro:
      "Estrategia personalizada para llevar y mantener a tu negocio al inicio de los resultados de búsqueda.",
    features: [
      "Estudio de palabras clave gratuito",
      "Optimización on-page",
      "Optimización de Google Business Profile",
      "Construcción de backlinks",
      "Estrategia de contenido / Por separado",
    ],
    notes: ["Tarifa única de proyecto + cuota de SEO mensual"],
    pills: ["Google Search Console", "Ahrefs", "SEO Local", "Analytics 4"],
    imageTint: "linear-gradient(135deg, #0f1a14 0%, #1a2a1e 60%, #24352a 100%)",
    imageLabel: "SEO Strategy",
  },
  {
    n: "03",
    eyebrow: "Todo en uno",
    title: "Pack completo",
    intro:
      "La forma más eficiente de crecer online con el mayor retorno de inversión.",
    extras: [
      "Al construirse todo desde cero bajo la misma dirección y con un plan conjunto, el resultado es mucho más que la suma de sus partes.",
    ],
    notes: ["Incluye 45 días de mantenimiento web y SEO mensual"],
    pills: ["Web + SEO", "Dirección única", "Ahorro 20%", "Onboarding incluido"],
    imageTint: "linear-gradient(135deg, #1a1414 0%, #2a1e24 60%, #3a2434 100%)",
    imageLabel: "Full Pack",
  },
];

function VisualPanel({ block }: { block: Block }) {
  return (
    <div className="min-w-0">
      {/* Image 16:9 */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          borderRadius: 20,
          background: block.imageTint,
          border: "0.5px solid #0A0A0A",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 20px 50px rgba(10,10,10,0.15)",
        }}
      >
        {/* Ambient lime glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 80% at 85% 15%, rgba(199,247,81,0.22), transparent 60%), radial-gradient(50% 60% at 10% 90%, rgba(199,247,81,0.10), transparent 70%)",
          }}
        />
        {/* Grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Big index */}
        <div
          className="h-display"
          style={{
            position: "absolute",
            right: 28,
            bottom: 18,
            fontSize: "clamp(90px, 14vw, 180px)",
            color: "rgba(199,247,81,0.14)",
            letterSpacing: "-0.05em",
            lineHeight: 0.9,
          }}
        >
          {block.n}
        </div>
        {/* Corner labels */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 22,
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(250,250,250,0.55)",
          }}
        >
          Dovela / {block.eyebrow}
        </div>
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 22,
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(250,250,250,0.7)",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: 999,
              background: "#C7F751",
              boxShadow: "0 0 10px #C7F751",
            }}
          />
          En vivo
        </div>
        {/* Title bottom-left */}
        <div
          className="h-display"
          style={{
            position: "absolute",
            left: 24,
            bottom: 24,
            fontSize: 22,
            color: "#FAFAFA",
            maxWidth: "70%",
          }}
        >
          {block.imageLabel}
        </div>
      </div>

      {/* Pills */}
      <div className="flex flex-wrap gap-2" style={{ marginTop: 16 }}>
        {block.pills.map((p) => (
          <Pill key={p} text={p} />
        ))}
      </div>
    </div>
  );
}

function ServiceBlock({ block, isFirst }: { block: Block; isFirst: boolean }) {
  return (
    <div
      style={{
        paddingTop: isFirst ? 24 : 80,
        paddingBottom: 80,
        borderTop: isFirst ? undefined : "0.5px solid #E5E5E5",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-10 lg:gap-16 items-start">
        {/* Text left */}
        <div className="min-w-0">
          <h2 className="label-eyebrow" style={{ marginBottom: 20 }}>
            {block.n === "01" && "Diseño y desarrollo web profesional"}
            {block.n === "02" && "Posicionamiento SEO local en Segovia"}
            {block.n === "03" && "Pack completo web y SEO para negocios locales"}
          </h2>
          <p
            className="h-display"
            style={{
              fontSize: "clamp(36px, 4.4vw, 56px)",
              color: "#0A0A0A",
              marginBottom: 24,
              margin: 0,
            }}
          >
            {block.title}
          </p>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.55,
              color: "#0A0A0A",
              maxWidth: 620,
            }}
          >
            {block.intro}
          </p>
          {block.extras?.map((e, i) => (
            <p
              key={i}
              style={{
                marginTop: 14,
                fontSize: 15,
                lineHeight: 1.6,
                color: "#888",
                maxWidth: 620,
              }}
            >
              {e}
            </p>
          ))}

          {block.features && block.features.length > 0 && (
            <>
              <div
                className="label-eyebrow"
                style={{ marginTop: 36, marginBottom: 6 }}
              >
                Incluye
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  maxWidth: 560,
                }}
              >
                {block.features.map((f) => (
                  <Feature key={f} text={f} />
                ))}
              </ul>
            </>
          )}

          {block.notes && block.notes.length > 0 && (
            <div className="flex flex-wrap gap-3" style={{ marginTop: 8 }}>
              {block.notes.map((n) => (
                <Note key={n} text={n} />
              ))}
            </div>
          )}

          <div>
            <CtaButton />
          </div>
        </div>

        {/* Visual right */}
        <VisualPanel block={block} />
      </div>
    </div>
  );
}

function ServiciosPage() {
  return (
    <main
      className="bg-[#FAFAFA] text-[#0A0A0A]"
      style={{ overflowX: "clip" }}
    >
      <Nav />
      <section style={{ paddingTop: 160, paddingBottom: 40 }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <h1 className="label-eyebrow" style={{ marginBottom: 24 }}>
            Servicios de diseño web y SEO local en Segovia
          </h1>
          <p
            className="h-display"
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              color: "#0A0A0A",
              maxWidth: 1100,
              margin: 0,
            }}
          >
            Somos los mejores en{" "}
            <span style={{ color: "rgba(10,10,10,0.25)" }}>
              diseño web y SEO local.
            </span>
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 120 }}>
        <div className="max-w-[1280px] mx-auto px-6">
          {BLOCKS.map((b, i) => (
            <ServiceBlock key={b.n} block={b} isFirst={i === 0} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
