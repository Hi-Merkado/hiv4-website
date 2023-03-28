<template>
    <div class="w-9/12 mx-auto max-w-7xl lg:grid lg:grid-cols-2 py-20 hidden">
        <div>
            <h6 class="text-xs uppercase font-medium mb-8">Residential Listings</h6>

            <ul class="grid grid-cols-3">
                <li v-for="(residential, index) in sitemap.data.residential" :key="index">
                    <a :href="defineUrl('residential', 'rent', residential.location)" class="text-gray-950">Rent in {{ residential.location }}</a>
                </li>
            </ul>
        </div>
        <div>
            <h6 class="text-xs uppercase font-medium mb-8">Commercial Listings</h6>
            <ul class="grid grid-cols-3">
                <li v-for="(commercial, index) in sitemap.data.commercial" :key="index">
                    <a :href="defineUrl('commercial', 'rent', commercial.location)" class="text-gray-950">Rent in {{ commercial.location }}</a>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import ListingsServices from '../services/ListingsServices'

export default {
    data(){
        return {
            sitemap: {}
        }
    },
    created() {
        this.fetchSitemap()
    },

    methods: {
        async fetchSitemap(){
            this.sitemap = await ListingsServices._getSitemap()
        },

        defineUrl(division, category, location){
            return "/"+division+"-property-"+category+"-"+location
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '')
        }
    }
}
</script>