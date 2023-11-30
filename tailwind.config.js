/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    {
      pattern: /bg-(yellow|blue|gray|red|brown|cream|emerald)-(500)/,
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        logo: ["Lily Script One", "cursive"],
        default: ["Poppins", "sans-serif"],
      },
      colors: {
        brand: "#e08989",
        brown: {
          500: "#422006",
        },
        cream: {
          500: "#fde68a",
        },
      },
      transitionProperty: {
        expand: "width",
      },
    },
  },
  plugins: [],
};
