/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        proppoint: {
          primaryBlue: "#2A66FE",
          primaryBlueTransparent: "#2A66FE"
        }
      }
    },
  },
  plugins: [],
}

