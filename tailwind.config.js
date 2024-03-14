/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'lightCyan': '#CEE3E9',
      'neonGreen': '#52FFA8',
      'grayishBlue': '#4E5D73',
      'darkGrayishBlue': '#323A49',
      'darkBlue': '#1F2632'
    },
    extend: {
      fontFamily: {
        manrope: 'manrope'
      }
    }
  },
  plugins: [],
}