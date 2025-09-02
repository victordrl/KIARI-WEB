import { Button, Card } from "@heroui/react";
import { FaShoppingCart } from "react-icons/fa";

import { Logo } from "@/components/icons";
import { Link } from "react-router-dom";
import { title, subtitle } from "@/components/primitives";

interface Props {
  children?: React.ReactNode;
  bg_img?: string;
  bg_color?: string;
  titulo?: string;
  text?: string;
  href_1?: string;
  href_2?: string;
}

export default function Inicio({
  children,
  bg_img,
  bg_color = "foreground",
  titulo = "Titular",
  text = "Lore extendido",
  href_1 = "/",
  href_2 = "/",
}: Props) {
  return (
    <main
      className={`flex-grow h-[80vh] w-full px-6 pt-16 bg-cover bg-center bg-no-repeat bg-default-100/30 ${bg_color}`}
      style={{
        backgroundImage: bg_img ? `url(${bg_img})` : "",
        backgroundBlendMode: "overlay",
      }}
    >
      <section className="flex flex-col items-center justify-center gap-4  md:py-40">
        {/* children o contenido por defecto */}
        {children ? (
          children
        ) : (
          <>
            <Card
              isBlurred
              radius="sm"
              shadow="sm"
              className="text-center bg-default/5 items-center justify-center max-w-fit md:p-8 p-4"
            >
              <h1 className="titulo sm:m-0 my-4">
                <span className="sm:text-nowrap">{titulo}</span>
                <br />
                <div className="sm:mt-4 mt-2"></div>
                <span className="text-orange-400 font-extrabold">KIARI</span>
              </h1>
              <p className="parrafo max-w-xl sm:mt-6 mt-2">{text}</p>
            </Card>

            <div className="flex gap-3 mt-8 ">
              <Button
                color="primary"
                variant="faded"
                as={Link}
                href={href_1}
                endContent={<FaShoppingCart className="sm:size-4 size-4" />}
              >
                Comprar
              </Button>
              <Button
                color="primary"
                variant="shadow"
                as={Link}
                href={href_2}
                endContent={<Logo className="sm:size-5 size-5" />}
              >
                Conocenos
              </Button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
