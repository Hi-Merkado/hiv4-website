// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            bodyAttrs: {
                class: 'bg-white font-circularxx'
            }
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt'
    ],
    runtimeConfig: {
        API_BASE_URL: process.env.API_BASE_URL
    }
})
