import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import ichoProjectImg from "@/assets/ICHO_PROYECTO.webp.asset.json";

import solaraImg from "@/assets/solara.webp.asset.json";
import fontaneroImg from "@/assets/fontanero.webp.asset.json";
import voltiaImg from "@/assets/voltia.webp.asset.json";
import webFacilImg from "@/assets/VOLTIA_MAC_Y_IPHONE.webp.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dovela - Estudio de Diseño Web y SEO en Segovia" },
      {
        name: "description",
        content:
          "Estudio de diseño web y SEO local en Segovia. Diseñamos y posicionamos webs fáciles de usar para negocios locales en dos semanas.",
      },
      { property: "og:title", content: "Dovela - Estudio de Diseño Web y SEO en Segovia" },
      {
        property: "og:description",
        content:
          "Estudio de diseño web y SEO local en Segovia. Diseñamos y posicionamos webs fáciles de usar para negocios locales en dos semanas.",
      },
      { property: "og:url", content: "https://dovelaestudio.es/" },
    ],
    links: [{ rel: "canonical", href: "https://dovelaestudio.es/" }],
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
  const [pathname, setPathname] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastScrollY.current;
      const isDesktop = window.innerWidth >= 768;
      if (isDesktop && y > 80 && dy > 0) {
        setHidden(true);
      } else if (dy < 0 || !isDesktop) {
        setHidden(false);
      }
      setScrolled(y > 8);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links: Array<{
    label: string;
    href: string;
    match: string;
    children?: Array<{ label: string; href: string; match: string }>;
  }> = [
    { label: "Inicio", href: "/", match: "/" },
    { label: "Proyectos", href: "/#proyectos", match: "__none__" },
    {
      label: "Servicios",
      href: "/servicios/diseno-web",
      match: "/servicios",
      children: [
        { label: "Diseño Web", href: "/servicios/diseno-web", match: "/servicios/diseno-web" },
        { label: "SEO", href: "/servicios/seo", match: "/servicios/seo" },
      ],
    },
    { label: "Blog", href: "#blog", match: "__none__" },
  ];
  const isServiciosActive = pathname.startsWith("/servicios");
  const borderColor = "#D4D4D4";
  const pillBorder = `1px solid ${scrolled ? borderColor : "transparent"}`;
  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 flex justify-center pointer-events-none transition-transform duration-500 ease-out ${hidden ? "" : "delay-100"}`}
      style={{ transform: hidden ? "translateY(calc(-100% - 24px))" : undefined }}

    >
      <nav
        className="pointer-events-auto relative flex items-center justify-between md:justify-start gap-2 bg-[#FAFAFA] rounded-full w-full mx-auto transition-all duration-[500ms] ease-[cubic-bezier(.4,0,.2,1)]"
        style={{
          border: `1px solid ${scrolled ? borderColor : "transparent"}`,
          boxShadow: scrolled ? "0 8px 24px -12px rgba(10,10,10,0.18)" : "none",
          height: 60,
          padding: scrolled ? "0 8px 0 16px" : "0 10px 0 20px",
          maxWidth: scrolled ? 1180 : 2400,
        }}
      >


        {/* Mobile hamburger (left) */}
        <button
          type="button"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-full"
          style={{
            width: 44,
            height: 44,
            background: "#0A0A0A",
            color: "#FAFAFA",
            border: "none",
          }}
        >
          <span
            aria-hidden
            style={{
              position: "relative",
              width: 18,
              height: 14,
              display: "inline-block",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: 2,
                  background: "#FAFAFA",
                  borderRadius: 2,
                  transition:
                    "transform 450ms cubic-bezier(.7,0,.2,1), opacity 250ms cubic-bezier(.7,0,.2,1), top 450ms cubic-bezier(.7,0,.2,1)",
                  top: mobileOpen ? 6 : i === 0 ? 0 : i === 1 ? 6 : 12,
                  transform: mobileOpen
                    ? i === 0
                      ? "rotate(45deg)"
                      : i === 2
                        ? "rotate(-45deg)"
                        : "scaleX(0)"
                    : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </span>
        </button>

        {/* Logo — flex auto layout on mobile, static on desktop */}
        <a
          href="/"
          className="flex-1 flex items-center justify-center md:flex-none md:justify-start md:mr-2 md:ml-2"
          style={{
            fontFamily: "Inter, system-ui, sans-serif",
            fontWeight: 800,
            fontSize: 22,
            color: "#0A0A0A",
            letterSpacing: "-0.02em",
            textTransform: "lowercase",
            lineHeight: 1,
          }}
        >
          dovela<span style={{ color: "#C7F751" }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2 flex-1">
          {links.map((l) => {
            const active =
              l.match === "/servicios"
                ? isServiciosActive
                : pathname === l.match;
            if (l.children) {
              return (
                <div key={l.label} className="group relative flex-1">
                  <a
                    href={l.href}
                    className="w-full flex items-center justify-center rounded-full transition-colors"
                    style={{
                      height: 44,
                      border: pillBorder,
                      background: active ? "#0A0A0A" : "transparent",
                      color: active ? "#FAFAFA" : "#0A0A0A",
                      fontWeight: 700,
                      fontSize: 13,
                    }}
                  >
                    {l.label}
                  </a>
                  <div
                    className="absolute left-0 right-0 top-full pt-2 opacity-0 -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto"
                    style={{
                      transition:
                        "opacity 320ms cubic-bezier(.7,0,.2,1), transform 380ms cubic-bezier(.7,0,.2,1)",
                    }}
                  >
                    <div
                      className="flex flex-col bg-[#FAFAFA] rounded-2xl overflow-hidden"
                      style={{ border: pillBorder, boxShadow: "0 20px 40px rgba(10,10,10,0.08)" }}
                    >
                      {l.children.map((c, ci) => {
                        const cActive = pathname === c.match;
                        return (
                          <div key={c.label}>
                            {ci > 0 && (
                              <div
                                aria-hidden
                                style={{
                                  height: 1,
                                  margin: "0 14px",
                                  background:
                                    "linear-gradient(90deg, transparent, rgba(10,10,10,0.18), transparent)",
                                }}
                              />
                            )}
                            <a
                              href={c.href}
                              className="flex items-center justify-between transition-colors"
                              style={{
                                padding: "12px 18px",
                                fontWeight: 700,
                                fontSize: 13,
                                background: cActive ? "#0A0A0A" : "transparent",
                                color: cActive ? "#FAFAFA" : "#0A0A0A",
                              }}
                            >
                              <span>{c.label}</span>
                              <span aria-hidden style={{ opacity: 0.55, fontSize: 14 }}>
                                →
                              </span>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href}
                className="flex-1 flex items-center justify-center rounded-full transition-colors"
                style={{
                  height: 44,
                  border: pillBorder,
                  background: active ? "#0A0A0A" : "transparent",
                  color: active ? "#FAFAFA" : "#0A0A0A",
                  fontWeight: 700,
                  fontSize: 13,
                }}
              >
                {l.label}
              </a>
            );
          })}
        </div>


        {/* Audit CTA — long on desktop, compact on mobile */}
        <a
          href="#auditoria"
          className="hidden md:flex items-center justify-between rounded-full transition"
          style={{
            height: 44,
            padding: "0 6px 0 22px",
            background: "#C7F751",
            color: "#0A0A0A",
            fontWeight: 700,
            fontSize: 13,
            border: pillBorder,
            minWidth: 240,
            gap: 16,
          }}
        >
          <span>Llamada gratuita</span>
          <ArrowCircle size={34} />
        </a>
        <a
          href="#auditoria"
          className="md:hidden flex items-center justify-between rounded-full transition"
          style={{
            height: 44,
            padding: "0 4px 0 14px",
            background: "#C7F751",
            color: "#0A0A0A",
            fontWeight: 700,
            fontSize: 12,
            border: pillBorder,
            gap: 8,
          }}
        >
          <span>Contacta</span>
          <ArrowCircle size={34} />
        </a>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className="md:hidden pointer-events-auto fixed left-4 right-4 z-40"
        style={{
          top: 84,
          background: "#FAFAFA",
          border: `1px solid ${borderColor}`,
          borderRadius: 24,
          padding: 12,
          transformOrigin: "top center",
          transform: mobileOpen
            ? "translateY(0) scaleY(1)"
            : "translateY(-8px) scaleY(0.96)",
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition:
            "transform 450ms cubic-bezier(.7,0,.2,1), opacity 300ms cubic-bezier(.7,0,.2,1)",
          boxShadow: mobileOpen ? "0 20px 50px rgba(10,10,10,0.10)" : "none",
        }}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col gap-2">
          {links.map((l, idx) => {
            const active =
              l.match === "/servicios"
                ? isServiciosActive
                : pathname === l.match;
            return (
              <div key={l.label} className="flex flex-col gap-2">
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between rounded-full transition-colors"
                  style={{
                    height: 48,
                    padding: "0 20px",
                    border: pillBorder,
                    background: active ? "#0A0A0A" : "transparent",
                    color: active ? "#FAFAFA" : "#0A0A0A",
                    fontWeight: 700,
                    fontSize: 14,
                    transform: mobileOpen ? "translateY(0)" : "translateY(-6px)",
                    opacity: mobileOpen ? 1 : 0,
                    transition: `transform 500ms cubic-bezier(.7,0,.2,1) ${80 + idx * 60}ms, opacity 400ms cubic-bezier(.7,0,.2,1) ${80 + idx * 60}ms, background 200ms, color 200ms`,
                  }}
                >
                  <span>{l.label}</span>
                  <span aria-hidden style={{ fontSize: 18, opacity: 0.6 }}>
                    →
                  </span>
                </a>
                {l.children && (
                  <div className="flex flex-col gap-2" style={{ paddingLeft: 16 }}>
                    {l.children.map((c, ci) => {
                      const cActive = pathname === c.match;
                      return (
                        <a
                          key={c.label}
                          href={c.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between rounded-full transition-colors"
                          style={{
                            height: 42,
                            padding: "0 18px",
                            border: pillBorder,
                            background: cActive ? "#0A0A0A" : "transparent",
                            color: cActive ? "#FAFAFA" : "#0A0A0A",
                            fontWeight: 600,
                            fontSize: 13,
                            transform: mobileOpen ? "translateY(0)" : "translateY(-6px)",
                            opacity: mobileOpen ? 1 : 0,
                            transition: `transform 500ms cubic-bezier(.7,0,.2,1) ${120 + (idx + ci) * 60}ms, opacity 400ms cubic-bezier(.7,0,.2,1) ${120 + (idx + ci) * 60}ms, background 200ms, color 200ms`,
                          }}
                        >
                          <span>— {c.label}</span>
                          <span aria-hidden style={{ fontSize: 16, opacity: 0.5 }}>
                            →
                          </span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
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
      className="relative w-full"
      style={{ background: "#FAFAFA", padding: "96px 16px 24px" }}
    >
      <div
        className="relative w-full"
        style={{ minHeight: "calc(100vh - 120px)" }}
      >
      {/* Dark hero container */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
        style={{
          backgroundColor: "#121214",
          borderRadius: 28,
          border: "none",
          outline: "none",
        }}
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
      </div>


      {/* Top-right meta block — desktop only */}
      <div
        className="absolute hidden lg:flex flex-col gap-4 text-right"
        style={{ right: 40, top: 110, maxWidth: 320 }}
      >
        <div style={{ color: "#FAFAFA", fontSize: 13, fontWeight: 500 }}>
          08/06/2026
        </div>
        <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, lineHeight: 1.5 }}>
          Agencia de diseño web y SEO local — Segovia, España
        </div>
        <div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11 }}>
            Hora local Segovia:
          </div>
          <div style={{ color: "#FAFAFA", fontSize: 13, fontWeight: 500 }}>
            {time || "17:32"}
          </div>
        </div>
        <div className="flex flex-wrap justify-end gap-x-3 gap-y-1" style={{ fontSize: 11, color: "rgba(255,255,255,0.7)" }}>
          <span>● Diseño web</span>
          <span>● SEO Local</span>
          <span>● Google Business</span>
        </div>
      </div>


      {/* Mobile flow: title + copy + CTAs + integrated card (no absolute positioning) */}
      <div className="relative md:hidden flex flex-col" style={{ padding: "40px 24px 0" }}>
        <h1 className="label-eyebrow" style={{ marginBottom: 16, fontSize: 14 }}>
          Diseño web y SEO local en Segovia
        </h1>
        <p
          className="h-display"
          style={{ fontSize: "clamp(48px, 12vw, 72px)", color: "#FAFAFA", margin: 0 }}
        >
          <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>
            Si te buscan,
          </span>{" "}
          <span style={{ color: "#FAFAFA", fontWeight: 600 }}>
            que te encuentren.
          </span>
        </p>
        <p
          style={{ color: "rgba(255,255,255,0.75)", fontSize: 18, lineHeight: 1.5, marginTop: 28 }}
        >
          Diseño web y SEO en Segovia para negocios que quieren más clientes.
        </p>
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-full bg-[#C7F751] text-[#0A0A0A] hover:brightness-95 transition"
            style={{ padding: "14px 20px", fontWeight: 600, fontSize: 14 }}
          >
            Reserva una llamada gratuita
            <ArrowCircle size={28} bg="#0A0A0A" fg="#C7F751" />
          </a>
          <Link
            to="/servicios/diseno-web"
            className="group inline-flex items-center gap-2 rounded-full transition hover:bg-[rgba(255,255,255,0.08)]"
            style={{
              border: "0.5px solid rgba(255,255,255,0.35)",
              padding: "14px 20px",
              fontWeight: 500,
              fontSize: 14,
              color: "#FAFAFA",
            }}
          >
            Explorar nuestros servicios
            <ArrowCircle size={28} bg="#FAFAFA" fg="#0A0A0A" />
          </Link>
        </div>
        <div className="hidden md:block" style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, marginTop: 16 }}>
          20 minutos, sin compromiso.
        </div>

        {/* Icho project card integrated at bottom of hero on mobile */}
        <Link
          to="/proyectos/icho"
          className="group flex flex-col mt-10 overflow-hidden"
          style={{
            background: "#FAFAFA",
            borderRadius: 18,
            padding: 16,
            marginBottom: 16,
          }}
        >
          <div
            className="overflow-hidden"
            style={{
              aspectRatio: "16 / 9",
              backgroundColor: "#FAFAFA",
              borderRadius: 10,
            }}
          >
            <img
              src={ichoProjectImg.url}
              alt="Icho — Joyería de autor"
              className="w-full h-full object-contain transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
            />
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <span style={{ fontSize: 11, color: "rgba(24,24,27,0.55)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Proyecto destacado
            </span>
            <div style={{ fontSize: 16, fontWeight: 600, color: "#0A0A0A" }}>
              Icho
            </div>
          </div>
        </Link>
      </div>

      {/* Desktop H1 */}
      <div className="absolute left-10 right-10 lg:right-auto max-w-[70%] hidden md:block" style={{ top: 110 }}>
        <h1 className="label-eyebrow" style={{ marginBottom: 16, fontSize: 14 }}>
          Diseño web y SEO local en Segovia
        </h1>
        <p
          className="h-display"
          style={{ fontSize: "clamp(52px, 9vw, 110px)", color: "#FAFAFA", margin: 0 }}
        >
          <span style={{ color: "rgba(255,255,255,0.55)", fontWeight: 600 }}>
            Si te buscan,
          </span>{" "}
          <span style={{ color: "#FAFAFA", fontWeight: 600 }}>
            que te encuentren.
          </span>
        </p>
      </div>

      {/* Desktop bottom-left copy + CTAs */}
      <div className="absolute left-10 right-10 lg:right-auto max-w-[640px] hidden md:block" style={{ bottom: 48 }}>
        <p
          className="max-w-[560px]"
          style={{ color: "rgba(255,255,255,0.75)", fontSize: 19, lineHeight: 1.5 }}
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
          <Link
            to="/servicios/diseno-web"
            className="group inline-flex items-center gap-2 rounded-full transition hover:bg-[rgba(255,255,255,0.08)]"
            style={{
              border: "0.5px solid rgba(255,255,255,0.35)",
              padding: "14px 24px",
              fontWeight: 500,
              fontSize: 14,
              color: "#FAFAFA",
            }}
          >
            Explorar nuestros servicios
            <ArrowCircle size={28} bg="#FAFAFA" fg="#0A0A0A" />
          </Link>
        </div>
        <div
          className="mt-4"
          style={{ color: "rgba(255,255,255,0.55)", fontSize: 14 }}
        >
          20 minutos, sin compromiso.
        </div>
      </div>

      {/* Floating card notch (desktop only) — links to Icho case study */}
      <Link
        to="/proyectos/icho"
        data-hero-notch
        className="group absolute bottom-0 right-0 bg-[#F0F0ED] rounded-tl-[40px] rounded-br-[28px] block"
        style={{
          width: 300,
          height: 304,
          padding: "24px 16px 16px 24px",
          zIndex: 3,
        }}
      >
        {/* Curva cóncava Izquierda */}
        <svg className="absolute bottom-0 left-[-40px] w-10 h-10 text-[#F0F0ED] pointer-events-none" fill="currentColor" viewBox="0 0 40 40">
          <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" />
        </svg>

        {/* Curva cóncava Superior */}
        <svg className="absolute top-[-40px] right-0 w-10 h-10 text-[#F0F0ED] pointer-events-none" fill="currentColor" viewBox="0 0 40 40">
          <path d="M40 40V0C40 22.0914 22.0914 40 0 40H40Z" />
        </svg>

        <div className="relative flex h-full flex-col">
          <div
            className="relative overflow-hidden"
            style={{
              aspectRatio: "16 / 10",
              backgroundColor: "#FAFAFA",
              borderRadius: 8,
            }}
          >
            <img
              src={ichoProjectImg.url}
              alt="Icho — Joyería artesanal"
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-2"
            />
            {/* Arrow badge */}
            <div
              className="absolute top-2 right-2 grid place-items-center rounded-full bg-[#121214] text-[#C7F751] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              style={{ width: 36, height: 36 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </div>
          <div className="mt-auto pt-3 flex flex-col gap-1">
            <span style={{ fontSize: 10, color: "rgba(24,24,27,0.55)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Proyecto destacado
            </span>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#0A0A0A" }}>
              Icho <span style={{ color: "rgba(24,24,27,0.4)" }}>—</span> Joyería artesanal
            </div>
          </div>
        </div>
      </Link>

      </div>
    </section>

  );
}


/* ---------- POR QUÉ DOVELA ---------- */

function PorQueDovela() {
  return (
    <section className="bg-[#FAFAFA]" style={{ paddingTop: 140, paddingBottom: 80 }}>
      <div className="max-w-[1480px] mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="label-eyebrow mb-8">Webs profesionales para negocios locales</h2>
            <p
              className="h-display"
              style={{ fontSize: "clamp(44px, 6.4vw, 84px)", margin: 0 }}
            >
              <span className="block" style={{ color: "#0A0A0A", whiteSpace: "nowrap" }}>
                Construimos
              </span>
              <span className="block" style={{ color: "#0A0A0A", whiteSpace: "nowrap" }}>
                webs usables
              </span>
              <span className="block" style={{ whiteSpace: "nowrap" }}>
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
            </p>
            <p
              className="mt-8"
              style={{ fontSize: "clamp(15px, 1.6vw, 22px)", color: "#888", maxWidth: 640 }}
            >
              <span className="block">De la mano de una estrategia</span>
              <span className="block">para posicionarte sobre la competencia.</span>
            </p>
            <a
              href="#servicios"
              className="group self-start inline-flex items-center gap-2 rounded-full hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition mt-10"
              style={{
                border: "0.5px solid #0A0A0A",
                padding: "10px 10px 10px 20px",
                fontSize: 15,
                fontWeight: 600,
                color: "#0A0A0A",
              }}
            >
              Descubre el servicio
              <ArrowCircle size={28} bg="#0A0A0A" fg="#FAFAFA" />
            </a>
          </div>

          <div className="relative">
            <div
              className="relative overflow-hidden bg-white"
              style={{
                borderRadius: 28,
                border: "0.5px solid #E5E5E5",
                padding: 14,
                boxShadow: "0 24px 70px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={webFacilImg.url}
                alt="Mockups de webs fáciles de usar en escritorio, tablet y móvil"
                className="w-full h-auto object-contain"
                style={{ borderRadius: 18, display: "block" }}
                loading="lazy"
              />
              <div
                className="absolute top-6 right-6 grid place-items-center rounded-full bg-[#18181B] text-[#C7F751]"
                style={{ width: 44, height: 44 }}
              >
                <span style={{ fontSize: 11, fontWeight: 700 }}>WEB</span>
              </div>
            </div>

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
        <h2 className="label-eyebrow mb-8">{label}</h2>
        <p
          className="h-display text-[#0A0A0A]"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: 0 }}
        >
          {ghost ? (
            <>
              <span style={{ color: "rgba(10,10,10,0.2)" }}>{ghost} </span>
              <span>{title}</span>
            </>
          ) : (
            title
          )}
        </p>
      </div>
      <div className="lg:col-span-1 flex flex-col justify-end gap-4">
        <p style={{ fontSize: "clamp(15px, 1.6vw, 22px)", color: "#888" }}>{paragraph}</p>
        <a
          href="#"
          className="group self-start inline-flex items-center gap-2 rounded-full hover:bg-[#0A0A0A] hover:text-[#FAFAFA] transition"
          style={{
            border: "0.5px solid #0A0A0A",
            padding: "10px 10px 10px 20px",
            fontSize: 15,
            fontWeight: 600,
            color: "#0A0A0A",
          }}
        >
          {cta.replace(/\s*→\s*$/, "")}
          <ArrowCircle size={28} bg="#0A0A0A" fg="#FAFAFA" />
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
          label="Servicios de diseño web y SEO en Segovia"
          title="Nuestros servicios."
          paragraph="Estamos especializados en diseño web, posicionamiento SEO y Google Business. Trabajamos mejor cuando un proyecto requiere los tres servicios, pero si solo necesitas uno, cuéntanoslo."
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
  { name: "Icho", pills: ["Diseño web", "E-commerce"], cat: "E-commerce", img: ichoProjectImg.url, href: "/proyectos/icho" },
  { name: "Solara Estudio de Pilates", pills: ["Diseño web", "SEO local"], cat: "Diseño web", img: solaraImg.url, href: "/proyectos/solara" },
  { name: "Fernández del Campo Fontaneros", pills: ["Diseño web", "SEO local"], cat: "SEO local", img: fontaneroImg.url, href: "/proyectos/fdc-fontanero" },
  { name: "Voltia Rural", pills: ["Diseño web", "SEO local"], cat: "Diseño web", img: voltiaImg.url, href: "/proyectos/voltiarural" },
];

function Projects() {
  return (
    <section
      id="proyectos"
      className="bg-[#FAFAFA]"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="w-full px-6">

        <SectionHeader
          label="Proyectos de diseño web en Segovia"
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
  img,
  href,
}: {
  name: string;
  pills: string[];
  cat: string;
  img: string;
  href: string;
}) {
  const [hovering, setHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    <a href={href} className="group block">
      <div
        className="relative w-full overflow-hidden md:cursor-none"
        style={{ aspectRatio: "4 / 3", backgroundColor: "#2A2A2A", borderRadius: 14 }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
        }}
      >
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {/* Static arrow — mobile only */}
        <div className="absolute top-4 right-4 md:hidden">
          <ArrowCircle size={36} bg="#FAFAFA" fg="#0A0A0A" />
        </div>
        {/* Custom cursor — desktop only */}
        <div
          aria-hidden
          className="hidden md:grid pointer-events-none absolute place-items-center rounded-full text-[#0A0A0A] transition-opacity duration-200 ease-out"
          style={{
            width: 72,
            height: 72,
            background: "#C7F751",
            top: pos.y,
            left: pos.x,
            transform: "translate(-50%, -50%)",
            opacity: hovering ? 1 : 0,
            fontSize: 26,
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          ↗
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3 flex-wrap">
        <div style={{ fontSize: 15, fontWeight: 500, color: "#0A0A0A" }}>{name}</div>
        <div className="flex gap-2 flex-wrap">
          {pills.map((p) => (
            <span
              key={p}
              className="rounded-full whitespace-nowrap"
              style={{
                border: "0.5px solid #888",
                color: "#888",
                fontSize: 12,
                padding: "3px 12px",
              }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </a>
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
    <section className="bg-[#FAFAFA]" style={{ paddingTop: 40, paddingBottom: 140 }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="label-eyebrow mb-8">Cómo trabajamos</h2>
        <p
          className="h-display mb-16"
          style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: 0, marginBottom: 64 }}
        >
          <span style={{ color: "#888" }}>¿Hablamos de tu </span>
          <span style={{ color: "#0A0A0A" }}>proyecto</span>
          <span style={{ color: "#888" }}>?</span>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
          {/* Steps — dark */}
          <div
            className="flex flex-col"
            style={{
              background: "#C7F751",
              borderRadius: 20,
              padding: 32,
              color: "#121214",
            }}
          >
            <h3 className="h-display" style={{ ...titleStyle, color: "#121214" }}>
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
                      background: "#121214",
                      color: "#C7F751",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {i + 1}
                  </span>
                  <span
                    style={{
                      fontSize: 19,
                      color: "rgba(18,18,20,0.88)",
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
              className="group inline-flex items-center gap-2 mt-auto pt-8 rounded-full self-start bg-[#121214] text-[#C7F751] hover:brightness-110 transition"
              style={{ padding: "12px 20px", fontWeight: 600, fontSize: 14 }}
            >
              Reserva tu llamada
              <ArrowCircle size={28} bg="#C7F751" fg="#121214" />
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
            <h2
              className="h-display text-[#0A0A0A]"
              style={titleStyle}
            >
              Garantías para tu negocio
            </h2>
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
                      fontSize: 19,
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


/* ---------- MARQUEE BAND ---------- */

function MarqueeBand() {
  const items = [
    "SEO Local",
    "Diseño web",
    "Copywriting",
    "Google Business",
    "Branding",
    "Analítica",
    "Mantenimiento",
    "UX / UI",
  ];
  const loop = [...items, ...items, ...items, ...items];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [dir, setDir] = useState<1 | -1>(-1); // -1 = moves left (scroll down default)

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Slow, editorial base speed
    const BASE_DURATION = 90; // seconds for a full half-track pass
    let offset = 0;
    let direction = -1;
    let lastScrollY = window.scrollY;
    let lastTs = performance.now();
    let raf = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY;
      if (delta > 0) direction = -1;
      else if (delta < 0) direction = 1;
      lastScrollY = y;
      setDir(direction as 1 | -1);
    };

    const tick = (ts: number) => {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      const halfWidth = track.scrollWidth / 2;
      if (halfWidth > 0) {
        const pxPerSec = halfWidth / BASE_DURATION;
        offset += direction * pxPerSec * dt;
        if (offset <= -halfWidth) offset += halfWidth;
        if (offset >= 0) offset -= halfWidth;
        track.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);


  return (
    <section
      aria-hidden
      style={{
        background: "#C7F751",
        paddingTop: 28,
        paddingBottom: 28,
        borderTop: "1px solid #0A0A0A",
        borderBottom: "1px solid #0A0A0A",
      }}
    >
      <style>{`
        .dovela-band-text {
          font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #0A0A0A;
          line-height: 1;
        }
        .dovela-sep-icon {
          transition: transform 700ms cubic-bezier(.65,0,.35,1);
          transform-origin: center;
        }
      `}</style>
      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex whitespace-nowrap items-center"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {loop.map((t, i) => (
            <span key={i} className="inline-flex items-center">
              <span
                className="dovela-band-text"
                style={{
                  fontSize: "clamp(40px, 6vw, 88px)",
                  paddingLeft: 28,
                  paddingRight: 28,
                }}
              >
                {t}
              </span>
              <span
                aria-hidden
                className="inline-flex items-center justify-center"
                style={{ paddingLeft: 4, paddingRight: 4 }}
              >
                <svg
                  className="dovela-sep-icon"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#0A0A0A"
                  stroke="#0A0A0A"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: `rotate(${dir === -1 ? 0 : 180}deg)` }}
                >
                  <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
                </svg>
              </span>
            </span>
          ))}
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
          className="relative overflow-hidden px-6 py-14 md:px-14 md:py-[72px]"
          style={{
            background: "#F0F0ED",
            borderRadius: 24,
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(24,24,27,0.6) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
            }}
          />
          {/* Decorative lime glow */}
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              width: 520,
              height: 520,
              right: -160,
              top: -180,
              background:
                "radial-gradient(circle, rgba(199,247,81,0.55), rgba(199,247,81,0) 65%)",
              filter: "blur(30px)",
            }}
          />
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              width: 420,
              height: 420,
              left: -140,
              bottom: -160,
              background:
                "radial-gradient(circle, rgba(199,247,81,0.35), rgba(199,247,81,0) 65%)",
              filter: "blur(30px)",
            }}
          />
          <div className="relative flex flex-col items-center text-center">
            <h2
              className="label-eyebrow mb-6"
              style={{ color: "rgba(24,24,27,0.6)" }}
            >
              Agencia web local en Segovia
            </h2>
            <p
              className="h-display"
              style={{
                fontSize: "clamp(40px, 6vw, 76px)",
                color: "#18181B",
                maxWidth: "16ch",
                marginBottom: 40,
                margin: 0,
              }}
            >
              Tu próximo{" "}
              <span
                style={{
                  background: "#C7F751",
                  color: "#18181B",
                  padding: "0 0.18em",
                  borderRadius: 6,
                  boxDecorationBreak: "clone",
                  WebkitBoxDecorationBreak: "clone",
                }}
              >
                cliente
              </span>{" "}
              te está buscando.
            </p>
            <a
              href="#contacto"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#C7F751] text-[#18181B] hover:brightness-95 transition"
              style={{
                padding: "14px 14px 14px 26px",
                fontWeight: 600,
                fontSize: 15,
                whiteSpace: "nowrap",
                maxWidth: "100%",
              }}
            >
              <span style={{ whiteSpace: "nowrap" }}>
                Reserva una llamada gratuita
              </span>
              <ArrowCircle size={32} bg="#18181B" fg="#C7F751" />
            </a>
            <div
              style={{
                color: "rgba(24,24,27,0.6)",
                fontSize: "clamp(16px, 1.6vw, 23px)",
                marginTop: 16,
              }}
            >
              20 minutos · Sin compromiso
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
    <section className="bg-[#FAFAFA]" style={{ paddingTop: 140, paddingBottom: 60 }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="mb-12">
          <h2 className="label-eyebrow mb-8">Opiniones de clientes</h2>
          <p
            className="h-display text-[#0A0A0A]"
            style={{ fontSize: "clamp(36px, 5vw, 56px)", margin: 0 }}
          >
            <span style={{ color: "rgba(10,10,10,0.2)" }}>No te fíes solo </span>
            <span>de nuestra palabra.</span>
          </p>
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
              <p className="mt-4" style={{ fontSize: "clamp(17px, 1.8vw, 25px)", color: "#0A0A0A" }}>
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
    <section style={{ background: "#FAFAFA", paddingTop: 60, paddingBottom: 120 }}>
      <style>{`
        .fq-card { background:#F0F0F0; border:1px solid #E5E5E5; border-radius:16px; cursor:pointer; transition: background .3s ease, border-color .3s ease, box-shadow .3s ease; box-shadow: 0 4px 14px rgba(0,0,0,0.06); }
        .fq-card:hover { background:#EBEBEB; }
        .fq-closed { display:flex; align-items:center; justify-content:space-between; padding:22px 26px; gap:16px; max-height:96px; opacity:1; overflow:hidden; transition: max-height .42s cubic-bezier(.4,0,.2,1), opacity .25s ease, padding .3s ease; }
        .fq-card.open .fq-closed { max-height:0; opacity:0; padding-top:0; padding-bottom:0; }
        .fq-c2wrap { max-height:0; opacity:0; overflow:hidden; transition: max-height .45s cubic-bezier(.4,0,.2,1), opacity .3s ease; }
        .fq-card.open .fq-c2wrap { max-height:140px; opacity:1; overflow:visible; }
        .fq-c2inner { padding:2px 12px 14px; }
        .fq-c2 { background:#0A0A0A; border:1px solid #0A0A0A; border-radius:12px; padding:18px 22px; display:flex; align-items:center; justify-content:space-between; gap:16px; transition: box-shadow .4s cubic-bezier(.4,0,.2,1); }
        .fq-card.open .fq-c2 { box-shadow: 0 18px 50px rgba(0,0,0,0.35); }
        .fq-c2 .fq-qtext { color:#FAFAFA; }
        .fq-answ { max-height:0; overflow:hidden; transition: max-height .45s cubic-bezier(.4,0,.2,1); }
        .fq-card.open .fq-answ { max-height:260px; }
        .fq-answbody { padding:6px 26px 22px; }
        .fq-answbody p { font-size:15px; color:#888888; line-height:1.7; }
        .fq-qtext { font-size:16px; font-weight:500; color:#0A0A0A; line-height:1.35; flex:1; letter-spacing:-0.01em; }

        .fq-icon { width:32px; height:32px; border-radius:50%; border:1.5px solid rgba(10,10,10,0.2); display:flex; align-items:center; justify-content:center; flex-shrink:0; position:relative; overflow:hidden; transition: background .4s cubic-bezier(.4,0,.2,1), border-color .4s cubic-bezier(.4,0,.2,1); }
        .fq-arrow { position:absolute; transition: opacity .3s ease, transform .4s cubic-bezier(.4,0,.2,1); stroke:#888888; stroke-width:2; fill:none; transform:rotate(0deg); opacity:1; }
        .fq-chev { position:absolute; transition: opacity .3s ease, transform .4s cubic-bezier(.4,0,.2,1); stroke:#0A0A0A; stroke-width:2; fill:none; transform:rotate(-90deg); opacity:0; }
        .fq-card.open .fq-c2 .fq-icon { background:#C7F751; border-color:#C7F751; }
        .fq-card.open .fq-c2 .fq-icon .fq-arrow { opacity:0; transform:rotate(90deg); }
        .fq-card.open .fq-c2 .fq-icon .fq-chev { opacity:1; transform:rotate(0deg); }
      `}</style>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="label-eyebrow mb-4" style={{ fontSize: 13 }}>Preguntas frecuentes sobre diseño web y SEO</h2>
          <p className="h-display" style={{ fontSize: "clamp(36px, 5vw, 56px)", color: "#0A0A0A", margin: 0 }}>
            Preguntas frecuentes.
          </p>
        </div>
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
          }}
        >

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className={`fq-card${isOpen ? " open" : ""}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <div className="fq-closed">
                    <span className="fq-qtext">{f.q}</span>
                    <span className="fq-icon">
                      <svg className="fq-arrow" width="12" height="12" viewBox="0 0 24 24">
                        <path d="M7 17 L17 7 M17 7 H9 M17 7 V15" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </div>
                  <div className="fq-c2wrap">
                    <div className="fq-c2inner">
                      <div className="fq-c2">
                        <span className="fq-qtext">{f.q}</span>
                        <span className="fq-icon">
                          <svg className="fq-arrow" width="12" height="12" viewBox="0 0 24 24">
                            <path d="M7 17 L17 7 M17 7 H9 M17 7 V15" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <svg className="fq-chev" width="12" height="12" viewBox="0 0 24 24">
                            <polyline points="6 9 12 15 18 9" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="fq-answ">
                    <div className="fq-answbody">
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
            background: "#121214",
            borderRadius: 24,
            padding: "56px clamp(20px, 3vw, 40px)",
            color: "#FAFAFA",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 items-start">
            <div className="min-w-0">
              <h2
                className="label-eyebrow"
                style={{ color: "#C7F751" }}
              >
                Auditoría SEO gratuita para tu negocio
              </h2>
              <p
                className="h-display mt-6"
                style={{ fontSize: "clamp(32px, 4.4vw, 52px)", color: "#FAFAFA" }}
              >
                <span style={{ color: "#FAFAFA" }}>¿Tu negocio</span>{" "}
                <span style={{ color: "#C7F751" }}>aparece en Google?</span>
              </p>

              <p
                className="mt-6"
                style={{
                  color: "rgba(255,255,255,0.65)",
                  fontSize: "clamp(15px, 1.6vw, 22px)",
                  maxWidth: 720,
                }}
              >
                Introduce el nombre de tu negocio o tu web y descubre si tu
                posicionamiento te está costando clientes. Y qué hacer para no
                quedarte atrás.
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((it) => (
                  <li key={it} className="flex items-start gap-3">
                    <span style={{ color: "#C7F751", fontSize: 18, lineHeight: 1.4 }}>
                      ◆
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(17px, 1.8vw, 25px)",
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
              className="flex flex-col justify-center gap-3 min-w-0 w-full"
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
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[minmax(0,45%)_minmax(0,55%)] gap-12 lg:gap-16">
        <div className="min-w-0">
          <h2 className="label-eyebrow mb-8" style={{ fontSize: 13 }}>Contacto — Dovela Estudio Segovia</h2>
          <p
            className="h-display text-[#0A0A0A]"
            style={{ fontSize: "clamp(44px, 6vw, 84px)", margin: 0 }}
          >
            ¿Hablamos?
          </p>
          <p
            className="mt-8"
            style={{ fontSize: 16, color: "#888", maxWidth: 620, lineHeight: 1.6 }}
          >

            Cuéntanos qué necesitas y te respondemos en menos de 24 horas. Sin
            compromiso.
          </p>

          {/* Contact info cards */}
          <div className="mt-10 flex flex-col gap-3">
            <a
              href="mailto:hola@dovelaestudio.es"
              className="group flex items-center gap-4 rounded-2xl transition hover:bg-white"
              style={{
                background: "var(--color-lime-subtle)",
                border: "0.5px solid #E5E5E5",
                padding: "16px 18px",
              }}
            >
              <span
                className="inline-flex items-center justify-center rounded-full shrink-0"
                style={{ width: 40, height: 40, background: "#0A0A0A", color: "#C7F751" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <polyline points="3 7 12 13 21 7" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
                  Email
                </div>
                <div className="truncate" style={{ fontSize: 15, color: "#0A0A0A", fontWeight: 500 }}>
                  hola@dovelaestudio.es
                </div>
              </div>
            </a>
            <div
              className="flex items-center gap-4 rounded-2xl"
              style={{
                background: "#F5F5F5",
                border: "0.5px solid #E5E5E5",
                padding: "16px 18px",
              }}
            >
              <span
                className="inline-flex items-center justify-center rounded-full shrink-0"
                style={{ width: 40, height: 40, background: "#0A0A0A", color: "#C7F751" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <div className="min-w-0 flex-1">
                <div style={{ fontSize: 11, color: "#888", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 500 }}>
                  Estudio
                </div>
                <div style={{ fontSize: 15, color: "#0A0A0A", fontWeight: 500 }}>
                  Segovia, España
                </div>
              </div>
              <span
                className="rounded-full shrink-0"
                style={{
                  border: "0.5px solid #0A0A0A",
                  color: "#0A0A0A",
                  fontSize: 11,
                  padding: "3px 10px",
                  fontWeight: 500,
                }}
              >
                <span style={{ color: "#C7F751" }}>●</span> Disponible
              </span>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4 min-w-0 w-full"
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

/* ============================================================
   Services Accordion (dark rounded card, designhoist-inspired)
   ============================================================ */

function AltRotator({ a, b }: { a: string; b: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % 2), 3500);
    return () => clearInterval(t);
  }, []);
  const items = [a, b];
  return (
    <span
      style={{
        display: "inline-grid",
        verticalAlign: "bottom",
        lineHeight: 1.2,
      }}
    >
      {items.map((t, idx) => (
        <span
          key={idx}
          style={{
            gridArea: "1 / 1",
            transition:
              "transform 500ms cubic-bezier(.7,0,.2,1), opacity 400ms cubic-bezier(.7,0,.2,1)",
            transform: idx === i ? "translateY(0)" : "translateY(-110%)",
            opacity: idx === i ? 1 : 0,
            pointerEvents: idx === i ? "auto" : "none",
            whiteSpace: "nowrap",
          }}
        >
          {t}
        </span>
      ))}
    </span>
  );
}

function FeaturePill({ text }: { text: string }) {
  const parts = text.split("/").map((s) => s.trim());
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 16px",
        borderRadius: 999,
        background: "rgba(24,24,27,0.04)",
        border: "0.5px solid rgba(24,24,27,0.12)",
        color: "#18181B",
        fontSize: 13.5,
        lineHeight: 1.2,
        fontWeight: 500,
        width: "100%",
        minWidth: 0,
      }}
    >
      <span
        aria-hidden
        style={{
          width: 5,
          height: 5,
          borderRadius: 999,
          background: "#C7F751",
          boxShadow: "0 0 8px rgba(199,247,81,0.6)",
          flexShrink: 0,
        }}
      />
      <span style={{ minWidth: 0, overflow: "hidden" }}>
        {parts.length === 2 ? <AltRotator a={parts[0]} b={parts[1]} /> : text}
      </span>
    </span>
  );
}

function StarNote({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "6px 0",
        color: "rgba(24,24,27,0.75)",
        fontSize: 13,
        fontWeight: 400,
        lineHeight: 1.45,
      }}
    >
      <span
        aria-hidden
        style={{
          color: "#7BAA1E",
          fontSize: 16,
          lineHeight: 1.45,
          flexShrink: 0,
        }}
      >
        ✦
      </span>
      <span style={{ minWidth: 0 }}>{text}</span>
    </div>
  );
}

function ServiceCta() {
  return (
    <a
      href="#contacto"
      className="group inline-flex items-center gap-3 transition hover:brightness-95"
      style={{
        marginTop: 24,
        padding: "12px 12px 12px 22px",
        borderRadius: 999,
        background: "#C7F751",
        color: "#0A0A0A",
        fontSize: 14,
        fontWeight: 600,
        alignSelf: "flex-start",
      }}
    >
      Comenzar proyecto
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
  );
}


function Wireframe() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "2 / 1",
        borderRadius: 16,
        background:
          "linear-gradient(135deg, #F5F5F0 0%, #ECECE6 60%, #EEF3DE 100%)",
        border: "0.5px solid rgba(24,24,27,0.08)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(24,24,27,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(24,24,27,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 80% at 90% 10%, rgba(199,247,81,0.35), transparent 60%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          right: 16,
          height: 22,
          borderRadius: 6,
          background: "rgba(24,24,27,0.05)",
          border: "0.5px solid rgba(24,24,27,0.10)",
          display: "flex",
          alignItems: "center",
          gap: 6,
          padding: "0 10px",
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: 999, background: "rgba(24,24,27,0.25)" }} />
        <span style={{ width: 6, height: 6, borderRadius: 999, background: "rgba(24,24,27,0.25)" }} />
        <span style={{ width: 6, height: 6, borderRadius: 999, background: "#C7F751" }} />
      </div>
      <div style={{ position: "absolute", left: 24, right: "42%", top: 60 }}>
        <div style={{ height: 14, borderRadius: 4, background: "rgba(24,24,27,0.25)", width: "78%", marginBottom: 8 }} />
        <div style={{ height: 14, borderRadius: 4, background: "rgba(24,24,27,0.15)", width: "58%", marginBottom: 14 }} />
        <div style={{ height: 8, borderRadius: 4, background: "rgba(24,24,27,0.10)", width: "90%", marginBottom: 6 }} />
        <div style={{ height: 8, borderRadius: 4, background: "rgba(24,24,27,0.10)", width: "80%", marginBottom: 14 }} />
        <div
          style={{
            display: "inline-block",
            padding: "6px 14px",
            borderRadius: 999,
            background: "#C7F751",
            color: "#18181B",
            fontSize: 10,
            fontWeight: 600,
          }}
        >
          Comenzar
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          right: 24,
          top: 60,
          bottom: 24,
          width: "34%",
          borderRadius: 10,
          background:
            "linear-gradient(160deg, rgba(199,247,81,0.28), rgba(24,24,27,0.04))",
          border: "0.5px solid rgba(24,24,27,0.10)",
        }}
      />
    </div>
  );
}

type SvcBlock = {
  n: string;
  title: string;
  mobileTitle?: string;
  intro: string;
  extras?: string[];
  features?: string[];
  notes?: string[];
};

const SERVICE_BLOCKS: SvcBlock[] = [
  {
    n: "001",
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
      "SEO básico / Headers, meta tags, sitemap",
      "Diseño responsive móvil",
      "1 mes de mantenimiento incluido",
    ],
    notes: [
      "Mantenimiento mensual aparte — 2 horas de ediciones incluidas",
      "Entrega promedio en 14 días",
    ],
  },
  {
    n: "002",
    title: "Posicionamiento SEO",
    mobileTitle: "SEO",
    intro:
      "Estrategia personalizada para llevar y mantener a tu negocio al inicio de los resultados de búsqueda.",
    features: [
      "Estudio de palabras clave gratuito",
      "Optimización on-page y off-page",
      "Optimización de Google Business Profile",
      "Construcción de backlinks",
      "Estrategia de blogs / Por separado",
    ],

    notes: ["Tarifa única de proyecto + cuota de SEO mensual"],
  },
  {
    n: "003",
    title: "Pack completo",
    intro:
      "La forma más eficiente de crecer online con el mayor retorno de inversión. Al construirse todo desde cero bajo la misma dirección y con un plan conjunto, el resultado es mucho más que la suma de sus partes.",
    notes: ["Incluye 45 días de mantenimiento web y SEO mensual"],
  },
];

