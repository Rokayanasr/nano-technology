/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/flowbite/**/*.js"],
    theme: {
        extend: {},
        colors: {
            dark: "#0d071b",
            primary: "#785EE6",
            phover: "#6052e6",
            pdark: "#3040a7",
            secondary: "#38c2ee",
            sdark: "#2788a7",
            tprimary: "#b8aff0",
        },
    },
    plugins: [require("flowbite/plugin")],
};
