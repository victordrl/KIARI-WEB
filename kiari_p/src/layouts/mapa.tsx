import { Card } from "@heroui/react";

interface Props {
  mini_titulo?: string;
  titulo?: string;
  texto?: string;
  bg_color?: string;
}

export default function Mapa({
  mini_titulo = "minititulo",
  titulo = "Titular",
  texto = "Lore extendido",
  bg_color = "bg-foregraund",
}: Props) {
  return (
    <section className="p-4 h-full">
      <Card
        shadow="sm"
        radius="none"
        className={`flex flex-col items-center justify-between w-full p-4 ${bg_color}`}
      >
        {/* contenido */}
        <div className="my-auto flex flex-col items-center justify-center max-w-3xl p-8">
          <span className="minititulo text-center">{mini_titulo}</span>
          <h2 className="titulo my-4 text-center">{titulo}</h2>
          <p className="parrafo text-center">{texto}</p>
        </div>
        {/* mapa */}
        <div className="w-full h-80 my-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.1186395053762!2d-62.79286272750507!3d8.255470066977008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbff51615f975f%3A0x1a6d451bd5022ab!2sKiari%20Shop%20House%20J%26L%2C%20C.A!5e0!3m2!1ses!2sve!4v1757104901995!5m2!1ses!2sve"
            loading="lazy"
            className="w-full h-full rounded-2xl"
          ></iframe>
        </div>
      </Card>
    </section>
  );
}
// import { Button, Image, Card } from "@heroui/react";

// import { Link } from "react-router-dom";
// import { IconType } from "react-icons";

// interface Props {
//   children?: React.ReactNode;
//   icon?: IconType;
//   img?: string;
//   bg_color?: string;
//   titulo?: string;
//   text?: string;
//   icon_1?: React.ReactNode;
//   icon_2?: React.ReactNode;
//   btn_text__1?: string;
//   btn_text__2?: string;
//   href_1?: string;
//   href_2?: string;
// }

// export default function InfoImg1({
//   children,
//   icon: Icon,
//   img = "default.png",
//   bg_color = "default",
//   titulo = "Titular",
//   text = "Lore expndido",
// }: Props) {
//   return (
//     <section className="">
//       <Card
//         radius="none"
//         className={`flex flex-col sm:flex-row justify-between w-full p-4 ${bg_color}`}
//       >
//         {/* contenido */}
//         <div className="my-auto max-w-3xl p-8">
//           <h2 className="titulo my-4">{titulo}</h2>
//           <p className="parrafo">{text}</p>
//         </div>
//         {/* mapa */}
//         <div className="min-w-fit min-h-fit my-auto">
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987.1186395053762!2d-62.79286272750507!3d8.255470066977008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbff51615f975f%3A0x1a6d451bd5022ab!2sKiari%20Shop%20House%20J%26L%2C%20C.A!5e0!3m2!1ses!2sve!4v1757104901995!5m2!1ses!2sve"
//             width="600"
//             height="450"
//             loading="lazy"
//           ></iframe>
//         </div>
//       </Card>
//     </section>
//   );
// }
