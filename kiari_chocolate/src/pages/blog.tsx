import Footer from "@/components/footer";
import MiNavbar from "@/components/navbar";

import { articulos } from "@/config/articulos_config";
import { triptico_3, hero_1 } from "@/config/blog_config";
import Baner2 from "@/layouts/baner_2";
import Hero1 from "@/layouts/hero_1";
import ImgInfo from "@/layouts/img_nfo";
import InfoImg from "@/layouts/info_img";
import Triptico3 from "@/layouts/triptico_3";

export default function ArticuloPage() {
  return (
    <>
      <MiNavbar />
      <Hero1
        bg_img={hero_1.bg_image}
        href_1={hero_1.href}
        titulo={hero_1.titulo}
        text={hero_1.texto}
        btn={hero_1.btn}
        icon={hero_1.icon}
      />
      <ImgInfo
        bg_color=""
        img={articulos[1].img.i1}
        titulo={articulos[1].titulo}
        text={articulos[1].resumen}
        href_1="/blog/articulo/1"
        href_2="/blog"
      />
      <InfoImg
        bg_color="bg-default-100"
        img={articulos[2].img.i1}
        titulo={articulos[2].titulo}
        text={articulos[2].resumen}
        href_1="/blog/articulo/2"
        href_2="/blog"
      />
      <ImgInfo
        bg_color=""
        img={articulos[3].img.i1}
        titulo={articulos[3].titulo}
        text={articulos[3].resumen}
        href_1="/blog/articulo/1"
        href_2="/blog"
      />
      <Baner2 href_1="/prod" />
      <Triptico3
        id="recetas"
        mini_titulo={triptico_3.mini_titulo}
        titulo={triptico_3.titulo}
        text={triptico_3.text}
        contenido={triptico_3.contenido}
      />
      <Footer />
    </>
  );
}
