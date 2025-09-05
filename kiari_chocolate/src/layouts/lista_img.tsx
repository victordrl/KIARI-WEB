import {
  Accordion,
  AccordionItem,
  Card,
  Listbox,
  ListboxItem,
} from "@heroui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { recetas } from "@/config/recetas_confi";

interface Pasos {
  subtitulo: string;
  descripcion: string;
}

interface Props {
  titulo: string;
  descripcion: string;
  ingredientes: string[];
  pasos: Pasos[];
  img: string;
}

export default function ListaImg({
  img = "default.png",
  titulo = "Titular",
  descripcion = "descripcion",
  ingredientes = ["ingrediente 1", "ingrediente 2", "ingredientes 3"],
  pasos = [
    { descripcion: "uno", subtitulo: "uno" },
    { descripcion: "dos", subtitulo: "dos" },
  ],
}: Props) {
  const { id } = useParams<{ id: string }>();
  const receta = recetas[id as keyof typeof recetas];

  const [selectedKeys, setSelectedKeys] = useState(new Set(["0"]));
  const [selectedKeyslist, setSelectedKeysList] = useState(new Set(["0"]));

  if (!receta) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-xl font-bold">Receta no encontrada</h2>
      </div>
    );
  }

  useEffect(() => {}, []);

  return (
    <section className="p-4">
      <div className="flex flex-col h-full md:flex-row justify-center ">
        {/* Columna izquierda (texto) */}
        <Card
          shadow="sm"
          radius="sm"
          className="bg-default-100 md:m-8 md:mr-0 md:rounded-r-none rounded-b-none"
        >
          <div className="sm:p-12 max-w-4xl p-4 gap-4">
            <h1 className="titulo my-2">{titulo}</h1>
            <p className="parrafo my-4">{descripcion}</p>

            {/* Ingredientes */}
            <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
            <Listbox
              className="p-12"
              disallowEmptySelection
              aria-label="Lista de ingredientes"
              selectedKeys={selectedKeyslist}
              selectionMode="multiple"
              onSelectionChange={(keys) =>
                setSelectedKeysList(
                  keys === "all" ? new Set() : (keys as Set<string>)
                )
              }
            >
              {ingredientes.map((ing, index) => (
                <ListboxItem key={index}>{ing}</ListboxItem>
              ))}
            </Listbox>

            {/* Pasos en Accordion */}
            <h2 className="text-xl font-semibold mb-2">Preparación</h2>
            <Accordion
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys as any}
            >
              {pasos.map((paso, idx) => (
                <AccordionItem
                  key={String(idx)}
                  aria-label={`Paso ${idx + 1}`}
                  title={paso.subtitulo}
                >
                  {paso.descripcion}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Card>

        {/* Columna derecha (imagen) */}
        <div className="sm:min-w-80 h-full md:p-8 md:pl-0">
          <img
            alt={titulo}
            src={img}
            className="w-full h-screen object-cover rounded-t-none md:rounded-l-none rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
