import { Link } from "@heroui/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@heroui/react";

import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { MiNavbar } from "@/components/navbar";
import { Divider } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

import {
  RiArrowRightSLine,
  RiTiktokFill,
  RiInstagramFill,
} from "react-icons/ri";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <MiNavbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
        {children}
      </main>
      <footer className="flex flex-col justify-between items-center w-full bg-primary-400 dark:bg-primary-300">
        <div className="flex md:flex-row flex-col justify-around items-center w-full p-2 md:gap-0 gap-5">
          <div className="gap-3 max-w-fit ">
            <Link
              className="flex flex-col items-center gap-1"
              color="foreground"
              href="/"
            >
              <Logo className="size-14 md:size-20"></Logo>
              <span className="font-bold text-2xl md:text-4xl">KIARI</span>
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-between gap-7">
              {siteConfig.footerItem.map((item) => (
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
              ))}
            </div>
          </div>
          <div className="flex md:flex-col flex-row justify-center gap-4 ">
            <Link
              className="font-mono text-default-600 px-2 gap-1"
              isExternal
              href={siteConfig.links.ig}
              title="instagram"
            >
              <RiInstagramFill className="text-default-700 size-6" />
              Instagram
            </Link>
            <Link
              className="font-mono text-default-600 px-2 gap-1"
              isExternal
              href={siteConfig.links.tiktok}
              title="tiktok"
            >
              <RiTiktokFill className="text-default-700 size-6" />
              Tiktok
            </Link>
          </div>
        </div>
        <Divider className="w-[50%]" />
        <p className="text-center text-sm text-default-50-500 mt-4">
          © 2025 Kiari Shop House J&amp;L. Todos los derechos reservados.
          <br />
          Hecho por <span className="font-bold">Pilon</span>{" "}
          <Link className="text-xs font-mono text-default-900">
            https://victordrl.github.io/
          </Link>{" "}
          en React · UI potenciado con HeroUI.
        </p>
      </footer>
    </div>
  );
}
