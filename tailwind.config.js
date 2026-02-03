/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'navy': '#0a192f',
        'navy-light': '#112240',
        'slate': {
          900: '#0a192f',
          800: '#112240',
          400: '#8892b0',
          300: '#a8b2d1',
        },
        'teal': {
          400: '#64ffda',
        },
      },
    },
  },
  plugins: [],
}