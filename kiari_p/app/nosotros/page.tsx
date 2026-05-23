import MiNavbar from "@/components/navbar";
import Footer from "@/components/footer";
import Seccion_1 from "@/sections/sec_presten";
import { MdOutlineNavigateNext } from "react-icons/md";

import * as I from "@/types/interface";
import { hero, img_info_1 } from "@/data/nosotros_config";

export const dynamic = "force-dynamic";

const heroSection: I.Props = {
  bg_img: "/img/sabalo_3.jpg",
  css: "text-white bg-foreground-700 dark:bg-foreground-400",
  main_slogan: hero.titulo,
  sub_slogan: hero.texto,
  size_i: 2,
  format_i: 2,
  order_i: 1,
  btn_order_i: 1,
  cont_order: false,
  btn_position: false,
};

const historySection: I.Props = {
  bg_img: "/default.png",
  css: "text-white bg-blue-600 dark:bg-primary-300",
  main_slogan: img_info_1.titulo,
  main_text: img_info_1.text,
  min_title: img_info_1.mini_titulo,
  btns: [
    {
      label: img_info_1.btn_1,
      icon: <MdOutlineNavigateNext />,
      href: img_info_1.href_1,
      variant: "faded",
      color: "primary",
    },
    {
      label: img_info_1.btn_2,
      icon: <MdOutlineNavigateNext />,
      href: img_info_1.href_2,
      variant: "ghost",
      color: "primary",
    },
  ],
  size_i: 2,
  format_i: 1,
  order_i: 1,
  btn_order_i: 1,
  cont_order: false,
  btn_position: false,
};

export default function NosotrosPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <MiNavbar />
      <Seccion_1 {...heroSection} />
      <Seccion_1 {...historySection} />
      <Footer />
    </div>
  );
}
