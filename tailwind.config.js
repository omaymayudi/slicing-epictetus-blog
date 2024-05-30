/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens:{
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1080px",
      }
    },
    extend: {
      fontFamily: {
        sans: ["Patrick Hand", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
