export type SiteConfig = typeof siteConfig;
import { articulos } from "./articulos_config";

import { FaFish } from "react-icons/fa";
import {
  RiArticleFill,
  RiBookReadFill,
  RiTruckFill,
  RiFileList3Fill,
  RiChat1Fill,
} from "react-icons/ri";

export const siteConfig = {
  name: "Kiari Shop House J&L",
  description: "Descubre la frescura del pescado KIARI",
  exploraItems: {
    prod: [
      {
        kay: "pisillo",
        label: "Pisillo de Sabalo",
        href: "/prod/p",
        mensaje: "Delicioso y facil de preparar",
        icon: FaFish,
      },
      {
        kay: "nuggests",
        label: "Nuggets de Sabalo",
        href: "/prod/n",
        mensaje: "Perfectos para cualquier ocacion",
        icon: FaFish,
      },
      {
        kay: "nedallones",
        label: "Medallones de Sabalo",
        href: "/prod/m",
        mensaje: "Sabroso autentico en cada bocado",
        icon: FaFish,
      },
    ],
    info: [
      // {
      //   kay: "testimonio",
      //   label: "Testimonios",
      //   href: "/#testimonios",
      //   mensaje: "Lo que dicen nuestros clientes",
      //   icon: RiChat1Fill,
      // },
      {
        kay: "locales",
        label: "Locales",
        href: "/noso#locales",
        mensaje: "Encuentra nuestros prductos cerca de ti",
        icon: RiTruckFill,
      },
      {
        kay: "blog",
        label: "Blog",
        href: "/blog",
        mensaje: "Consejos , novedades y mas",
        icon: RiBookReadFill,
      },
    ],
    arti: [
      {
        kay: "recetas",
        label: "Recetas",
        href: "/blog#recetas",
        mensaje: "Inspirate con deliciosas recetas",
        icon: RiFileList3Fill,
      },
      {
        kay: "articulo_1",
        label: articulos[1].titulo_corto,
        mensaje: articulos[1].frace,
        href: "/blog/articulo/1",
        icon: RiArticleFill,
      },
      {
        kay: "articulo_3",
        label: articulos[3].titulo_corto,
        mensaje: articulos[3].frace,
        href: "/blog/articulo/3",
        icon: RiArticleFill,
      },
    ],
  },
  navItems: [
    {
      label: "Productos",
      href: "/prod",
    },
    {
      label: "Nosotros",
      href: "/noso",
    },
    {
      label: "Explora",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "Productos",
      href: "/prod",
    },
    {
      label: "Recetas",
      href: "/blog#recetas",
    },
    // {
    //   label: "Testimonios",
    //   href: "/#testimonios",
    // },
    {
      label: "Nosotros",
      href: "/noso",
    },
    {
      label: "Locales",
      href: "/noso#locales",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Contactanos",
      href: "cont",
    },
  ],
  footerItem: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Productos",
      href: "/prod",
    },
    {
      label: "Nosotros",
      href: "/noso",
    },
    // {
    //   label: "Testimonios",
    //   href: "/#testimonios",
    // },
  ],
  links: {
    facebook: "https://www.facebook.com/kiarishophouse/",
    ig: "https://www.instagram.com/kiarishophouse/",
    tiktok: "https://www.tiktok.com/@kiarichocolate",
  },
};
