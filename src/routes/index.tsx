import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dovela — Webs que trabajan. Clientes que llegan." },
      {
        name: "description",
        content:
          "Agencia de diseño web y SEO local en Segovia. Diseñamos y posicionamos webs para negocios locales en dos semanas.",
      },
      { property: "og:title", content: "Dovela — Diseño web y SEO local en Segovia" },
      {
        property: "og:description",
        content:
          "Diseñamos y posicionamos webs para negocios locales de Segovia. En dos semanas, sin rodeos.",
      },
    ],
  }),
  component: Index,
});

/* ---------- Shared bits ---------- */

function ArrowCircle({
  size = 36,
  bg = "#0A0A0A",
  fg = "#FAFAFA",
  rotateOnHover = true,
}: {
  size?: number;
  bg?: string;
  fg?: string;
  rotateOnHover?: boolean;
}) {
  return (
    <span
      className="group/arrow inline-flex items-center justify-center rounded-full shrink-0"
      style={{ width: size, height: size, backgroundColor: bg, color: fg }}
    >
      <svg
        width={size * 0.42}
        height={size * 0.42}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={
          rotateOnHover
            ? "transition-transform duration-300 group-hover/arrow:-rotate-45 group-hover:-rotate-45"
            : ""
        }
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="13 6 19 12 13 18" />
      </svg>
    </span>
  );
}

function ImagePlaceholder({
  ratio = "4 / 3",
  radius = 14,
  className = "",
  children,
}: {
  ratio?: string;
  radius?: number;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{ aspectRatio: ratio, backgroundColor: "#2A2A2A", borderRadius: radius }}
    >
      {children}
    </div>
  );
}

/* ---------- NAV ---------- */

