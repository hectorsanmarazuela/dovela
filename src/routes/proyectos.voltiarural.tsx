import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseImage,
  CaseH4,
  CasePara,
} from "@/components/CaseStudy";
import v1 from "@/assets/VOLTIA_1.webp.asset.json";
import v2 from "@/assets/VOLTIA_2.webp.asset.json";
import v3 from "@/assets/VOLTIA_3.webp.asset.json";
import v4 from "@/assets/VOLTIA_4.webp.asset.json";

export const Route = createFileRoute("/proyectos/voltiarural")({
  head: () => ({
    meta: [
      {
        title:
          "Caso de estudio: Voltia — Energía solar y eléctrica para la España rural | Dovela",
      },
      {
        name: "description",
        content:
          "Diseño web premium y SEO local para Voltia, instaladora eléctrica y solar en Castilla y León especializada en zonas rurales.",
      },
      { property: "og:title", content: "Caso de estudio: Voltia — Dovela" },
      {
        property: "og:description",
        content:
          "Plataforma B2B para una instaladora eléctrica y solar líder en la España rural.",
      },
      { property: "og:image", content: v1.url },
    ],
    links: [{ rel: "canonical", href: "/proyectos/voltiarural" }],
  }),
  component: VoltiaCasePage,
});

const linkStyle = {
  color: "#18181B",
  textDecoration: "underline",
  textUnderlineOffset: 3,
} as const;

function VoltiaCasePage() {
  return (
    <CaseStudyLayout
      title="Voltia: Energía Solar y Eléctrica para la España Rural."
      pills={["Diseño Web Premium", "SEO Local"]}
      ctaSubtitle="Diseñamos webs que transmiten la capacidad real de tu empresa y te facilitan conseguir los grandes proyectos que mereces."
    >
      <CaseImage src={v1.url} alt="Voltia — Hero" />
      <CaseH4>Capacidad industrial donde más se necesita</CaseH4>
      <CasePara>
        Voltia es una empresa instaladora con sede en Segovia que trabaja mano a
        mano con promotoras, constructoras y clientes comerciales en toda
        Castilla y León. Su apuesta comercial es muy específica: liderar las
        instalaciones eléctricas y solares en zonas rurales. ¿El motivo? El
        entorno rural ofrece las mejores condiciones (grandes cubiertas, naves,
        fincas) para maximizar el rendimiento del autoconsumo solar, pero
        históricamente ha carecido de empresas instaladoras de gran capacidad
        que no dependan de terceros. Para trasladar esta solidez al entorno
        digital, nos contactaron buscando nuestros{" "}
        <Link to="/servicios/diseno-web" style={linkStyle}>
          servicios de diseño web
        </Link>
        . En Dovela asumimos el reto de construir una plataforma que
        transmitiera absoluta solvencia técnica a clientes B2B.
      </CasePara>

      <CaseImage src={v2.url} alt="Voltia — Servicios" />
      <CaseH4>Diseño enfocado en la autoridad y la transparencia</CaseH4>
      <CasePara>
        En el sector de la construcción, las empresas no buscan promesas,
        buscan socios fiables. Por eso, diseñamos una web muy directa y
        corporativa donde destacamos inmediatamente su mayor garantía: operan
        con más de 15 técnicos propios cualificados y no utilizan subcontratas.
        Estructuramos su oferta de forma visual y sencilla, dividiendo sus
        soluciones en instalaciones eléctricas para obra nueva, sistemas solares
        con baterías y puntos de recarga para vehículos eléctricos. Todo está
        planteado para que un jefe de obra encuentre la información técnica que
        necesita sin perder el tiempo.
      </CasePara>

      <CaseImage src={v3.url} alt="Voltia — Sobre nosotros" />
      <CaseH4>Los datos reales como motor de confianza</CaseH4>
      <CasePara>
        Creemos firmemente que, para cerrar proyectos comerciales, la web debe
        aportar pruebas irrefutables. Por eso, diseñamos un bloque visual
        centrado exclusivamente en su rendimiento, destacando métricas
        espectaculares: más de 200 proyectos completados, un 100% de tasa de
        certificación sin errores, y más de 150.000€ de ahorro energético
        documentado. Además, incluimos testimonios reales de responsables de
        obra y directores de instalaciones para validar su compromiso con los
        plazos.
      </CasePara>

      <CaseImage src={v4.url} alt="Voltia — Marca" />
      <CaseH4>Generación de contactos B2B ágil</CaseH4>
      <CasePara>
        Para lograr que la web sea una máquina de captar clientes comerciales,
        optimizamos todos los puntos de conversión. Integramos llamadas a la
        acción claras que ofrecen presupuestos en menos de 48 horas y visitas
        técnicas gratuitas para proyectos comerciales. A nivel técnico, sentamos
        unas bases sólidas de SEO regional para asegurar que, cuando las
        administraciones locales o las comunidades de vecinos de Castilla y
        León busquen un instalador REBT autorizado, Voltia sea su primera
        opción.
      </CasePara>
    </CaseStudyLayout>
  );
}
