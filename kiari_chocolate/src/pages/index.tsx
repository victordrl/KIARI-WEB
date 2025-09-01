import { Button, Card } from "@heroui/react";
import { FaShoppingCart } from "react-icons/fa";

import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { baner_1, giftDefault } from "@/config/site";
import BanerLayout from "@/layouts/baner";
import Footer from "@/layouts/footer";

export default function IndexPage() {
  return (
    <>
      <DefaultLayout backgroundUrl={giftDefault}>
        <section className="flex flex-col items-center justify-center gap-4 py-12 md:py-20">
          <Card
            isBlurred
            radius="sm"
            shadow="sm"
            className="inline-block text-center bg-default/5 justify-center lg:max-w-2xl max-w-lg p-4"
          >
            <span className={title()}>
              Descubre la frescura del pescado&nbsp;
            </span>
            <span className={` ${title({ color: "yellow" })} font-extrabold`}>
              KIARI&nbsp;
            </span>
            <br />
            <div className={subtitle({ class: "mt-4" })}>
              En KIARI, ofrecemos pescado de alta calidad, 100% natural y libre
              de conservantes. Nuestros productos, como el pisillo, nuggets y
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
      <BanerLayout
        bg_imag={baner_1.bg_img}
        titulo={baner_1.titulo}
        mini_titulo={baner_1.mini_titulo}
        text={baner_1.text}
        href={baner_1.href}
      />
      <Footer />
    </>
  );
}
