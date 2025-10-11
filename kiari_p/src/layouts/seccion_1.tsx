import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

// props para rrellenar la interface

interface Buttons {
  label?: string;
  icon?: React.ReactNode;
  href?: string;
  variant?: string;
  color?: string;
  css?: string;
}
interface Contenido {
  img?: string;
  min_title?: string;
  sub_title?: string;
  main_text?: string;
  sub_text?: string;
  href?: string;
  btn?: Buttons;
}
interface Props {
  bg_img?: string;
  css?: string;
  btn?: Buttons[];
  min_title?: string;
  main_title?: string;
  main_text?: string;
  sub_text?: string;
  contenido?: Contenido[];
  size?: ["sm", "md", "lg", "xl"];
  format?: ["row", "col"];
  orientacion?: ["r", "l", "m"];
  btn_orientacion?: ["r", "l", "m"];
}

export default function Seccion_1({
  bg_img,
  size,
  css,
  min_title,
  main_title,
  main_text,
  sub_text,
  btn,
  contenido,
  format,
  btn_orientacion,
  orientacion,
}: Props) {
  return (
    <section
      className={`flex bg-cover bg-center bg-no-repeat w-full seccion-${size} ${css}`}
      style={{
        backgroundImage: bg_img ? `url(${bg_img})` : "",
        backgroundBlendMode: "overlay",
      }}
    ></section>
  );
}
