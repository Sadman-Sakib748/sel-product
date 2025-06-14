/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode via the 'class' strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7e22ce',
        secondary: '#a855f7',
      },
    },
  },
  plugins: [],
};
