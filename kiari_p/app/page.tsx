import MiNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MdOutlineNavigateNext } from "react-icons/md";

import * as I from "@/types/interface";
import SecPresent from "@/sections/sec_presten";
import SecProducto1 from "@/sections/sec_producto1";
import SecInicio from "@/sections/sec_ini";
import Galeria_1Client from "@/components/galeria-1-client";
import NutritionBars from "@/components/nutrition-bars";

export const dynamic = "force-dynamic";

const pisillo: I.Props = {
  bg_img: "/img/pisillo.jpg",
  css: "text-white bg-foreground-600 dark:bg-foreground-300",
  main_slogan: "Pisillo",
  sub_slogan: "La versatilidad del mar en tu plato",
  min_title: "kiari",
  main_text:
    "De la red a tu mesa, la comodidad de nuestro Pisillo de Pescado desespinado.",
  btns: [
    {
      label: "Ordenar",
      icon: <MdOutlineNavigateNext />,
      href: "/contacto",
      variant: "faded",
      color: "primary",
    },
    {
      label: "Mas informacion",
      icon: <MdOutlineNavigateNext />,
      href: "/pisillo",
      variant: "ghost",
      color: "primary",
    },
  ],
  img_color: false,
  btn_disable: false,
  size_i: 3,
  format_i: 2,
  order_i: 1,
  btn_order_i: 1,
  cont_order: false,
  btn_position: false,
};
const nugget: I.Props = {
  bg_img: "/img/nuggets.png",
  css: "text-white bg-foreground-600 dark:bg-foreground-300",
  main_slogan: "Nuggets",
  sub_slogan: "Comer sano tambien es divertido",
  min_title: "Proximamente",
  main_text:
    "¿Antojo de algo rico y saludable? Nuestros Nuggets de Pescado son la eleccion perfecta.",
  btns: [
    {
      label: "Ordenar",
      icon: <MdOutlineNavigateNext />,
      href: "/contacto",
      variant: "faded",
      color: "primary",
    },
    {
      label: "Mas informacion",
      icon: <MdOutlineNavigateNext />,
      href: "/pisillo",
      variant: "ghost",
      color: "primary",
    },
  ],
  img_color: false,
  btn_disable: true,
  size_i: 3,
  format_i: 2,
  order_i: 1,
  btn_order_i: 1,
  cont_order: false,
  btn_position: false,
};
const medallon: I.Props = {
  bg_img: "/img/medallones.png",
  css: "text-white bg-foreground-600 dark:bg-foreground-300 ",
  main_slogan: "Medallones",
  sub_slogan: "Pura Pulpa de Pescado",
  min_title: "Proximamente",
  main_text:
    "Prepara hamburguesas, albóndigas o lo que imagines. Pura carne de pescado, lista para ti.",
  btns: [
    {
      label: "Ordenar",
      icon: <MdOutlineNavigateNext />,
      href: "/contacto",
      variant: "faded",
      color: "primary",
    },
    {
      label: "Mas informacion",
      icon: <MdOutlineNavigateNext />,
      href: "/pisillo",
      variant: "ghost",
      color: "primary",
    },
  ],
  img_color: false,
  btn_disable: true,
  size_i: 3,
  format_i: 2,
  order_i: 1,
  btn_order_i: 1,
  cont_order: false,
  btn_position: false,
};

const carrusel: I.Props[] = [
  {
    bg_img: "/img/sabalo_3.jpg",
    css: "text-white",
    btns: [
      {
        label: "Leer mas",
        icon: <MdOutlineNavigateNext />,
        href: "/nosotros",
        variant: "ghost",
        color: "primary",
      },
    ],
    min_title: "Mar",
    main_title: "Frescura",
    min_text:
      "Desde el mar hasta la cocina de tu casa. Ofecemos la mejor experiencia de cocinar pescado.",
    main_text: "",
    img: "/img/logo_white.png",
    btn_position: true,
    btn_disable: false,
    img_color: false,
    order_i: 0,
    btn_order_i: 0,
  },
  {
    bg_img: "/img/sabalo_2.jpg",
    css: "text-white",
    btns: [
      {
        label: "Leer mas",
        icon: <MdOutlineNavigateNext />,
        href: "/nosotros",
        variant: "ghost",
        color: "primary",
      },
    ],
    min_title: "Nutricion",
    main_title: "Saludablemente delicioso",
    min_text: `Naturalmente libre de espinas.Tu dosis diaria de omega-3, sin aditivos, sin complicaciones solo la bondad del pescado.`,
    main_text: "",
    img: "/img/logo_white.png",
    sub_text: "",
    btn_position: true,
    btn_disable: false,
    img_color: false,
    order_i: 0,
    btn_order_i: 0,
  },
];

const sabaloProps: I.Props = {
  css: "text-white",
  main_slogan: "SÁBALO",
  sub_slogan: "REY DE PLATA",
  video: "/video/orda.mp4",
};

const nutritionalData = [
  { minititulo: "PROT", subtitulo: "21.7g", fill: 4.1 },
  { minititulo: "CARB", subtitulo: "0g", fill: 0.2 },
  { minititulo: "FAT", subtitulo: "17.7g", fill: 3.0 },
  { minititulo: "CAL", subtitulo: "252", fill: 2.5 },
];

export default function IndexPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <MiNavbar />
      <SecInicio {...sabaloProps} />
      <SecProducto1 {...pisillo} />
      <Galeria_1Client carrusel={carrusel} />
      <SecProducto1 {...medallon} />
      <SecProducto1 {...nugget} />
      <NutritionBars title="Info Nutricional" items={nutritionalData} />
      <Footer />
    </div>
  );
}
