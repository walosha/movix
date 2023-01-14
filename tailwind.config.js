/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // extend: {
    backgroundImage: {
      "hero-pattern": "url('assets/hero.svg')",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      // },
    },
  },
  plugins: [],
};
