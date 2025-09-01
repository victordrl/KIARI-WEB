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
        backdrop="transparent"
        placement="top"
        className="top-16"
        size="3xl"
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
          <div className="flex">
            <div className=" w-1/3 m-2">
              <DrawerHeader className="lg:text-lg text-sm font-semibold -mb-3">
                <span className="hidden md:block">Nuestros&nbsp;</span>
                Productos
              </DrawerHeader>
              <DrawerBody>
                {siteConfig.exploraItems.prod.map((item) => (
                  <Button
                    as={Link}
                    radius="none"
                    color="default"
                    size="lg"
                    href={item.href}
                    variant="light"
                    startContent={
                      <item.icon className="text-default-500 size-5 min-w-5" />
                    }
                    className="justify-start font-light text-sm"
                  >
                    <div className="font-normal">
                      {item.label}
                      <br />
                      <span className="text-xs font-extralight">
                        {item.mensaje}
                      </span>
                    </div>
                  </Button>
                ))}
              </DrawerBody>
            </div>
            <div className=" w-1/3 m-2">
              <DrawerHeader className="lg:text-lg text-sm font-semibold -mb-3">
                <span className="hidden md:block">Mas&nbsp;</span>
                Información
              </DrawerHeader>
              <DrawerBody>
                {siteConfig.exploraItems.info.map((item) => (
                  <Button
                    as={Link}
                    radius="none"
                    color="default"
                    size="lg"
                    href={item.href}
                    variant="light"
                    startContent={
                      <item.icon className="text-default-500  size-5 min-w-5" />
                    }
                    className="justify-start font-light text-sm"
                  >
                    <div className="font-normal">
                      {item.label}
                      <br />
                      <span className="text-xs font-extralight">
                        {item.mensaje}
                      </span>
                    </div>
                  </Button>
                ))}
              </DrawerBody>
            </div>
            <div className=" w-1/3 m-2">
              <DrawerHeader className="lg:text-lg text-sm font-semibold -mb-3">
                <span className="hidden md:block">Articulos&nbsp;</span>
                Destacados
              </DrawerHeader>
              <DrawerBody>
                {siteConfig.exploraItems.arti.map((item) => (
                  <Button
                    as={Link}
                    radius="none"
                    color="default"
                    size="lg"
                    href={item.href}
                    variant="light"
                    startContent={
                      <item.icon className="text-default-500  size-5 min-w-5" />
                    }
                    className="justify-start font-light text-sm"
                  >
                    <div className="font-normal">
                      {item.label}
                      <br />
                      <span className="text-xs font-extralight">
                        {item.mensaje}
                      </span>
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
