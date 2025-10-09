import { Button, Image, Card } from "@heroui/react";

import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface Props {
  children?: React.ReactNode;
  icon?: IconType;
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

export default function InfoImg1({
  children,
  icon: Icon,
  img = "default.png",
  bg_color = "default",
  titulo = "Titular",
  text = "Lore expndido",
  href_1 = "/",
  href_2 = "/",
  btn_text__1 = "",
  btn_text__2 = "",
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
          className={`flex flex-col sm:flex-row justify-between w-full p-4 ${bg_color}`}
        >
          {/* contenido */}
          <div className="my-auto max-w-3xl p-8">
            {Icon && (
              <Icon className="text-default-700 lg:size-40 md:size-36 sm:size-24 size-20" />
            )}
            <h2 className="titulo my-4">{titulo}</h2>
            <p className="parrafo">{text}</p>
            {/* botones */}
            {btn_text__1 && btn_text__2 ? (
              <div className="flex gap-3 my-8">
                <Button
                  color="primary"
                  variant="ghost"
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
            ) : (
              ""
            )}
          </div>
          <div className="min-w-fit min-h-fit my-auto">
            <Image
              isBlurred
              isZoomed
              src={img}
              radius="sm"
              shadow="none"
              className="lg:w-[720px] lg:h-[720px] md:w-[480px] md:h-[700px] p-2"
            />
          </div>
        </Card>
      )}
    </section>
  );
}
