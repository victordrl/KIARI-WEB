import { useGsapHorizontalScroll } from "@/components/useGsapHorizontalScroll";

export interface Seccion2Props {
  title?: string;
  subtitle?: string;
  galleries: string[][];
}

export default function Seccion_2({
  title,
  subtitle,
  galleries,
}: Seccion2Props) {
  // activar animación solo en las galerías
  useGsapHorizontalScroll(".demo-gallery");

  return (
    <div className="w-full overflow-hidden py-20">
      {/* Título */}
      {title && (
        <h1 className="text-center text-5xl font-bold mb-6 tracking-tight">
          {title}
        </h1>
      )}

      {subtitle && (
        <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Galerías dinámicas */}
      {galleries.map((gallery, idx) => (
        <section key={idx} className="demo-gallery py-4 w-full overflow-hidden">
          <ul className="wrapper flex">
            {gallery.map((img, i) => (
              <li
                key={i}
                className="flex-shrink-0 w-[clamp(300px,60vw,700px)] pr-4"
              >
                <img
                  src={img || "/default.png"}
                  alt=""
                  className="w-full h-auto object-cover rounded-xl shadow-md bg-gray-200"
                />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
