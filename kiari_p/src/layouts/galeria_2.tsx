import { useGridZoomOut } from "@/hooks/galeria_zoom_out";
import * as I from "@/types/inteerface";

export default function Galeria_2(prop: I.Props) {
  useGridZoomOut();

  return (
    <section className="galeria-container w-screen h-[400vh] relative">
      {/* GRID PRINCIPAL */}
      <div className="galeria-grid absolute top-0 left-0 w-[70vw] h-[60vw] mx-[15vw]">
        {/* Items (alrededor del central) */}
        {prop.galleries?.map((item) => (
          <div key={item.id} className={`grid-layer absolute ${item.position}`}>
            <div
              className={`grid-item size-${item.size} absolute bg-cover bg-center`}
              style={{ backgroundImage: `url(${item.url})` }}
            />
          </div>
        ))}

        {/* Pieza central (video) */}
        <div className="grid-layer absolute inset-0 flex items-center justify-center">
          <div className="grid-item size-xl opacity-0 center-block">
            <video
              src={prop.video}
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </div>
    </section>
  );
}
