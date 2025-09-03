import { baner_1, info_img, inicio, triptico } from "@/config/site";
import { MiNavbar } from "@/components/navbar";
import Inicio from "@/layouts/inicio";
import BanerLayout from "@/layouts/baner";
import Footer from "@/layouts/footer";
import Triptico_1 from "@/layouts/triptico_1";
import InfoImg from "@/layouts/info_img";

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
      <Triptico_1
        mini_titulo={triptico.mini_titulo}
        titulo={triptico.titulo}
        text={triptico.text}
        contenido={triptico.contenido}
      />
      <InfoImg
        icon={info_img.icon}
        titulo={info_img.titulo}
        text={info_img.text}
        href_1={info_img.href_1}
        href_2={info_img.href_2}
      />
      <Footer />
    </div>
  );
}
