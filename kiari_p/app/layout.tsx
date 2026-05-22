import "./globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Anaheim:wght@400..800&family=Anton&family=Arya:wght@400;700&family=Bebas+Neue&family=Big+Shoulders+Inline:opsz,wght@10..72,100..900&family=Big+Shoulders+Stencil:opsz,wght@10..72,100..900&family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Bowlby+One+SC&family=Cinzel+Decorative:wght@400;700;900&family=Cutive+Mono&family=Dorsa&family=Italianno&family=Julius+Sans+One&family=Megrim&family=Metal+Mania&family=Notable&family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Public+Sans:ital,wght@0,100..900;1,100..900&family=Ruthie&family=Rye&family=Saira+Condensed:wght@100;200;300;400;500;600;700;800;900&family=Syncopate:wght@400;700&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&family=Vina+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
