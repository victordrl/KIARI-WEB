import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";

import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import MenuDrawer from "./menu_drawer";
import { Logo } from "@/components/icons";
import {
  RiArrowRightSLine,
  // RiTiktokFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

export default function MiNavbar() {
  // const searchInput = (
  //   <Input
  //     aria-label="Search"
  //     classNames={{
  //       inputWrapper: "bg-default-100",
  //       input: "text-sm",
  //     }}
  //     endContent={
  //       <Kbd className="hidden lg:inline-block" keys={["command"]}>
  //         K
  //       </Kbd>
  //     }
  //     labelPlacement="outside"
  //     placeholder="Search..."
  //     startContent={
  //       <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
  //     }
  //     type="search"
  //   />
  // );

  return (
    <HeroUINavbar isBordered isBlurred maxWidth="xl" position="sticky">
      {/* nav izquierda */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {/* logo y titulo */}
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/k"
          >
            <Logo />
            <span className="font-bold text-orange-400">KIARI</span>
          </Link>
        </NavbarBrand>

        {/* nav lista de items paginas */}
        <div className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={item.href}>
              {index < siteConfig.navItems.length - 1 ? (
                <Link
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <MenuDrawer />
              )}
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      {/* nav derecha */}
      <NavbarContent className=" sm:flex basis-1/5 sm:basis-full" justify="end">
        {/* iconos */}
        <NavbarItem className="px-4 sm:flex">
          <Link
            className="px-2"
            isExternal
            href={siteConfig.links.ig}
            title="instagram"
          >
            <RiInstagramFill className="text-default-500 size-6" />
          </Link>
          <Link
            className="px-2"
            isExternal
            href={siteConfig.links.facebook}
            title="facebook"
          >
            <RiFacebookBoxFill className="text-default-500 size-6" />
          </Link>
          <ThemeSwitch className=" hidden sm:block" />
        </NavbarItem>
        {/* boton */}
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-semibold text-default-600 bg-default-100"
            href="/cont"
            endContent={<RiArrowRightSLine className="text-primary size-6" />}
            variant="flat"
          >
            Contactar
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* nav derecha sm */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* menu hamburgesa */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 0 || index === 6
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "secondary"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
}
