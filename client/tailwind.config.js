/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'divcol': '#1A1A1B',
        'gr': '#272729',
        'pur': '#3F0071',
        'hovpur': '#2a024a',
        'pinks': '#FB2576',
      },
      fontFamily: {
        reenie: ["Reenie Beanie", "sans-serif"],
      },
      animation: {
        add: "add 1s ease-in-out 1"
      },
      keyframes:{
        add: {
          "0%" : {
            transform: "scale(0.5)"
          },
          "50%" : {
            transform: "scale(1)"
          },
          "100%" : {
            transform: "scale(0.5)"
          },
        }
      },
    },
  },
  plugins: [],
}
