import {
  RiArrowRightSLine,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

export const hero_1 = {
  bg_image: "default.png",
  titulo: "Sábalo: Frescura, Calidad, Recetas y Beneficios para tu Mesa",
  texto: "",
  btn: "Conocenos",
  href: "/noso",
  icon: <RiArrowRightSLine />,
};

export const baner_2_1 = {
  bg_img: "default.png",
  mini_titulo: "Redes",
  titulo: "Visitanos en nuestras redes sociales",
  text: "Mantente al dia con nuestras ultimas publicaciones.",
  btn_1: "Facebook",
  btn_2: "Instagram",
  icon_1: <RiFacebookBoxFill />,
  icon_2: <RiInstagramFill />,
  href_1: "/https://www.facebook.com/kiarishophouse/",
  href_2: "/https://www.instagram.com/kiarishophouse/",
};

export const triptico_3 = {
  mini_titulo: "Recetas",
  titulo: "Disfrutas Nuestras recetas",
  text: "En KIARI, nos especializamos en la transformación del sábalo, ofreciendo productos de alta calidad. Nuestro proceso asegura que cada bocado sea delicioso y libre de impurezas.",
  contenido: [
    {
      img: "/default.png",
      subtitulo: "Pisillo salteado",
      texto: "perfecto para una reina pepiada.",
      href: "/blog/receta/1",
    },
    {
      img: "/default.png",
      subtitulo: "Hamburgesas",
      texto: "Prueba un sabor diferente con Kiari.",
      href: "/blog/receta/2",
    },
    {
      img: "/default.png",
      subtitulo: "Seviche",
      texto: "No te puedes olvidar de probarlo.",
      href: "/blog/receta/3",
    },
  ],
};
