import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#eef5ff",
          100: "#d9e8ff",
          500: "#1d5d9b",
          700: "#123c69",
          900: "#071c33",
          950: "#04111f"
        },
        gold: {
          100: "#fff0c2",
          300: "#f5cf6b",
          500: "#c99b2e",
          700: "#8f6716"
        }
      },
      boxShadow: {
        premium: "0 24px 70px rgba(7, 28, 51, 0.12)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
