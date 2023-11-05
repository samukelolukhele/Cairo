/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        logo: ["Lily Script One", "cursive"],
      },
      colors: {
        brand: "#F99D9D",
      },
    },
  },
  plugins: [],
};
