/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/atoms/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Bold': ['Epilogue Bold'],
      'ExtraBold': ['Epilogue Extra Bold'],
    },
    extend: {
      animation: {
        custom_spin: 'custom_spin 8s linear infinite',
        marqueeEffect: 'marqueeEffect 25s linear infinite'

      },
      keyframes: {
        custom_spin: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)', },
          '50%': { transform: 'rotate(360deg) scale(1.2)' },
        },
        marqueeEffect: {
          '0%, 100%': { transform: 'translate(0)' },
          '50%': { transform: 'translate(-1000px)' }
        }
      }

    },
  },
  plugins: [],
});
