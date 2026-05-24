"use client";

import { Button } from "@heroui/react";
import * as I from "@/types/interface";
import Frame from "@/components/frame";
import { div } from "framer-motion/client";

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
      className={`flex items-center bg-cover bg-center bg-no-repeat w-full h-full seccion-xl ${css}`}
      style={{
       // backgroundImage: bg_img ? `url(${bg_img})` : "",
        backgroundBlendMode: "overlay",
      }}
    >
        <div className="flex flex-col justify-between h-full w-full mx-auto margen text-foreground">
            <div className="flex flex-col gap-4">
                <div className="flex items-center">
                    <samp className="h-0.5 w-10 bg-black"></samp>{min_title ? <span className="min-title px-2">{min_title}</span> : ""}
                </div>
                {main_slogan ? <h1 className="main-slogan">{main_slogan}</h1> : ""}
                {sub_slogan ? <h2 className="sub-slogan">{sub_slogan}</h2> : ""}
                {min_text ? <p className="min-text max-w-2xl">{min_text}</p> : ""}
            </div>
            <div className="flex h-full py-8">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex flex-col gap-6">
                        <p className="main-text pb-2">Nuestro pisillo artesanal es la forma más versátil de disfrutar el sábalo. Desmenuzado, sazonado con especias tradicionales venezolanas y listo para acompañar tus arepas, empanadas o cualquier plato</p>
                        <div className="min-text w-full">
                            <p>Presentacion <span className="font-bold text-primary">250g</span></p>
                            <div className="h-[1px] bg-default w-full"/>
                        </div>
                        <div className="min-text w-full">
                            <p>Conservacion <span className="font-bold text-primary">Refrigerado -4`C</span></p>
                            <div className="h-[1px] bg-default w-full"/>
                        </div>
                        <div className="min-text w-full">
                            <p>Vida util<span className="font-bold text-primary">1 año</span></p>
                            <div className="h-[1px] bg-default w-full"/>
                        </div>
                        <div className="min-text w-full">
                            <p>Ingredientes<span className="font-bold text-primary">Pescado frescoa</span></p>
                            <div className="h-[1px] bg-default w-full"/>
                        </div>
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
                        {main_text ? <p className="main-text max-w-3xl">{main_text}</p> : ""}
                        {sub_text ? <p className="sub-text  max-w-2xl">{sub_text}</p> : ""}
                        {btns ? (
                            <div className="flex gap-3 w-full justify-start">
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
                     </div>
                </div>
                <Frame size="lg" color="secondary" className=" p-0">
                    <img src={bg_img} alt="" className="w-full h-full object-cover" />
                </Frame>
            </div>
        </div>
    </section>
  );
}
