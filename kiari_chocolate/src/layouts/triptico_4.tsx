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

export default function Triptico3({
  children,
  bg_color = "",
  mini_titulo = "",
  contenido = [
    { subtitulo: "Subtitulo", texto: "hola que tal", href: "/" },
    { subtitulo: "Subtitulo", texto: "hola que tal", href: "/" },
    { subtitulo: "Subtitulo", texto: "hola que tal", href: "/" },
  ],
  titulo = "",
  text = "",
  id = "",
  cantidad = 2,
}: Props) {
  return (
    <section id={id} className="flex justify-center h-fit w-full pt-10">
      {/* contenedor */}
      <Card
        radius="none"
        shadow="none"
        className={`flex flex-grow flex-col items-center justify-around h-fit p-8 bg-transparent ${bg_color}`}
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
              className={`gap-2 grid grid-cols-1 jutify-center sm:grid-cols-${cantidad} pt-12`}
            >
              {contenido.map((item, index) => {
                return (
                  <Card
                    key={index}
                    isPressable
                    shadow="sm"
                    radius="sm"
                    as={Link}
                    to={item.href}
                    className="cursor-pointer"
                  >
                    <CardBody className="overflow-visible p-0">
                      <Image
                        alt={`img_triptico_${index}`}
                        className="w-full object-cover"
                        radius="sm"
                        shadow="sm"
                        src={item.img}
                        width="100%"
                      />
                    </CardBody>
                    <CardFooter className="text-small flex-col justify-between">
                      <h4 className="subtitulo">{item.subtitulo}</h4>
                      <p className="text-default-500">{item.texto}</p>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </>
        )}
      </Card>
    </section>
  );
}
