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
                primary: "#14b8a6",
                secondary: "#475569",
                dark: "#160040",
                dark2: "#1B0044",
            },
            screens: {
                "2xl": "1280px",
            },
            keyframes: {
                pantul: {
                    "0%, 100% ": {
                        transform: "translateY(-10%)",
                        timing: "linear",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        timing: "linear",
                    },
                },
            },
            animation: {
                "pantul-slow": "pantul 6s infinite",
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
