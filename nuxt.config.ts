// nuxt.config.js
export default defineNuxtConfig({
    ssr: true,
    app: {
        head: {
            meta: [
                { name: 'robots', content: 'index,follow' },
                { property: 'og:type', content: 'website' }
            ],
            bodyAttrs: {
                class: 'bg-white font-circularxx'
            }
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    runtimeConfig: {
        public: {
            API_BASE_URL: process.env.API_BASE_URL
        }
    }
});
