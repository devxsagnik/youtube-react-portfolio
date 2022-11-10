/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        syncopate: ["Syncopate", "sans-serif"],
        collingar: ["Collingar", "sans-serif"],
        hillray: ["hillray", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      smd: "940px",
      md: "1060px",
      mlg: "1360px",
      lg: "1200px",
      lxl: "1360px",
      xl: "1700px",
    },
  },
  plugins: [],
};
