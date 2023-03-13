<template>
        <section class="w-9/12 mx-auto max-w-7xl mt-24">
            <header class="flex gap-4 justify-between items-center mb-8">
                <div class="flex gap-8 items-center">
                    <h2 class="text-2xl font-bold">Explore</h2>
                    <div class="flex gap-4">
                        <button 
                            class="border border-blue-default rounded-lg px-5 h-9 text-blue-default font-bold flex items-center gap-1"
                            :class="SearchParamsStore.featured ? 'border-blue-default text-blue-default' : 'border-gray-400 text-gray-400'"
                            @click.prevent="updatedFeatured(!SearchParamsStore.featured)"
                            >
                            <p>Featured</p> 
                            <font-awesome-icon icon="earth-asia" :style="{ color: SearchParamsStore.featured ? '#2f80ed' : '', height: '14px' }"/>
                        </button>
                        <div class="flex">
                            <button 
                                class="border rounded-l-lg border-r-0 px-5 h-9 font-bold flex items-center gap-1"
                                :class="SearchParamsStore.division == 1 ? 'border-blue-default text-blue-default' : 'border-gray-400 text-gray-400'"
                                @click.prevent="updateDivision(1)"
                            >
                                Residential
                            </button>
                            <button 
                                class="border rounded-r-lg px-5 h-9 font-bold flex items-center gap-1"
                                :class="SearchParamsStore.division == 2 ? 'border-blue-default text-blue-default' : 'border-gray-400 text-gray-400'"
                                @click.prevent="updateDivision(2)"
                            >
                                Commercial
                            </button>
                        </div>
                        <div class="flex" v-if="SearchParamsStore.division == 1">
                            <button class="border rounded-l-lg border-r-0 px-5 h-9 font-bold flex items-center gap-1"
                                :class="SearchParamsStore.bedrooms == 0 ? 'border-blue-default text-blue-default' : 'border-gray-400 text-gray-400'"
                                @click.prevent="updateBedrooms(0)"
                            >
                                Studios
                            </button>
                            <button class="border px-5 h-9 border-r-0 font-bold flex items-center gap-1"
                                :class="SearchParamsStore.bedrooms == 1 ? 'border-blue-default text-blue-default' : 'border-gray-400 text-gray-400'"
                                @click.prevent="updateBedrooms(1)"
                            >
                                1
                            </button>
                            <button class="border px-5 h-9 border-r-0 font-bold flex items-center gap-1"
                                :class="SearchParamsStore.bedrooms == 2 ? 'border-blue-default text-blue-default' : 'border-gray-400 text-gray-400'"
                                @click.prevent="updateBedrooms(2)"
                            >
                                2
                            </button>
                            <button class="border rounded-r-lg px-5 h-9 font-bold flex items-center gap-1"
                                :class="SearchParamsStore.bedrooms == 3 ? 'border-blue-default text-blue-default' : 'border-gray-400 text-gray-400'"
                                @click.prevent="updateBedrooms(3)"
                            >
                                3+ br
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <a :href="defaultLink" class="uppercase text-xs flex items-center gap-2 leading-6 mt-1">
                        <span class="inline leading-6">Browse All <span class="font-bold mx-1">{{ ListingsStore.listings.data.meta.total.toLocaleString() }}</span> Listings</span>
                        <font-awesome-icon icon="arrow-right" class="text-gray-400" :style="{ color: '#a1a1aa', height: '14px', margin: '10px 0' }"/>
                    </a>
                </div>
            </header>
            <section class="grid grid-cols-3 gap-8">

                <ListingsListing v-for="(listing, index) in ListingsStore.listings.data.data" :key="index" :listing="listing"/>

            </section>
        </section>
</template>

<script>
import { useSearchParamsStore } from '../stores/SearchParamsStore'
import { useListingsStore } from '../stores/ListingsStore'
import ListingsServices from '../services/ListingsServices'

export default {
    setup(){
        const SearchParamsStore = useSearchParamsStore()
        const ListingsStore = useListingsStore()

        return {
            SearchParamsStore,
            ListingsStore
        }
    },
    created(){

        this.fetchListings();

    }, 
    computed: {
        defaultLink(){
            const division = this.SearchParamsStore.division == 1 ? 'residential' : 'commercial'
            return '/'+division+'-property-'+this.SearchParamsStore.category
        }
    },
    methods: {
        async fetchListings(){
            const params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state)
            this.ListingsStore.listings = await ListingsServices._getListings(params)
        }, 

        updatedFeatured(value){
            this.SearchParamsStore.featured = value
            this.fetchListings()
        },

        updateDivision(value){
            this.SearchParamsStore.division = value
            if(this.SearchParamsStore.division == 2 && this.SearchParamsStore.bedrooms !== null) this.SearchParamsStore.bedrooms = null
            this.SearchParamsStore.priceMin = 0
            this.SearchParamsStore.priceMax = 0
            this.fetchListings()
        },

        updateBedrooms(value){
            this.SearchParamsStore.bedrooms = value
            this.fetchListings()
        }

    }
}
</script>
