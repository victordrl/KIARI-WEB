import { baner_1, giftDefault, inicio } from "@/config/site";
import { MiNavbar } from "@/components/navbar";
import Inicio from "@/layouts/inicio";
import BanerLayout from "@/layouts/baner";
import Footer from "@/layouts/footer";

export default function IndexPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <MiNavbar />
      <Inicio
        bg_img={inicio.bg_img}
        titulo={inicio.titulo}
        text={inicio.text}
        mini_titulo={inicio.mini_titulo}
        href_1={inicio.href_1}
        href_2={inicio.href_2}
      ></Inicio>
      <BanerLayout
        bg_imag={baner_1.bg_img}
        bg_color="bg-default"
        titulo={baner_1.titulo}
        mini_titulo={baner_1.mini_titulo}
        text={baner_1.text}
        href_1={baner_1.href_1}
        href_2={baner_1.href_2}
      />
      <Footer />
    </div>
  );
}
