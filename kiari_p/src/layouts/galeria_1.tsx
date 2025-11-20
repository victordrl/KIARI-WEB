import { TECarousel, TECarouselItem } from "tw-elements-react";
import "animate.css";

import * as I from "@/types/inteerface";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

// clases condicionales
export const size = ["seccion-sm", "seccion-md", "seccion-lg", "seccion-xl"];
export const format = ["format-row", "format-col", "format-mid"];
export const order = ["order-l", "order-m", "order-r"];
export const btn_order = ["btn_order-l", "btn_order-m", "btn_order-r"];

export default function CarouselWithIndicators({
  carrusel,
}: {
  carrusel: I.Props[];
}) {
  return (
    <section className={`w-full h-fit margen`}>
      <TECarousel showIndicators ride="carousel">
        <div className=" w-full sm:h-[80vh] h-[65vh] mx-auto overflow-hidden after:clear-both after:block after:content-['']">
          {carrusel.map((panel, index) => (
            <TECarouselItem
              key={index}
              itemID={index + 1}
              className="relative float-left hidden w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none -mr-[100%] "
            >
              <div
                className={`relative h-full w-full animate__animated animate__zoomIn ${panel.css || ""}`}
              >
                {/* Background image */}
                {panel.bg_img && (
                  <img
                    src={panel.bg_img}
                    data-twe-animation-init
                    data-twe-animation-start="onHover"
                    data-twe-animation="[zoom-in_1s_ease-in-out]"
                    className="absolute kenburns-top inset-0 h-full w-full object-cover object-left "
                  />
                )}

                {/* Overlay de contenido */}
                <div
                  className={`absolute flex justify-between inset-0 p-4  sm:flex-row flex-col bg-black/20 `}
                >
                  {/* TITULOS */}
                  <div
                    className={`flex flex-col w-3/5 ${panel.btn_position ? "" : "justify-around"} p-2`}
                  >
                    <div
                      className={`${order[panel.order_i!]} lg:mt-24 md:mt-18 sm:mt-10`}
                    >
                      {panel.min_title && (
                        <span className="min-title">{panel.min_title}</span>
                      )}
                      {panel.main_title && (
                        <h1 className="main-title pb-4">{panel.main_title}</h1>
                      )}
                      {panel.main_slogan && (
                        <h1 className="main-slogan">{panel.main_slogan}</h1>
                      )}
                      {panel.sub_slogan && (
                        <h2 className="sub-slogan pb-4">{panel.sub_slogan}</h2>
                      )}

                      {/* TEXTOS */}
                      {panel.min_text && (
                        <p className="min-text">{panel.min_text}</p>
                      )}
                      {panel.main_text && (
                        <p className="main-text">{panel.main_text}</p>
                      )}
                    </div>
                    {/* BOTONES */}
                    <div
                      className={`flex gap-4 mt-4 ${btn_order[panel.btn_order_i!]}`}
                    >
                      {panel.btns
                        ? panel.btns.map((item, index) => {
                            return (
                              <Button
                                key={index}
                                as={Link}
                                to={item.href}
                                isDisabled={panel.btn_disable}
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
                  </div>
                  <div className={`flex flex-col justify-end items-center`}>
                    {panel.img && (
                      <img
                        src={panel.img}
                        alt="img_logo"
                        className={`logo-responsive ${panel.img_color ? "dark:invert" : ""}`}
                      ></img>
                    )}
                    {panel.sub_text && (
                      <p className="sub-text mb-4">{panel.sub_text}</p>
                    )}
                  </div>
                </div>
              </div>
            </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </section>
  );
}
