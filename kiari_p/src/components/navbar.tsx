"use client";

import { useEffect, useRef, useState } from "react";
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

import dynamic from "next/dynamic";
const ThemeSwitch = dynamic(
  () => import("@/components/theme-switch").then((mod) => ({ default: mod.ThemeSwitch })),
  { ssr: false, loading: () => <div className="w-6 h-6" /> }
);

import { Logo } from "@/components/icons";
import {
  RiArrowRightSLine,
  RiTiktokFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

import { siteConfig } from "@/data/site";

export default function MiNavbar() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (diff > 0) {
        setIsVisible(false);
      } else if (diff < 0) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <HeroUINavbar
      isBordered
      isBlurred
      maxWidth="xl"
      position="sticky"
      className={`transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* nav izquierda */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        {/* logo y titulo */}
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Logo />
            <span className="hidden sm:block font-bold">KIARI</span>
          </Link>
        </NavbarBrand>

        {/* nav lista de items paginas */}
        <div className="hidden sm:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={item.href}>
              {index < siteConfig.navItems.length - 1 ? (
                <Link
                  isDisabled={item.state}
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
                <Link
                  isDisabled={item.state}
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium"
                  )}
                  color="secondary"
                  href={item.href}
                >
                  {item.label}
                </Link>
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
          <Link
            className="px-2"
            isExternal
            href={siteConfig.links.facebook}
            title="tiktok"
            isDisabled={true}
          >
            <RiTiktokFill className="text-default-500 size-6" />
          </Link>
          <ThemeSwitch className="md:!block hidden" />
        </NavbarItem>
        {/* boton */}
        <NavbarItem className="hidden lg:block">
          <Button
            isExternal
            as={Link}
            className="text-sm font-semibold text-default-600 bg-default-100"
            href="/venta"
            endContent={<RiArrowRightSLine className="text-primary size-6" />}
            variant="flat"
          >
            Comprar
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* nav derecha sm */}
      <NavbarContent className=" md:!hidden flex pl-4" justify="end">
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