function Nav() {
  return (
    <header className="fixed top-4 left-4 right-4 z-50 flex justify-center pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center gap-6 bg-[#FAFAFA] rounded-full w-full max-w-[1200px]"
        style={{ border: "0.5px solid #E5E5E5", height: 52, padding: "0 8px" }}
      >
        <a
          href="/"
          className="flex items-center bg-[#0A0A0A] text-[#FAFAFA] rounded-full"
          style={{ padding: "8px 20px", fontWeight: 600, fontSize: 18 }}
        >
          Dovela
        </a>
        <div className="hidden md:flex items-center gap-7 ml-2">
          {["Proyectos", "Servicios", "Blog"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[15px] text-[#888] hover:text-[#0A0A0A] transition-colors"
              style={{ fontWeight: 400 }}
            >
              {l}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <a
            href="#auditoria"
            className="rounded-full bg-[#C7F751] text-[#0A0A0A] hover:brightness-95 transition"
            style={{ padding: "10px 20px", fontWeight: 600, fontSize: 14 }}
          >
            Pedir auditoría
          </a>
          <ArrowCircle size={36} />
        </div>
      </nav>
    </header>
  );
}

/* ---------- HERO ---------- */

function Hero() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const fmt = new Intl.DateTimeFormat("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Europe/Madrid",
      });
      setTime(fmt.format(d));
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#111111", minHeight: "100vh" }}
    >
      {/* desaturated texture */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      {/* Top left date */}
      <div
        className="absolute"
        style={{ top: 110, left: 40, color: "rgba(255,255,255,0.4)", fontSize: 12 }}
      >
        08/06/2026
      </div>

      {/* Top right label */}
      <div
        className="absolute text-right max-w-[320px]"
        style={{ top: 110, right: 40, color: "rgba(255,255,255,0.5)", fontSize: 12 }}
      >
        Agencia de diseño web y SEO local — Segovia, España
      </div>

      {/* Right vertical center */}
      <div
        className="absolute hidden lg:flex flex-col gap-3"
        style={{ right: 40, top: "50%", transform: "translateY(-50%)" }}
      >
        <div className="text-right">
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>
            Hora local Segovia:
          </div>
          <div style={{ color: "#FAFAFA", fontSize: 13, fontWeight: 500 }}>
            {time || "17:32"}
          </div>
        </div>
        <div className="flex flex-col items-end gap-2 mt-2">
          {["Diseño web", "SEO Local", "Google Business"].map((s) => (
            <span
              key={s}
              className="rounded-full"
              style={{
                border: "0.5px solid rgba(255,255,255,0.3)",
                color: "rgba(255,255,255,0.6)",
                fontSize: 11,
                padding: "4px 12px",
              }}
            >
              ● {s}
            </span>
          ))}
        </div>
      </div>

      {/* Center left H1 */}
      <div
        className="absolute left-10 max-w-[65%]"
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <h1
          className="h-display"
          style={{ fontSize: "clamp(52px, 9vw, 110px)", color: "#FAFAFA" }}
        >
          <span style={{ color: "rgba(255,255,255,0.2)", fontWeight: 600 }}>
            Hacemos webs
          </span>{" "}
          <span style={{ color: "#FAFAFA", fontWeight: 600 }}>
            que traen clientes.
          </span>
        </h1>
      </div>

      {/* Bottom left */}
      <div
        className="absolute left-10 max-w-[520px]"
        style={{ bottom: 56 }}
      >
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15 }}>
          Diseñamos y posicionamos webs para negocios locales de Segovia. En dos
          semanas, sin rodeos.
        </p>
        <div className="flex items-center gap-2 mt-5 group">
          <a
            href="#proyectos"
            className="rounded-full bg-[#0A0A0A] text-[#FAFAFA] hover:brightness-110 transition"
            style={{ padding: "12px 24px", fontWeight: 600, fontSize: 14 }}
          >
            Ver proyectos
          </a>
          <ArrowCircle size={40} />
        </div>
      </div>

      {/* Bottom right floating card */}
      <div
        className="absolute hidden md:block"
        style={{ right: 24, bottom: 24, width: 260 }}
      >
        <div
          className="bg-[#FAFAFA]"
          style={{ borderRadius: 16, border: "0.5px solid #E5E5E5", padding: 16 }}
        >
          <div
            style={{
              aspectRatio: "16 / 9",
              backgroundColor: "#2A2A2A",
              borderRadius: 8,
            }}
          />
          <div className="mt-3 flex items-center justify-between gap-2">
            <div style={{ fontSize: 13, fontWeight: 500, color: "#0A0A0A" }}>
              Fontanería Valverde — Segovia
            </div>
          </div>
          <div className="mt-2">
            <span
              className="inline-block rounded-full"
              style={{
                border: "0.5px solid #888",
                color: "#888",
                fontSize: 11,
                padding: "2px 10px",
              }}
            >
              SEO Local
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2 group">
            <a
              href="#auditoria"
              className="rounded-full bg-[#0A0A0A] text-[#FAFAFA]"
              style={{ padding: "6px 14px", fontSize: 12, fontWeight: 600 }}
            >
              Pedir auditoría gratuita
            </a>
            <ArrowCircle size={28} bg="#C7F751" fg="#0A0A0A" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION HEADER (3/4 + 1/4) ---------- */

function SectionHeader({
  label,
  title,
  ghost,
  paragraph,
  cta,
}: {
  label: string;
  title: string;
  ghost?: string;
  paragraph: string;
  cta: string;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mb-16">
      <div className="lg:col-span-3">
        <div className="label-eyebrow mb-8">{label}</div>
        <h2
          className="h-display text-[#0A0A0A]"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          {ghost ? (
            <>
              <span style={{ color: "rgba(10,10,10,0.2)" }}>{ghost} </span>
              <span>{title}</span>
            </>
          ) : (
            title
          )}
        </h2>
      </div>
      <div className="lg:col-span-1 flex flex-col justify-end gap-4">
        <p style={{ fontSize: 15, color: "#888" }}>{paragraph}</p>
        <a
          href="#"
          className="self-start rounded-full hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition"
          style={{
            border: "0.5px solid #0A0A0A",
            padding: "8px 16px",
            fontSize: 13,
            color: "#0A0A0A",
          }}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

/* ---------- SECTION 2 — MANIFESTO ---------- */

function Manifesto() {
  const items = [
    {
      h: "Estudio en Segovia",
      b: "No somos una gran agencia de Madrid. Estamos aquí, conocemos el mercado local y trabajamos contigo de cerca.",
    },
    {
      h: "Entrega en 2 semanas",
      b: "Tu web lista en 14 días. Sin procesos eternos, sin burocracia. Rápido y bien hecho.",
    },
    {
      h: "Comunicación directa",
      b: "Hablas con quien hace el trabajo. Sin intermediarios, sin cuentas que te pasen el teléfono.",
    },
    {
      h: "Resultados medibles",
      b: "Posiciones en Google, llamadas, formularios. Medimos lo que importa y te lo enseñamos.",
    },
  ];
  return (
    <section className="bg-[#FAFAFA]" style={{ paddingTop: 140, paddingBottom: 140 }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          label="Estudio"
          title="Por qué Dovela."
          paragraph="Trabajamos con negocios locales que quieren crecer en internet. Sin humo, sin agencias lentas."
          cta="Conocer el estudio →"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.h}
              className="p-8"
              style={{
                borderLeft: i === 0 ? "none" : "0.5px solid #E5E5E5",
              }}
            >
              <div style={{ color: "#C7F751", fontSize: 20, lineHeight: 1 }}>◆</div>
              <h3
                className="mt-6"
                style={{ fontSize: 18, fontWeight: 600, color: "#0A0A0A" }}
              >
                {it.h}
              </h3>
              <p className="mt-3" style={{ fontSize: 14, color: "#888" }}>
                {it.b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 3 — SERVICES ACCORDION ---------- */

const SERVICES = [
  {
    n: "01",
    name: "Diseño web",
    desc: "Webs rápidas y bonitas que convierten visitas en clientes.",
    pills: ["Diseño UI", "WordPress", "Mobile first"],
  },
  {
    n: "02",
    name: "SEO Local",
    desc: "Primera página en Google cuando buscan tu negocio en Segovia.",
    pills: ["Google Maps", "Keywords locales", "On-page SEO"],
  },
  {
    n: "03",
    name: "Google Business",
    desc: "Tu ficha de Google optimizada, con reseñas y fotos actualizadas.",
    pills: ["GBP Optimización", "Reseñas", "Fotos"],
  },
  {
    n: "04",
    name: "Mantenimiento",
    desc: "Tu web siempre rápida, segura y actualizada.",
    pills: ["Hosting", "Seguridad", "Actualizaciones"],
  },
];

function Services() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="servicios"
      className="bg-[#FAFAFA]"
      style={{ paddingTop: 140, paddingBottom: 140 }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          label="Servicios"
          title="Lo que hacemos."
          paragraph="Cada servicio está pensado para que tu negocio reciba más llamadas, más reservas y más clientes locales."
          cta="Trabajar con nosotros →"
        />
        <div>
          {SERVICES.map((s, i) => {
            const isOpen = open === i;
            return (
              <div
                key={s.n}
                style={{ borderTop: "0.5px solid #E5E5E5" }}
                className={isOpen ? "overflow-hidden" : ""}
              >
                <div
                  className={isOpen ? "" : ""}
                  style={
                    isOpen
                      ? {
                          backgroundColor: "#0A0A0A",
                          color: "#FAFAFA",
                          borderRadius: 16,
                        }
                      : undefined
                  }
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center gap-4 text-left"
                    style={{ height: 72, padding: "0 24px" }}
                  >
                    <span
                      style={{
                        fontSize: 14,
                        color: isOpen ? "rgba(255,255,255,0.55)" : "#888",
                        width: 48,
                      }}
                    >
                      {s.n}
                    </span>
                    <span style={{ color: "#C7F751", fontSize: 18 }}>•</span>
                    <span
                      style={{
                        fontSize: 18,
                        fontWeight: 500,
                        color: isOpen ? "#FAFAFA" : "#0A0A0A",
                      }}
                    >
                      {s.name}
                    </span>
                    <span
                      className="ml-auto inline-flex items-center justify-center rounded-full"
                      style={{
                        width: 32,
                        height: 32,
                        background: "#0A0A0A",
                        color: isOpen ? "#C7F751" : "#FAFAFA",
                        border: isOpen ? "0.5px solid rgba(255,255,255,0.2)" : "none",
                        fontSize: 18,
                        lineHeight: 1,
                      }}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-6 px-6 pb-6">
                      <div>
                        <p
                          style={{
                            fontSize: 14,
                            color: "rgba(255,255,255,0.75)",
                            maxWidth: 480,
                          }}
                        >
                          {s.desc}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {s.pills.map((p) => (
                            <span
                              key={p}
                              className="rounded-full"
                              style={{
                                border: "0.5px solid rgba(255,255,255,0.4)",
                                color: "#FAFAFA",
                                fontSize: 12,
                                padding: "4px 12px",
                              }}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div
                          style={{
                            width: 200,
                            height: 200,
                            background: "#2A2A2A",
                            borderRadius: 12,
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 4 — PROJECTS ---------- */

const PROJECTS = [
  { name: "Fontanería Valverde", pills: ["Diseño web", "SEO Local"], cat: "SEO Local" },
  { name: "Clínica Montero Psicología", pills: ["Diseño web"], cat: "Diseño web" },
  { name: "Viento de Ladera", pills: ["SEO Local", "GBP"], cat: "SEO Local" },
  { name: "Electricidad Segura SL", pills: ["Diseño web", "SEO Local"], cat: "Diseño web" },
];

function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-[#FAFAFA]"
      style={{ paddingTop: 140, paddingBottom: 140 }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeader
          label="Proyectos"
          label-eyebrow=""
          ghost="Nuestro portfolio,"
          title="explora el trabajo."
          paragraph="Negocios locales que ya están recibiendo más clientes desde Google gracias a su nueva web."
          cta="Ver todos →"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  name,
  pills,
  cat,
}: {
  name: string;
  pills: string[];
  cat: string;
}) {
  return (
    <div className="group">
      <ImagePlaceholder ratio="4 / 3" radius={14}>
        <div className="absolute top-4 left-4 flex flex-col gap-[6px]">
          {pills.map((p) => (
            <span
              key={p}
              className="rounded-full"
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "0.5px solid rgba(255,255,255,0.3)",
                color: "#FAFAFA",
                fontSize: 11,
                fontWeight: 500,
                padding: "4px 12px",
              }}
            >
              {p}
            </span>
          ))}
        </div>
        <div className="absolute top-4 right-4">
          <span
            className="inline-flex items-center justify-center rounded-full overflow-hidden bg-[#FAFAFA] text-[#0A0A0A]"
            style={{ width: 36, height: 36 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 group-hover:[animation:arrowDiag_500ms_ease-in-out]"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </div>
      </ImagePlaceholder>
      <div className="mt-4 flex items-center justify-between gap-3">
        <div style={{ fontSize: 15, fontWeight: 500, color: "#0A0A0A" }}>{name}</div>
        <span
          className="rounded-full whitespace-nowrap"
          style={{
            border: "0.5px solid #888",
            color: "#888",
            fontSize: 12,
            padding: "3px 12px",
          }}
        >
          {cat}
        </span>
      </div>
      <style>{`
        @keyframes arrowDiag {
          0% { transform: translate(0,0); opacity: 1; }
          40% { transform: translate(8px,-8px); opacity: 0; }
          41% { transform: translate(-8px,8px); opacity: 0; }
          100% { transform: translate(0,0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

/* ---------- SECTION 5 — TESTIMONIALS ---------- */

function Testimonials() {
  const small = [
    {
      n: "LUCÍA M.",
      r: "Psicóloga, Clínica Montero",
      q: "La web quedó exactamente como la imaginaba. Y empezamos a recibir citas por internet por primera vez.",
    },
    {
      n: "ROBERTO A.",
      r: "Propietario, Electricidad Segura",
      q: "Rápidos, directos y saben lo que hacen. Sin reuniones eternas.",
    },
    {
      n: "MARTA G.",
      r: "Gerente, Viento de Ladera",
      q: "Duplicamos las reservas en el primer mes después del rediseño.",
    },
  ];
  return (
    <section className="bg-[#FAFAFA]" style={{ paddingTop: 140, paddingBottom: 140 }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-12">
          <div className="label-eyebrow mb-8">Clientes</div>
          <h2
            className="h-display text-[#0A0A0A]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            <span style={{ color: "rgba(10,10,10,0.2)" }}>No te fíes solo </span>
            <span>de nuestra palabra.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 items-stretch">
          <div
            className="relative"
            style={{ background: "#C7F751", borderRadius: 16, padding: 32 }}
          >
            <div
              style={{
                fontSize: 72,
                color: "rgba(10,10,10,0.15)",
                lineHeight: 1,
                fontWeight: 600,
              }}
            >
              “”
            </div>
            <p
              className="mt-2"
              style={{ fontSize: 18, color: "#0A0A0A", maxWidth: 460 }}
            >
              Llevábamos años con una web que no aparecía en Google. En tres semanas
              Dovela nos puso en primera página para “fontanero Segovia”.
            </p>
            <div className="mt-8">
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#0A0A0A",
                }}
              >
                CARLOS V.
              </div>
              <div style={{ fontSize: 12, color: "#555" }}>
                Propietario, Fontanería Valverde
              </div>
            </div>
            <div
              className="absolute"
              style={{ right: 24, bottom: 20, fontSize: 12, color: "#555" }}
            >
              [01]
            </div>
          </div>
          <div
            style={{
              background: "#1A1A1A",
              borderRadius: 16,
              minHeight: 360,
            }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {small.map((t) => (
            <div
              key={t.n}
              style={{ background: "#F5F5F5", borderRadius: 16, padding: 24 }}
            >
              <div className="flex items-center gap-3">
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: "#888",
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      letterSpacing: "0.08em",
                      color: "#0A0A0A",
                    }}
                  >
                    {t.n}
                  </div>
                  <div style={{ fontSize: 12, color: "#888" }}>{t.r}</div>
                </div>
              </div>
              <p className="mt-4" style={{ fontSize: 14, color: "#0A0A0A" }}>
                {t.q}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SECTION 6 — FAQ ---------- */

const FAQ = [
  {
    q: "¿Cuánto tarda en estar lista la web?",
    a: "14 días desde que nos das los materiales. Si no los tienes, te ayudamos a prepararlos.",
  },
  {
    q: "¿Cuánto cuesta una web con SEO?",
    a: "Depende del proyecto. Pide una auditoría gratuita y te damos precio exacto en 24h.",
  },
  {
    q: "¿Trabajáis solo en Segovia?",
    a: "Principalmente sí. Conocemos el mercado local mejor que nadie. Casos fuera de Segovia: consultar.",
  },
  {
    q: "¿Y si ya tengo web pero quiero posicionarme?",
    a: "Auditamos lo que tienes y te decimos exactamente qué cambiar. Sin obligación de contratar el rediseño.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#FAFAFA]" style={{ paddingTop: 140, paddingBottom: 140 }}>
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[40%_60%] gap-16">
        <div>
          <div className="label-eyebrow mb-8">FAQ</div>
          <h2
            className="h-display text-[#0A0A0A]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
          >
            ¿Tienes dudas?
          </h2>
          <div className="relative mt-12" style={{ height: 380 }}>
            <div
              className="absolute"
              style={{
                width: "70%",
                height: 220,
                background: "#2A2A2A",
                borderRadius: 12,
                top: 0,
                left: 0,
              }}
            />
            <div
              className="absolute"
              style={{
                width: "55%",
                height: 160,
                background: "#2A2A2A",
                borderRadius: 12,
                bottom: 0,
                right: 0,
              }}
            />
          </div>
        </div>
        <div>
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} style={{ borderTop: "0.5px solid #E5E5E5" }}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-4 text-left py-6"
                >
                  <span
                    style={{ fontSize: 16, fontWeight: 500, color: "#0A0A0A" }}
                  >
                    {f.q}
                  </span>
                  <span
                    className="ml-auto inline-flex items-center justify-center rounded-full"
                    style={{
                      width: 28,
                      height: 28,
                      background: "#C7F751",
                      color: "#0A0A0A",
                      transform: isOpen ? "rotate(180deg)" : "none",
                      transition: "transform 200ms",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6" style={{ fontSize: 14, color: "#888" }}>
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */

function Footer() {
  return (
    <footer style={{ padding: 24 }}>
      <div
        style={{
          background: "#0A0A0A",
          borderRadius: 24,
          padding: "56px 40px 32px",
        }}
      >
        <div
          className="h-display text-[#FAFAFA]"
          style={{ fontSize: "clamp(56px, 11vw, 110px)" }}
        >
          DOVELA
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div>
            <p
              style={{
                fontSize: 14,
                color: "rgba(250,250,250,0.55)",
                maxWidth: 380,
              }}
            >
              Estudio de diseño web y SEO local en Segovia. Trabajamos con negocios
              que quieren crecer.
            </p>
            <div className="flex gap-2 mt-6">
              {["IG", "in"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="inline-flex items-center justify-center"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    border: "0.5px solid rgba(250,250,250,0.2)",
                    color: "rgba(250,250,250,0.7)",
                    fontSize: 12,
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-3 md:justify-self-end">
            {["Inicio", "Proyectos", "Servicios", "Blog", "Auditoría", "Contacto"].map(
              (l) => (
                <a
                  key={l}
                  href="#"
                  className="hover:text-[#FAFAFA] transition-colors"
                  style={{
                    fontSize: 14,
                    color: "rgba(250,250,250,0.65)",
                  }}
                >
                  {l}
                </a>
              ),
            )}
          </div>
        </div>
        <div
          className="mt-12 pt-6 flex flex-col md:flex-row justify-between gap-2"
          style={{ borderTop: "0.5px solid rgba(250,250,250,0.1)" }}
        >
          <div style={{ fontSize: 12, color: "rgba(250,250,250,0.35)" }}>
            © 2026 Dovela Studio
          </div>
          <div style={{ fontSize: 12, color: "rgba(250,250,250,0.35)" }}>
            hola@dovelaestudio.es
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- PAGE ---------- */

function Index() {
  return (
    <main className="bg-[#FAFAFA] text-[#0A0A0A]">
      <Nav />
      <Hero />
      <Manifesto />
      <Services />
      <Projects />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
