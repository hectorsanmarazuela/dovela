import { useEffect, useState } from "react";
import { FeaturePill, StarNote, ServiceCta } from "@/routes/index";
import ICHO1 from "@/assets/ICHO1.png.asset.json";
import ICHO2 from "@/assets/ICHO2.png.asset.json";
import PILATES1 from "@/assets/PILATES1.png.asset.json";
import PILATES2 from "@/assets/PILATES2.png.asset.json";
import FONTA1 from "@/assets/FONTA1.png.asset.json";
import FONTA2 from "@/assets/FONTA2.png.asset.json";

type Props = {
  n: string;
  eyebrow: string;
  title: string;
  intro: string;
  extras?: string[];
  features?: string[];
  notes?: string[];
  pills?: string[]; // no longer rendered; kept for backwards compat
  heroLabel: string;
  variant?: "diseno" | "seo";
};

const RADIUS = 18; // uniform border radius for all imagery

const GALLERY = [
  { src: ICHO1.url, label: "Icho — Joyería", tag: "E-commerce" },
  { src: PILATES1.url, label: "Solara — Pilates", tag: "Landing + reservas" },
  { src: FONTA1.url, label: "Fernández del Campo", tag: "SEO local" },
  { src: ICHO2.url, label: "Icho — Ficha producto", tag: "UX" },
  { src: PILATES2.url, label: "Solara — Comunidad", tag: "Contenido" },
  { src: FONTA2.url, label: "Fernández — Servicios", tag: "Conversión" },
];

