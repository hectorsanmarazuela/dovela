import { useEffect, useState } from "react";
import { ServiceCta, CtaBanner, Plan, PROJECTS, ArrowCircle } from "@/routes/index";

type IncludeItem = { title: string; description: string };

type Props = {
  n: string;
  eyebrow: string;
  title: string;
  intro: string;
  includeTitle: string;
  includes: IncludeItem[];
  disclaimerTitle: string;
  disclaimerText: string;
};

function PackCard() {
  return (
    <div
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.7)",
        backdropFilter: "blur(6px)",
        border: "0.5px solid rgba(24,24,27,0.12)",
        borderRadius: 20,
        padding: 28,
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(80% 100% at 100% 0%, rgba(199,247,81,0.35), transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <div className="relative flex flex-col gap-4">
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(24,24,27,0.06)",
            color: "#18181B",
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
            color: "rgba(24,24,27,0.75)",
            margin: 0,
          }}
        >
          <strong style={{ color: "#18181B" }}>¿Y si lo hacemos todo junto?</strong>{" "}
          Diseño web + SEO bajo la misma dirección: mejor precio, mejor
          coordinación y mucho más ROI que contratarlos por separado.
        </p>
        <a
          href="/#contacto"
          className="inline-flex items-center gap-3 hover:brightness-95 transition"
          style={{
            padding: "10px 10px 10px 18px",
            borderRadius: 999,
            background: "#C7F751",
            color: "#18181B",
            fontSize: 13,
            fontWeight: 700,
            whiteSpace: "nowrap",
            alignSelf: "flex-start",
          }}
        >
          Ver Pack Completo
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: 999,
              background: "#18181B",
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
  );
}

