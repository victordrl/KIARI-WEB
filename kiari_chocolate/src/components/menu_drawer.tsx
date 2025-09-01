import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@heroui/drawer";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaFish } from "react-icons/fa";
import { Link } from "@heroui/link";
import { useDisclosure } from "@heroui/hooks";

export default function MenuDrawer() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Link onPress={onOpen}>Open Drawer</Link>
      <Drawer
        isOpen={isOpen}
        motionProps={{
          variants: {
            enter: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.3,
              },
            },
            exit: {
              x: 100,
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
          {(onClose) => (
            <>
              <DrawerHeader className="flex flex-col gap-1">
                Custom Motion Drawer
              </DrawerHeader>
              <DrawerBody>
                <p>This drawer has custom enter/exit animations.</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
              </DrawerBody>
              <DrawerFooter></DrawerFooter>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
