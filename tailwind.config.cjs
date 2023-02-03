/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#042233",
        secondary: "#A6000C",
        tertiary: "#F8F7F8",
        quaternary: "#075e8c",
        quinary: "#da0010",
        senary: "#f0efea",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    },
  },
  plugins: [],
}