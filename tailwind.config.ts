import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Shadcn UI Semantic Tokens
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Eye-friendly Nature & Safari Brand Palette (Warm, Organic, Zero Glare)
        base: {
          light: "#F4F0E6", // Soothing warm linen canvas (comfort for the eyes, no harsh white)
          white: "#FAF7F0", // Warm ivory card background
          subtle: "#ECE7DB", // Soft warm stone for secondary containers
          sand: "#E5DFD2", // Warm sand highlight
          border: "#DFD9CC", // Soft organic border
        },
        charcoal: {
          DEFAULT: "#1E2521",
          muted: "#4E5852",
          light: "#717C75",
        },
        earth: {
          DEFAULT: "#C25624",
          hover: "#A9481C",
          light: "#F5ECE5",
        },
        accent: {
          DEFAULT: "#C25624",
          hover: "#A9481C",
          soft: "#F5ECE5",
          foreground: "hsl(var(--accent-foreground))",
        },
        olive: {
          DEFAULT: "#2B3E34",
          hover: "#213129",
          soft: "#E4EDE7",
          muted: "#3C5346",
        },
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(30, 37, 33, 0.05)',
        'elevated': '0 14px 34px -4px rgba(30, 37, 33, 0.08)',
        'card': '0 2px 10px 0 rgba(30, 37, 33, 0.03)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      screens: {
        xs: "400px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
