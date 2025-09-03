import { IconType } from "react-icons";
import {
  Link,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@heroui/react";

import { Logo } from "@/components/icons";

interface TripticoProps {
  icon?: IconType;
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
}

export default function Triptico1({
  children,
  bg_color = "foreground",
  mini_titulo = "minititulo",
  contenido = [
    { subtitulo: "Subtitulo", texto: "hola que tal", href: "/" },
    { subtitulo: "Subtitulo", texto: "hola que tal", href: "/" },
    { subtitulo: "Subtitulo", texto: "hola que tal", href: "/" },
  ],
  titulo = "Titular",
  text = "Lore expandido",
}: Props) {
  return (
    <section className="flex justify-center min-h-screen w-full py-12">
      {/* contenedor */}
      <Card
        shadow="none"
        className={`container flex flex-grow flex-col items-center justify-around h-fit gap-4 p-5 ${bg_color}`}
      >
        {children ? (
          children
        ) : (
          <>
            {/* encabezado */}
            <div className="flex flex-col justify-center items-center gap-5">
              <span className="minititulo">{mini_titulo}</span>
              <h2 className="titulo text-center">{titulo}</h2>
              <p className="parrafo text-center max-w-xl ">{text}</p>
            </div>
            {/* triptico con 1 a 3 cartas */}
            <div className="flex md:flex-row items-center flex-col w-full lg:p-12 lg:gap-8 px-8 md:my-4 my-12 gap-4">
              {contenido.map((item, index) => {
                const Icon = item.icon || Logo;
                return (
                  <Card
                    key={index}
                    radius="none"
                    shadow="sm"
                    className={`md:w-1/3  h-[450px]`}
                  >
                    <CardHeader className="justify-center">
                      <Icon className="size-32 mb-4 text-secondary" />
                    </CardHeader>
                    <CardBody className="flex flex-col items-center text-center p-6">
                      <h4 className="subtitulo">{item.subtitulo}</h4>
                      <p className="text-default-500">{item.texto}</p>
                    </CardBody>
                    <CardFooter className="justify-center">
                      {/* botones */}
                      <Button
                        size="lg"
                        color="primary"
                        variant="light"
                        as={Link}
                        href={item.href}
                        endContent={<Logo className="sm:size-6 size-5" />}
                      >
                        Mas
                      </Button>
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
