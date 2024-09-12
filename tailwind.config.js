/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            maxWidth: {
                '8xl': '1440px'
            },
            fontFamily: {
                raleway: ['var(--font-raleway)'],
                assistant: ['var(--font-assistant)'],
            },
            animation: {
                'infinite-scroll': 'infinite-scroll 90s linear infinite',
            },
            keyframes: theme => ({
                'infinite-scroll': {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            })
        },
    },
    plugins: [],
};
