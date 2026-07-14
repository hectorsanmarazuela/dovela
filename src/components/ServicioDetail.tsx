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

function DiamondBullet() {
  return (
    <svg width="12" height="12" viewBox="0 0 14 14" style={{ marginTop: 7, flexShrink: 0 }} aria-hidden>
      <path d="M7 1 L13 7 L7 13 L1 7 Z" fill="#C7F751" stroke="#0A0A0A" strokeWidth="0.8" />
    </svg>
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
        fontWeight: 600,
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
      href="/#contacto"
      className="group inline-flex items-center gap-3 transition hover:brightness-95"
      style={{
        marginTop: 28,
        padding: "14px 14px 14px 22px",
        borderRadius: 999,
        background: "#C7F751",
        color: "#0A0A0A",
        fontSize: 15,
        fontWeight: 700,
        border: "0.5px solid #0A0A0A",
        boxShadow: "0 6px 20px rgba(199,247,81,0.35)",
      }}
    >
      Comenzar proyecto
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
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </span>
    </a>
  );
}

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
        background: tint ?? "#EDEDED",
        border: "1px solid #D4D4D4",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(10,10,10,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,10,10,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 14,
          top: 12,
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: tint ? "rgba(250,250,250,0.7)" : "rgba(10,10,10,0.5)",
        }}
      >
        Imagen · {label}
      </div>
    </div>
  );
}

export function ServicioDetail(props: Props) {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: 160, paddingBottom: 40 }}>
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="label-eyebrow" style={{ marginBottom: 24 }}>
            {props.eyebrow}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-end">
            <div>
              <p
                className="h-display"
                style={{
                  fontSize: "clamp(48px, 7vw, 96px)",
                  color: "#0A0A0A",
                  margin: 0,
                  lineHeight: 1.02,
                  letterSpacing: "-0.02em",
                }}
              >
                {props.title}{" "}
                <span style={{ color: "rgba(10,10,10,0.25)" }}>({props.n})</span>
              </p>
              <p
                style={{
                  marginTop: 24,
                  fontSize: 18,
                  lineHeight: 1.55,
                  color: "#0A0A0A",
                  maxWidth: 620,
                }}
              >
                {props.intro}
              </p>
              {props.extras?.map((e, i) => (
                <p
                  key={i}
                  style={{
                    marginTop: 14,
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "#666",
                    maxWidth: 620,
                  }}
                >
                  {e}
                </p>
              ))}
              <div className="flex flex-wrap gap-2" style={{ marginTop: 24 }}>
                {props.pills.map((p) => (
                  <Pill key={p} text={p} />
                ))}
              </div>
              <CtaButton />
            </div>
            <div>
              <ImageSlot ratio="16 / 11" label={props.heroLabel} tint={props.tint} />
            </div>
          </div>
        </div>
      </section>

      {/* Features + image slots */}
      {props.features && props.features.length > 0 && (
        <section style={{ padding: "80px 0", borderTop: "0.5px solid #E5E5E5" }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
              <div>
                <div className="label-eyebrow" style={{ marginBottom: 16 }}>
                  Incluye
                </div>
                <p
                  className="h-display"
                  style={{
                    fontSize: "clamp(28px, 3.4vw, 44px)",
                    margin: 0,
                    lineHeight: 1.05,
                    letterSpacing: "-0.015em",
                    color: "#0A0A0A",
                  }}
                >
                  Todo lo necesario para lanzar, sin sorpresas.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0" }}>
                  {props.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3"
                      style={{
                        padding: "12px 0",
                        fontSize: 15,
                        color: "#0A0A0A",
                        borderTop: "0.5px solid #E5E5E5",
                        lineHeight: 1.5,
                      }}
                    >
                      <DiamondBullet />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <ImageSlot ratio="3 / 4" label="Detalle 1" />
                <ImageSlot ratio="3 / 4" label="Detalle 2" />
                <div className="col-span-2">
                  <ImageSlot ratio="16 / 9" label="Vista general" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Notes strip */}
      {props.notes && props.notes.length > 0 && (
        <section style={{ padding: "40px 0 100px" }}>
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="flex flex-wrap gap-3">
              {props.notes.map((n) => (
                <div
                  key={n}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "10px 16px",
                    border: "0.5px solid #0A0A0A",
                    borderRadius: 999,
                    background: "rgba(199,247,81,0.25)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#0A0A0A",
                  }}
                >
                  <span
                    aria-hidden
                    style={{ width: 5, height: 5, borderRadius: 999, background: "#0A0A0A" }}
                  />
                  {n}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
