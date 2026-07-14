import { FeaturePill, StarNote, ServiceCta, Wireframe } from "@/routes/index";

type Props = {
  n: string;
  eyebrow: string;
  title: string;
  intro: string;
  extras?: string[];
  features?: string[];
  notes?: string[];
  pills: string[];
  heroLabel: string;
  tint: string;
};

function ImageSlot({
  ratio = "4 / 3",
  label,
  tint,
}: {
  ratio?: string;
  label: string;
  tint?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: ratio,
        borderRadius: 18,
        background:
          tint ??
          "linear-gradient(135deg, #141414 0%, #1c1c1c 60%, #1a1e14 100%)",
        border: "0.5px solid rgba(255,255,255,0.12)",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 80% at 90% 10%, rgba(199,247,81,0.16), transparent 60%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 16,
          top: 14,
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "rgba(250,250,250,0.55)",
        }}
      >
        Imagen · {label}
      </div>
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
        background: "rgba(255,255,255,0.06)",
        color: "#FAFAFA",
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: "0.02em",
        border: "0.5px solid rgba(255,255,255,0.18)",
      }}
    >
      {text}
    </span>
  );
}

function PackCompletoCard() {
  return (
    <section style={{ background: "#FAFAFA", padding: "40px 0 120px" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          style={{
            position: "relative",
            background: "#0A0A0A",
            borderRadius: 28,
            padding: "56px clamp(24px, 4vw, 64px)",
            overflow: "hidden",
            boxShadow: "0 30px 80px -20px rgba(10,10,10,0.35)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(45% 60% at 95% 5%, rgba(199,247,81,0.16), transparent 60%), radial-gradient(45% 60% at 5% 100%, rgba(199,247,81,0.08), transparent 60%)",
            }}
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-[0.35fr_1fr_auto] gap-8 items-center">
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.14em",
                color: "#C7F751",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              (003) · PACK COMPLETO
            </div>
            <div>
              <p
                className="h-display"
                style={{
                  fontSize: "clamp(28px, 3.6vw, 48px)",
                  color: "#FAFAFA",
                  letterSpacing: "-0.015em",
                  lineHeight: 1.05,
                  margin: 0,
                }}
              >
                ¿Y si lo hacemos{" "}
                <span style={{ color: "#C7F751" }}>todo junto</span>?
              </p>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "rgba(250,250,250,0.7)",
                  maxWidth: 620,
                }}
              >
                La forma más eficiente de crecer online con el mayor retorno de
                inversión. Al construirse todo desde cero bajo la misma
                dirección y con un plan conjunto, el resultado es mucho más que
                la suma de sus partes. Mejor precio, mejor coordinación, mejores
                resultados.
              </p>
              <div style={{ marginTop: 16 }}>
                <StarNote text="Incluye 45 días de mantenimiento web y SEO mensual" />
              </div>
            </div>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-3 hover:brightness-95 transition"
              style={{
                padding: "14px 14px 14px 22px",
                borderRadius: 999,
                background: "#C7F751",
                color: "#0A0A0A",
                fontSize: 15,
                fontWeight: 700,
                whiteSpace: "nowrap",
                alignSelf: "start",
              }}
            >
              Ver Pack Completo
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  background: "#0A0A0A",
                  color: "#C7F751",
                  display: "inline-grid",
                  placeItems: "center",
                }}
              >
                <svg
                  width="14"
                  height="14"
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
        </div>
      </div>
    </section>
  );
}

