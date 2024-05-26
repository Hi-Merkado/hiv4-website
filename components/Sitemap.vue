<template>
    <div class="w-9/12 mx-auto max-w-7xl lg:grid lg:grid-cols-2 py-20 hidden">

        <div v-for="(division, index) in sitemap.data" :key="index">
            <h6 class="text-xs uppercase font-medium mb-8">{{ index }} Listings</h6>
            <ul class="grid grid-cols-3">
                <li v-for="(location, key) in division" :key="key">
                    <a :href="defineUrl(index, 'rent', location.location)" class="text-gray-950">Rent in {{ location.location }}</a>
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
            return "/"+division+"-property-"+category
                .toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '')
        }
    }
}
</script>