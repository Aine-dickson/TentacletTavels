/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./html",
    "./node_modules/flowbite/**/*.js",
    "./src/**/*.{vue, js, jsx, ts, tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

