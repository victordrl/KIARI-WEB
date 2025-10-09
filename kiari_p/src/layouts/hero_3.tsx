import { Card } from "@heroui/react";

interface Props {
  bg_img?: string;
  bg_color?: string;
  titulo?: string;
  text?: string;
}

export default function Hero3({
  bg_img,
  bg_color = "dark:bg-default/55 bg-default/5",
  titulo = "Titular",
  text = "Lore extendido",
}: Props) {
  return (
    <main className="h-fit">
      <Card
        radius="none"
        shadow="sm"
        className={` h-[50%] w-full px-6 py-16 bg-cover md:bg-center bg-bottom bg-no-repeat ${bg_color}`}
        style={{
          backgroundImage: bg_img ? `url(${bg_img})` : "",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="flex flex-col gap-4  md:py-4">
          <div className="max-w-fit md:p-10 p-4">
            <h1 className="titulo sm:m-0">
              <span className=" ">{titulo}</span>
            </h1>
            <p className="parrafo max-w-xl sm:mt-6 mt-2 font-semibold">
              {text}
            </p>
          </div>
        </div>
      </Card>
    </main>
  );
}
