import MiNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import Seccion_1 from "@/sections/seccion_1";
import { MdOutlineNavigateNext } from "react-icons/md";

import * as I from "@/types/interface";
import { pisillo } from "@/data/productos_config";

export const dynamic = "force-dynamic";

const hero: I.Props = {
  bg_img: "/img/pisillo.jpg",
  css: "text-white bg-foreground-600 dark:bg-foreground-300",
  main_slogan: pisillo.titulo,
  sub_slogan: pisillo.resumen,
  min_title: pisillo.mini,
  btns: [
    {
      label: "Blog",
      icon: <MdOutlineNavigateNext />,
      href: pisillo.href_1,
      variant: "faded",
      color: "primary",
    },
    {
      label: "Ordenar",
      icon: <MdOutlineNavigateNext />,
      href: "/compra",
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

export default function PisilloPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <MiNavbar />
      <Seccion_1 {...hero} />
      <Footer />
    </div>
  );
}