export function ServicioDetail(props: Props) {
  return (
    <>
      {/* Hero — dark card matching home services block */}
      <section style={{ background: "#FAFAFA", paddingTop: 140, paddingBottom: 40 }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div
            style={{
              position: "relative",
              background: "#0A0A0A",
              borderRadius: 32,
              padding: "72px clamp(24px, 4vw, 72px)",
              overflow: "hidden",
              boxShadow: "0 30px 80px -20px rgba(10,10,10,0.35)",
            }}
          >
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(45% 40% at 95% 5%, rgba(199,247,81,0.14), transparent 60%), radial-gradient(45% 40% at 5% 100%, rgba(199,247,81,0.08), transparent 60%)",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.35,
                mixBlendMode: "overlay",
                pointerEvents: "none",
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "3px 3px",
              }}
            />

            <div className="relative">
              <h1
                className="label-eyebrow"
                style={{ color: "#C7F751", marginBottom: 40 }}
              >
                {props.eyebrow}
              </h1>

              {/* Top row: (00N) — big title */}
              <div
                className="grid grid-cols-1 lg:grid-cols-[minmax(80px,18%)_1fr] gap-6 lg:gap-10 items-start"
                style={{ paddingBottom: 48, borderBottom: "0.5px solid rgba(255,255,255,0.10)" }}
              >
                <span
                  style={{
                    fontSize: 14,
                    letterSpacing: "0.14em",
                    color: "#C7F751",
                    fontVariantNumeric: "tabular-nums",
                    paddingTop: 12,
                  }}
                >
                  ({props.n})
                </span>
                <p
                  className="h-display"
                  style={{
                    fontSize: "clamp(48px, 8vw, 120px)",
                    color: "#FAFAFA",
                    letterSpacing: "-0.03em",
                    lineHeight: 0.98,
                    margin: 0,
                  }}
                >
                  {props.title}.
                </p>
              </div>

              {/* Content row: matches accordion open state */}
              <div
                className="grid grid-cols-1 lg:grid-cols-[minmax(80px,18%)_1fr] gap-6 lg:gap-10"
                style={{ paddingTop: 56 }}
              >
                <div />
                <div className="min-w-0">
                  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-8 lg:gap-12 items-start">
                    {/* Left: hero image + notes */}
                    <div className="min-w-0 flex flex-col gap-5">
                      <ImageSlot ratio="4 / 3" label={props.heroLabel} tint={props.tint} />
                      <Wireframe />
                      {props.notes && props.notes.length > 0 && (
                        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                          {props.notes.map((n) => (
                            <StarNote key={n} text={n} />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right: text + pills + features + CTA */}
                    <div className="min-w-0">
                      <p
                        style={{
                          fontSize: 18,
                          lineHeight: 1.55,
                          color: "#FAFAFA",
                          marginBottom: 14,
                        }}
                      >
                        {props.intro}
                      </p>
                      {props.extras?.map((e, i) => (
                        <p
                          key={i}
                          style={{
                            fontSize: 15,
                            lineHeight: 1.6,
                            color: "rgba(250,250,250,0.6)",
                            marginBottom: 10,
                          }}
                        >
                          {e}
                        </p>
                      ))}

                      <div className="flex flex-wrap gap-2" style={{ marginTop: 20 }}>
                        {props.pills.map((p) => (
                          <Pill key={p} text={p} />
                        ))}
                      </div>

                      {props.features && props.features.length > 0 && (
                        <>
                          <div
                            className="label-eyebrow"
                            style={{
                              marginTop: 32,
                              marginBottom: 12,
                              color: "rgba(250,250,250,0.5)",
                            }}
                          >
                            Incluye
                          </div>
                          <div
                            className="grid gap-2"
                            style={{
                              gridTemplateColumns:
                                "repeat(auto-fill, minmax(220px, 1fr))",
                            }}
                          >
                            {props.features.map((f) => (
                              <FeaturePill key={f} text={f} />
                            ))}
                          </div>
                        </>
                      )}

                      <div style={{ display: "flex", marginTop: 28 }}>
                        <ServiceCta />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extra image gallery for visual richness */}
      <section style={{ background: "#FAFAFA", paddingTop: 40, paddingBottom: 40 }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ImageSlot ratio="3 / 4" label="Detalle 1" />
            <ImageSlot ratio="3 / 4" label="Detalle 2" />
            <ImageSlot ratio="3 / 4" label="Detalle 3" />
          </div>
        </div>
      </section>

      {/* Pack completo card */}
      <PackCompletoCard />
    </>
  );
}
