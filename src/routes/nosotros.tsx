import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Nav, Footer } from "./index";
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

const founderImages = [
  { src: dovela1.url, alt: "Héctor, fundador de Dovela" },
  { src: dovela1.url, alt: "Héctor, fundador de Dovela" },
  { src: dovela1.url, alt: "Héctor, fundador de Dovela" },
];

function FounderCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % founderImages.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <div>
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-200">
        {founderImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <p className="mt-4 text-sm font-medium text-gray-500 tracking-wide uppercase">
        Héctor — Fundador
      </p>
    </div>
  );
}

type Member = { name: string; role: string; text: string };

const team: Member[] = [
  {
    name: "Héctor",
    role: "Estrategia, Dir. Creativa y UX",
    text: "La mente estratégica y visual del estudio. Se encarga de definir el rumbo de tu proyecto y de diseñar caminos sencillos e intuitivos para que navegar por tu web sea un gusto y comprar, algo inevitable. Tu marca tendrá una identidad única y estará pensada, de principio a fin, para convertir visitas en clientes.",
  },
  {
    name: "Pablo",
    role: "Desarrollo Web",
    text: "El motor bajo el capó. Traduce toda la estrategia, el diseño y los caminos de venta en código limpio, rápido y seguro. Si tu web vuela en el móvil, no da fallos y funciona a la perfección, es gracias a él.",
  },
  {
    name: "Ayoub",
    role: "SEO Local",
    text: "El encargado de que Google te adore. Analiza el mercado y exprime el posicionamiento al máximo para que los clientes de Segovia que buscan lo que tú ofreces, te encuentren a ti el primero.",
  },
];

function NosotrosPage() {
  return (
    <div className="min-h-screen bg-[#F0F0ED] text-[#18181B]">
      <Nav />
      <main className="max-w-7xl mx-auto px-4 pt-32">
        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          <div>
            <p className="label-eyebrow mb-6">Nosotros</p>
            <h1 className="h-display text-4xl md:text-5xl lg:text-6xl mb-8">
              Un estudio segoviano.
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-[#18181B]">
              En Segovia, el crecimiento de un negocio local se reduce a dos
              palancas: conseguir que tus clientes actuales gasten más, o
              atraer clientes nuevos. Una página web bien posicionada hace las
              dos cosas a la vez. Por eso nació Dovela. Somos un estudio
              formado por jóvenes segovianos especializado en diseño web y SEO
              local.{" "}
              <strong className="font-semibold">
                Si tu negocio no sale pronto en Google, para tus clientes
                potenciales no existe.
              </strong>{" "}
              Nosotros nos encargamos de que si te buscan, te encuentren.
            </p>
          </div>
          <FounderCarousel />
        </section>

        {/* Equipo */}
        <section>
          <h2 className="h-display text-4xl md:text-5xl lg:text-6xl">El Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-24">
            {team.map((m) => (
              <article key={m.name}>
                <h3 className="text-2xl font-semibold text-[#18181B]">
                  {m.name}
                </h3>
                <span className="text-sm text-[#C7F751] bg-[#18181B] inline-block px-3 py-1 rounded-full mt-2 mb-4">
                  {m.role}
                </span>
                <p className="text-gray-600 leading-relaxed">{m.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
