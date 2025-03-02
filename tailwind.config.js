/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        primary: "#ffdc26",
        Flavescent: "#f9df8a",
        secondary: "#fff9f4",
      },
      fontFamily: {
        adlam: ["ADLaM Display", "serif"],
        sora: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
