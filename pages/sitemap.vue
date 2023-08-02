<template>
    <div>
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="description" />
            <Meta property="og:title" :content="title" />
            <Meta property="og:type" content="website" />
            <Meta property="og:url" :content="currentPath" />
            <Meta property="og:image" content="https://hi-web-cdn.s3.ap-southeast-1.amazonaws.com/images/HousingInteractive_Logo.png" />
            <Link rel="canonical" :href="currentPath" />
        </Head>
    </div>

    <ListingsSearch />

    <header class="bg-gray-100 bg-blend-luminosity bg-no-repeat bg-bottom bg-contain lg:bg-auto bg-[url('/images/about.png')] h-[234px] md:h-[340px] lg:h-[489px] pt-10 md:pt-5 lg:pt-20">
        <h1 class="text-center font-bold text-[24px] md:text-[32px] lg:text-[36px] leading-10">Sitemap</h1>
    </header>
    <section>
        <div class="lg:w-[789px] mx-auto lg:max-w-3xl py-[60px] px-6 lg:px-0">

            <div v-for="(sValue, sKey) in sitemaps.data" :key="sKey">
                <h2>{{ sKey }}</h2>
                <ul>
                    <li v-for="(sV, sK) in sValue">
                        <a href="/{{ sK }}-for-{{ sKey }}">{{ sK }}</a>
                    </li>
                </ul>
            </div>

        </div>
    </section>
</template>

<script>
import { useSearchParamsStore } from '@/stores/SearchParamsStore'
import SitemapServices from '@/services/SitemapServices'

const baseUrl = 'http://api.laravel.test/api/'
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer 5|ZeLetv0qjQ4S31UxlObPjbkelaQa9VRBisvf0f4U' // Local
    // Authorization: 'Bearer 4|xGskwbaKxUi05a4xr8JAIx6ReP1bHQ3OCGVSw0iG' //website
}

export default {
    data(){
        return {
            sitemaps: [],
        }
    },
    setup(){
        const SearchParamsStore = useSearchParamsStore()

        return {
            SearchParamsStore,
            title: ref('Privacy Policy | Housinginteractive.com.ph'),
            description: ref('Privacy Policy'),
            currentPath: 'https://housinginteractive.com.ph/privacy-policy'
        }
    },

    created(){
        watchEffect( () => {
            // this.getSitemaps()
        })
    },

    methods:{
        async getSitemaps(){
            this.sitemaps = await SitemapServices._getSitemap()
        }
    }
}
</script>