export type SiteConfig = typeof siteConfig;
import { FaFish } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";
import {
  RiArticleFill,
  RiBookReadFill,
  RiTruckFill,
  RiFileList3Fill,
  RiChat1Fill,
} from "react-icons/ri";
import { articulos } from "./articulos_config";

export const giftDefault = "https://i.gifer.com/fxoU.gif";

export const inicio = {
  bg_img: giftDefault,
  titulo: "El mejor Tarpon del Venezuela",
  text: " En KIARI, ofrecemos pescado de alta calidad, 100% natural y libre de conservantes. Nuestros productos, como el pisillo, nuggets y medallones, son ideales para disfrutar de una experiencia gastronómica única.",
  href_1: "/",
  href_2: "/",
};

export const baner_1 = {
  bg_img: "default.png",
  mini_titulo: "Sabor",
  titulo: "Bienvenido a KIARI",
  text: "Transformamos el pescado en una experiencia deliciosa y saludable para todos.",
  href_1: "/",
  href_2: "/",
};

export const triptico_2 = {
  mini_titulo: "Produtos",
  titulo:
    "Descubre nuestras innovadoras presentaciones de pescado para disfrutar en cualquier ocasión",
  text: "",
  contenido: [
    {
      img: "default.png",
      subtitulo: "Nuggets",
      texto:
        "Nuggets la forma más práctica y secilla de disfrutar el sabor del sábalo.",
    },
    {
      img: "default.png",
      subtitulo: "Pisillo",
      texto:
        "Presentaciones únicas que transforman tu experiencia con el pescado.",
    },
    {
      img: "default.png",
      subtitulo: "Medallones",
      texto:
        "hamburguesas de pura pulpa al natural para los amantes del pescado.",
    },
  ],
  href_1: "/comprar",
  href_2: "/conocenos",
};

export const info_img = {
  icon: PiBowlFoodFill,
  img: "default.png",
  titulo: "Facilitamos el consumo de pescado delicioso",
  text: "En KIARI, eliminamos piel, escamas y espinas, garantizando un producto listo para disfrutar. Esto no solo mejora la experiencia del consumidor, sino que también asegura que cada bocado sea puro placer.",
  href_1: "/",
  href_2: "/",
};

export const triptico_1 = {
  mini_titulo: "Servicios",
  titulo: "Transformación y Procesamiento del Sábalo",
  text: "En KIARI, nos especializamos en la transformación del sábalo, ofreciendo productos de alta calidad. Nuestro proceso asegura que cada bocado sea delicioso y libre de impurezas.",
  contenido: [
    {
      icon: FaFish,
      subtitulo: "Productos Innovadores y Saludables",
      texto: "Ofrecemos pisillo, nuggets y medallones, todos 100% naturales.",
      href: "/",
    },
    {
      icon: FaFish,
      subtitulo: "Compromiso con la Calidad y Sostenibilidad",
      texto: "Nuestros productos son elaborados sin conservantes artificiales.",
      href: "/",
    },
    {
      icon: FaFish,
      subtitulo: "Fácil Acceso a Nuestros Productos",
      texto: "Contáctanos para realizar tus pedidos de manera sencilla.",
      href: "/",
    },
  ],
};

export const info_img_2 = {
  minititulo: "Natural",
  img: "default.png",
  titulo: "Descubre los Beneficios de KIARI",
  text: "Los productos de KIARI son 100% naturales y de alta calidad. Disfruta de un sabor auténtico sin conservantes artificiales.",
  contenido: [
    {
      subtitulo: "Calidad Superior",
      texto:
        "Disfruta de pescado fresco y delicioso, ideal para toda la familia.",
    },
    {
      subtitulo: "Sin Conservantes",
      texto:
        "Nuestro productos estan completamente libres de aditivos y conservantes.",
    },
  ],
  href_1: "/",
  href_2: "/",
};

export const baner_2 = {
  bg_img: "",
  bg_color: "secondary",
  mini_titulo: "",
  titulo: "¡Disfruta del sabor del sábalo!",
  text: "Realiza tu pedido y descubre nuestros deliciosos productos.",
  href_1: "/",
  href_2: "/",
};

export const siteConfig = {
  name: "Kiari Shop House J&L",
  description: "Descubre la frescura del pescado KIARI",
  exploraItems: {
    prod: [
      {
        kay: "producto_1",
        label: "Pisillo de Sabalo",
        href: "/productos/pisillo",
        mensaje: "Delicioso y facil de preparar",
        icon: FaFish,
      },
      {
        kay: "producto_2",
        label: "Nuggets de Sabalo",
        href: "/productos/nuggets",
        mensaje: "Perfectos para cualquier ocacion",
        icon: FaFish,
      },
      {
        kay: "producto_3",
        label: "Medallones de Sabalo",
        href: "/productos/medallones",
        mensaje: "Sabroso autentico en cada bocado",
        icon: FaFish,
      },
    ],
    info: [
      {
        kay: "testimonio_1",
        label: "Testimonios",
        href: "/testimonios",
        mensaje: "Lo que dicen nuestros clientes",
        icon: RiChat1Fill,
      },
      {
        kay: "distribuidores",
        label: "Distribuidores",
        href: "/distribuidores",
        mensaje: "Encuentra nuestros prductos cerca de ti",
        icon: RiTruckFill,
      },
      {
        kay: "recetas",
        label: "Recetas",
        href: "/recetas",
        mensaje: "Inspirate con deliciosas recetas",
        icon: RiFileList3Fill,
      },
      {
        kay: "blog",
        label: "Blog",
        href: "/",
        mensaje: "Consejos y novedades en redes",
        icon: RiBookReadFill,
      },
    ],
    arti: [
      {
        kay: "articulo_1",
        label: articulos.a.titulo_corto,
        href: "/articulos/1",
        mensaje: articulos.a.mensaje,
        icon: RiArticleFill,
      },
      {
        kay: "articulo_2",
        label: "Articulo 2",
        href: "/articulos/2",
        icon: RiArticleFill,
      },
      {
        kay: "articulo_3",
        label: "Articulo 3",
        href: "/articulos/3",
        icon: RiArticleFill,
      },
    ],
  },
  navItems: [
    {
      label: "Productos",
      href: "/productos",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Explora",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Productos",
      href: "/productos",
    },
    {
      label: "Recetas",
      href: "/recetas",
    },
    {
      label: "Articulos",
      href: "/articulos",
    },
    {
      label: "Testimonios",
      href: "/testimonios",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Distribuidores",
      href: "/distribuidores",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contactanos",
      href: "#",
    },
  ],
  footerItem: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Productos",
      href: "/productos",
    },
    {
      label: "Nosotros",
      href: "/nosotros",
    },
    {
      label: "Testimonios",
      href: "/testimonios",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/kiarishophouse/",
    ig: "https://www.instagram.com/kiarishophouse/",
    tiktok: "https://www.tiktok.com/@kiarichocolate",
  },
};
