import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

// props para rrellenar la interface
interface Props {
  children?: React.ReactNode;
  bg_imag?: string;
  bg_color?: string;
  mini_titulo?: string;
  titulo?: string;
  text?: string;
  btn_text_1?: string;
  btn_text_2?: string;
  href_1?: string;
  href_2?: string;
  icon_1?: React.ReactNode;
  icon_2?: React.ReactNode;
}

export default function Baner1({
  children,
  bg_imag,
  bg_color = "bg-base",
  mini_titulo = "",
  titulo = "Titular",
  text = "Lore relleno",
  btn_text_1 = "mas",
  btn_text_2 = "mas",
  icon_1,
  icon_2,
  href_1 = "/",
  href_2 = "/",
}: Props) {
  return (
    <section
      className={`flex bg-cover bg-center bg-no-repeat bg-default-100/15 w-full sm:min-h-[30vh] min-h-[45vh] sm:px-12 sm:py-16 px-6 py-8 ${bg_color}`}
      style={{
        backgroundImage: bg_imag ? `url(${bg_imag})` : "",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* children o contenido por defecto */}
      {children ? (
        children
      ) : (
        <div className="flex flex-col justify-between w-2/3 sm:ml-12 gap-4">
          <div className="flex flex-col justify-between gap-4">
            <span className="minititulo">{mini_titulo}</span>
            <span className="titulo text-white">{titulo}</span>
            <p className="parrafo text-white font-semibold">{text}</p>
          </div>
          <div className="flex gap-3 mt-8 ">
            <Button
              color="primary"
              variant="faded"
              as={Link}
              to={href_1}
              endContent={icon_1}
            >
              {btn_text_1}
            </Button>
            <Button
              color="primary"
              variant="shadow"
              as={Link}
              to={href_2}
              endContent={icon_2}
            >
              {btn_text_2}
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
