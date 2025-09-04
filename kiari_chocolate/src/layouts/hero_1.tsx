import { Button, Card, Image } from "@heroui/react";
import { FaShoppingCart } from "react-icons/fa";

import { Logo } from "@/components/icons";
import { Link } from "react-router-dom";

interface Props {
  bg_img?: string;
  bg_color?: string;
  titulo?: string;
  text?: string;
  href_1?: string;
}

export default function Hero1({
  bg_img,
  bg_color = "dark:bg-default/55 bg-default/5",
  titulo = "Titular",
  text = "Lore extendido",
  href_1 = "/",
}: Props) {
  return (
    <main className="max-h-[500px]">
      <Card
        radius="none"
        shadow="sm"
        className={`flex-grow h-screen w-full px-6 pt-16 bg-cover md:bg-center bg-bottom bg-no-repeat ${bg_color}`}
        style={{
          backgroundImage: bg_img ? `url(${bg_img})` : "",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-4  md:py-16">
          <div className="text-center  items-center justify-center max-w-fit md:p-10 p-4">
            <h1 className="titulo sm:m-0 my-4">
              <span className=" text-white ">{titulo}</span>
            </h1>
            <p className="parrafo max-w-xl sm:mt-6 mt-2 font-semibold text-white">
              {text}
            </p>
          </div>

          <div className="flex gap-3 mt-8 ">
            <Button
              color="primary"
              variant="faded"
              as={Link}
              to={href_1}
              endContent={<Logo className="sm:size-5 size-5" />}
            >
              Conocenos
            </Button>
          </div>
        </div>
      </Card>
    </main>
  );
}
