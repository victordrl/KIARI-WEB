import { Button, Image, Card, CardHeader, CardBody } from "@heroui/react";
import { Logo } from "@/components/icons";
import { Link } from "react-router-dom";

interface Cartas {
  subtitulo?: string;
  texto?: string;
}

interface Props {
  children?: React.ReactNode;
  img?: string;
  minititulo?: string;
  contenido?: Cartas[];
  bg_color?: string;
  titulo?: string;
  text?: string;
  icon_1?: React.ReactNode;
  icon_2?: React.ReactNode;
  btn_text__1?: string;
  btn_text__2?: string;
  href_1?: string;
  href_2?: string;
}

export default function InfoImg2({
  children,
  img = "default.png",
  minititulo = "minititulo",
  contenido = [
    { subtitulo: "subtitulo", texto: "Hola que tal" },
    { subtitulo: "subtitulo", texto: "Hola que tal" },
  ],
  bg_color = "default",
  titulo = "Titular",
  text = "Lore expndido",
  href_1 = "/",
  href_2 = "/",
  btn_text__1 = "Mas",
  btn_text__2 = "Mas",
  icon_1,
  icon_2,
}: Props) {
  return (
    <section className="">
      {children ? (
        children
      ) : (
        <Card
          radius="none"
          shadow="sm"
          className={`flex flex-col sm:flex-row justify-between w-full p-4 ${bg_color}`}
        >
          {/* contenido */}
          <div className="my-auto sm:w-1/2 w-full p-8">
            <span className="minititulo">{minititulo}</span>
            <h2 className="titulo my-4">{titulo}</h2>
            <p className="parrafo">{text}</p>

            {/* cartas de info*/}
            <div className="flex gap-4 p-5 pl-0 -m-3">
              {contenido.map((item, index) => (
                <Card key={index} shadow="none" className="w-full">
                  <CardHeader className="subtitulo">
                    {item.subtitulo}
                  </CardHeader>
                  <CardBody className="parrafo">{item.texto}</CardBody>
                </Card>
              ))}
            </div>
            {/* botones */}
            <div className="flex gap-3 my-8">
              <Button
                size="lg"
                color="primary"
                variant="solid"
                as={Link}
                href={href_1}
                endContent={icon_1}
              >
                {btn_text__1}
              </Button>
              <Button
                size="lg"
                color="secondary"
                variant="light"
                as={Link}
                href={href_2}
                endContent={icon_2}
              >
                {btn_text__2}
              </Button>
            </div>
          </div>
          <div className="min-w-fit min-h-fit my-auto">
            <Image
              isBlurred
              isZoomed
              src={img}
              radius="sm"
              shadow="none"
              className="lg:w-[600px] lg:h-[600px] md:w-[480px] md:h-[700px] p-2"
            />
          </div>
        </Card>
      )}
    </section>
  );
}
