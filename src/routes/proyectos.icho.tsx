import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CaseStudyLayout,
  CaseImage,
  CaseH4,
  CasePara,
} from "@/components/CaseStudy";
import icho1 from "@/assets/ICHO_1.webp.asset.json";
import icho2 from "@/assets/ICHO_2.webp.asset.json";
import icho3 from "@/assets/ICHO_3.webp.asset.json";

export const Route = createFileRoute("/proyectos/icho")({
  head: () => ({
    meta: [
      { title: "Caso de estudio: ICHO — Joyería de autor | Dovela" },
      {
        name: "description",
        content:
          "Diseñamos la tienda online de ICHO, joyería artesanal en ediciones limitadas de 9 piezas: e-commerce premium con alma de galería.",
      },
      { property: "og:title", content: "Caso de estudio: ICHO — Dovela" },
      {
        property: "og:description",
        content:
          "E-commerce premium para una marca de joyería artesanal en ediciones limitadas.",
      },
      { property: "og:image", content: icho1.url },
    ],
    links: [{ rel: "canonical", href: "/proyectos/icho" }],
  }),
  component: IchoCasePage,
});

const linkStyle = {
  color: "#18181B",
  textDecoration: "underline",
  textUnderlineOffset: 3,
} as const;

function IchoCasePage() {
  return (
    <CaseStudyLayout
      title="ICHO: Joyería de Autor en Edición Limitada."
      pills={["Diseño Web Premium", "E-commerce", "Experiencia de Usuario"]}
      ctaSubtitle="Diseñamos tiendas online que hacen justicia a tus productos y te dan el control real de tus ventas."
    >
      <CaseImage src={icho1.url} alt="ICHO — Home" />
      <CaseH4>Independencia digital para una marca singular</CaseH4>
      <CasePara>
        ICHO es una firma de joyería artesanal con una propuesta muy clara:
        crear piezas a mano en tandas exclusivas de solo 9 productos al año.
        Hasta ahora, la artista dependía casi por completo de mercados
        presenciales y eventos físicos para dar a conocer y vender su trabajo.
        Cuando acudió a Dovela interesada en nuestros{" "}
        <Link to="/servicios/diseno-web" style={linkStyle}>
          servicios de diseño web
        </Link>
        , el desafío era evidente: construir una web que le diera total
        independencia y alcance ultramontano, permitiéndole vender directamente
        a su público en un entorno que respetara la naturaleza exclusiva y
        artística de su obra.
      </CasePara>

      <CaseImage src={icho2.url} alt="ICHO — Colección" />
      <CaseH4>Una tienda online con alma de galería de arte</CaseH4>
      <CasePara>
        Teníamos claro que una colección de 9 productos únicos no necesitaba un
        catálogo estándar de e-commerce. Por eso, planteamos la página
        principal como una gran exposición visual donde las fotografías de las
        piezas son las absolutas protagonistas. A través de un diseño
        minimalista, con líneas finas y márgenes amplios, dejamos que los
        materiales y texturas de las joyas hablen por sí solos.
      </CasePara>

      <CaseImage src={icho3.url} alt="ICHO — Producto" />
      <CaseH4>Experiencia de compra cuidada y sin distracciones</CaseH4>
      <CasePara>
        El proceso de venta debía mantener ese mismo nivel de exclusividad, así
        que diseñamos una vista de producto que recuerda a las páginas de una
        revista de moda. La clienta puede ver las piezas al detalle y puestas a
        gran tamaño, apreciando cómo luce cada creación antes de tomar la
        decisión. Además, integramos la pasarela de compra de forma clara y
        elegante junto a las imágenes, facilitando la adquisición de estas
        piezas limitadas de manera muy intuitiva y sin romper la estética de la
        marca.
      </CasePara>
    </CaseStudyLayout>
  );
}
