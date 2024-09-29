/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'red': '0px 0px 15px 3px rgba(255,0,0,0.7)',
        'blue': '0px 0px 15px 3px rgba(0,0,255,0.7)',
        'green': '0px 0px 15px 3px rgba(0,255,0,0.7)',
        'white': '0px 0px 15px 3px rgba(175,175,175,0.2)',
        'dark-red': '0px 0px 15px 3px rgba(255,0,0,0.2)',
        'dark-blue': '0px 0px 15px 3px rgba(0,0,255,0.2)',
        'dark-green': '0px 0px 15px 3px rgba(0,255,0,0.2)',
        'dark-orange': '0px 0px 15px 3px rgba(255,165,0,0.2)',
        'dark-pink': '0px 0px 15px 3px rgba(255,192,203,0.2)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

