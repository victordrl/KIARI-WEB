import { Button, Image, Card } from "@heroui/react";
import { Logo } from "@/components/icons";
import { Link } from "react-router-dom";
import { IconType } from "react-icons";

interface Props {
  children?: React.ReactNode;
  icon?: IconType;
  img?: string;
  bg_color?: string;
  titulo?: string;
  text?: string;
  href_1?: string;
  href_2?: string;
}

export default function InfoImg({
  children,
  icon: Icon,
  img = "default.png",
  bg_color = "default",
  titulo = "Titular",
  text = "Lore expndido",
  href_1 = "/",
  href_2 = "/",
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
          <div className="my-auto max-w-3xl p-8">
            {Icon && (
              <Icon className="lg:size-40 md:size-36 sm:size-24 size-20" />
            )}
            <h2 className="titulo my-4">{titulo}</h2>
            <p className="parrafo">{text}</p>
            {/* botones */}
            <div className="flex gap-3 my-8">
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
          </div>
          <div className="min-w-fit min-h-fit my-auto">
            <Image
              isBlurred
              isZoomed
              src={img}
              radius="sm"
              shadow="sm"
              className="lg:w-[850px] lg:h-[850px] md:w-[480px] md:h-[700px] w-[100px] h-[100px] p-2"
            />
          </div>
        </Card>
      )}
    </section>
  );
}
