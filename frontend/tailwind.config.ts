import { Cormorant_Upright } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"], // optional
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1300px",
    },
    fontFamily: {
      primary: "var(--font-cormorant_upright)",
      secondary: "var(--font-open-sans)",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#100e0e",
        },
        secondary: {
          DEFAULT: "#787f8a",
        },
        accent: {
          DEFAULT: "#c7a17a",
          hover: "#a08161",
        },
      },
      backgroundImage: {
        hero_overlay: "url('/assets/hero/hero-overlay.png')",
        opening_hours: "url('/assets/opening-hours')",
        footer: "url(/assets/footer/bg.png",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"), // optional
  ],
} satisfies Config;