function PackBanner() {
  return (
    <div className="max-w-[1480px] mx-auto px-6 md:px-10" style={{ marginTop: 48 }}>
      <div
        style={{
          position: "relative",
          background: "linear-gradient(90deg, rgba(15,15,15,0.85) 0%, rgba(20,20,20,0.85) 100%)",
          backdropFilter: "blur(6px)",
          border: "0.5px solid rgba(199,247,81,0.35)",
          borderRadius: 20,
          padding: "22px clamp(20px, 3vw, 32px)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(60% 100% at 100% 50%, rgba(199,247,81,0.15), transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-5 md:gap-8 items-center">
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "6px 12px",
              borderRadius: 999,
              background: "rgba(199,247,81,0.14)",
              color: "#C7F751",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              width: "fit-content",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "#C7F751" }} />
            Pack completo · Ahorra
          </div>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.5,
              color: "rgba(250,250,250,0.85)",
              margin: 0,
            }}
          >
            <strong style={{ color: "#FAFAFA" }}>¿Y si lo hacemos todo junto?</strong>{" "}
            Diseño web + SEO bajo la misma dirección: mejor precio, mejor
            coordinación y mucho más ROI que contratarlos por separado.
          </p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-3 hover:brightness-95 transition"
            style={{
              padding: "12px 12px 12px 20px",
              borderRadius: 999,
              background: "#C7F751",
              color: "#0A0A0A",
              fontSize: 14,
              fontWeight: 700,
              whiteSpace: "nowrap",
              justifySelf: "start",
            }}
          >
            Ver Pack Completo
            <span
              style={{
                width: 28,
                height: 28,
                borderRadius: 999,
                background: "#0A0A0A",
                color: "#C7F751",
                display: "inline-grid",
                placeItems: "center",
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function PortfolioMarquee() {
  const items = [...GALLERY, ...GALLERY];
  return (
    <section style={{ background: "#FAFAFA", padding: "120px 0 60px" }}>
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 mb-12">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <div
              className="label-eyebrow"
              style={{ color: "#0A0A0A", opacity: 0.55, marginBottom: 12 }}
            >
              Proyectos recientes
            </div>
            <h2
              className="h-display"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                margin: 0,
              }}
            >
              <span style={{ color: "rgba(10,10,10,0.45)" }}>Proyectos </span>
              <span style={{ color: "#0A0A0A" }}>increíbles</span>
              <span style={{ color: "rgba(10,10,10,0.45)" }}> funcionando</span>
              <span style={{ color: "#0A0A0A" }}>.</span>
            </h2>
          </div>
          <p style={{ maxWidth: 360, color: "rgba(10,10,10,0.6)", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
            Un vistazo a algunos negocios que confían en nosotros — desde
            joyería artesanal hasta fontanería 24h.
          </p>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          maskImage:
            "linear-gradient(90deg, transparent 0, #000 5%, #000 95%, transparent 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 20,
            animation: "dovela-marquee 40s linear infinite",
            width: "max-content",
            alignItems: "flex-end",
          }}
        >
          {items.map((it, i) => (
            <figure
              key={i}
              style={{
                margin: 0,
                width: "clamp(280px, 32vw, 460px)",
                borderRadius: RADIUS,
                overflow: "hidden",
                background: "#0A0A0A",
                border: "0.5px solid rgba(10,10,10,0.08)",
                boxShadow: "0 20px 40px -20px rgba(10,10,10,0.25)",
              }}
            >
              <img
                src={it.src}
                alt={it.label}
                loading="lazy"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <figcaption
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "14px 18px",
                  color: "#FAFAFA",
                  fontSize: 13,
                }}
              >
                <span style={{ fontWeight: 600 }}>{it.label}</span>
                <span
                  style={{
                    color: "#C7F751",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {it.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <style>{`@keyframes dovela-marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </section>
  );
}

function HeroLabelPill({ text }: { text: string }) {
  return (
    <div
      style={{
        position: "absolute",
        left: 14,
        bottom: 14,
        padding: "6px 12px",
        borderRadius: 999,
        background: "rgba(10,10,10,0.7)",
        backdropFilter: "blur(8px)",
        fontSize: 11,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "#C7F751",
        zIndex: 2,
      }}
    >
      {text}
    </div>
  );
}

function DisenoVerticalMarquee({ label }: { label: string }) {
  const items = [...GALLERY, ...GALLERY];
  return (
    <div
      style={{
        position: "relative",
        height: "clamp(520px, 72vh, 780px)",
        overflow: "hidden",
        maskImage:
          "linear-gradient(180deg, transparent 0, #000 8%, #000 92%, transparent 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          animation: "dovela-marquee-y 45s linear infinite",
        }}
      >
        {items.map((it, i) => (
          <img
            key={i}
            src={it.src}
            alt={it.label}
            loading="lazy"
            style={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        ))}
      </div>
      <HeroLabelPill text={label} />
      <style>{`@keyframes dovela-marquee-y { from { transform: translateY(0);} to { transform: translateY(-50%);} }`}</style>
    </div>
  );
}

function SeoImageFader({ label }: { label: string }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % GALLERY.length), 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 3",
      }}
    >
      {GALLERY.map((it, i) => (
        <img
          key={it.src}
          src={it.src}
          alt={it.label}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "contain",
            opacity: i === idx ? 1 : 0,
            transition: "opacity 900ms ease",
          }}
        />
      ))}
      <HeroLabelPill text={label} />
      <div
        style={{
          position: "absolute",
          right: 14,
          bottom: 14,
          display: "flex",
          gap: 6,
          zIndex: 2,
        }}
      >
        {GALLERY.map((_, i) => (
          <button
            key={i}
            aria-label={`Ver imagen ${i + 1}`}
            onClick={() => setIdx(i)}
            style={{
              width: i === idx ? 22 : 8,
              height: 8,
              borderRadius: 999,
              border: "none",
              background: i === idx ? "#C7F751" : "rgba(250,250,250,0.35)",
              cursor: "pointer",
              transition: "all 300ms ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function ServicioDetail(props: Props) {

  return (
    <>
      {/* HERO — full-bleed black, glow extends behind pack banner */}
      <section
        style={{
          position: "relative",
          background: "#0A0A0A",
          color: "#FAFAFA",
          paddingTop: 140,
          paddingBottom: 60,
          overflow: "hidden",
        }}
      >
        {/* ambient glows — cover entire section so they continue behind pack banner */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(45% 35% at 92% 5%, rgba(199,247,81,0.22), transparent 65%), radial-gradient(55% 40% at 8% 95%, rgba(199,247,81,0.14), transparent 65%), radial-gradient(40% 30% at 90% 92%, rgba(199,247,81,0.10), transparent 70%)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.4,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative max-w-[1480px] mx-auto px-6 md:px-10">
          <div
            className="label-eyebrow"
            style={{ color: "#C7F751", marginBottom: 32 }}
          >
            {props.eyebrow}
          </div>

          {/* Row 1: number + title (kept to 2 lines) */}
          <div
            className="grid grid-cols-1 lg:grid-cols-[minmax(80px,8%)_1fr] gap-6 lg:gap-10 items-start"
            style={{ paddingBottom: 48, borderBottom: "0.5px solid rgba(255,255,255,0.10)" }}
          >
            <span
              style={{
                fontSize: 14,
                letterSpacing: "0.14em",
                color: "#C7F751",
                fontVariantNumeric: "tabular-nums",
                paddingTop: 20,
              }}
            >
              ({props.n})
            </span>
            <h1
              className="h-display"
              style={{
                fontSize: "clamp(44px, 7.4vw, 128px)",
                letterSpacing: "-0.035em",
                lineHeight: 0.95,
                margin: 0,
                color: "#FAFAFA",
                textWrap: "balance" as unknown as undefined,
              }}
            >
              {props.title}.
            </h1>
          </div>

          {/* Row 2: asymmetric text/images layout */}
          <div
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14"
            style={{ paddingTop: 64 }}
          >
            {/* Left column */}
            <div className="lg:col-span-5 lg:col-start-1 min-w-0">
              <p
                style={{
                  fontSize: 22,
                  lineHeight: 1.4,
                  color: "#FAFAFA",
                  marginBottom: 18,
                  fontWeight: 500,
                }}
              >
                {props.intro}
              </p>
              {props.extras?.map((e, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: "rgba(250,250,250,0.6)",
                    marginBottom: 10,
                  }}
                >
                  {e}
                </p>
              ))}

              {/* Incluye pills — replacing tech pills */}
              {props.features && props.features.length > 0 && (
                <div style={{ marginTop: 28 }}>
                  <div
                    className="label-eyebrow"
                    style={{ marginBottom: 12, color: "rgba(250,250,250,0.5)" }}
                  >
                    Incluye
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {props.features.map((f) => (
                      <FeaturePill key={f} text={f} />
                    ))}
                  </div>
                </div>
              )}

              {props.notes && props.notes.length > 0 && (
                <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 2 }}>
                  {props.notes.map((n) => (
                    <StarNote key={n} text={n} />
                  ))}
                </div>
              )}

              <div style={{ display: "flex", marginTop: 24 }}>
                <ServiceCta />
              </div>
            </div>

            {/* Right column — variant-based imagery */}
            <div className="lg:col-span-7 min-w-0">
              {props.variant === "seo" ? (
                <SeoImageFader label={props.heroLabel} />
              ) : (
                <DisenoVerticalMarquee label={props.heroLabel} />
              )}
            </div>
          </div>
        </div>

        {/* Pack banner — inside hero so the glow passes behind it */}
        <div className="relative">
          <PackBanner />
        </div>
      </section>

      {/* Portfolio marquee */}
      <PortfolioMarquee />
    </>
  );
}
