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
  bg_img?: string;
  css?: string;
  btns?: Buttons[];
  main_slogan?: string;
  sub_slogan?: string;
  min_title?: string;
  main_title?: string;
  min_text?: string;
  main_text?: string;
  sub_text?: string;
  contenido?: Contenido[];
  cont_order?: boolean;
  btn_position?: boolean;
  img?: string;
  btn_disable?: boolean;
  img_color?: boolean;
  size_i?: number;
  format_i?: number;
  order_i?: number;
  btn_order_i?: number;
}

// export const size = ["seccion-sm", "seccion-md", "seccion-lg", "seccion-xl"];
// export const format = ["format-row", "format-col"];
// export const orientacion = ["orientacion-r", "orientacion-m", "orientacion-l"];
// export const btn_orientacion = [
//   "btn_orientacion-r",
//   "btn_orientacion-m",
//   "btn_orientacion-l",
// ];
