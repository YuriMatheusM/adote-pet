/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sail: ["Sail", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        "poppins-bold": ["Poppins-bold", "sans-serif"],
      },
      colors: {
        primary: "#8a836c",
        details: "#aaa596",
        menu: "#f6eccb",
        text: "#5a5031",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        5000: "5000ms",
      },
    },
  },
  plugins: [],
};
