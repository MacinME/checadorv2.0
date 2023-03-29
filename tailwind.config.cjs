/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}' ],
  theme: {
    extend: {
      colors: {
        primary: '#2666f0',
        blueDarkColor: {
          600: '#291d5a', //icons
          700: '#1f1545', //buttons
          800: '#1e1738', //cards - texts
          900: '#111827'  //Background
        },
        yellowColor: {
          600: '#ffc500', //icons 
          700: '#d0940e', //buttons
          800: '#e49b00', //cards - texts
          900: '#9b6f00', //Background
        },
        primaryYellow: '#ffc500',
        mainBlue: '',
        blueback: '#1f1545',
        mainYellow: '#d0940e',
        blueColor: {
          50: '#edf2ff',
          100: '#dbe4ff',
          200: '#bac8ff',
          300: '#91a7ff',
          400: '#748ffc',
          500: '#5c7cfa',
          600: '#4c6ef5',
          700: '#4263eb',
          800: '#3b5bdb',
          900: '#364fc7'
        },
        bgc_white: {
          primary: '#edf5fa',
          50: '#f5f9ff',
          100: '#e7edf8'
        },
        tealColor: {
          50: '#e6fcf5',
          100: '#c3fae8',
          200: '#96f2d7',
          300: '#63e6be',
          400: '#38d9a9',
          500: '#20c997',
          600: '#12b886',
          700: '#0ca678',
          800: '#099268',
          900: '#087f5b'
        },
        
      }
    },
  },
  plugins: [],
}
