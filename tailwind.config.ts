import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0D",
        surface: "#111113",
        card: "#17171A",
        border: "#26262A",
        primary: "#FFFFFF",
        secondary: "#A1A1AA",
        accent: "#FFFFFF",
        success: "#22C55E",
        warning: "#F59E0B",
        error: "#EF4444"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 48px rgba(255, 255, 255, 0.14)",
        "glow-white": "0 0 64px rgba(255, 255, 255, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
