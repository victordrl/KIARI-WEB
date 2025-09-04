import Footer from "@/components/footer";
import MiNavbar from "@/components/navbar";

import { articulos } from "@/config/articulos_config";
import Hero1 from "@/layouts/hero_1";
import ImgInfo from "@/layouts/img_nfo";
import InfoImg from "@/layouts/info_img";

export default function ArticuloPage() {
  return (
    <>
      <MiNavbar />
      <Hero1
        bg_img={"default.png"}
        href_1="/noso"
        titulo="Sábalo: Frescura, Calidad y Beneficios para tu Mesa"
        text=""
      />
      <ImgInfo
        bg_color=""
        img={articulos[1].img.i1}
        titulo={articulos[1].titulo}
        text={articulos[1].resumen}
        href_1="/arti/1"
        href_2="/blog"
      />
      <InfoImg
        bg_color="bg-default-100"
        img={articulos[2].img.i1}
        titulo={articulos[2].titulo}
        text={articulos[2].resumen}
        href_1="/arti/2"
        href_2="/blog"
      />
      <ImgInfo
        bg_color=""
        img={articulos[3].img.i1}
        titulo={articulos[3].titulo}
        text={articulos[3].resumen}
        href_1="/arti/3"
        href_2="/blog"
      />
      <Footer />
    </>
  );
}
