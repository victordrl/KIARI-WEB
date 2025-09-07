import {
  RiTeamFill,
  RiArrowRightSLine,
  RiBox2Line,
  RiListIndefinite,
} from "react-icons/ri";

export const bnt_icon = {
  icon_1: <RiArrowRightSLine className="size-6" />,
  icon_2: <RiBox2Line className="size-6" />,
  icon_3: <RiListIndefinite className="size-6" />,
  icon_4: <RiTeamFill className="size-6" />,
};

export const hero = {
  titulo: "Productos a KIARI",
  texto:
    "Descubre la frescura y calidad de nuestros productos de pescado 100% naturales.",
};
export const triptico = {
  mini_titulo: "Produtos",
  titulo: "Descubre las innovadoras presentaciones de pescado de KIARI",
  text: "",
  contenido: [
    {
      img: "default.png",
      href: "/prod/n",
      subtitulo: "Nuggets",
      texto:
        "Nuggets la forma más práctica y secilla de disfrutar el sabor del sábalo.",
    },
    {
      img: "default.png",
      href: "/prod/p",
      subtitulo: "Pisillo",
      texto:
        "Presentaciones únicas que transforman tu experiencia con el pescado.",
    },
    {
      img: "default.png",
      href: "/prod/m",
      subtitulo: "Medallones",
      texto:
        "hamburguesas de pura pulpa al natural para los amantes del pescado.",
    },
  ],
};

export const baner = {
  bg_imag: "/default.png",
  titulo: "¡Haz tu pedido hoy!",
  text: "Contáctanos para descubrir la frescura y calidad de nuestros productos de pescado.",
  btn_text_1: "Productos",
  btn_text_2: "Contactanos",
  href_1: "/prod",
  href_2: "/cont",
  icon_1: bnt_icon.icon_2,
  icon_2: bnt_icon.icon_1,
};

export const nuggets = {
  mini: "Nuggets",
  titulo: "Nuggets de Pescado: Sabor y Versatilidad",
  resumen:
    "Los Nuggets de KIARI son la opción perfecta para quienes buscan una alternativa deliciosa y saludable. Hechos con pescado 100% natural, son ideales para cualquier ocasión.",
  caracteristicas: {
    1: "Fáciles de preparar y perfectos para toda la familia.",
    2: "Sin conservantes, solo sabor auténtico del mar.",
    3: "Versátiles: perfectos para almuerzos, cenas o snacks.",
  },
  btn_text_1: "Blog",
  btn_text_2: "Mas",
  href_1: "/blog",
  href_2: "/prod/p",
};
export const pisillo = {
  mini: "Pisillo",
  titulo: "Descubre el Pisillo: la forma más deliciosa de disfrutar el sábalo.",
  resumen:
    "El Pisillo es un producto innovador que combina sabor y comodidad. Con pescado precocido y desmenuzado, es ideal para cualquier comida.",
  caracteristicas: {
    1: "Fácil de preparar y listo para disfrutar.",
    2: "100% natural, sin conservantes ni aditivos.",
    3: "Perfecto para recetas rápidas y saludables.",
  },
  btn_text_1: "Blog",
  btn_text_2: "Mas",
  href_1: "/blog",
  href_2: "/prod/n",
};
export const medallones = {
  mini: "Medallones",
  titulo: "Medallones de Sábalo: Sabor y calidad en cada bocado",
  resumen:
    "Los medallones de sábalo son una opción deliciosa y saludable para disfrutar del pescado. Elaborados con pura pulpa cruda, garantizan frescura y calidad en cada comida.",
  caracteristicas: {
    1: "Fácil de preparar y listo para disfrutar.",
    2: "100% natural, sin conservantes ni aditivos.",
    3: "Perfecto para recetas rápidas y saludables.",
  },
  btn_text_1: "Blog",
  btn_text_2: "Mas",
  href_1: "/blog",
  href_2: "/prod/m",
};
export const info_img_2 = {
  minititulo: "Delicioso",
  img: "default.png",
  titulo: "Descubre los beneficios de nuestros productos KIARI",
  text: "Los productos de KIARI ofrecen una experiencia culinaria excepcional. Con su sabor único y calidad inigualable, son la opción perfecta para disfrutar del pescado.",
  contenido: [
    {
      subtitulo: "Conveniencia",
      texto: "Fáciles de preparar y listos para disfrutar.",
    },
    {
      subtitulo: "Sabor",
      texto: "Sabor suave que encanta a todos los paladares.",
    },
  ],
  btn_1: "Blog",
  btn_2: "Contactanos",
  icon_1: <RiBox2Line />,
  icon_2: <RiArrowRightSLine />,
  href_1: "/blog",
  href_2: "/cont",
};
