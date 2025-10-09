import Footer from "@/components/footer";
import MiNavbar from "@/components/navbar";
import {
  baner,
  hero,
  info_img_2,
  medallones,
  nuggets,
  pisillo,
  triptico,
} from "@/config/productos_config";
import Baner1 from "@/layouts/baner_1";
import Hero3 from "@/layouts/hero_3";
import ImgInfo from "@/layouts/img_nfo";
import InfoImg from "@/layouts/info_img";
import InfoImg2 from "@/layouts/info_img_2";
import Triptico2 from "@/layouts/triptico_2";

export default function ProductosPage() {
  return (
    <>
      <MiNavbar />
      <Hero3 titulo={hero.titulo} text={hero.texto} />
      <Triptico2
        mini_titulo={triptico.mini_titulo}
        titulo={triptico.titulo}
        text={triptico.text}
        contenido={triptico.contenido}
      />
      <ImgInfo
        titulo={pisillo.titulo}
        text={pisillo.resumen}
        btn_text__1={pisillo.btn_text_1}
        btn_text__2={pisillo.btn_text_2}
        href_1={pisillo.href_1}
        href_2={pisillo.href_2}
      />
      <InfoImg
        bg_color="bg-default-100"
        titulo={nuggets.titulo}
        text={nuggets.resumen}
        btn_text__1={nuggets.btn_text_1}
        btn_text__2={nuggets.btn_text_2}
        href_1={nuggets.href_1}
        href_2={nuggets.href_2}
      />
      <ImgInfo
        titulo={medallones.titulo}
        text={medallones.resumen}
        btn_text__1={medallones.btn_text_1}
        btn_text__2={medallones.btn_text_2}
        href_1={medallones.href_1}
        href_2={medallones.href_2}
      />
      <InfoImg2
        img={info_img_2.img}
        minititulo={info_img_2.minititulo}
        titulo={info_img_2.titulo}
        text={info_img_2.text}
        contenido={info_img_2.contenido}
        btn_text__1={info_img_2.btn_1}
        btn_text__2={info_img_2.btn_2}
        href_1={info_img_2.href_1}
        href_2={info_img_2.href_2}
        icon_1={info_img_2.icon_1}
        icon_2={info_img_2.icon_2}
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
