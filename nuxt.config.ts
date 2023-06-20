// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        public : {
            apiBase : process.env.API_BASE_URL,
            bearerToken : process.env.BEARER_TOKEN
        },
        API_BASE_URL: process.env.API_BASE_URL
    }
})
