import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Image } from "@heroui/react";

interface TripticoProps {
  img?: string;
  subtitulo?: string;
  texto?: string;
  href?: string;
}

interface Props {
  children?: React.ReactNode;
  contenido?: TripticoProps[];
  bg_color?: string;
  mini_titulo?: string;
  titulo?: string;
  text?: string;
  id?: string;
  cantidad?: number;
}

export default function Triptico5({
  children,
  bg_color = "",
  mini_titulo = "",
  contenido = [
    {
      img: "/default.png",
      subtitulo: "Subtitulo",
      texto: "hola que tal",
      href: "",
    },
    {
      img: "/default.png",
      subtitulo: "Subtitulo",
      texto: "hola que tal",
      href: "",
    },
    {
      img: "/default.png",
      subtitulo: "Subtitulo",
      texto: "hola que tal",
      href: "",
    },
    {
      img: "/default.png",
      subtitulo: "Subtitulo",
      texto: "hola que tal",
      href: "",
    },
  ],
  titulo = "",
  text = "",
  id = "",
  cantidad = 3,
}: Props) {
  return (
    <section id={id} className="flex justify-center h-fit w-full">
      {/* contenedor */}
      <Card
        radius="none"
        shadow="none"
        className={`flex flex-grow flex-col items-center justify-around h-fit lg:py-16 lg:px-24 md:p-8 p-4 bg-transparent ${bg_color}`}
      >
        {children ? (
          children
        ) : (
          <>
            {" "}
            {/* encabezado */}
            <div className="flex flex-col justify-center items-center">
              <span className="minititulo">{mini_titulo}</span>
              <h2 className="titulo text-center">{titulo}</h2>
              <p className="parrafo text-center max-w-xl ">{text}</p>
            </div>
            {/* triptico con 1 a 3 cartas */}
            <div
              className={`grid grid-cols-2 jutify-center sm:grid-cols-${cantidad} pt-12 gap-4`}
            >
              {contenido.map((item, index) => {
                return (
                  <div key={index} className="lg:p-16 md:p-4 p-2">
                    <Card
                      key={index}
                      isPressable
                      isBlurred
                      shadow="none"
                      className="cursor-pointer rounded-full"
                    >
                      <CardBody className="p-0 rounded-full">
                        <Image
                          alt={`img_triptico_${index}`}
                          isZoomed
                          className="w-full object-cover rounded-full"
                          radius="sm"
                          shadow="sm"
                          src={item.img}
                          width="100%"
                        />
                      </CardBody>
                      <CardFooter className="text-small flex-col justify-between">
                        <h4 className="subtitulo">{item.subtitulo}</h4>
                        <p className="parrafo text-center text-default-500">
                          {item.texto}
                        </p>
                        <p className="">{item.href}</p>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </Card>
    </section>
  );
}
