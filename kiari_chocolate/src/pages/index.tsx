import { Link, Button, Card } from "@heroui/react";
import { FaFish, FaShoppingCart } from "react-icons/fa";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { giftDefault } from "@/config/site";

export default function IndexPage() {
  return (
    <DefaultLayout backgroundUrl={giftDefault}>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <Card
          isBlurred
          radius="sm"
          shadow="sm"
          className="inline-block text-center bg-default/5 justify-center max-w-lg p-4"
        >
          <span className={title()}>
            Descubre la frescura del pescado&nbsp;
          </span>
          <span className={` ${title({ color: "yellow" })} font-extrabold`}>
            KIARI&nbsp;
          </span>
          <br />
          <div className={subtitle({ class: "mt-4" })}>
            En KIARI, ofrecemos pescado de alta calidad, 100% natural y libre de
            conservantes. Nuestros productos, como el pisillo, nuggets y
            medallones, son ideales para disfrutar de una experiencia
            gastronómica única.
          </div>
        </Card>

        <div className="flex gap-3 mt-8 ">
          <Button
            color="primary"
            variant="faded"
            endContent={<FaShoppingCart className="sm:size-5 size-4" />}
          >
            Comprar
          </Button>
          <Button color="primary" variant="shadow">
            Conocenos
          </Button>
        </div>
      </section>
    </DefaultLayout>
  );
}
