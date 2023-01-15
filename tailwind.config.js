/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('assets/hero.svg')",
      },
      // fontFamily: {
      //   poppins: ["Poppins", "sans-serif"],
      // },
      fontFamily: {
        dmssans: [
          "'dms sans'",
          "Proxima Nova",
          "Inter",
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
