export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kiari Shop House J&L",
  description: "Descubre la frescura del pescado KIARI",

  navItems: [
    {
      label: "Pisillo",
      href: "/pisillo",
      state: false,
      new: false,
    },
    {
      label: "Nosotros",
      href: "/nosotros",
      state: false,
      new: false,
    },
    {
      label: "Blog",
      href: "/blog",
      state: false,
      new: false,
    },
  ],

  navMenuItems: [
    {
      label: "Pisillo",
      href: "/pisillo",
      state: true,
      new: false,
    },
    {
      label: "Recetas",
      href: "/blog",
      state: true,
      new: false,
    },
    {
      label: "Nosotros",
      href: "/nosotros",
      state: true,
      new: false,
    },
    {
      label: "Locales",
      href: "/nosotros",
      state: true,
      new: false,
    },
    {
      label: "Blog",
      href: "/blog",
      state: true,
      new: false,
    },
  ],

  footerItem: [
    {
      label: "Inicio",
      href: "/",
      state: true,
      new: false,
    },
    {
      label: "Productos",
      href: "/prod",
      state: true,
      new: false,
    },
    {
      label: "Nosotros",
      href: "/noso",
      state: true,
      new: false,
    },
  ],

  links: {
    facebook: "https://www.facebook.com/kiarishophouse/",
    ig: "https://www.instagram.com/kiarishophouse/",
    tiktok: "https://www.tiktok.com/@kiarichocolate",
  },
};
