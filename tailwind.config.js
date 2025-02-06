/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/*.*",
    "./sections/*.*",
    "./snippets/*.*",
    "./templates/*.*",
    "./templates/**/*.*"
  ],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      }
    },
  },
  plugins: [],
}