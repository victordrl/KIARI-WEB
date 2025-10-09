import { Card } from "@heroui/react";

interface Props {
  bg_img?: string;
  bg_color?: string;
  titulo?: string;
  text?: string;
  href_1?: string;
  btn?: string;
  icon?: React.ReactNode;
}

export default function Hero2({
  bg_img,
  bg_color = "bg-transparent",
  titulo = "Titular",
  text = "Lore extendido",
}: Props) {
  return (
    <main className="md:h-80 h-40">
      <Card
        radius="none"
        shadow="none"
        className={`flex-grow justify-center items-center bg-cover md:bg-center bg-bottom bg-no-repeat ${bg_color}`}
        style={{
          backgroundImage: bg_img ? `url(${bg_img})` : "",
          backgroundBlendMode: "overlay",
        }}
      >
        <Card
          isBlurred
          shadow="md"
          radius="sm"
          className="flex flex-col items-center justify-center lg:w-3/6 md:w-4/6 w-5/6 min-h-36 gap-4 md:py-16 md:mt-28 mt-12 z-50"
        >
          <div className="text-center  items-center justify-center max-w-fit md:p-10 p-4">
            <h1 className="titulo sm:m-0 my-4">
              <span className="">{titulo}</span>
            </h1>
            <p className="parrafo max-w-xl sm:mt-6 mt-2 font-semibold">
              {text}
            </p>
          </div>
        </Card>
      </Card>
    </main>
  );
}
