import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseImage,
  CaseH4,
  CasePara,
} from "@/components/CaseStudy";
import solara1 from "@/assets/solara-case-1.webp.asset.json";
import solara2 from "@/assets/solara-case-2.webp.asset.json";
import solara3 from "@/assets/solara-case-3.webp.asset.json";

export const Route = createFileRoute("/proyectos/solara")({
  head: () => ({
    meta: [
      { title: "Caso de estudio: Solara — Pilates de autor en Santander | Dovela" },
      {
        name: "description",
        content:
          "Cómo diseñamos la web de Solara, estudio de pilates en Santander: identidad premium, comunidad y SEO local para atraer más reservas.",
      },
      { property: "og:title", content: "Caso de estudio: Solara — Dovela" },
      {
        property: "og:description",
        content:
          "Diseño web premium, SEO local y conversión para el estudio de pilates de referencia en Santander.",
      },
      { property: "og:image", content: solara1.url },
    ],
    links: [{ rel: "canonical", href: "/proyectos/solara" }],
  }),
  component: SolaraCasePage,
});

const linkStyle = {
  color: "#18181B",
  textDecoration: "underline",
  textUnderlineOffset: 3,
} as const;

function SolaraCasePage() {
  return (
    <CaseStudyLayout
      title="Solara: Pilates de Autor en Santander."
      pills={["Diseño Web Premium", "SEO local", "Conversión"]}
      ctaSubtitle="Diseñamos webs que transmiten la esencia de tu negocio y captan al cliente adecuado."
    >
      <CaseImage src={solara1.url} alt="Solara — Hero de la web" />
      <CaseH4>Un espacio premium necesita un escaparate a la altura</CaseH4>
      <CasePara>
        Solara buscaba consolidarse como el estudio de pilates de referencia en
        Santander. Su público son mujeres que valoran el entrenamiento
        consciente y la atención personalizada en un entorno sumamente cuidado.
        Cuando nos contactaron buscando nuestros{" "}
        <Link to="/servicios/diseno-web" style={linkStyle}>
          servicios de diseño web
        </Link>
        , tuvimos claro que el desafío de Dovela residía en digitalizar esa
        atmósfera de calma y exclusividad, logrando una página que atrajera
        reservas sin perder nunca ese toque premium.
      </CasePara>

      <CaseImage src={solara2.url} alt="Solara — Sobre nosotras" />
      <CaseH4>Estética y comunidad como motores de confianza</CaseH4>
      <CasePara>
        En lugar de montar la típica página del sector fitness llena de llamadas
        a la acción agresivas, apostamos por la elegancia y la prueba social.
        Construimos una identidad apoyada en tonos cálidos, espacios en blanco y
        tipografías serifa que elevan la marca. Además, integramos desde el
        primer momento el sentido de pertenencia: destacamos sus más de 300
        alumnas y el 4,9 de valoración en Google. La idea era simple: que la
        usuaria sintiera el respaldo de una comunidad nada más entrar.
      </CasePara>

      <CaseImage src={solara3.url} alt="Solara — Comunidad y reservas" />
      <CaseH4>Conversión fluida y posicionamiento local</CaseH4>
      <CasePara>
        De nada sirve un entorno digital precioso si no asegura la venta. Por
        eso, acompañamos la estética con dos acciones técnicas fundamentales:
      </CasePara>
      <CasePara>
        <strong>Experiencia de usuario (UX) enfocada a la primera reserva:</strong>{" "}
        Organizamos sus servicios —clases grupales, sesiones privadas y
        programas— de forma muy limpia. Guiamos a la usuaria de forma natural
        hacia el pack de «Bienvenida», haciendo que dar el paso de apuntarse a
        la clase de prueba sea muy intuitivo.
      </CasePara>
      <CasePara>
        <strong>SEO Local:</strong> El posicionamiento orgánico requiere tiempo,
        así que estamos trabajando el SEO paso a paso desde los cimientos.
        Hemos optimizado la estructura interna, nos hemos asegurado de que el
        estudio figure en todos los directorios relevantes y estamos
        construyendo un Google Business Profile totalmente optimizado para
        empezar a traccionar y escalar posiciones en las búsquedas locales de
        Santander.
      </CasePara>
    </CaseStudyLayout>
  );
}
