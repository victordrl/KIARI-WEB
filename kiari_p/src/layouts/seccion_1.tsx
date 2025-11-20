import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import * as I from "@/types/inteerface";

// clases condicionales
export const size = ["seccion-sm", "seccion-md", "seccion-lg", "seccion-xl"];
export const format = ["format-row", "format-col", "format-mid"];
export const order = ["order-l", "order-m", "order-r"];
export const btn_order = ["btn_order-l", "btn_order-m", "btn_order-r"];

export default function Seccion_1({
  bg_img,
  size_i = 0,
  css,
  main_slogan,
  sub_slogan,
  min_title,
  main_title,
  sub_text,
  main_text,
  min_text,
  btns,
  contenido,
  img,
  img_color = true,
  cont_order = true,
  btn_position = true,
  btn_disable = false,
  format_i = 0,
  btn_order_i = 0,
  order_i = 0,
}: I.Props) {
  return (
    //seccion principal
    <section
      className={`flex items-center bg-cover bg-center bg-no-repeat w-full margen ${size[size_i]} ${css}`}
      style={{
        backgroundImage: bg_img ? `url(${bg_img})` : "",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* contenedor unico */}
      <div className={`flex h-full mx-auto ${format[format_i]} flex-col`}>
        {/* primera parte */}
        <div className={`container mx-auto ${format[format_i]}`}>
          <div className={`format-col gap-2 ${order[order_i]} md:margen`}>
            {/* información segun el formato */}
            {min_title ? (
              <span className="min-title w-full">{min_title}</span>
            ) : (
              ""
            )}
            {main_title ? (
              <h1 className="main-title w-full">{main_title}</h1>
            ) : (
              ""
            )}
            {main_slogan ? (
              <h2 className="main-slogan w-full">{main_slogan}</h2>
            ) : (
              ""
            )}
            {format_i == 2 ? (
              <>
                {sub_slogan ? (
                  <p className="sub-slogan w-full">{sub_slogan}</p>
                ) : (
                  ""
                )}
                {min_text ? <p className="min-text w-full">{min_text}</p> : ""}
              </>
            ) : (
              ""
            )}
            {format_i == 1 ? (
              <>
                {sub_slogan ? (
                  <p className="sub-slogan w-full">{sub_slogan}</p>
                ) : (
                  ""
                )}
                {min_text ? <p className="min-text w-full">{min_text}</p> : ""}
                {main_text ? (
                  <p className="main-text w-full">{main_text}</p>
                ) : (
                  ""
                )}
                {sub_text ? <p className="sub-text w-full">{sub_text}</p> : ""}
              </>
            ) : (
              ""
            )}
            {/* sub contenido */}
            {cont_order ? (
              <div
                className={`format-row w-full ${order_i == 0 ? "justify-start" : order_i == 2 ? "justify-end" : "justify-center"} sm:pt-4`}
              >
                {contenido
                  ? contenido.map((item, index) => {
                      return (
                        <div key={index} className="format-col justify-between">
                          <div>
                            {item.min_title ? (
                              <span className="sub-text">{item.min_title}</span>
                            ) : (
                              ""
                            )}
                            {item.sub_title ? (
                              <h3 className="min-text">{item.sub_title}</h3>
                            ) : (
                              ""
                            )}
                            {item.main_text ? (
                              <p className="main-text">{item.main_text}</p>
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
                                isDisabled={btn_disable}
                                size={(item.btn.size as any) || "sm"}
                                radius={(item.btn.radius as any) || "none"}
                                variant={(item.btn.variant as any) || "faded"}
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
            {/* botones adentro */}
            {btn_position ? (
              <div
                className={`flex gap-3 w-full margen ${btn_order[btn_order_i]}`}
              >
                {btns
                  ? btns.map((item, index) => {
                      return (
                        <Button
                          key={index}
                          as={Link}
                          to={item.href}
                          isDisabled={btn_disable}
                          size={(item.size as any) || "md"}
                          radius={(item.radius as any) || "none"}
                          variant={(item.variant as any) || "faded"}
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
            ) : (
              ""
            )}
          </div>
          {main_text && format_i == 0 ? (
            <div
              className={`format-col w-full my-auto  ${order[order_i]} margen`}
            >
              {sub_slogan ? (
                <h2 className="sub-slogan w-full">{sub_slogan}</h2>
              ) : (
                ""
              )}
              {min_text ? <p className="min-text">{min_text}</p> : ""}
              <p className="main-text">{main_text}</p>
              {sub_text ? <p className="sub-text">{sub_text}</p> : ""}
              {!cont_order ? (
                <div className="format-col w-full">
                  {contenido
                    ? contenido.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="format-col justify-between"
                          >
                            <div>
                              {item.min_title ? (
                                <span className="min-title">{min_title}</span>
                              ) : (
                                ""
                              )}
                              {item.sub_title ? (
                                <h3 className="min-text">{item.sub_title}</h3>
                              ) : (
                                ""
                              )}
                              {item.main_text ? (
                                <p className="main-text">{item.main_text}</p>
                              ) : (
                                ""
                              )}
                            </div>
                            {item.btn ? (
                              <div>
                                <Button
                                  key={index}
                                  as={Link}
                                  to={item.btn.href}
                                  isDisabled={btn_disable}
                                  size={(item.btn.size as any) || "sm"}
                                  radius={(item.btn.radius as any) || "none"}
                                  variant={(item.btn.variant as any) || "faded"}
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
        {/* segunda parte */}
        <div className={`${order[order_i]}`}>
          {/* información segun el formato */}
          {format_i == 2 ? (
            <>
              <div className="flex mx-auto w-full h-44 overflow-hidden justify-center items-center">
                {img ? (
                  <img
                    className={`logo-responsive object-cover ${img_color ? "dark:invert" : ""}`}
                    src={img}
                    alt="imagen_componente"
                  />
                ) : (
                  ""
                )}
              </div>
              {/* botones adentro */}
              {!btn_position ? (
                <div
                  className={`flex gap-3 w-full margen ${btn_order[btn_order_i]}`}
                >
                  {btns
                    ? btns.map((item, index) => {
                        return (
                          <Button
                            key={index}
                            as={Link}
                            to={item.href}
                            isDisabled={btn_disable}
                            size={(item.size as any) || "md"}
                            radius={(item.radius as any) || "none"}
                            variant={(item.variant as any) || "faded"}
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
              ) : (
                ""
              )}
              {main_text ? <p className="main-text">{main_text}</p> : ""}
              {sub_text ? <p className="sub-text">{sub_text}</p> : ""}
            </>
          ) : (
            ""
          )}
        </div>
        {/* botones afuera */}
        {!btn_position && format_i != 2 ? (
          <div className={`flex gap-3 w-full margen ${btn_order[btn_order_i]}`}>
            {btns
              ? btns.map((item, index) => {
                  return (
                    <Button
                      key={index}
                      as={Link}
                      to={item.href}
                      isDisabled={btn_disable}
                      size={(item.size as any) || "md"}
                      radius={(item.radius as any) || "none"}
                      variant={(item.variant as any) || "faded"}
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
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
