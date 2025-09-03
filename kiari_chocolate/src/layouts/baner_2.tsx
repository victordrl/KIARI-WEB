import { Button, Card } from "@heroui/react";
import { Logo } from "@/components/icons";
import { Link } from "react-router-dom";

// props para rrellenar la interface
interface Props {
  children?: React.ReactNode;
  bg_imag?: string;
  bg_color?: string;
  mini_titulo?: string;
  titulo?: string;
  text?: string;
  href_1?: string;
  href_2?: string;
}

export default function Baner1({
  children,
  bg_imag,
  bg_color = "bg-base",
  mini_titulo = "mini titulo",
  titulo = "Titular",
  text = "Lore relleno",
  href_1 = "/",
  href_2 = "/",
}: Props) {
  return (
    <section
      className={`flex bg-cover bg-center bg-no-repeat bg-default-100 w-full sm:min-h-[30vh] min-h-[45vh] sm:px-12 sm:py-16 px-6 py-8 ${bg_color}`}
      style={{
        backgroundImage: bg_imag ? `url(${bg_imag})` : "",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* children o contenido por defecto */}
      {children ? (
        children
      ) : (
        <div className="flex flex-col w-full sm:ml-12">
          <div className="flex flex-col justify-between gap-4">
            <span className="minititulo">{mini_titulo}</span>
            <span className="titulo">{titulo}</span>
            <p className="parrafo font-semibold">{text}</p>
          </div>
          <div className="flex justify-end gap-3 mt-8">
            <Button
              color="primary"
              variant="faded"
              as={Link}
              href={href_1}
              endContent={<Logo className="sm:size-5 size-4" />}
            >
              Ordenar
            </Button>
            <Button
              color="primary"
              variant="shadow"
              as={Link}
              href={href_2}
              endContent={<Logo className="sm:size-5 size-4" />}
            >
              Contactanos
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
