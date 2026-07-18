import type { ReactNode } from "react";
import { Nav, Footer } from "@/routes/index";
import author from "@/assets/hector_avatar.webp.asset.json";

export function Pill({ children }: { children: ReactNode }) {
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

export function CaseImage({ src, alt }: { src: string; alt: string }) {
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

export function CaseH4({ children }: { children: ReactNode }) {
  return (
    <h4
      className="text-xl md:text-2xl font-semibold mt-10 mb-4"
      style={{ color: "#18181B", letterSpacing: "-0.01em" }}
    >
      {children}
    </h4>
  );
}

export function CasePara({ children }: { children: ReactNode }) {
  return (
    <p
      className="text-[17px] leading-relaxed"
      style={{ color: "rgba(24,24,27,0.85)" }}
    >
      {children}
    </p>
  );
}

export function PremiumCTA({ subtitle }: { subtitle: string }) {
  return (
    <section className="mt-20" style={{ paddingBottom: 8 }}>
      <div
        className="relative overflow-hidden px-6 py-14 md:px-14 md:py-[72px]"
        style={{ background: "#F0F0ED", borderRadius: 24 }}
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
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: 420,
            height: 420,
            right: -140,
            top: -160,
            background:
              "radial-gradient(circle, rgba(199,247,81,0.55), rgba(199,247,81,0) 65%)",
            filter: "blur(30px)",
          }}
        />
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            width: 340,
            height: 340,
            left: -120,
            bottom: -140,
            background:
              "radial-gradient(circle, rgba(199,247,81,0.35), rgba(199,247,81,0) 65%)",
            filter: "blur(30px)",
          }}
        />
        <div className="relative flex flex-col items-center text-center">
          <h2
            className="h-display"
            style={{
              fontSize: "clamp(34px, 5vw, 60px)",
              color: "#18181B",
              maxWidth: "16ch",
              margin: 0,
            }}
          >
            Hablemos de tu{" "}
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
              PROYECTO
            </span>
          </h2>
          <p
            className="mt-6 mx-auto"
            style={{
              maxWidth: 520,
              fontSize: 17,
              lineHeight: 1.6,
              color: "rgba(24,24,27,0.7)",
            }}
          >
            {subtitle}
          </p>
          <a
            href="/#contacto"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#C7F751] text-[#18181B] hover:brightness-95 transition"
            style={{
              padding: "14px 14px 14px 26px",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            <span>Cuéntanos tu idea</span>
            <span
              style={{
                width: 32,
                height: 32,
                borderRadius: 999,
                background: "#18181B",
                color: "#C7F751",
                display: "inline-grid",
                placeItems: "center",
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="13 6 19 12 13 18" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function CaseStudyLayout({
  title,
  pills,
  ctaSubtitle,
  children,
}: {
  title: string;
  pills: string[];
  ctaSubtitle: string;
  children: ReactNode;
}) {
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
          {title}
        </h1>

        <div className="flex flex-wrap gap-2 mt-6 mb-4">
          {pills.map((p) => (
            <Pill key={p}>{p}</Pill>
          ))}
        </div>

        {children}

        <PremiumCTA subtitle={ctaSubtitle} />
      </article>
      <Footer />
    </main>
  );
}
