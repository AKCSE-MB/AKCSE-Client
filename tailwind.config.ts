import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cherry: "#E54B4B",
        grayLight: "#F9F9F9",
      },
      boxShadow: {
        header: "0px 3px 5px rgba(37, 37, 37, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;