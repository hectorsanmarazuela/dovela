import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseImage,
  CaseH4,
  CasePara,
} from "@/components/CaseStudy";
import fdc1 from "@/assets/FONTANERO_1.webp.asset.json";
import fdc2 from "@/assets/FONTANERO_2.webp.asset.json";
import fdc3 from "@/assets/FONTANERO_3.webp.asset.json";

export const Route = createFileRoute("/proyectos/fdc-fontanero")({
  head: () => ({
    meta: [
      {
        title:
          "Caso de estudio: Fernández del Campo — Fontanería en Segovia | Dovela",
      },
      {
        name: "description",
        content:
          "Diseño web premium y SEO local para Fernández del Campo, fontanero de confianza en Segovia con más de 20 años de experiencia.",
      },
      {
        property: "og:title",
        content: "Caso de estudio: Fernández del Campo — Dovela",
      },
      {
        property: "og:description",
        content:
          "Diseño web y SEO local para diferenciar a un fontanero de referencia en Segovia.",
      },
      { property: "og:image", content: fdc1.url },
    ],
    links: [{ rel: "canonical", href: "/proyectos/fdc-fontanero" }],
  }),
  component: FdcCasePage,
});

const linkStyle = {
  color: "#18181B",
  textDecoration: "underline",
  textUnderlineOffset: 3,
} as const;

function FdcCasePage() {
  return (
    <CaseStudyLayout
      title="Fernández del Campo: Fontanería de Confianza en Segovia."
      pills={["Diseño Web Premium", "SEO Local"]}
      ctaSubtitle="Diseñamos webs que transmiten la profesionalidad de tu oficio y te ayudan a captar los clientes que buscas."
    >
      <CaseH4>Confianza inmediata en un sector competitivo</CaseH4>
      <CasePara>
        Miguel lleva dos décadas resolviendo averías en toda la provincia de
        Segovia. Su mayor valor es la confianza y el trato directo, y para
        trasladar esta honestidad a internet, confió en nuestros{" "}
        <Link to="/servicios/diseno-web" style={linkStyle}>
          servicios de diseño web
        </Link>
        . En Dovela teníamos claro el objetivo: construir una página profesional
        que le diferenciara rápidamente de los directorios impersonales y las
        franquicias.
      </CasePara>

      <CaseImage src={fdc1.url} alt="Fernández del Campo — Hero" />
      <CaseH4>La clave es la sencillez: diseño visual y directo</CaseH4>
      <CasePara>
        Creemos firmemente que la clave de una buena web es la sencillez: si no
        se entiende rápido, no funciona. Por eso, diseñamos una página muy
        visual donde todo se encuentra con facilidad. Las distintas averías se
        identifican al instante y estructuramos la navegación para que, estés
        en el punto de la página que estés, siempre tengas un botón a mano para
        llamar a Miguel rápidamente.
      </CasePara>

      <CaseImage src={fdc2.url} alt="Fernández del Campo — Servicios" />
      <CaseH4>Humanización y crecimiento local</CaseH4>
      <CasePara>
        Para que esa visita se convierta en una llamada, el cliente necesita
        sentir que está en buenas manos. Dimos todo el protagonismo a la figura
        de Miguel y a las reseñas excelentes de sus clientes para generar
        confianza inmediata. A nivel técnico, preparamos toda la arquitectura
        para competir en Segovia. El posicionamiento orgánico es una carrera de
        fondo, y aunque seguimos trabajando en su SEO mes a mes para liderar
        las búsquedas, la web ya está escalando posiciones en Google con paso
        firme.
      </CasePara>

      <CaseImage src={fdc3.url} alt="Fernández del Campo — Sobre mí" />
    </CaseStudyLayout>
  );
}
