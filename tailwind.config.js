/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#009f7f',
        primaryHover: "#05876b",
        secondary: "#90979f",
        background: '#f3f4f6'
      }
    },
  },
  plugins: [],
}