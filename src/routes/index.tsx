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

/**
 * Modern arrow: on hover, the current arrow slides diagonally out to the top-right
 * (fading out) while a second copy slides in diagonally from the bottom-left.
 * No naive tilt. Uses grid-stack so both arrows overlap perfectly.
 */
function ArrowCircle({
  size = 36,
  bg = "#0A0A0A",
  fg = "#FAFAFA",
}: {
  size?: number;
  bg?: string;
  fg?: string;
}) {
  const iconSize = Math.round(size * 0.42);
  return (
    <span
      className="group/arrow relative inline-flex items-center justify-center rounded-full shrink-0 overflow-hidden"
      style={{ width: size, height: size, backgroundColor: bg, color: fg }}
    >
      <span
        className="absolute inset-0 grid place-items-center transition-[transform,opacity] duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/arrow:-translate-y-full group-hover/arrow:translate-x-full group-hover/arrow:opacity-0 group-hover:-translate-y-full group-hover:translate-x-full group-hover:opacity-0"
      >
        <ArrowSvg size={iconSize} />
      </span>
      <span
        className="absolute inset-0 grid place-items-center translate-y-full -translate-x-full opacity-0 transition-[transform,opacity] duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/arrow:translate-y-0 group-hover/arrow:translate-x-0 group-hover/arrow:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100"
      >
        <ArrowSvg size={iconSize} />
      </span>
    </span>
  );
}

