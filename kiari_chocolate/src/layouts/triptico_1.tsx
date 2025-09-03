import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import { Logo } from "@/components/icons";
import { Link } from "react-router-dom";

interface TripticoProps {
  img?: string;
  subtitulo?: string;
  texto?: string;
}

interface Props {
  children?: React.ReactNode;
  contenido?: TripticoProps[];
  bg_color?: string;
  mini_titulo?: string;
  titulo?: string;
  text?: string;
  href_1?: string;
  href_2?: string;
}

export default function Triptico_1({
  children,
  bg_color = "foreground",
  contenido = [
    { img: "default.png", subtitulo: "Subtitulo", texto: "hola que tal" },
    { img: "default.png", subtitulo: "Subtitulo", texto: "hola que tal" },
    { img: "default.png", subtitulo: "Subtitulo", texto: "hola que tal" },
  ],
  titulo = "Titular",
  text = "Lore expandido",
  mini_titulo = "minititulo",
  href_1 = "/",
  href_2 = "/",
}: Props) {
  return (
    <section className="flex justify-center min-h-screen w-full py-12">
      {/* contenedor */}
      <div
        className={`container flex flex-grow flex-col items-center justify-around gap-4 p-5 ${bg_color}`}
      >
        {children ? (
          children
        ) : (
          <>
            {/* encabezado */}
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="minititulo">{mini_titulo}</span>
              <h2 className="titulo text-center">{titulo}</h2>
              <p className="parrafo text-center max-w-xl">{text}</p>
            </div>
            {/* triptico con 1 a 3 imagenes */}
            <div className="flex md:flex-row items-center flex-col w-full lg:p-12 lg:gap-8 px-8 md:-my-4 my-12 gap-4">
              {contenido.map((item, index) => (
                <Card key={index} shadow="sm">
                  <CardBody>
                    <Image
                      alt={`img_triptico_${index}`}
                      className="w-full object-contain"
                      radius="sm"
                      shadow="lg"
                      src={item.img}
                    />
                  </CardBody>
                  <CardFooter className="flex flex-col gap-4">
                    <h3 className="subtitulo text-center">{item.subtitulo}</h3>
                    <p className="parrafo text-center">{item.texto}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {/* botones */}
            <div className="flex gap-3">
              <Button
                color="primary"
                variant="ghost"
                as={Link}
                href={href_1}
                endContent={<Logo className="sm:size-5 size-4" />}
              >
                Mas
              </Button>
              <Button
                color="primary"
                variant="light"
                as={Link}
                href={href_2}
                endContent={<Logo className="sm:size-5 size-4" />}
              >
                Contactanos
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
