"use client";

import dynamic from "next/dynamic";
import type { Props } from "@/types/interface";

const Galeria_1Dynamic = dynamic(
  () => import("@/sections/galeria_1").then((mod) => ({ default: mod.default })),
  {
    ssr: false,
    loading: () => (
      <section className="w-full h-fit margen">
        <div className="w-full sm:h-[80vh] h-[65vh] mx-auto bg-default-100 animate-pulse" />
      </section>
    ),
  }
);

export default function Galeria_1Client({ carrusel }: { carrusel: Props[] }) {
  return <Galeria_1Dynamic carrusel={carrusel} />;
}
