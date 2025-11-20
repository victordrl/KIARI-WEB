import MiNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import Seccion_1 from "@/layouts/seccion_1";
import { MdOutlineNavigateNext } from "react-icons/md";

import * as I from "@/types/inteerface";
import Galeria_1 from "@/layouts/galeria_1";

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
  // img: "/img/logo_white.png",
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
  sub_slogan: "Comer sano también es divertido",
  min_title: "Proximamente",
  main_text:
    "¿Antojo de algo rico y saludable? Nuestros Nuggets de Pescado son la elección perfecta.",
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
      href: "/nuggets",
      variant: "ghost",
      color: "primary",
    },
  ],
  // img: "/img/logo_white.png",
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
      href: "/medallones",
      variant: "ghost",
      color: "primary",
    },
  ],
  // img: "/img/logo_white.png",
  img_color: false,
  btn_disable: true,
  size_i: 3,
  format_i: 2,
  order_i: 1,
  btn_order_i: 1,
  cont_order: false,
  btn_position: false,
};

export default function IndexPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <MiNavbar />
      <Seccion_1 {...pisillo} />
      <Seccion_1 {...nugget} />
      <Seccion_1 {...medallon} />
      <Galeria_1 />
      <Footer />
    </div>
  );
}
