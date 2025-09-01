export type SiteConfig = typeof siteConfig;
import { FaFish } from "react-icons/fa";
import {
  RiArticleFill,
  RiBookReadFill,
  RiTruckFill,
  RiFileList3Fill,
  RiChat1Fill,
} from "react-icons/ri";
import { articulos } from "./articulos";

export const siteConfig = {
  name: "Kiari Shop House J&L",
  description: "Descubre la frescura del pescado KIARI",
  exploraItems: {
    prod: [
      {
        label: "Pisillo de Sabalo",
        href: "/productos/pisillo",
        mensaje: "Delicioso y facil de preparar",
        icon: FaFish,
      },
      {
        label: "Nuggets de Sabalo",
        href: "/productos/nuggets",
        mensaje: "Perfectos para cualquier ocacion",
        icon: FaFish,
      },
      {
        label: "Medallones de Sabalo",
        href: "/productos/medallones",
        mensaje: "Sabroso autentico en cada bocado",
        icon: FaFish,
      },
    ],
    info: [
      {
        label: "Testimonios",
        href: "/testimonios",
        mensaje: "Lo que dicen nuestros clientes",
        icon: RiChat1Fill,
      },
      {
        label: "Distribuidores",
        href: "/distribuidores",
        mensaje: "Encuentra nuestros prductos cerca de ti",
        icon: RiTruckFill,
      },
      {
        label: "Recetas",
        href: "/recetas",
        mensaje: "Inspirate con deliciosas recetas",
        icon: RiFileList3Fill,
      },
      {
        label: "Blog",
        href: "/",
        mensaje: "Consejos y novedades en redes",
        icon: RiBookReadFill,
      },
    ],
    arti: [
      {
        label: articulos.a.titulo_corto,
        href: "/articulos/1",
        mensaje: articulos.a.mensaje,
        icon: RiArticleFill,
      },
      {
        label: "Articulo 2",
        href: "/articulos/2",
        icon: RiArticleFill,
      },
      {
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
    ig: "https://www.instagram.com/kiarichocolate",
    tiktok: "https://www.tiktok.com/@kiarichocolate",
  },
};
