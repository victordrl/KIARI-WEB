import { Button } from "@heroui/react";
import { title, subtitle } from "@/components/primitives";
import { Logo } from "@/components/icons";
import { Link } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  bg_imag?: string;
  bg_color?: string;
  mini_titulo?: string;
  titulo?: string;
  text?: string;
  href?: string;
}

export default function BanerLayout({
  children,
  bg_imag,
  bg_color = "bg-base",
  mini_titulo = "mini titulo",
  titulo = "Titular",
  text = "Lore relleno",
  href = "/",
}: Props) {
  return (
    <section
      className={`container mx-auto max-w-4xl px-12 py-16 flex-grow bg-cover bg-center bg-no-repeat ${bg_color}`}
      style={{
        backgroundImage: bg_imag ? `url(${bg_imag})` : "",
      }}
    >
      {children ? (
        children
      ) : (
        <div className="flex flex-col gap-4">
          <span className={subtitle()}>{mini_titulo}</span>
          <span className={title()}>{titulo}</span>
          <p>{text}</p>
          <div className="flex gap-3 mt-8 ">
            <Button
              color="primary"
              variant="faded"
              as={Link}
              href={href}
              endContent={<Logo className="sm:size-5 size-4" />}
            >
              Comprar
            </Button>
            <Button color="primary" variant="shadow">
              Conocenos
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
