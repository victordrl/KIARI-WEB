import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
} from "@heroui/drawer";
import { Link, Button, useDisclosure } from "@heroui/react";

import { RiArrowDownSLine } from "react-icons/ri";
import { siteConfig } from "@/config/site";

export default function MenuDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Link onPress={onOpen} color="secondary">
        Explora <RiArrowDownSLine className="text-2xl" />
      </Link>
      <Drawer
        backdrop="opaque"
        placement="top"
        className="top-16"
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.3,
              },
            },
            exit: {
              y: -100,
              opacity: 0,
              transition: {
                duration: 0.3,
              },
            },
          },
        }}
        onOpenChange={onOpenChange}
      >
        <DrawerContent>
          <div className="flex flex-wrap">
            <div className="">
              <DrawerHeader className="min_title">
                <span className="hidden md:block">Nuestros&nbsp;</span>
                Productos
              </DrawerHeader>
              <DrawerBody>
                {siteConfig.exploraItems.prod.map((item) => (
                  <Button
                    key={item.kay}
                    isDisabled={item.state}
                    as={Link}
                    radius="none"
                    color="default"
                    size="lg"
                    href={item.href}
                    variant="light"
                    className="justify-start font-light text-sm"
                  >
                    <div className="min_subtitle">
                      {item.label}
                      <br />
                      <span className="min_msm">{item.mensaje}</span>
                    </div>
                  </Button>
                ))}
              </DrawerBody>
              <DrawerHeader className="min_title">
                <span className="hidden md:block">Mas&nbsp;</span>
                Información
              </DrawerHeader>
              <DrawerBody>
                {siteConfig.exploraItems.info.map((item) => (
                  <Button
                    key={item.kay}
                    isDisabled={item.state}
                    as={Link}
                    radius="none"
                    color="default"
                    size="lg"
                    href={item.href}
                    variant="light"
                    className="justify-start font-light text-sm"
                  >
                    <div className="min_subtitle">
                      {item.label}
                      <br />
                      <span className="min_msm">{item.mensaje}</span>
                    </div>
                  </Button>
                ))}
              </DrawerBody>
            </div>
            <div className="">
              <DrawerHeader className="min_title">
                <span className="hidden md:block">Articulos&nbsp;</span>
                Destacados
              </DrawerHeader>
              <DrawerBody>
                {siteConfig.exploraItems.arti.map((item) => (
                  <Button
                    key={item.kay}
                    isDisabled={item.state}
                    as={Link}
                    radius="none"
                    color="default"
                    size="lg"
                    href={item.href}
                    variant="light"
                    className="justify-start font-light text-sm"
                  >
                    <div className="min_subtitle">
                      {item.label}
                      <br />
                      <span className="min_msm">{item.mensaje}</span>
                    </div>
                  </Button>
                ))}
              </DrawerBody>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
