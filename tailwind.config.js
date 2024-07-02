
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
    colors: {
        dark: "#0d071b",
        primary: "#785EE6",
        phover: "#7d38ee",
        pdark: "#3040a7",
        secondary: "#38c2ee",
        sdark: "#2788a7",
        "tprimary": "#b8aff0"
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],

}
