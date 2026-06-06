/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",   // your app folder
    "./src/components/**/*.{js,ts,jsx,tsx}" // any components
  ],
  theme: {
    extend: {
      colors: {
        dentalGold: '#A6905D',
      },
    },
  },
  plugins: [],
};
