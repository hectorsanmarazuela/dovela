import { createFileRoute } from "@tanstack/react-router";
import { Nav, Footer, ArrowCircle } from "./index";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Dovela | Estudio de diseño web y SEO en Segovia" },
      {
        name: "description",
        content:
          "Contacta con Dovela, estudio de diseño web y SEO en Segovia. Escríbenos y te respondemos en menos de 24 horas.",
      },
      { property: "og:title", content: "Contacto — Dovela" },
      {
        property: "og:description",
        content:
          "Hablemos de tu proyecto. Diseño web y SEO local en Segovia.",
      },
      { property: "og:url", content: "https://dovelaestudio.es/contacto" },
      { name: "twitter:title", content: "Contacto — Dovela" },
      {
        name: "twitter:description",
        content:
          "Contacta con Dovela, estudio de diseño web y SEO en Segovia.",
      },
    ],
    links: [
      { rel: "canonical", href: "https://dovelaestudio.es/contacto" },
    ],
  }),
  component: ContactoPage,
});

const CONTACT_METHODS = [
  {
    label: "Email",
    value: "hola@dovelaestudio.es",
    href: "mailto:hola@dovelaestudio.es",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <polyline points="3 7 12 13 21 7" />
      </svg>
    ),
  },
  {
    label: "Teléfono",
    value: "+34 637 22 71 71",
    href: "tel:+34637227171",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: "Escríbenos",
    href: "https://wa.me/34637227171",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

function ImagePlaceholderCard() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: "4/5", borderRadius: 24, background: "#F0F0ED" }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div
          className="rounded-full grid place-items-center"
          style={{ width: 72, height: 72, background: "#18181B" }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C7F751" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
        </div>
        <p className="text-sm font-medium text-[#18181B]/40">Imagen del estudio</p>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(199,247,81,0.10) 100%)",
        }}
      />
    </div>
  );
}

function ContactHero() {
  return (
    <section className="bg-white pt-36 pb-16 md:pt-44 md:pb-24">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <span className="label-eyebrow block mb-8">Contacto</span>
            <h1
              className="h-display text-[#0A0A0A]"
              style={{ fontSize: "clamp(48px, 6.5vw, 92px)", margin: 0 }}
            >
              Hablemos de tu proyecto
            </h1>
            <p
              className="mt-8 text-[#18181B]/70"
              style={{ fontSize: "clamp(18px, 1.5vw, 22px)", maxWidth: 640, lineHeight: 1.6 }}
            >
              Cuéntanos qué necesitas y te respondemos en menos de 24 horas. Sin compromiso, sin spam, sin mil vueltas.
            </p>

            <div className="mt-12 flex flex-col gap-3">
              {CONTACT_METHODS.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  className="group flex items-center gap-4 rounded-2xl transition hover:bg-[#F0F0ED]"
                  style={{
                    background: "#FAFAFA",
                    border: "0.5px solid #E5E5E5",
                    padding: "18px 20px",
                  }}
                >
                  <span
                    className="inline-flex items-center justify-center rounded-full shrink-0"
                    style={{ width: 44, height: 44, background: "#0A0A0A", color: "#C7F751" }}
                  >
                    {method.icon}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div
                      style={{
                        fontSize: 11,
                        color: "#888",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      {method.label}
                    </div>
                    <div
                      className="truncate"
                      style={{ fontSize: 16, color: "#0A0A0A", fontWeight: 600 }}
                    >
                      {method.value}
                    </div>
                  </div>
                  <span className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-[#0A0A0A]">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <ImagePlaceholderCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  return (
    <section className="bg-[#F0F0ED] py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className="h-display text-[#0A0A0A]"
              style={{ fontSize: "clamp(36px, 4vw, 56px)", margin: 0 }}
            >
              Envíanos un mensaje
            </h2>
            <p className="mt-4 text-[#18181B]/60" style={{ fontSize: 16, lineHeight: 1.6 }}>
              Cuéntanos qué necesitas y te damos una respuesta clara.
            </p>
          </div>

          <form className="bg-white rounded-3xl p-6 md:p-10 border border-[#E5E5E5]" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium uppercase tracking-wider text-[#888] mb-2">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] px-4 py-3 text-[#0A0A0A] placeholder:text-[#888]/60 focus:outline-none focus:ring-2 focus:ring-[#C7F751]/50 focus:border-[#C7F751]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-[#888] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] px-4 py-3 text-[#0A0A0A] placeholder:text-[#888]/60 focus:outline-none focus:ring-2 focus:ring-[#C7F751]/50 focus:border-[#C7F751]"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-wider text-[#888] mb-2">
                Asunto
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Diseño web, SEO, Pack completo..."
                className="w-full rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] px-4 py-3 text-[#0A0A0A] placeholder:text-[#888]/60 focus:outline-none focus:ring-2 focus:ring-[#C7F751]/50 focus:border-[#C7F751]"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-[#888] mb-2">
                Mensaje
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Cuéntanos qué necesitas..."
                className="w-full rounded-xl bg-[#FAFAFA] border border-[#E5E5E5] px-4 py-3 text-[#0A0A0A] placeholder:text-[#888]/60 focus:outline-none focus:ring-2 focus:ring-[#C7F751]/50 focus:border-[#C7F751] resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full group inline-flex items-center justify-between gap-3 rounded-full bg-[#C7F751] text-[#0A0A0A] hover:brightness-95 transition"
              style={{ padding: "16px 24px", fontWeight: 700, fontSize: 15 }}
            >
              Enviar mensaje
              <ArrowCircle size={32} bg="#0A0A0A" fg="#C7F751" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactoPage() {
  return (
    <main className="bg-white text-[#0A0A0A] overflow-x-clip">
      <Nav />
      <ContactHero />
      <ContactFormSection />
      <Footer />
    </main>
  );
}
