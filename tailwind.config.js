/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-facebook': '#1877F2',
        'green-facebook': '#42b72a',
        'bg-main': '#F0F2F5',
      },
      fontFamily: {
        'primary': ['Poppins','sans-serif'],
      },
    },
  },
  plugins: [],
}