function CheckIcon() {
  return (
    <span
      style={{
        width: 28,
        height: 28,
        borderRadius: 999,
        background: "#C7F751",
        color: "#18181B",
        display: "inline-grid",
        placeItems: "center",
        flexShrink: 0,
        marginTop: 2,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function IncludesList({ title, items }: { title: string; items: IncludeItem[] }) {
  return (
    <div>
      <h3
        className="h-display"
        style={{
          fontSize: "clamp(20px, 2.1vw, 26px)",
          letterSpacing: "-0.01em",
          margin: 0,
          marginBottom: 20,
          color: "#18181B",
        }}
      >
        {title}
      </h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((it, i) => (
          <li
            key={it.title}
            style={{
              display: "flex",
              gap: 16,
              padding: "16px 0",
              borderTop: i === 0 ? "none" : "0.5px solid rgba(24,24,27,0.12)",
            }}
          >
            <CheckIcon />
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#18181B",
                  marginBottom: 4,
                }}
              >
                {it.title}
              </div>
              <div
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.6,
                  color: "rgba(24,24,27,0.65)",
                }}
              >
                {it.description}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Disclaimer({ title, text }: { title: string; text: string }) {
  return (
    <div
      style={{
        padding: 28,
        borderRadius: 20,
        background: "rgba(24,24,27,0.04)",
        border: "0.5px solid rgba(24,24,27,0.10)",
      }}
    >
      <div
        className="label-eyebrow"
        style={{ color: "rgba(24,24,27,0.55)", marginBottom: 10 }}
      >
        {title}
      </div>
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.6,
          color: "rgba(24,24,27,0.75)",
          margin: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

function ProjectCarouselCard() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % PROJECTS.length), 4200);
    return () => clearInterval(t);
  }, []);
  const p = PROJECTS[i];
  return (
    <div
      style={{
        position: "relative",
        background: "#FFFFFF",
        border: "0.5px solid rgba(24,24,27,0.12)",
        borderRadius: 24,
        padding: 20,
        overflow: "hidden",
      }}
    >
      <div
        className="label-eyebrow"
        style={{
          color: "rgba(24,24,27,0.55)",
          marginBottom: 14,
          paddingLeft: 6,
        }}
      >
        Proyectos · {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
      </div>
      <a href={p.href} className="group block">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "4 / 3", borderRadius: 16, background: "#2A2A2A" }}
        >
          {PROJECTS.map((pr, idx) => (
            <img
              key={pr.name}
              src={pr.img}
              alt={pr.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.05]"
              style={{ opacity: idx === i ? 1 : 0 }}
            />
          ))}
        </div>
        <div
          className="flex items-center justify-between gap-3"
          style={{ marginTop: 18, padding: "0 6px" }}
        >
          <div style={{ minWidth: 0 }}>
            <div
              style={{
                fontSize: 17,
                fontWeight: 600,
                color: "#18181B",
                marginBottom: 8,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {p.name}
            </div>
            <div className="flex gap-2 flex-wrap">
              {p.pills.map((x) => (
                <span
                  key={x}
                  className="rounded-full whitespace-nowrap"
                  style={{
                    border: "0.5px solid rgba(24,24,27,0.35)",
                    color: "rgba(24,24,27,0.7)",
                    fontSize: 11,
                    padding: "3px 10px",
                  }}
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
          <ArrowCircle size={44} bg="#C7F751" fg="#18181B" />
        </div>
      </a>
    </div>
  );
}

export function ServicioDetail(props: Props) {
  return (
    <>
      <section style={{ background: "#FAFAFA", padding: "96px 16px 24px" }}>
        <div
          style={{
            position: "relative",
            background: "#F0F0ED",
            color: "#18181B",
            borderRadius: 28,
            paddingTop: 72,
            paddingBottom: 72,
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(45% 35% at 92% 5%, rgba(199,247,81,0.55), transparent 65%), radial-gradient(55% 40% at 8% 95%, rgba(199,247,81,0.35), transparent 65%)",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.5,
              pointerEvents: "none",
              backgroundImage:
                "linear-gradient(rgba(24,24,27,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(24,24,27,0.05) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          <div className="relative max-w-[1280px] mx-auto px-6 md:px-10">
            <div
              className="label-eyebrow"
              style={{ color: "rgba(24,24,27,0.6)", marginBottom: 32 }}
            >
              {props.eyebrow}
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: "0.14em",
                  color: "rgba(24,24,27,0.6)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                ({props.n})
              </span>
              <span
                style={{
                  height: 1,
                  flex: 1,
                  background: "rgba(24,24,27,0.15)",
                }}
              />
            </div>

            {/* Ordered layout: single flex-col on mobile with `order`, 2-col grid on desktop */}
            <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
              {/* LEFT column (desktop) */}
              <div className="contents lg:flex lg:flex-col lg:gap-8 min-w-0">
                <h1
                  className="h-display order-1 lg:order-none"
                  style={{
                    fontSize: "clamp(30px, 4.2vw, 52px)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.05,
                    margin: 0,
                    color: "#18181B",
                    fontWeight: 700,
                  }}
                >
                  {props.title}
                </h1>
                <p
                  className="order-3 lg:order-none"
                  style={{
                    fontSize: 20,
                    lineHeight: 1.55,
                    color: "rgba(24,24,27,0.82)",
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {props.intro}
                </p>
                <div className="order-4 lg:order-none">
                  <ServiceCta />
                </div>
                <div className="order-5 lg:order-none">
                  <IncludesList title={props.includeTitle} items={props.includes} />
                </div>
              </div>

              {/* RIGHT column (desktop) */}
              <div className="contents lg:flex lg:flex-col lg:gap-6 min-w-0">
                <div className="order-2 lg:order-none">
                  <ProjectCarouselCard />
                </div>
                <div className="order-6 lg:order-none">
                  <Disclaimer title={props.disclaimerTitle} text={props.disclaimerText} />
                </div>
                <div className="order-7 lg:order-none">
                  <PackCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Plan />
      <CtaBanner />
    </>
  );
}