function ServiceRow({
  service,
  open,
  onToggle,
}: {
  service: SvcBlock;
  open: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    const el = contentRef.current;
    const update = () => setMaxH(el.scrollHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [service]);

  return (
    <div
      style={{
        background: "#FFFFFF",
        borderRadius: 20,
        border: "0.5px solid rgba(24,24,27,0.08)",
        boxShadow: open ? "0 12px 32px -20px rgba(10,10,10,0.15)" : "none",
        transition: "box-shadow 400ms cubic-bezier(.7,0,.2,1)",
        overflow: "hidden",
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full text-left"
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(80px, 22%) 1fr auto",
          alignItems: "center",
          gap: 24,
          padding: open ? "36px 28px 20px" : "24px 28px",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#18181B",
          transition:
            "padding 500ms cubic-bezier(.7,0,.2,1)",
        }}
      >
        <span
          style={{
            fontSize: 13,
            letterSpacing: "0.14em",
            color: open ? "#18181B" : "rgba(24,24,27,0.45)",
            fontVariantNumeric: "tabular-nums",
            transition: "color 400ms cubic-bezier(.7,0,.2,1)",
          }}
        >
          ({service.n})
        </span>
        <span
          className="h-display"
          style={{
            fontSize: "clamp(22px, 2.4vw, 32px)",
            color: "#18181B",
            letterSpacing: "-0.01em",
          }}
        >
          <span className="md:hidden">{service.mobileTitle ?? service.title}</span>
          <span className="hidden md:inline">{service.title}</span>
        </span>
        <span
          aria-hidden
          style={{
            position: "relative",
            width: 44,
            height: 44,
            borderRadius: 999,
            background: open ? "#C7F751" : "transparent",
            border: `0.5px solid ${open ? "#C7F751" : "rgba(24,24,27,0.25)"}`,
            color: "#18181B",
            display: "inline-grid",
            placeItems: "center",
            transition:
              "background 400ms cubic-bezier(.7,0,.2,1), border-color 400ms cubic-bezier(.7,0,.2,1), color 400ms cubic-bezier(.7,0,.2,1), transform 600ms cubic-bezier(.2,.9,.2,1)",
            transform: open ? "rotate(360deg)" : "rotate(0deg)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ position: "absolute" }}>
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            style={{
              position: "absolute",
              transition:
                "transform 600ms cubic-bezier(.2,.9,.2,1), opacity 300ms cubic-bezier(.7,0,.2,1)",
              transform: open ? "rotate(90deg) scale(0)" : "rotate(0deg) scale(1)",
              opacity: open ? 0 : 1,
            }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
          </svg>
        </span>
      </button>

      <div
        style={{
          maxHeight: open ? maxH : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition:
            "max-height 500ms cubic-bezier(.7,0,.2,1), opacity 400ms cubic-bezier(.7,0,.2,1)",
        }}
      >
        <div ref={contentRef} style={{ padding: "0 28px 36px" }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-[22%_1fr] gap-8"
            style={{ alignItems: "start" }}
          >
            <div />
            <div className="min-w-0">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] gap-8 lg:gap-10 items-start">
                {/* Left: wireframe + brief notes */}
                <div className="min-w-0 flex flex-col gap-5">
                  <Wireframe />
                  {service.notes && service.notes.length > 0 && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                      {service.notes.map((n) => (
                        <StarNote key={n} text={n} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Right: text + pills + CTA */}
                <div className="min-w-0">
                  <p
                    style={{
                      fontSize: "clamp(19px, 2.2vw, 29px)",
                      lineHeight: 1.5,
                      color: "#18181B",
                      marginBottom: 12,
                    }}
                  >
                    {service.intro}
                  </p>
                  {service.extras?.map((e, i) => (
                    <p
                      key={i}
                      style={{
                        fontSize: "clamp(17px, 1.8vw, 25px)",
                        lineHeight: 1.6,
                        color: "rgba(24,24,27,0.6)",
                        marginBottom: 10,
                      }}
                    >
                      {e}
                    </p>
                  ))}

                  {service.features && service.features.length > 0 && (
                    <>
                      <div
                        className="label-eyebrow"
                        style={{ marginTop: 24, marginBottom: 12, color: "rgba(24,24,27,0.55)" }}
                      >
                        Incluye
                      </div>
                      <div
                        className="grid gap-2"
                        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))" }}
                      >
                        {service.features.map((f) => (
                          <FeaturePill key={f} text={f} />
                        ))}
                      </div>
                    </>
                  )}

                  <div style={{ display: "flex", marginTop: 24 }}>
                    <ServiceCta />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function ServicesAccordion() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section style={{ background: "#FAFAFA", padding: "80px 0" }}>
      <div className="w-full px-6">


        <div
          style={{
            position: "relative",
            background: "#F0F0ED",
            borderRadius: 32,
            padding: "72px clamp(24px, 4vw, 72px) 72px",
            overflow: "hidden",
            boxShadow: "0 30px 80px -30px rgba(10,10,10,0.15)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(45% 40% at 95% 5%, rgba(199,247,81,0.28), transparent 60%), radial-gradient(45% 40% at 5% 100%, rgba(199,247,81,0.20), transparent 60%)",
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
                "radial-gradient(rgba(24,24,27,0.06) 1px, transparent 1px)",
              backgroundSize: "3px 3px",
            }}
          />

          <div style={{ position: "relative" }}>
            <h2
              className="label-eyebrow"
              style={{
                color: "rgba(24,24,27,0.6)",
                marginBottom: 40,
              }}
            >
              Servicios de diseño web y SEO en Segovia
            </h2>
            <p
              className="h-display"
              style={{
                fontSize: "clamp(36px, 5.2vw, 76px)",
                lineHeight: 1.02,
                color: "#18181B",
                letterSpacing: "-0.02em",
                marginBottom: 56,
                margin: 0,
                maxWidth: 1100,
              }}
            >
              <span style={{ color: "rgba(24,24,27,0.45)", fontWeight: 600 }}>Somos</span>{" "}
              <span style={{ color: "#18181B", fontWeight: 600 }}>los mejores</span>{" "}
              <span style={{ color: "rgba(24,24,27,0.45)", fontWeight: 600 }}>en...</span>
            </p>

            <div className="flex flex-col gap-3">
              {SERVICE_BLOCKS.map((s, i) => (
                <ServiceRow
                  key={s.n}
                  service={s}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function Index() {
  return (
    <main className="bg-[#FAFAFA] text-[#0A0A0A] overflow-x-clip">
      <Nav />
      <Hero />
      <PorQueDovela />
      
      <MarqueeBand />
      <Projects />
      <ServicesAccordion />
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

export { Nav, Services, Footer, FeaturePill, StarNote, ServiceCta, Wireframe };
