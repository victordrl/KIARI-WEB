import { Button } from "@heroui/react";
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

export default function BanerLayout({
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
      className={`min-h-[30vh] w-full flex px-12 py-16 bg-cover bg-center bg-no-repeat ${bg_color}`}
      style={{
        backgroundImage: bg_imag ? `url(${bg_imag})` : "",
      }}
    >
      {/* children o contenido por defecto */}
      {children ? (
        children
      ) : (
        <div className="flex flex-col md:w-2/3 w-full ml-12 gap-4 ">
          <span className="subtitulo">{mini_titulo}</span>
          <span className="titulo">{titulo}</span>
          <p className="parrafo">{text}</p>
          <div className="flex gap-3 mt-8 ">
            <Button
              color="primary"
              variant="faded"
              as={Link}
              href={href_1}
              endContent={<Logo className="sm:size-5 size-4" />}
            >
              Descubre
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
