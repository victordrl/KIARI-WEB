import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { Divider } from "@heroui/react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/icons";

import {
  RiTiktokFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";
export default function Footer() {
  return (
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
          <div className="flex sm:flex-row flex-col items-center justify-between sm:gap-7 gap-2">
            {siteConfig.footerItem.map((item, index) => (
              <Link
                key={index}
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
            href={siteConfig.links.facebook}
            title="facebook"
          >
            <RiFacebookBoxFill className="text-default-700 size-6" />
            Tiktok
          </Link>
        </div>
      </div>
      <Divider className="w-[50%]" />
      <p className="text-center text-sm text-default-50-500 p-3">
        © 2025 Kiari Shop House J&amp;L. Todos los derechos reservados.
        <br />
        Hecho por <span className="font-bold">Pilon</span>{" "}
        <Link className="text-xs font-mono text-default-900">
          https://victordrl.github.io/
        </Link>{" "}
        en React · UI potenciado con HeroUI.
      </p>
    </footer>
  );
}
