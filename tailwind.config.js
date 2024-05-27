/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif']
      },
      listStyleType: {
        square: 'square'
      },
      backgroundImage: {
        'hero1': "url('assets/images/hero1.jpg')",
        'hero2': "url('assets/images/hero2.jpg')",
        'hero3': "url('assets/images/hero3.jpg')",
        'hero4': "url('assets/images/hero4.jpg')"
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}