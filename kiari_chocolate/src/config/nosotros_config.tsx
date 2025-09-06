import { PiBowlFoodFill } from "react-icons/pi";
import {
  RiArrowRightSLine,
  RiBox2Line,
  RiListIndefinite,
  RiTeamFill,
} from "react-icons/ri";

export const bnt_icon = {
  icon_1: <RiArrowRightSLine className="size-6" />,
  icon_2: <RiBox2Line className="size-6" />,
  icon_3: <RiListIndefinite className="size-6" />,
  icon_4: <RiTeamFill className="size-6" />,
};

export const hero = {
  titulo: "Bienvenido a KIARI",
  texto:
    "Transformamos el pescado en una experiencia deliciosa y saludable para todos.",
};

export const img_info_1 = {
  mini_titulo: "Historia",
  titulo: "La Evolución de KIARI: Un Viaje Saboroso",
  text: "KIARI nació con la misión de transformar el consumo de pescado en Venezuela, ofreciendo productos innovadores y de alta calidad. Desde nuestros inicios, hemos evolucionado para satisfacer las necesidades de nuestros clientes, manteniendo siempre un compromiso con la naturalidad y el sabor.",
  img: "/default.png",
  btn_1: "Equipo",
  btn_2: "Contactanos",
  href_1: "/noso#equipo",
  href_2: "/cont",
};

export const triptico_1 = {
  titulo: "Encuentranos en los mercados mas cercanos a ti",
  mini_titulo: "Super Markets",
  texto: "Estaremos disponibles en los siguientes bodegones y super mercados",
  contenido: [
    {
      img: "/pekin_mark.jpg",
      subtitulo: "Hipermercado Pekin",
      texto: "instagram",
      href: "https://www.instagram.com/hipermercadopekin/",
    },
    {
      img: "/llovizna_mark.jpg",
      subtitulo: "La Llovizna",
      texto: "instagram",
      href: "https://www.instagram.com/lalloviznamarket/",
    },
    {
      img: "/lacaribenia_mark.jpg",
      subtitulo: "La Caribeña",
      texto: "instagram",
      href: "https://www.instagram.com/lacaribenabodegon/",
    },
    {
      img: "/amazon_mark.jpg",
      subtitulo: "Amazon supermarket",
      texto: "instagram",
      href: "https://www.instagram.com/amazon_supermarkett/",
    },
  ],
};

export const map = {
  mini_titulo: "",
  titulo: "Ubicación",
  texto: "Descubre dónde estamos",
};

export const triptico_2 = {
  titulo: "Nuestro equipo",
  mini_titulo: "Equipo",
  texto: "Conoce a las personas apasionadas detrás de KIARI.",
  contenido: [
    {
      img: "/default.png",
      subtitulo: "Gustavo Rojas",
      texto: "Administrado",
      href: "",
    },
    {
      img: "/default.png",
      subtitulo: "Lucila Lopez",
      texto: "CIO y Marketing",
      href: "",
    },
    {
      img: "/default.png",
      subtitulo: "Victor Rojas",
      texto: "Sistemas y Procesos",
    },
    {
      img: "/default.png",
      subtitulo: "Javier Rojas",
      texto: "Vendedor",
      href: "",
    },
  ],
};

export const info_img_2 = {
  icon: PiBowlFoodFill,
  img: "default.png",
  titulo: "Benefios de elegir Kiari para tus necesidades de pescado de calidad",
  text: "Trabajar con KIARI significa acceder a productos de pescado 100% naturales, elaborados sin conservantes. Además, ofrecemos soluciones prácticas y deliciosas que satisfacen tanto a consumidores como a inversionistas interesados en un mercado en crecimiento.",
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
