import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
        "dm-sans":  ["var(--font-dm-sans)",  "system-ui", "sans-serif"],
        "dm-mono":  ["var(--font-dm-mono)",  "monospace"],
      },
      colors: {
        rose: {
          50:  "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%":       { transform: "translateY(-28px) scale(1.04)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0px) scale(1) rotate(0deg)" },
          "50%":       { transform: "translateY(-18px) scale(1.02) rotate(3deg)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to:   { opacity: "1" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)", opacity: "0" },
          to:   { transform: "translateX(0)",    opacity: "1" },
        },
      },
      animation: {
        "float-slow":     "float-slow 8s ease-in-out infinite",
        "float-slower":   "float-slower 12s ease-in-out infinite",
        "fade-up":        "fade-up 0.6s ease-out forwards",
        "fade-in":        "fade-in 0.4s ease-out forwards",
        "slide-in-right": "slide-in-right 0.35s cubic-bezier(0.4,0,0.2,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;