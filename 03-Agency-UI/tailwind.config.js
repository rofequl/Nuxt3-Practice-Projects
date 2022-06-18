/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif']
            },
            spacing: {
                desktop: '100px',
                mobile: '10px'
            },
            animation:{
                fade:'fade 0.4s ease-in-out',
                slideDown
            }
        },
    },
    plugins: [],
}
