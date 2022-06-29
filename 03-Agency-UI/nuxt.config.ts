import {defineNuxtConfig} from 'nuxt'
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
    vite: {
        plugins: [svgLoader()],
    },
    css: ['@/assets/css/main.css'],
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
})
