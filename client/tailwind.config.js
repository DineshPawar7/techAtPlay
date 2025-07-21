/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffe8fc',
        secondary: '#7d006c',
        dark: '#42b00b',
        border: '#bfbfbf',

        darkTheame: "#380031",
        darkTheameSecondary: "#24001f",


      },
    },
  },
  plugins: [],
}
