/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'divcol':'#1A1A1B',
        'gr':'#272729',
      },
      fontFamily: {
        reenie: ["Reenie Beanie", "sans-serif"],
      },
      rotate: {
        '4': '4deg',
        '5': '5deg',
        '-1': '-1deg',
        '-2': '-2deg',
        '-3': '-3deg',
        '-4': '-4deg',
        '-5': '-5deg',
      }   
    },
  },
  plugins: [],
}