function ArrowSvg({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
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
          {[
            { label: "Proyectos", href: "/#proyectos" },
            { label: "Servicios", href: "/servicios" },
            { label: "Blog", href: "#blog" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[15px] text-[#888] hover:text-[#0A0A0A] transition-colors"
              style={{ fontWeight: 400 }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 ml-auto group">
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
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />

      <div
        className="absolute"
        style={{ top: 110, left: 40, color: "rgba(255,255,255,0.4)", fontSize: 12 }}
      >
        08/06/2026
      </div>

      <div
        className="absolute text-right max-w-[320px]"
        style={{ top: 110, right: 40, color: "rgba(255,255,255,0.5)", fontSize: 12 }}
      >
        Agencia de diseño web y SEO local — Segovia, España
      </div>

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

      {/* Centered H1 */}
      <div className="absolute left-10 right-10 lg:right-auto max-w-[70%]" style={{ top: "50%", transform: "translateY(-50%)" }}>
        <h1
          className="h-display"
          style={{ fontSize: "clamp(52px, 9vw, 110px)", color: "#FAFAFA" }}
        >
          <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>
            Si te buscan
          </span>{" "}
          <span style={{ color: "#FAFAFA", fontWeight: 600 }}>
            que te encuentren.
          </span>
        </h1>
      </div>

      {/* Bottom-left copy + CTAs */}
      <div className="absolute left-10 right-10 lg:right-auto max-w-[640px]" style={{ bottom: 48 }}>
        <p
          className="max-w-[560px]"
          style={{ color: "rgba(255,255,255,0.7)", fontSize: 16 }}
        >
          Diseño web y SEO en Segovia para negocios que quieren más clientes.
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-[#C7F751] text-[#0A0A0A] hover:brightness-95 transition"
            style={{ padding: "14px 24px", fontWeight: 600, fontSize: 14 }}
          >
            Reserva una llamada gratuita
            <ArrowCircle size={28} bg="#0A0A0A" fg="#C7F751" />
          </a>
          <a
            href="/servicios"
            className="group inline-flex items-center gap-2 rounded-full transition hover:bg-[rgba(255,255,255,0.08)]"
            style={{
              border: "0.5px solid rgba(255,255,255,0.35)",
              padding: "14px 24px",
              fontWeight: 500,
              fontSize: 14,
              color: "#FAFAFA",
            }}
          >
            Conoce nuestros servicios
            <ArrowCircle size={28} bg="#FAFAFA" fg="#0A0A0A" />
          </a>
        </div>
        <div
          className="mt-4"
          style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}
        >
          20 minutos, sin compromiso.
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

/* ---------- POR QUÉ DOVELA ---------- */

function PorQueDovela() {
  return (
    <section className="bg-[#FAFAFA]" style={{ paddingTop: 140, paddingBottom: 140 }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-3">
            <div className="label-eyebrow mb-8">Por qué Dovela</div>
            <h2
              className="h-display"
              style={{ fontSize: "clamp(44px, 6.4vw, 84px)" }}
            >
              <span className="block" style={{ color: "#0A0A0A", whiteSpace: "nowrap" }}>
                Construimos webs usables
              </span>

              <span className="block" style={{ color: "#0A0A0A", whiteSpace: "nowrap" }}>
                <span
                  style={{
                    background: "#C7F751",
                    color: "#0A0A0A",
                    padding: "0 0.18em",
                    borderRadius: 6,
                    boxDecorationBreak: "clone",
                    WebkitBoxDecorationBreak: "clone",
                  }}
                >
                  para que vendas
                </span>
              </span>
            </h2>
            <p
              className="mt-8"
              style={{ fontSize: 15, color: "#888", maxWidth: 520 }}
            >
              <span className="block">de la mano de una estrategia</span>
              <span className="block">para posicionarte sobre la competencia.</span>
            </p>
          </div>
          <div className="lg:col-span-1 flex flex-col justify-end gap-4">
            <a
              href="#servicios"
              className="group self-start inline-flex items-center gap-2 rounded-full hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition"
              style={{
                border: "0.5px solid #0A0A0A",
                padding: "8px 8px 8px 16px",
                fontSize: 13,
                color: "#0A0A0A",
              }}
            >
              Descubre el servicio
              <ArrowCircle size={24} bg="#0A0A0A" fg="#FAFAFA" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- SERVICES ACCORDION ---------- */

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
          className="group self-start inline-flex items-center gap-2 rounded-full hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition"
          style={{
            border: "0.5px solid #0A0A0A",
            padding: "6px 6px 6px 16px",
            fontSize: 13,
            color: "#0A0A0A",
          }}
        >
          {cta.replace(/\s*→\s*$/, "")}
          <ArrowCircle size={24} bg="#0A0A0A" fg="#FAFAFA" />
        </a>

      </div>
    </div>
  );
}

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

/* ---------- PROJECTS ---------- */

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
          title="Proyectos recientes."
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
          <ArrowCircle size={36} bg="#FAFAFA" fg="#0A0A0A" />
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
    </div>
  );
}

/* ---------- PLAN ---------- */

function RotatingSeal({ size = 140 }: { size?: number }) {
  const id = "seal-path";
  return (
    <div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="animate-[spin_18s_linear_infinite]"
        style={{ display: "block" }}
      >
        <defs>
          <path
            id={id}
            d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
          />
        </defs>
        <circle cx="50" cy="50" r="50" fill="#C7F751" />
        <text
          fill="#0A0A0A"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 9,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          <textPath href={`#${id}`} startOffset="0">
            PERSONALIZADA Y GRATUITA · PERSONALIZADA Y GRATUITA ·
          </textPath>
        </text>
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <svg
          width={Math.round(size * 0.24)}
          height={Math.round(size * 0.24)}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#0A0A0A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </div>
    </div>
  );
}

function Plan() {
  const steps = [
    "Reserva una llamada",
    "Cuéntanos qué necesitas",
    "Recibe tu propuesta visual",
  ];
  const guarantees = [
    "Contacto directo con el equipo",
    "Garantía de entrega en 2 semanas",
    "45 días de actualizaciones SEO incluidos",
  ];
  const titleStyle: React.CSSProperties = {
    fontSize: "clamp(28px, 3vw, 36px)",
  };
  return (
    <section className="bg-[#FAFAFA]" style={{ paddingTop: 140, paddingBottom: 140 }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="label-eyebrow mb-8">Plan</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          {/* Steps — dark */}
          <div
            className="flex flex-col"
            style={{
              background: "#0A0A0A",
              borderRadius: 20,
              padding: 32,
              color: "#FAFAFA",
            }}
          >
            <h3 className="h-display" style={{ ...titleStyle, color: "#FAFAFA" }}>
              3 sencillos pasos
            </h3>
            <ol
              className="mt-10 grid gap-4"
              style={{ gridAutoRows: "minmax(48px, auto)" }}
            >
              {steps.map((t, i) => (
                <li key={t} className="flex items-start gap-4">
                  <span
                    className="inline-flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: 32,
                      height: 32,
                      background: "#C7F751",
                      color: "#0A0A0A",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: 16,
                      color: "rgba(250,250,250,0.92)",
                      lineHeight: 1.5,
                      paddingTop: 4,
                    }}
                  >
                    {t}
                  </span>
                </li>
              ))}
            </ol>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 mt-auto pt-8 rounded-full self-start bg-[#C7F751] text-[#0A0A0A] hover:brightness-95 transition"
              style={{ padding: "12px 20px", fontWeight: 600, fontSize: 14 }}
            >
              Reserva tu llamada
              <ArrowCircle size={28} bg="#0A0A0A" fg="#C7F751" />
            </a>
          </div>

          {/* Guarantees — light */}
          <div
            className="flex flex-col"
            style={{
              background: "#F5F5F5",
              borderRadius: 20,
              padding: 32,
              border: "0.5px solid #E5E5E5",
              color: "#0A0A0A",
            }}
          >
            <h3
              className="h-display text-[#0A0A0A]"
              style={titleStyle}
            >
              Garantías
            </h3>
            <ul
              className="mt-10 grid gap-4"
              style={{ gridAutoRows: "minmax(48px, auto)" }}
            >
              {guarantees.map((t) => (
                <li key={t} className="flex items-start gap-4">
                  <span
                    className="inline-flex items-center justify-center rounded-full shrink-0"
                    style={{
                      width: 32,
                      height: 32,
                      background: "#0A0A0A",
                      color: "#C7F751",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span
                    style={{
                      fontSize: 16,
                      color: "#0A0A0A",
                      lineHeight: 1.5,
                      paddingTop: 4,
                    }}
                  >
                    {t}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="group inline-flex items-center gap-2 mt-auto pt-8 rounded-full self-start text-[#0A0A0A] transition"
              style={{ fontWeight: 600, fontSize: 14 }}
            >
              <span
                className="inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] text-[#FAFAFA] hover:brightness-110 transition"
                style={{ padding: "12px 20px" }}
              >
                Ver el Pack Completo
                <ArrowCircle size={28} bg="#C7F751" fg="#0A0A0A" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------- CTA BANNER ---------- */

function CtaBanner() {
  return (
    <section style={{ paddingTop: 40, paddingBottom: 40 }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          className="relative overflow-hidden"
          style={{
            background: "#111111",
            borderRadius: 24,
            padding: "100px 40px 80px",
            minHeight: 480,
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
            }}
          />
          <div className="relative flex flex-col gap-16">
            <h2
              className="h-display"
              style={{
                fontSize: "clamp(36px, 5vw, 64px)",
                color: "#FAFAFA",
                maxWidth: "18ch",
              }}
            >
              Accede a la base de clientes que{" "}
              <span
                style={{
                  background: "#C7F751",
                  color: "#0A0A0A",
                  padding: "0 0.18em",
                  borderRadius: 6,
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                }}
              >
                tu negocio se merece
              </span>
              .
            </h2>
            <div className="flex justify-end">
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C7F751] text-[#0A0A0A] hover:brightness-95 transition"
                style={{ padding: "16px 26px", fontWeight: 600, fontSize: 15 }}
              >
                Reserva una llamada gratuita
                <ArrowCircle size={32} bg="#0A0A0A" fg="#C7F751" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */

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

/* ---------- FAQ ---------- */

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
            Preguntas frecuentes.
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

/* ---------- LEAD MAGNET ---------- */

function LeadMagnet() {
  const [site, setSite] = useState("");
  const items = [
    "Tu posición frente a tu competencia",
    "Errores que te restan visibilidad",
    "Estado de tu ficha de GBP",
    "Tiempo de carga en móvil",
  ];
  return (
    <section
      id="auditoria"
      style={{ paddingTop: 40, paddingBottom: 40 }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div
          className="relative overflow-hidden"
          style={{
            background: "#0A0A0A",
            borderRadius: 24,
            padding: "72px 40px",
            color: "#FAFAFA",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12">
            <div>
              <div
                className="label-eyebrow"
                style={{ color: "#C7F751" }}
              >
                Auditoría digital gratuita
              </div>
              <h2
                className="h-display mt-6"
                style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#FAFAFA" }}
              >
                <span style={{ color: "#FAFAFA" }}>El progreso</span>{" "}
                <span style={{ color: "#C7F751" }}>consiste en renovarse.</span>
              </h2>

              <p
                className="mt-6"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: 15,
                  maxWidth: 520,
                }}
              >
                Introduce el nombre de tu negocio o tu web y descubre si tu
                posicionamiento te está costando clientes. Y qué hacer para no
                quedarte atrás.
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span style={{ color: "#C7F751", fontSize: 16, lineHeight: 1.4 }}>
                      ◆
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        color: "rgba(255,255,255,0.85)",
                        lineHeight: 1.5,
                      }}
                    >
                      {it}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col justify-center gap-3"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "0.5px solid rgba(255,255,255,0.15)",
                borderRadius: 20,
                padding: 24,
              }}
            >
              <label
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Tu web o negocio
              </label>
              <input
                value={site}
                onChange={(e) => setSite(e.target.value)}
                placeholder="tunegocio.es"
                className="w-full outline-none"
                style={{
                  background: "#FAFAFA",
                  color: "#0A0A0A",
                  fontSize: 15,
                  padding: "14px 18px",
                  borderRadius: 12,
                  border: "0.5px solid #E5E5E5",
                  minHeight: 48,
                }}
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-between gap-2 rounded-full bg-[#C7F751] text-[#0A0A0A] hover:brightness-95 transition"
                style={{
                  padding: "14px 22px",
                  fontWeight: 600,
                  fontSize: 14,
                  marginTop: 4,
                  minHeight: 48,
                }}
              >
                Recibe tu auditoría gratuita
                <ArrowCircle size={28} bg="#0A0A0A" fg="#C7F751" />
              </button>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.4)",
                  marginTop: 4,
                }}
              >
                Sin spam. Respuesta en menos de 24h.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT FORM ---------- */

function ContactForm() {
  return (
    <section
      id="contacto"
      className="bg-[#FAFAFA]"
      style={{ paddingTop: 140, paddingBottom: 140 }}
    >
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16">
        <div>
          <div className="label-eyebrow mb-8">Contacto</div>
          <h2
            className="h-display text-[#0A0A0A]"
            style={{ fontSize: "clamp(48px, 7vw, 96px)" }}
          >
            ¿Hablamos?
          </h2>
          <p
            className="mt-8"
            style={{ fontSize: 16, color: "#888", maxWidth: 420 }}
          >
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas. Sin
            compromiso.
          </p>
          <div
            className="mt-10 flex flex-col gap-2"
            style={{ fontSize: 14, color: "#0A0A0A" }}
          >
            <div>hola@dovelaestudio.es</div>
            <div style={{ color: "#888" }}>Segovia, España</div>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Nombre" placeholder="Tu nombre" />
            <Field label="Teléfono o email" placeholder="+34 · o tu@email.com" />
          </div>
          <div className="flex flex-col gap-2">
            <label
              style={{
                fontSize: 11,
                color: "#888",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Mensaje
            </label>
            <textarea
              placeholder="Cuéntanos sobre tu negocio y qué necesitas…"
              className="w-full outline-none resize-none focus:border-[#0A0A0A] transition-colors"
              rows={6}
              style={{
                background: "#FAFAFA",
                color: "#0A0A0A",
                fontSize: 15,
                padding: "14px 18px",
                borderRadius: 12,
                border: "0.5px solid #E5E5E5",
                fontFamily: "inherit",
              }}
            />
          </div>
          <button
            type="submit"
            className="group self-start inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] text-[#FAFAFA] hover:brightness-110 transition"
            style={{ padding: "14px 24px", fontWeight: 600, fontSize: 14, minHeight: 48 }}
          >
            Enviar mensaje
            <ArrowCircle size={28} bg="#C7F751" fg="#0A0A0A" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        style={{
          fontSize: 11,
          color: "#888",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full outline-none focus:border-[#0A0A0A] transition-colors"
        style={{
          background: "#FAFAFA",
          color: "#0A0A0A",
          fontSize: 15,
          padding: "14px 18px",
          borderRadius: 12,
          border: "0.5px solid #E5E5E5",
          minHeight: 48,
        }}
      />
    </div>
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
      <PorQueDovela />
      
      <Projects />
      <Plan />
      <CtaBanner />
      <Testimonials />
      <Faq />
      <LeadMagnet />
      <ContactForm />
      <Footer />
    </main>
  );
}
