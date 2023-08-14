/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic-sans': ['Comic Sans MS', 'cursive'],
        'varela': ['Varela Round', 'sans-serif']
      },
      colors: {
        'yello': '#ffbb00',
        'dark_purple': "#2B2C3D"
      }
    },
  },
  plugins: [],
}
