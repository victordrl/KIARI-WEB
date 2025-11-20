export interface Buttons {
  label?: string;
  icon?: React.ReactNode;
  href?: string;
  variant?: string;
  color?: string;
  size?: string;
  radius?: string;
  css?: string;
}

export interface Contenido {
  img?: string;
  min_title?: string;
  sub_title?: string;
  main_text?: string;
  href?: string;
  btn?: Buttons;
}

export interface Props {
  bg_img?: string; //imagen de fondo
  css?: string; //css de la seccion
  btns?: Buttons[]; //lista de botones
  main_slogan?: string; //slogan vistoso baner etc (h1)
  sub_slogan?: string; //slogan vistoso baner etc (h2)
  min_title?: string; //pequña palabra clave (p)
  main_title?: string; //titulo del texto (h1)
  min_text?: string; //texto resumen (p)
  main_text?: string; //texto principal (p)
  sub_text?: string; //texto complementario (p)
  contenido?: Contenido[]; //lista de sub titlos y parrafos extra (h2 y h3)
  cont_order?: boolean; //ordena star end contenido
  btn_position?: boolean; // botones dentro o fuera del contenedor
  img?: string; // imagen o svg extra de acompañamiento
  btn_disable?: boolean; //habilitar botones
  img_color?: boolean; //invertir img o svg extra de acompañamiento
  size_i?: number; //largo de la seccion
  format_i?: number; //formato vertical o horizontal de la seccion
  order_i?: number; // orientacion izq - centrado - der
  btn_order_i?: number; // orientacion botones izq - centrado - der
}

// export const size = ["seccion-sm", "seccion-md", "seccion-lg", "seccion-xl"];
// export const format = ["format-row", "format-col"];
// export const orientacion = ["orientacion-r", "orientacion-m", "orientacion-l"];
// export const btn_orientacion = [
//   "btn_orientacion-r",
//   "btn_orientacion-m",
//   "btn_orientacion-l",
// ];
