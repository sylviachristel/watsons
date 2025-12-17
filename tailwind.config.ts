import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                teal: {
                    200: '#99f2e7',
                    500: '#14b8a6',
                    600: '#0d9488',
                }
            }
        }
    },
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ]
}
