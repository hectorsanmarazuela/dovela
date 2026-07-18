import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer, Plan, CtaBanner } from "./index";
import dovela1 from "@/assets/dovela_1.webp.asset.json";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — Dovela, estudio de diseño web y SEO en Segovia" },
      {
        name: "description",
        content:
          "Somos un estudio segoviano de diseño web y SEO local. Conoce al equipo detrás de Dovela: Héctor, Pablo y Ayoub.",
      },
      { property: "og:title", content: "Nosotros — Dovela" },
      {
        property: "og:description",
        content:
          "Estudio joven de diseño web y SEO local en Segovia. Conoce al equipo de Dovela.",
      },
    ],
  }),
  component: NosotrosPage,
});

const founderImages = [dovela1.url, dovela1.url, dovela1.url];

function FounderPortrait() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setI((v) => (v + 1) % founderImages.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative">
      <div className="relative rounded-2xl overflow-hidden bg-[#C7F75120] aspect-[4/5]">
        {founderImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt="Héctor, fundador de Dovela"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="uppercase tracking-[0.15em] text-[13px] font-bold text-[#18181B]">
          Héctor — Fundador
        </p>
        <div className="h-[1px] flex-1 mx-6 bg-[#18181B]/10" />
        <span
          className="text-2xl text-[#C7F751]"
          style={{ fontFamily: "'Anton', Inter, sans-serif" }}
        >
          01
        </span>
      </div>
    </div>
  );
}

type Member = {
  name: string;
  roles: string[];
  text: string;
  number: string;
};

const team: Member[] = [
  {
    name: "Héctor",
    roles: ["Estrategia", "Dir. Creativa y UX"],
    number: "02",
    text: "La mente estratégica y visual del estudio. Se encarga de definir el rumbo de tu proyecto y de diseñar caminos sencillos e intuitivos para que navegar por tu web sea un gusto y comprar, algo inevitable. Tu marca tendrá una identidad única y estará pensada, de principio a fin, para convertir visitas en clientes.",
  },
  {
    name: "Pablo",
    roles: ["Desarrollo Web"],
    number: "03",
    text: "El motor bajo el capó. Traduce toda la estrategia, el diseño y los caminos de venta en código limpio, rápido y seguro. Si tu web vuela en el móvil, no da fallos y funciona a la perfección, es gracias a él.",
  },
  {
    name: "Ayoub",
    roles: ["SEO Local"],
    number: "04",
    text: "El encargado de que Google te adore. Analiza el mercado y exprime el posicionamiento al máximo para que los clientes de Segovia que buscan lo que tú ofreces, te encuentren a ti el primero.",
  },
];

function NosotrosPage() {
  return (
    <div className="min-h-screen bg-[#F0F0ED] text-[#18181B]">
      <Nav />
      <main className="pt-[140px] pb-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-start">
            <div className="lg:col-span-7">
              <span className="block uppercase tracking-[0.12em] text-[13px] leading-5 text-[#18181B]/50 mb-8">
                Nosotros
              </span>
              <h1
                className="font-semibold tracking-[-0.03em] leading-none text-[#18181B] mb-12"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                En Segovia, el crecimiento de un negocio local se reduce a dos
                palancas: conseguir que tus clientes actuales gasten más, o
                atraer clientes nuevos.
              </h1>
              <div className="max-w-2xl">
                <p className="text-xl md:text-2xl leading-relaxed text-[#18181B]/80">
                  Una página web bien posicionada hace las dos cosas a la vez.
                  Por eso nació Dovela. Somos un estudio formado por jóvenes
                  segovianos especializado en diseño web y SEO local.{" "}
                  <strong className="text-[#18181B] font-bold underline decoration-[#C7F751] decoration-4 underline-offset-4">
                    Si tu negocio no sale pronto en Google, para tus clientes
                    potenciales no existe.
                  </strong>{" "}
                  Nosotros nos encargamos de que si te buscan, te encuentren.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <FounderPortrait />
            </div>
          </section>

          {/* Equipo */}
          <section>
            <div className="flex items-baseline gap-4 mb-16">
              <h2
                className="uppercase leading-none text-[#18181B]"
                style={{
                  fontFamily: "'Anton', Inter, sans-serif",
                  fontSize: "clamp(4rem, 10vw, 9rem)",
                }}
              >
                El Equipo
              </h2>
              <div className="h-4 w-4 bg-[#C7F751] rounded-full animate-pulse" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((m) => (
                <article
                  key={m.name}
                  className="flex flex-col h-full bg-white/30 p-8 rounded-2xl border border-transparent hover:border-[#C7F751] transition-colors duration-300"
                >
                  <div className="flex items-baseline justify-between mb-8">
                    <div className="flex flex-wrap gap-2">
                      {m.roles.map((r) => (
                        <span
                          key={r}
                          className="text-sm bg-[#18181B] text-[#C7F751] px-3 py-1 rounded-full"
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                    <span
                      className="text-[#18181B]/20 text-2xl"
                      style={{ fontFamily: "'Anton', Inter, sans-serif" }}
                    >
                      {m.number}
                    </span>
                  </div>
                  <h3 className="font-bold text-3xl mb-6 text-[#18181B]">
                    {m.name}
                  </h3>
                  <p className="text-[#18181B]/70 leading-relaxed">{m.text}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Reused home sections */}
      <Plan />
      <CtaBanner />
      <Footer />
    </div>
  );
}
