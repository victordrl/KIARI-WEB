import {
  baner_1,
  info_img,
  info_img_2,
  inicio,
  triptico_1,
  triptico_2,
} from "@/config/site";
import { MiNavbar } from "@/components/navbar";
import Inicio from "@/layouts/inicio";
import BanerLayout from "@/layouts/baner";
import Footer from "@/layouts/footer";
import Triptico1 from "@/layouts/triptico_1";
import InfoImg1 from "@/layouts/info_img_1";
import Triptico2 from "@/layouts/triptico_2";
import InfoImg2 from "@/layouts/info_img_2";

export default function IndexPage() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <MiNavbar />
      <Inicio
        bg_img={inicio.bg_img}
        titulo={inicio.titulo}
        text={inicio.text}
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
      <Triptico1
        mini_titulo={triptico_1.mini_titulo}
        titulo={triptico_1.titulo}
        text={triptico_1.text}
        contenido={triptico_1.contenido}
      />
      <InfoImg1
        icon={info_img.icon}
        img={info_img.img}
        titulo={info_img.titulo}
        text={info_img.text}
        href_1={info_img.href_1}
        href_2={info_img.href_2}
      />
      <Triptico2
        mini_titulo={triptico_2.mini_titulo}
        titulo={triptico_2.titulo}
        text={triptico_2.text}
        contenido={triptico_2.contenido}
      />
      <InfoImg2
        img={info_img.img}
        minititulo={info_img_2.minititulo}
        titulo={info_img.titulo}
        text={info_img.text}
        contenido={info_img_2.contenido}
        href_1={info_img.href_1}
        href_2={info_img.href_2}
      />
      <Footer />
    </div>
  );
}
