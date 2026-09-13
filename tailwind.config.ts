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
        base: {
          light: "#FBFBFA",
          white: "#FFFFFF",
          subtle: "#F4F2EA",
          sand: "#EDEAE1",
          border: "#E5E2D7",
        },
        charcoal: {
          DEFAULT: "#1B211E",
          muted: "#414C45",
          light: "#69766E",
        },
        earth: {
          DEFAULT: "#C25624",
          hover: "#A9481C",
          light: "#FBF0EA",
        },
        accent: {
          DEFAULT: "#C25624",
          hover: "#A9481C",
          soft: "#FBF0EA",
        },
        olive: {
          DEFAULT: "#2B3E34",
          hover: "#213129",
          soft: "#E8EFEA",
          muted: "#3C5346",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
