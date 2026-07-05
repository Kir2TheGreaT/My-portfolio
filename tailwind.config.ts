import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          light: "#E8D5B7",
          DEFAULT: "#D4A574",
          dark: "#B8956A",
        },
        stone: {
          light: "#A0917A",
          DEFAULT: "#8B7355",
          dark: "#6B5B45",
        },
        blood: {
          light: "#E8304A",
          DEFAULT: "#C41E3A",
          dark: "#9B1B30",
        },
        parchment: "#F5E6D3",
        night: {
          DEFAULT: "#2C1810",
          deep: "#1A0F0A",
        },
      },
      fontFamily: {
        medieval: ['"Cinzel"', "serif"],
        body: ['"Roboto Slab"', "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
