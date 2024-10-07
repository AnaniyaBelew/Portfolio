import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1024px",
    },
    fontFamily: {
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      third: "var(--third)",
    },
    extend: {
      colors: {
        background: "#172A3A",
        foreground: "#002729",
        border: "#CEBF1A",
        text: {
          primary: "#FFFFFF",
          secondary: "#CEBF1A",
        },
      },
    },
  },
  plugins: [],
};
export default config;
