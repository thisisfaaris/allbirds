const colors = require('tailwindcss/colors')

module.exports = {
  mode:'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        poppins:['Quicksand','Poppins','system-ui'],
      },
      colors:{
        lime:'#388e3c'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
