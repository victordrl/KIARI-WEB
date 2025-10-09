import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import { Link } from "react-router-dom";

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
  href_1?: string;
  href_2?: string;
  btn_text_1?: string;
  btn_text_2?: string;
  icon_1?: React.ReactNode;
  icon_2?: React.ReactNode;
}

export default function Triptico2({
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
  btn_text_1 = "",
  btn_text_2 = "",
  icon_1,
  icon_2,
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

            <div className="grid grid-cols-1 md:grid-cols-3 pt-12 gap-3">
              {contenido.map((item, index) => (
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
                    <p className="text-center text-default-500">{item.texto}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
            {/* botones */}
            {btn_text_1 && btn_text_2 ? (
              <div className="flex gap-3">
                <Button
                  color="primary"
                  variant="ghost"
                  as={Link}
                  to={href_1}
                  endContent={icon_1}
                >
                  {btn_text_1}
                </Button>
                <Button
                  color="primary"
                  variant="light"
                  as={Link}
                  to={href_2}
                  endContent={icon_2}
                >
                  {btn_text_2}
                </Button>
              </div>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </section>
  );
}
