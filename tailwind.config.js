/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '20px',
                lg: '40px',
            },
        },
        fontFamily: {
            sans: ['Work Sans', 'Inter', 'sans-serif'],
        },
        extend: {},
    },
    plugins: [],
};
