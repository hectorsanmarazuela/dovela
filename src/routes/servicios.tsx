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
    ],
  }),
  component: ServiciosPage,
});

/* Alternating term component: "A / B" toggles smoothly every ~3.5s */
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

/* A feature line. If value contains "/", split into rotating pair. */
function Feature({ text }: { text: string }) {
  const parts = text.split("/").map((s) => s.trim());
  return (
    <li
      className="flex items-start gap-3"
      style={{
        padding: "14px 0",
        borderTop: "0.5px solid #E5E5E5",
        fontSize: 16,
        color: "#0A0A0A",
      }}
    >
      <span
        aria-hidden
        style={{
          marginTop: 9,
          width: 6,
          height: 6,
          borderRadius: 999,
          background: "#C7F751",
          flexShrink: 0,
        }}
      />
      <span style={{ lineHeight: 1.5 }}>
        {parts.length === 2 ? <AltPair a={parts[0]} b={parts[1]} /> : text}
      </span>
    </li>
  );
}

/* Note line (for lines starting with *) */
function Note({ text }: { text: string }) {
  return (
    <div
      style={{
        marginTop: 20,
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
        letterSpacing: "-0.005em",
      }}
    >
      <span
        aria-hidden
        style={{
          width: 5,
          height: 5,
          borderRadius: 999,
          background: "#0A0A0A",
        }}
      />
      {text}
    </div>
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
  imageRight: boolean;
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
    imageRight: true,
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
    imageRight: false,
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
    imageRight: true,
  },
];

function ServiceBlock({ block, isFirst }: { block: Block; isFirst: boolean }) {
  const text = (
    <div className="min-w-0">
      <div
        className="label-eyebrow"
        style={{ marginBottom: 20 }}
      >
        <span style={{ color: "#888" }}>{block.n}</span>
        <span style={{ margin: "0 10px", color: "#E5E5E5" }}>/</span>
        <span>{block.eyebrow}</span>
      </div>
      <h2
        className="h-display"
        style={{
          fontSize: "clamp(36px, 4.4vw, 56px)",
          color: "#0A0A0A",
          marginBottom: 24,
        }}
      >
        {block.title}
      </h2>
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
            marginTop: 16,
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
            style={{ marginTop: 40, marginBottom: 4 }}
          >
            Incluye
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              maxWidth: 560,
              borderBottom: "0.5px solid #E5E5E5",
            }}
          >
            {block.features.map((f) => (
              <Feature key={f} text={f} />
            ))}
          </ul>
        </>
      )}

      {block.notes && block.notes.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {block.notes.map((n) => (
            <Note key={n} text={n} />
          ))}
        </div>
      )}
    </div>
  );

  const image = (
    <div className="min-w-0">
      <div
        style={{
          width: "100%",
          aspectRatio: "4 / 5",
          background: "#2A2A2A",
          borderRadius: 16,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(120% 80% at 20% 10%, rgba(199,247,81,0.10), transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(250,250,250,0.5)",
          }}
        >
          {block.n} — Imagen
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        paddingTop: isFirst ? 24 : 80,
        paddingBottom: 80,
        borderTop: isFirst ? undefined : "0.5px solid #E5E5E5",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-10 lg:gap-16 items-start">
        {block.imageRight ? (
          <>
            {text}
            {image}
          </>
        ) : (
          <>
            <div className="lg:order-1 order-2">{text}</div>
            <div className="lg:order-0 order-1">{image}</div>
          </>
        )}
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
          <div className="label-eyebrow" style={{ marginBottom: 24 }}>
            Servicios
          </div>
          <h1
            className="h-display"
            style={{
              fontSize: "clamp(48px, 7vw, 96px)",
              color: "#0A0A0A",
              maxWidth: 1100,
            }}
          >
            Somos los mejores en{" "}
            <span style={{ color: "rgba(10,10,10,0.25)" }}>
              diseño web y SEO local.
            </span>
          </h1>
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
