/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'varela': ['Varela Round', 'sans-serif'],
        'recoleta': ['Recoleta Bold', 'sans-serif']
      },
      colors: {
        'yello': '#ffbb00',
        'dark_purple': "#2B2C3D",
        'indigo': "#5A5B86"
      }
    },
  },
  plugins: [],
}
