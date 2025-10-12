import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

// props para rrellenar la interface

interface Buttons {
  label?: string;
  icon?: React.ReactNode;
  href: string;
  variant: string;
  color: string;
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
  cont_order?: boolean;
  size_i?: number;
  format_i?: number;
  orientacion_i?: number;
  btn_orientacion_i?: number;
}

const size = ["seccion-sm", "seccion-md", "seccion-lg", "seccion-xl"];
const format = ["format-row", "format-col"];
const orientacion = ["orientacion-r", "orientacion-m", "orientacion-l"];
const btn_orientacion = [
  "btn_orientacion-r",
  "btn_orientacion-m",
  "btn_orientacion-l",
];

export default function Seccion_1({
  bg_img,
  size_i = 0,
  css,
  min_title,
  main_title,
  main_text,
  sub_text,
  btn,
  contenido,
  cont_order = true,
  format_i = 0,
  btn_orientacion_i = 0,
  orientacion_i = 0,
}: Props) {
  return (
    <section
      className={`flex items-center bg-cover bg-center bg-no-repeat w-full ${size[size_i]} ${css}`}
      style={{
        backgroundImage: bg_img ? `url(${bg_img})` : "",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col mx-auto w-fit my-6">
        <div className={`container mx-auto ${format[format_i]}`}>
          <div
            className={`format-col gap-2 ${orientacion[orientacion_i]} margen`}
          >
            {min_title ? <span className="min_title">{min_title}</span> : ""}
            {main_title ? <h1 className="maiin_title">{main_title}</h1> : ""}
            {sub_text ? <p className="sub_text">{sub_text}</p> : ""}
            {main_text && format_i == 1 ? (
              <p className="main_text">{main_text}</p>
            ) : (
              ""
            )}
            {cont_order ? (
              <div className="format-row">
                {contenido
                  ? contenido.map((item, index) => {
                      return (
                        <div key={index} className="format-col justify-between">
                          <div>
                            {item.min_title ? (
                              <span className="min_title">{min_title}</span>
                            ) : (
                              ""
                            )}
                            {item.sub_title ? (
                              <h1 className="maiin_title">{main_title}</h1>
                            ) : (
                              ""
                            )}
                            {item.sub_text ? (
                              <p className="sub_text">{sub_text}</p>
                            ) : (
                              ""
                            )}
                            {item.main_text ? (
                              <p className="main_text">{main_text}</p>
                            ) : (
                              ""
                            )}
                          </div>
                          {item.btn ? (
                            <div className={`flex gap-2 w-full`}>
                              <Button
                                key={index}
                                as={Link}
                                to={item.btn.href}
                                size="sm"
                                variant={(item.btn.variant as any) || "solid"}
                                color={(item.btn.color as any) || "primary"}
                                endContent={item.btn.icon}
                                className={item.btn.css}
                              >
                                {item.btn.label}
                              </Button>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })
                  : ""}
              </div>
            ) : (
              ""
            )}
          </div>
          {main_text && format_i == 0 ? (
            <div
              className={`format-col my-auto  ${orientacion[orientacion_i]} margen`}
            >
              <p>{main_text}</p>
              {!cont_order ? (
                <div className="format-col">
                  {contenido
                    ? contenido.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="format-col justify-between"
                          >
                            <div>
                              {item.min_title ? (
                                <span className="min_title">{min_title}</span>
                              ) : (
                                ""
                              )}
                              {item.sub_title ? (
                                <h1 className="maiin_title">{main_title}</h1>
                              ) : (
                                ""
                              )}
                              {item.sub_text ? (
                                <p className="sub_text">{sub_text}</p>
                              ) : (
                                ""
                              )}
                              {item.main_text ? (
                                <p className="main_text">{main_text}</p>
                              ) : (
                                ""
                              )}
                            </div>
                            {item.btn ? (
                              <div className={`flex gap-2 w-full`}>
                                <Button
                                  key={index}
                                  as={Link}
                                  to={item.btn.href}
                                  size="sm"
                                  variant={(item.btn.variant as any) || "solid"}
                                  color={(item.btn.color as any) || "primary"}
                                  endContent={item.btn.icon}
                                  className={item.btn.css}
                                >
                                  {item.btn.label}
                                </Button>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      })
                    : ""}
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className={`flex gap-2 w-full margen ${btn_orientacion[btn_orientacion_i]}`}
        >
          {btn
            ? btn.map((item, index) => {
                return (
                  <Button
                    key={index}
                    as={Link}
                    to={item.href}
                    variant={(item.variant as any) || "solid"}
                    color={(item.color as any) || "primary"}
                    endContent={item.icon}
                    className={item.css}
                  >
                    {item.label}
                  </Button>
                );
              })
            : ""}
        </div>
      </div>
    </section>
  );
}
