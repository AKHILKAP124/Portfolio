/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,jsx, js}',
    './components/**/*.{html,jsx, js}'
  ],
  theme: {
    // colors: {
    //   "primary": "#212121",
    //   "secondary": "#e5eff8"
    // },
    extend: {},
  },
  plugins: [],
  darkMode: "class"
};
