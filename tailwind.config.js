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
                primary: "#0096FF",
                secondary: "#051367",
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
                fly: {
                    from: {
                        transform: "translateY(0.1em)",
                    },
                    to: {
                        transform: "translateY(-0.1em)",
                    },
                },
            },
            animation: {
                "pantul-slow": "pantul 6s infinite",
                "fly-1": "fly 0.6s ease-in-out infinite alternate",
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
        },
    },
    plugins: [require("@tailwindcss/forms"), require("tailwindcss-animation-delay")],
}
