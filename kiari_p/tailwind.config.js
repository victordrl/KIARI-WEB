import { heroui } from "@heroui/theme";
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        saira: ["Saira Condensed", "sans-serif"],
        tinos: ["Tinos", "serif"],
        playfair: ["Playfair Display SC", "serif"],
        bowlby: ["Bowlby One SC", "sans-serif"],
        cinzel: ["Cinzel Decorative", "serif"],
        cutive: ["Cutive Mono", "monospace"],
        julius: ["Julius Sans One", "sans-serif"],
        bona: ["Bona Nova SC", "serif"],
        rye: ["Rye", "serif"],
        aboreto: ["Aboreto", "system-ui"],
        notable: ["Notable", "sans-serif"],
        metal: ["Metal Mania", "system-ui"],
        vina: ["Vina Sans", "sans-serif"],
        megrim: ["Megrim", "system-ui"],
        ruthie: ["Ruthie", "cursive"],
        bigShouldersInline: ["Big Shoulders Inline", "sans-serif"],
        bigShouldersStencil: ["Big Shoulders Stencil", "sans-serif"],
        bodoni: ["Bodoni Moda SC", "serif"],
        dorsa: ["Dorsa", "sans-serif"],
        publicSans: ["Public Sans", "sans-serif"],
        anaheim: ["Anaheim", "sans-serif"],
        syncopate: ["Syncopate", "sans-serif"],
        aya: ["Arya", "sans-serif"],
        arya: ["Arya", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(), require("tw-elements-react/dist/plugin.cjs")],
});
