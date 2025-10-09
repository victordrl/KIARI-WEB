import Footer from "@/components/footer";
import MiNavbar from "@/components/navbar";
import { pag_m } from "@/config/productos_config";
import Baner3 from "@/layouts/baner_3";
import InfoImg from "@/layouts/img_nfo";
import InfoImg1 from "@/layouts/info_img_1";
import InfoImg2 from "@/layouts/info_img_2";
import Testimonio1 from "@/layouts/testimonio_1";
import Triptico1 from "@/layouts/triptico_1";

export default function MedallonesPage() {
  return (
    <>
      <MiNavbar />
      <Baner3
        titulo={pag_m.hero.titulo}
        mini_titulo={pag_m.hero.min_tittulo}
        text={pag_m.hero.text}
        btn_text_2={pag_m.hero.btn_txt_2}
        btn_text_1={pag_m.hero.btn_txt_1}
        href_1={pag_m.hero.href_1}
        href_2={pag_m.hero.href_2}
      />
      <InfoImg1
        bg_color="bg-foregroond"
        titulo={pag_m.sec_1.titulo}
        text={pag_m.sec_1.text}
        img={pag_m.sec_1.img}
        btn_text__1={pag_m.sec_1.btn_text_1}
        btn_text__2={pag_m.sec_1.btn_text_2}
        href_1={pag_m.sec_1.href_1}
        href_2={pag_m.sec_1.href_2}
      />
      <InfoImg2
        titulo={pag_m.sec_2.titulo}
        text={pag_m.sec_2.text}
        minititulo={pag_m.sec_2.min_titulo}
        img={pag_m.sec_2.img}
        contenido={pag_m.sec_2.contenido}
        btn_text__1={pag_m.sec_2.btn_text_1}
        btn_text__2={pag_m.sec_2.btn_text_2}
        href_1={pag_m.sec_2.href_1}
        href_2={pag_m.sec_2.href_2}
      />
      <Triptico1
        titulo={pag_m.sec_3.titulo}
        contenido={pag_m.sec_3.contenido}
      />
      <Testimonio1 star={5} />
      <InfoImg
        titulo={pag_m.sec_4.titulo}
        text={pag_m.sec_4.text}
        img={pag_m.sec_4.img}
        btn_text__1={pag_m.sec_4.btn_text_1}
        btn_text__2={pag_m.sec_4.btn_text_2}
        href_1={pag_m.sec_4.href_1}
        href_2={pag_m.sec_4.href_2}
      />
      <Footer />
    </>
  );
}
