/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'ui-rounded', 'SF Pro Rounded', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
