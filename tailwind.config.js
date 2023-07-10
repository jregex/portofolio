/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#3C79F5",
                secondary: "#6C00FF",
                dark: "#160040",
                dark2: "#03001C",
            },
            screens: {
                "2xl": "1280px",
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },
    plugins: [require("@tailwindcss/forms")],
}
