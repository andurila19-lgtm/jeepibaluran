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
          light: "#FAFAF7",
          white: "#FFFFFF",
          subtle: "#F3F2EC",
          border: "#E5E3DA",
        },
        charcoal: {
          DEFAULT: "#1A1E1C",
          muted: "#4A524D",
          light: "#707A74",
        },
        accent: {
          DEFAULT: "#C85718",
          hover: "#B04910",
          soft: "#FAF0E8",
        },
        olive: {
          DEFAULT: "#2D3F33",
          hover: "#223026",
          soft: "#EAF0EC",
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
