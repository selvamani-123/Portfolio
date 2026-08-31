import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#f5f5f5",
        card: "#0a0a0a",
        neutral: {
          dark: "#0a0a0a",
          muted: "#a1a1aa",
          light: "#f5f5f5",
        },
        accent: {
          DEFAULT: "#2dd4bf", // Cyber teal
          muted: "rgba(45, 212, 191, 0.2)",
          hover: "#14b8a6",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderColor: {
        DEFAULT: "rgba(255, 255, 255, 0.10)",
        light: "rgba(255, 255, 255, 0.15)",
        accent: "rgba(45, 212, 191, 0.3)",
      }
    },
  },
  plugins: [],
};

export default config;
