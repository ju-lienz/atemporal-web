/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#593122',
        secondary: '#764838',
        // ...
      }

    },
  },
  plugins: [],
}

