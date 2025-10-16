import {
  baner_1,
  baner_2,
  info_img_1,
  info_img_2,
  inicio,
  triptico_1,
  triptico_2,
} from "@/config/index_config";
import MiNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import Inicio from "@/layouts/inicio";
import Baner1 from "@/layouts/baner_1";
import Triptico1 from "@/layouts/triptico_1";
import InfoImg1 from "@/layouts/info_img_1";
import Triptico2 from "@/layouts/triptico_2";
import InfoImg2 from "@/layouts/info_img_2";
import Testimonio1 from "@/layouts/testimonio_1";
import Baner2 from "@/layouts/baner_2";
import Seccion_1 from "@/layouts/seccion_1";
import { MdOutlineNavigateNext } from "react-icons/md";

import * as I from "@/types/inteerface";

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
      href: "/prod/p",
      variant: "faded",
      color: "primary",
    },
    {
      label: "Mas informacion",
      icon: <MdOutlineNavigateNext />,
      href: "/prod/p",
      variant: "ghost",
      color: "primary",
    },
  ],
  // img: "/img/logo_white.png",
  img_color: false,
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
  min_title: "kiari",
  main_text:
    "¿Antojo de algo rico y saludable? Nuestros Nuggets de Pescado son la elección perfecta.",
  btns: [
    {
      label: "Ordenar",
      icon: <MdOutlineNavigateNext />,
      href: "/prod/n",
      variant: "faded",
      color: "primary",
    },
    {
      label: "Mas informacion",
      icon: <MdOutlineNavigateNext />,
      href: "/prod/n",
      variant: "ghost",
      color: "primary",
    },
  ],
  // img: "/img/logo_white.png",
  img_color: false,
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
  min_title: "kiari",
  main_text:
    "Prepara hamburguesas, albóndigas o lo que imagines. Pura carne de pescado, lista para ti.",
  btns: [
    {
      label: "Ordenar",
      icon: <MdOutlineNavigateNext />,
      href: "/prod/m",
      variant: "faded",
      color: "primary",
    },
    {
      label: "Mas informacion",
      icon: <MdOutlineNavigateNext />,
      href: "/prod/m",
      variant: "ghost",
      color: "primary",
    },
  ],
  // img: "/img/logo_white.png",
  img_color: false,
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
      <Inicio
        bg_img={inicio.bg_img}
        titulo={inicio.titulo}
        text={inicio.text}
        href_1={inicio.href_1}
        href_2={inicio.href_2}
      ></Inicio>
      <Baner1
        bg_imag={baner_1.bg_img}
        bg_color="bg-default"
        titulo={baner_1.titulo}
        mini_titulo={baner_1.mini_titulo}
        text={baner_1.text}
        href_1={baner_1.href_1}
        href_2={baner_1.href_2}
        icon_1={baner_1.icon_1}
        icon_2={baner_1.icon_2}
      />
      <Triptico1
        mini_titulo={triptico_1.mini_titulo}
        titulo={triptico_1.titulo}
        text={triptico_1.text}
        contenido={triptico_1.contenido}
        icon={triptico_1.icon}
        btn_text={triptico_1.btn_text}
      />
      <InfoImg1
        icon={info_img_1.icon}
        img={info_img_1.img}
        titulo={info_img_1.titulo}
        text={info_img_1.text}
        href_1={info_img_1.href_1}
        href_2={info_img_1.href_2}
        btn_text__1={info_img_1.btn_1}
        btn_text__2={info_img_1.btn_2}
        icon_1={info_img_1.icon_1}
        icon_2={info_img_1.icon_2}
      />
      <Triptico2
        mini_titulo={triptico_2.mini_titulo}
        titulo={triptico_2.titulo}
        text={triptico_2.text}
        contenido={triptico_2.contenido}
        href_1={triptico_2.href_1}
        href_2={triptico_2.href_2}
        btn_text_1={triptico_2.btn_text_1}
        btn_text_2={triptico_2.btn_text_2}
        icon_1={triptico_2.icon_1}
        icon_2={triptico_2.icon_2}
      />
      <InfoImg2
        img={info_img_2.img}
        minititulo={info_img_2.minititulo}
        titulo={info_img_2.titulo}
        text={info_img_2.text}
        contenido={info_img_2.contenido}
        href_1={info_img_2.href_1}
        href_2={info_img_2.href_2}
        btn_text__1={info_img_2.btn_1}
        btn_text__2={info_img_2.btn_2}
        icon_1={info_img_2.icon_1}
        icon_2={info_img_2.icon_2}
      />
      <Testimonio1 id="testimonios" star={5} />
      <Baner2
        bg_color={baner_2.bg_color}
        titulo={baner_2.titulo}
        mini_titulo={baner_2.mini_titulo}
        text={baner_2.text}
        href_1={baner_2.href_1}
        href_2={baner_2.href_2}
        btn_text_1={baner_2.btn_1}
        btn_text_2={baner_2.btn_2}
        icon_1={baner_2.icon_1}
        icon_2={baner_2.icon_2}
      />
      <Footer />
    </div>
  );
}
