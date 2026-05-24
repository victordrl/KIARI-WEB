"use client";

import { Button } from "@heroui/react";
import * as I from "@/types/interface";

export default function SecProducto1({
  bg_img,
  css,
  main_slogan,
  sub_slogan,
  min_title,
  main_text,
  sub_text,
  min_text,
  btns,
  img,
  img_color = true,
  btn_disable = false,
}: I.Props) {
  return (
    <section
      className={`flex items-center bg-cover bg-center bg-no-repeat w-full seccion-xl ${css}`}
      style={{
        backgroundImage: bg_img ? `url(${bg_img})` : "",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="flex flex-col justify-between h-full w-full mx-auto margen">
        <div className="flex flex-col items-center text-center gap-4">
          {min_title ? <span className="min-title">{min_title}</span> : ""}
          {main_slogan ? <h1 className="main-slogan">{main_slogan}</h1> : ""}
          {sub_slogan ? <h2 className="sub-slogan">{sub_slogan}</h2> : ""} 
        </div>

        <div className="flex flex-col items-center gap-6">
          {img ? (
            <div className="flex justify-center w-full">
              <img
                className={`logo-responsive object-cover ${img_color ? "dark:invert" : ""}`}
                src={img}
                alt="imagen_componente"
              />
            </div>
          ) : (
            ""
          )}

          {btns ? (
            <div className="flex gap-3 w-full justify-center">
              {btns.map((item, index) => (
                <Button
                  key={index}
                  as="a"
                  href={item.href}
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
              ))}
            </div>
          ) : (
            ""
          )}

          {min_text ? <p className="main-text text-center max-w-3xl">{min_text}</p> : ""}
          {sub_text ? <p className="sub-text text-center max-w-2xl">{sub_text}</p> : ""}
        </div>
      </div>
    </section>
  );
}
