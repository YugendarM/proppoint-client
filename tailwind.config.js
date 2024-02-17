/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        proppoint: {
          primaryBlue: "#000",
          secondaryBlue: "#543678"
        }
      }
    },
  },
  plugins: [],
}

