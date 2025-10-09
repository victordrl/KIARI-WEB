import { FaHandsHelping, FaHeartbeat, FaUniversalAccess } from "react-icons/fa";
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

export const pag_p = {
  hero: {
    titulo: "Descubre el Pisillo",
    min_tittulo: "Delicioso",
    text: "El Pisillo de KIARI es la opción perfecta para quienes buscan disfrutar del pescado de manera sencilla y sabrosa. Con su carne desmenuzada y lista para consumir, es ideal para cualquier comida.",
    btn_txt_1: "Contactanos",
    btn_txt_2: "Mas",
    href_1: "/cont",
    href_2: "/prod/n",
  },
  sec_1: {
    img: "/default.png",
    min_tittulo: "Delicioso",
    titulo: "Descubre el Sabor del Pisillo de Sábalo",
    text: "El Pisillo de sábalo es una opción perfecta para quienes buscan comodidad y sabor en la cocina. Este pescado precocido y desmenuzado se adapta a múltiples recetas, brindando un toque especial a tus platillos.",
    btn_text_1: "Contactanos",
    btn_text_2: "Blog",
    href_1: "/cont",
    href_2: "/blog",
  },
  sec_2: {
    img: "/default.png",
    min_titulo: "Conveniencia",
    titulo: "Descubre los beneficios del Pisillo",
    text: "El Pisillo de KIARI es la opción perfecta para quienes buscan un pescado delicioso y fácil de preparar. Su sabor suave y su calidad natural lo convierten en una elección ideal para cualquier comida.",
    contenido: [
      {
        subtitulo: "Sabor Único",
        texto: "Disfruta de un sabor fresco y auténtico en cada bocado.",
      },
      {
        subtitulo: "Alta Calidad",
        texto:
          "100% natural, sin conservantes, ideal para una alimentación saludable.",
      },
    ],
    btn_text_1: "Contactanos",
    btn_text_2: "Blog",
    href_1: "/cont",
    href_2: "/blog",
  },
  sec_3: {
    img: "/default.png",
    mini_titulo: "",
    titulo: "Descubre cómo preparar el delicioso Pisillo en tu cocina",
    text: "",
    contenido: [
      {
        icon: <FaHeartbeat className="size-32 mb-4 text-secondary" />,
        subtitulo: "Ideas creativas para disfrutar del Pisillo en tus comidas",
        texto:
          "El Pisillo es una opción versátil y deliciosa para tus platillos.",
      },
      {
        icon: <FaHandsHelping className="size-32 mb-4 text-secondary" />,
        subtitulo:
          "Recetas sencillas para incorporar el Pisillo en tu menú diario",
        texto:
          "Desde tacos hasta ensaladas, el Pisillo se adapta a cualquier ocasión.",
      },
      {
        icon: <FaUniversalAccess className="size-32 mb-4 text-secondary" />,
        subtitulo: "Beneficios de incluir Pisillo en tu dieta diaria",
        texto:
          "Rico en proteínas y omega-3, el Pisillo es una elección saludable.",
      },
    ],
    icon: <RiArrowRightSLine />,
    btn_text: "Mas",
  },
  sec_4: {
    img: "/default.png",
    titulo: "¡Prueba nuestro delicioso Pisillo!",
    text: "Disfruta de la comodidad y el sabor del Pisillo, ¡un producto que transforma tu experiencia culinaria!",
    btn_text_1: "Contactanos",
    btn_text_2: "Blog",
    href_1: "/cont",
    href_2: "/blog",
  },
};
export const pag_n = {
  hero: {
    titulo: "Nuggets de Sábalo",
    min_tittulo: "Prácticos y Versátiles",
    text: "Los Nuggets de KIARI son la opción perfecta para quienes buscan una comida rápida y deliciosa. Su versatilidad permite disfrutarlos en ensaladas, bocadillos o como plato principal, adaptándose a cualquier ocasión.",
    btn_txt_1: "Contactanos",
    btn_txt_2: "Más",
    href_1: "/cont",
    href_2: "/prod/m",
  },
  sec_1: {
    img: "/default.png",
    min_tittulo: "Deliciosos",
    titulo: "Descubre los beneficios de nuestros Nuggets KIARI",
    text: "Los Nuggets de KIARI son una opción perfecta para quienes buscan un sabor excepcional y calidad inigualable. Elaborados con pescado 100% natural, son ideales para disfrutar en cualquier ocasión.",
    btn_text_1: "Contactanos",
    btn_text_2: "Blog",
    href_1: "/cont",
    href_2: "/blog",
  },
  sec_2: {
    img: "/default.png",
    min_titulo: "Conveniencia",
    titulo: "Descubre cómo cocinar y disfrutar los Nuggets",
    text: "Sencillos pasos para una experiencia culinaria excepcional con nuestros Nuggets. Perfectos para cualquier ocasión, fáciles de preparar y deliciosos.",
    contenido: [
      {
        subtitulo: "Pasos Fáciles",
        texto: "Simplemente calienta el aceite y fríe los Nuggets hasta dorar.",
      },
      {
        subtitulo: "Creatividad",
        texto: "Combínalos con salsas, ensaladas o en un delicioso sándwich.",
      },
    ],
    btn_text_1: "Contactanos",
    btn_text_2: "Blog",
    href_1: "/cont",
    href_2: "/blog",
  },
  sec_3: {
    img: "/default.png",
    mini_titulo: "",
    titulo: "Características destacadas de nuestros productos",
    text: "En KIARI, nos enorgullecemos de ofrecer pescado de la más alta calidad.",
    contenido: [
      {
        icon: <FaHeartbeat className="size-32 mb-4 text-secondary" />,
        subtitulo: "Sabor Auténtico",
        texto: "100% natural, garantizando un sabor auténtico y saludable.",
      },
      {
        icon: <FaHandsHelping className="size-32 mb-4 text-secondary" />,
        subtitulo: "Fácil Preparación",
        texto: "Listos para cocinar, ideales para cualquier ocasión.",
      },
      {
        icon: <FaUniversalAccess className="size-32 mb-4 text-secondary" />,
        subtitulo: "Versatilidad",
        texto: "Se adaptan a ensaladas, bocadillos y platos principales.",
      },
    ],
    icon: <RiArrowRightSLine />,
    btn_text: "Más",
  },
  sec_4: {
    img: "/default.png",
    titulo: "¡Prueba nuestros deliciosos Nuggets!",
    text: "Disfruta de la practicidad y el sabor de los Nuggets KIARI, ¡una experiencia culinaria rápida y deliciosa!",
    btn_text_1: "Contactanos",
    btn_text_2: "Blog",
    href_1: "/cont",
    href_2: "/blog",
  },
};

