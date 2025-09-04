import { useParams } from "react-router-dom";
import { useEffect } from "react";

import Footer from "@/components/footer";
import MiNavbar from "@/components/navbar";

import Baner3 from "@/layouts/baner_3";

import { articulos } from "@/config/articulos_config";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

import { Carousel } from "@material-tailwind/react";
import { Card, CardFooter, Chip, Divider, Link } from "@heroui/react";
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";

export default function ArticulosPage() {
  const { id } = useParams<{ id: string }>();
  // aquí tomamos el artículo según el id
  const articulo = articulos[id as keyof typeof articulos];

  if (!articulo) {
    return <div className="text-center py-20">Artículo no encontrado</div>;
  }

  useEffect(() => {}, []);

  return (
    <>
      <MiNavbar />
      <Baner3
        titulo={articulo.titulo}
        text={articulo.resumen}
        mini_titulo={articulo.frace}
        href_1="/prod"
        href_2={articulo.hreft_2}
      />
      <section className="flex flex-col items-center w-full h-full bg-default-200 py-8 px-4">
        <Carousel className="sm:w-[75%] h-[650px] rounded-md">
          {Object.values(articulo.img).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagen ${index + 1}`}
              className="h-full w-full object-cover"
            />
          ))}
        </Carousel>

        <Card
          radius="none"
          shadow="sm"
          className="container w-full h-full -m-4 p-6 py-20 z-50"
        >
          <div className="max-w-3xl mx-auto">
            {Object.entries(articulo.texto)

              // .filter(([key]) => key !== "p1") // excluye p1
              .map(([key, parrafo]) => (
                <div key={key} className="mb-6">
                  <h2 className="subtitulo text-center m-6">
                    {parrafo.subtitulo}
                  </h2>
                  <p className="parrafo mt-4">{parrafo.texto}</p>
                </div>
              ))}
            <br />
            <br />
            <span className="minititulo font-semibold">Kiari: </span>
            <p className="parrafo p-6">{articulo.conclucion}</p>
            <div>
              {Object.values(articulo.referecias).map((ref, index) => (
                <div key={index} className="mb-6">
                  <h2 className="">{ref.Lugar}</h2>
                  <Link color="secondary" href={ref.ruta}>
                    {ref.ruta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <CardFooter className="flex flex-col gap-4">
            <div className="flex flex-col items-center justify-center gap-4">
              <span className="parrafo font-bold">Siguenos y comenta</span>

              <div className="flex flex-row gap-2 ">
                <Link
                  className="font-mono text-default-600 px-2 gap-1"
                  isExternal
                  href={siteConfig.links.ig}
                  title="instagram"
                >
                  <RiInstagramFill className="text-default-500 size-8" />
                </Link>
                <Link
                  className="font-mono text-default-600 px-2 gap-1"
                  isExternal
                  href={siteConfig.links.facebook}
                  title="facebook"
                >
                  <RiFacebookBoxFill className="text-default-500 size-8" />
                </Link>
              </div>
              <div className="flex gap-2 ">
                <div className="flex sm:flex-row items-center flex-col gap-2">
                  {Object.values(articulo.chip).map((chip, index) => (
                    <Chip
                      key={index}
                      variant="faded"
                      radius="sm"
                      color="primary"
                    >
                      {chip}
                    </Chip>
                  ))}
                </div>
              </div>
            </div>
            <Divider className="w-[70%]" />
            <div>
              <Link
                className="flex flex-col items-center gap-1"
                color="foreground"
                href="/"
              >
                <Logo className="text-default-500 size-14 md:size-20"></Logo>
                <span className="text-default-400 font-bold text-2xl md:text-4xl -m-4">
                  KIARI
                </span>
                <p className="parrafo p-2">KIARI SHOP HOUSE J&L</p>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </section>
      <Footer />
    </>
  );
}
