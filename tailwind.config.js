/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.{jsx, js}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
        sans: [
          "Calibre",
          "Inter",
          "San Francisco",
          "SF Pro Text",
          "-apple-system",
          "system-ui",
          "sans-serif",
        ],
      },
      colors: {
        drkBlue: "#0A2942",
        slate: "#636B78",
        lightSlate: "#A1A6AD",
        lightestSlate: "#D1D4D6",
        bluishGrey: "#678398",
        black: "#000000",
        white: "#ffffff",
      },
      borderRadius: {
        nd: "10px",
      },
    },
    boxShadow: {
      nd: "5px 7px 0px 1px white;",
    },
  },
  plugins: [],
};
