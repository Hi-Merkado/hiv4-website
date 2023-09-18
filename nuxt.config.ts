// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    imports: {
        dirs: [
            'services',
        ]
    },
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
        '@pinia-plugin-persistedstate/nuxt',
    ],
    runtimeConfig: {
        public : {
            apiBase: (process.env.ENVIRONMENT == 'local' ? process.env.LOCAL_BASE_URL : process.env.SERVER_BASE_URL),
            bearerToken : (process.env.ENVIRONMENT == 'local' ? process.env.LOCAL_API_TOKEN : process.env.WEB_API_TOKEN),
        },
    }
})
