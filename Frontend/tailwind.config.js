/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // include all possible file types
  darkMode: 'class', // manual dark mode toggle using "class"
  theme: {
    extend: {}, // add custom theme configs here if needed
  },
  plugins: [require("daisyui")], // keep DaisyUI plugin
}
