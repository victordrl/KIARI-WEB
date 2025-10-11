export type SiteConfig = typeof siteConfig;
import { articulos } from "./articulos_config";

import { FaFish } from "react-icons/fa";
import {
  RiArticleFill,
  RiBookReadFill,
  RiTruckFill,
  RiFileList3Fill,
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
        state: false,
        new: false,
      },
      {
        kay: "nuggests",
        label: "Nuggets de Sabalo",
        href: "/prod/n",
        mensaje: "Perfectos para cualquier ocacion",
        state: false,
        new: false,
      },
      {
        kay: "nedallones",
        label: "Medallones de Sabalo",
        href: "/prod/m",
        mensaje: "Sabroso autentico en cada bocado",
        state: false,
        new: false,
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
        state: false,
        new: false,
      },
      {
        kay: "blog",
        label: "Blog",
        href: "/blog",
        mensaje: "Consejos , novedades y mas",
        state: false,
        new: false,
      },
    ],
    arti: [
      {
        kay: "recetas",
        label: "Recetas",
        href: "/blog#recetas",
        mensaje: "Inspirate con deliciosas recetas",
        state: false,
        new: false,
      },
      {
        kay: "articulo_1",
        label: articulos[1].titulo_corto,
        mensaje: articulos[1].frace,
        href: "/blog/articulo/1",
        state: false,
        new: false,
      },
      {
        kay: "articulo_3",
        label: articulos[3].titulo_corto,
        mensaje: articulos[3].frace,
        href: "/blog/articulo/3",
        state: false,
        new: false,
      },
    ],
  },

  navItems: [
    {
      label: "Productos",
      href: "/prod",
      state: true,
      new: false,
    },
    {
      label: "Nosotros",
      href: "/noso",
      state: true,
      new: false,
    },
    {
      label: "Explora",
      href: "/",
      state: true,
      new: false,
    },
  ],

  navMenuItems: [
    {
      label: "Productos",
      href: "/prod",
      state: true,
      new: false,
    },
    {
      label: "Recetas",
      href: "/blog#recetas",
      state: true,
      new: false,
    },
    {
      label: "Nosotros",
      href: "/noso",
      state: true,
      new: false,
    },
    {
      label: "Locales",
      href: "/noso#locales",
      state: true,
      new: false,
    },
    {
      label: "Blog",
      href: "/blog",
      state: true,
      new: false,
    },
    {
      label: "Contactanos",
      href: "cont",
      state: true,
      new: false,
    },
  ],
  footerItem: [
    {
      label: "Inicio",
      href: "/",
      state: true,
      new: false,
    },
    {
      label: "Productos",
      href: "/prod",
      state: true,
      new: false,
    },
    {
      label: "Nosotros",
      href: "/noso",
      state: true,
      new: false,
    },
  ],
  links: {
    facebook: "https://www.facebook.com/kiarishophouse/",
    ig: "https://www.instagram.com/kiarishophouse/",
    tiktok: "https://www.tiktok.com/@kiarichocolate",
  },
};
