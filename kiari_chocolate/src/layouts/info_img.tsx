import { Button, Image, Card } from "@heroui/react";
import { Link } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  img?: string;
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

export default function InfoImg({
  children,
  img = "default.png",
  bg_color = "default",
  titulo = "Titular",
  text = "Lore expndido",
  href_1 = "/",
  href_2 = "/",
  icon_1,
  icon_2,
  btn_text__1,
  btn_text__2,
}: Props) {
  return (
    <section className="">
      {children ? (
        children
      ) : (
        <Card
          radius="none"
          shadow="sm"
          className={`flex flex-col sm:flex-row justify-around w-full lg:p-20 py-14 px-4 ${bg_color}`}
        >
          {/* contenido */}
          <div className="my-auto max-w-2xl p-8">
            <h2 className="titulo my-4">{titulo}</h2>
            <p className="parrafo">{text}</p>
            {/* botones */}
            <div className="flex gap-3 my-8">
              <Button
                color="primary"
                variant="solid"
                as={Link}
                to={href_1}
                endContent={icon_1}
              >
                {btn_text__1}
              </Button>
              <Button
                color="primary"
                variant="light"
                as={Link}
                to={href_2}
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
              className="lg:w-[600px] lg:h-[600px] md:w-[400px] md:h-[500px] p-2"
            />
          </div>
        </Card>
      )}
    </section>
  );
}
