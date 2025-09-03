import { useEffect, useState } from "react";

import { StarRating } from "@/components/star_raiting";
import { Image } from "@heroui/react";

interface Props {
  star: number;
  mensaje?: string;
  nombre?: string;
  estado?: string;
  lugar?: string;
  img?: string;
  bg_color?: string;
}

export default function Testimonio1({ bg_color }: Props) {
  const [testimonios, setTestimonios] = useState<Props[]>([]);
  const [index, setIndex] = useState(0);

  // cargar JSON
  useEffect(() => {
    fetch("/data/testimonios.json")
      .then((res) => res.json())
      .then((data) => {
        setTestimonios(Object.values(data));
      });
  }, []);

  // rotar cada 5 segundos
  useEffect(() => {
    if (testimonios.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonios.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonios]);

  if (testimonios.length === 0) return <p>Cargando testimonios...</p>;

  const { star, mensaje, nombre, estado, lugar, img } = testimonios[index];

  return (
    <section className="w-full h-fit py-12">
      <div
        className={`container flex flex-col-reverse justify-center items-center sm:flex-row p-8 mx-auto ${bg_color}`}
      >
        <Image isBlurred src={img} width={600} className="" />
        {/* resenia */}
        <div className="sm:p-12 p-4 my-auto">
          {/* estrellas */}
          <StarRating rating={star} classN="size-6" />
          <figure className="flex flex-col py-2">
            {/* mensaje */}
            <blockquote className="w-full subtitulo text-2xl font-semibold">
              <span className="font-extrabold text-3xl">"</span>
              {mensaje}
              <span className="font-extrabold text-3xl">"</span>
            </blockquote>
            {/* persona */}
            <div className="flex items-center py-4 px-2 gap-4">
              <div className="flex flex-col w-full ">
                <p className="parrafo text-lg">{nombre}</p>
                <cite className="minititulo text-medium">{estado}</cite>
              </div>
              <span className="subtitulo text-medium w-full ">{lugar}</span>
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
