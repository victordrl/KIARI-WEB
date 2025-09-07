import { Button, Card, Input, Textarea } from "@heroui/react";
import { RiMailFill, RiPhoneFill } from "react-icons/ri";
import { useState } from "react";

interface Props {
  bg_img?: string;
  bg_color?: string;
}

export default function ContactForm({
  bg_img = "/default.png",
  bg_color = "bg-default-700",
}: Props) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      const response = await fetch("https://formspree.io/f/xrbarpnz", {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset(); // limpiar inputs
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <main
      className="h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={bg_img ? { backgroundImage: `url(${bg_img})` } : {}}
    >
      <Card
        isBlurred
        shadow="sm"
        className={`mx-auto sm:min-w-96 w-full max-w-md rounded-lg p-6 shadow-md ${bg_color}`}
      >
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-extrabold text-center text-orange-400">
            KIARI
          </h1>

          <Input name="name" isClearable isRequired placeholder="Nombre" />
          <Input name="asunto" isClearable isRequired placeholder="Asunto" />
          <Textarea
            name="message"
            isRequired
            placeholder="Escribe tu mensaje..."
          />

          <div className="flex flex-col items-center space-y-2 text-white">
            <h2 className="text-lg font-semibold">Contacto</h2>
            <div className="flex items-center gap-2">
              <RiPhoneFill className="size-5" />
              <p className="text-sm">+58 0414 9884153</p>
            </div>
            <div className="flex items-center gap-2">
              <RiMailFill className="size-5" />
              <p className="text-sm">victor.rojas17.09@gmail.com</p>
            </div>
          </div>

          <Button
            type="submit"
            variant="solid"
            radius="sm"
            color="primary"
            className="w-full"
          >
            Enviar
          </Button>

          {status === "success" && (
            <p className="text-green-400 text-center">
              Mensaje enviado con éxito
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">Ocurrió un error </p>
          )}
        </form>
      </Card>
    </main>
  );
}
