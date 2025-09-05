import Footer from "@/components/footer";
import MiNavbar from "@/components/navbar";
import { triptico_3 } from "@/config/blog_config";
import { recetas } from "@/config/recetas_confi";
import Hero2 from "@/layouts/hero_2";
import ListaImg from "@/layouts/lista_img";
import Triptico4 from "@/layouts/triptico_4";

import { useParams } from "react-router-dom";

export default function RecetaPage() {
  const { id } = useParams<{ id: string }>();

  const receta = recetas[id as keyof typeof recetas];

  return (
    <>
      <MiNavbar />
      <Hero2 titulo={receta.titulo} text={receta.presentacion} />
      <ListaImg
        titulo={receta.titulo}
        img={receta.imagen}
        pasos={receta.pasos}
        descripcion={receta.descripcion}
        ingredientes={receta.ingredientes}
      />
      <Triptico4
        mini_titulo={triptico_3.mini_titulo}
        // titulo={triptico_3.titulo}
        // text={triptico_3.text}
        cantidad={triptico_3.contenido.length}
        contenido={triptico_3.contenido}
      />
      <Footer />
    </>
  );
}
