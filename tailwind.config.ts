import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D31F1F",
          50: "#F7C9C9",
          100: "#F4B5B5",
          200: "#EE8D8D",
          300: "#E86565",
          400: "#E33D3D",
          500: "#D31F1F",
          600: "#AB1919",
          700: "#831313",
          800: "#5B0D0D",
          900: "#330707",
          950: "#1F0505",
        },
      },
    },
  },
  plugins: [],
};

export default config;
