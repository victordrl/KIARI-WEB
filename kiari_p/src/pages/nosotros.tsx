import Footer from "@/components/footer";
import MiNavbar from "@/components/navbar";
import {
  baner,
  bnt_icon,
  hero,
  img_info_1,
  info_img_2,
  map,
  triptico_1,
  triptico_2,
} from "@/config/nosotros_config";
import Baner1 from "@/layouts/baner_1";
import Hero3 from "@/layouts/hero_3";
import InfoImg1 from "@/layouts/info_img_1";
import InfoImg2 from "@/layouts/info_img_1";
import Mapa from "@/layouts/mapa";
import Triptico4 from "@/layouts/triptico_4";
import Triptico5 from "@/layouts/triptico_5";

export default function NosotrosPage() {
  return (
    <>
      <MiNavbar />
      <Hero3 titulo={hero.titulo} text={hero.texto} />
      <InfoImg1
        img={img_info_1.img}
        titulo={img_info_1.titulo}
        text={img_info_1.text}
        btn_text__1={img_info_1.btn_1}
        icon_1={bnt_icon.icon_4}
        btn_text__2={img_info_1.btn_2}
        icon_2={bnt_icon.icon_1}
        href_1={img_info_1.href_1}
        href_2={img_info_1.href_2}
      />
      <Triptico4
        titulo={triptico_1.titulo}
        mini_titulo={triptico_1.mini_titulo}
        text={triptico_1.texto}
        contenido={triptico_1.contenido}
        cantidad={triptico_1.contenido.length}
        external_link={true}
      />
      <Mapa
        titulo={map.titulo}
        texto={map.texto}
        mini_titulo={map.mini_titulo}
      />
      <Triptico5
        id={"equipo"}
        mini_titulo={triptico_2.mini_titulo}
        titulo={triptico_2.titulo}
        text={triptico_2.texto}
        contenido={triptico_2.contenido}
        cantidad={2}
      />
      <InfoImg2
        icon={info_img_2.icon}
        img={info_img_2.img}
        titulo={info_img_2.titulo}
        text={info_img_2.text}
      />
      <Baner1
        bg_imag={baner.bg_imag}
        titulo={baner.titulo}
        text={baner.text}
        btn_text_1={baner.btn_text_1}
        btn_text_2={baner.btn_text_2}
        href_1={baner.href_1}
        href_2={baner.href_2}
        icon_1={baner.icon_1}
        icon_2={baner.icon_2}
      />
      <Footer />
    </>
  );
}