export const pag_m = {
  hero: {
    titulo: "Medallones de Sábalo",
    min_tittulo: "Pura Pulpa Cruda",
    text: "Los Medallones de KIARI son una opción deliciosa y saludable para los amantes del pescado. Elaborados con pura pulpa cruda de sábalo, garantizan una experiencia culinaria inigualable.",
    btn_txt_1: "Contactanos",
    btn_txt_2: "Más",
    href_1: "/cont",
    href_2: "/prod/p",
  },
  sec_1: {
    img: "/default.png",
    min_tittulo: "Sabor",
    titulo: "Descubre la exquisitez de nuestros Medallones",
    text: "Disfruta de la pureza y calidad de nuestros medallones de pescado, elaborados con 100% pulpa cruda. Una opción saludable y deliciosa para cualquier ocasión.",
    btn_text_1: "Contactanos",
    btn_text_2: "Blog",
    href_1: "/cont",
    href_2: "/blog",
  },
  sec_2: {
    img: "/default.png",
    min_titulo: "Calidad Superior",
    titulo: "Medallones de Sábalo: Pura Pulpa Cruda",
    text: "Sin piel, escamas ni espinas, perfectos para disfrutar sin preocupaciones. Listos para cocinar y compartir en tus recetas favoritas.",
    contenido: [
      {
        subtitulo: "Calidad Superior",
        texto: "Elaborados con 100% pulpa cruda de sábalo.",
      },
      {
        subtitulo: "Fácil Preparación",
        texto: "Listos para cocinar en cualquier receta.",
      },
    ],
    btn_text_1: "Contactanos",
    btn_text_2: "Blog",
    href_1: "/cont",
    href_2: "/blog",
  },
  sec_3: {
    img: "/default.png",
    mini_titulo: "",
    titulo: "Beneficios de elegir Medallones KIARI",
    text: "Una experiencia saludable, práctica y deliciosa.",
    contenido: [
      {
        icon: <FaHeartbeat className="size-32 mb-4 text-secondary" />,
        subtitulo: "Saludables",
        texto: "Ricos en proteínas y omega-3, ideales para tu dieta.",
      },
      {
        icon: <FaHandsHelping className="size-32 mb-4 text-secondary" />,
        subtitulo: "Sin Complicaciones",
        texto: "Sin piel, escamas ni espinas para tu comodidad.",
      },
      {
        icon: <FaUniversalAccess className="size-32 mb-4 text-secondary" />,
        subtitulo: "Preparación Rápida",
        texto: "Perfectos para cualquier ocasión y receta.",
      },
    ],
    icon: <RiArrowRightSLine />,
    btn_text: "Más",
  },
  sec_4: {
    img: "/default.png",
    titulo: "¡Prueba nuestros Medallones!",
    text: "Descubre la exquisitez y practicidad de los Medallones KIARI. ¡Una opción deliciosa para compartir en familia!",
    btn_text_1: "Contactanos",
    btn_text_2: "Blog",
    href_1: "/cont",
    href_2: "/blog",
  },
};
