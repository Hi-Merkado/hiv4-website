<template>
    <section class="lg:w-11/12 lg:mx-auto lg:max-w-7xl mt-6 lg:mt-24 px-4">
        <h2 class="text-2xl font-bold hidden lg:block">Explore Properties</h2>
        <header class="flex xs:flex-col gap-4 justify-between items-center mb-8">
            <div class="flex xs:flex-col gap-8 items-center">
                <button class="border-2 py-1.5 px-6 text-sm font-semibold lg:hidden" @click="showFilter = !showFilter">Filters</button>
                <div class="lg:flex xs:gap-0 md:gap-4"
                    :class="showFilter ? 'xs:block' : 'hidden'"
                    >
                    <!-- <button 
                        class="border rounded-lg px-5 h-9 font-bold flex items-center gap-1"
                        :class="SearchParamsStore.featured ? defaultColor : 'border-gray-400 text-gray-400'"
                        @click.prevent="updatedFeatured(!SearchParamsStore.featured)"
                        >
                        <p>Featured</p> 
                        <font-awesome-icon icon="earth-asia" :style="{ color: SearchParamsStore.featured ? SearchParamsStore.division == 1 ? '#6fcf97' : '#2f80ed' : '', height: '14px' }"/>
                    </button> -->
                    <div class="flex xs:mb-4">
                        <button 
                            class="border rounded-l-lg border-r-0 px-5 h-9 font-bold flex items-center gap-1"
                            :class="SearchParamsStore.division == 1 ? 'border-green-default text-green-default' : 'border-gray-400 text-gray-400'"
                            @click="updateDivision(1)"
                        >
                            Residential
                        </button>
                        <button 
                            class="border rounded-r-lg px-5 h-9 font-bold flex items-center gap-1"
                            :class="SearchParamsStore.division == 2 ? 'border-blue-default text-blue-default' : 'border-gray-400 text-gray-400'"
                            @click="updateDivision(2)"
                        >
                            Commercial
                        </button>
                    </div>
                    <div class="flex" v-if="SearchParamsStore.division == 1">
                        <button class="border rounded-l-lg border-r-0 px-5 h-9 font-bold flex items-center gap-1"
                            :class="SearchParamsStore.bedrooms == 0 ? 'border-green-default text-green-default' : 'border-gray-400 text-gray-400'"
                            @click="updateBedrooms(0)"
                        >
                            Studios
                        </button>
                        <button class="border px-5 h-9 border-r-0 font-bold flex items-center gap-1"
                            :class="SearchParamsStore.bedrooms == 1 ? 'border-green-default text-green-default' : 'border-gray-400 text-gray-400'"
                            @click="updateBedrooms(1)"
                        >
                            1
                        </button>
                        <button class="border px-5 h-9 border-r-0 font-bold flex items-center gap-1"
                            :class="SearchParamsStore.bedrooms == 2 ? 'border-green-default text-green-default' : 'border-gray-400 text-gray-400'"
                            @click="updateBedrooms(2)"
                        >
                            2
                        </button>
                        <button class="border rounded-r-lg px-5 h-9 font-bold flex items-center gap-1"
                            :class="SearchParamsStore.bedrooms == 3 ? 'border-green-default text-green-default' : 'border-gray-400 text-gray-400'"
                            @click="updateBedrooms(3)"
                        >
                            3+ br
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <a :href="defaultLink" class="uppercase text-xs flex items-center gap-2 leading-6 mt-1 lg:text-gray-650 text-blue-default lg:font-normal font-bold">
                    <span class="inline leading-6">Browse All <span class="font-bold mx-1">{{ ListingsStore.listings.data.meta.total }}</span> Listings</span>
                    <font-awesome-icon icon="arrow-right" class="text-gray-400 hidden lg:block" :style="{ color: '#a1a1aa', height: '14px', margin: '10px 0' }"/>
                </a>
            </div>
        </header>
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ListingsListing v-for="(listing, index) in ListingsStore.listings.data.data" :key="index" :listing="listing"/>
        </section>
    </section>
</template>

<script>
import { useSearchParamsStore } from '@/stores/SearchParamsStore'
import { useListingsStore } from '@/stores/ListingsStore'
import ListingsServices from '@/services/ListingsServices'

export default {
    setup(){
        const SearchParamsStore = useSearchParamsStore()
        const ListingsStore = useListingsStore()

        return {
            SearchParamsStore,
            ListingsStore
        }
    },
    data(){
        return {
            showFilter: false
        }
    },
    created(){

        this.fetchListings();

    }, 
    computed: {
        defaultLink(){
            const division = this.SearchParamsStore.division == 1 ? 'residential' : 'commercial'
            return '/'+division+'-property-'+this.SearchParamsStore.category
        },

        defaultColor(){
            return this.SearchParamsStore.division == 1 ? 'border-green-default text-green-default' : 'border-blue-default text-blue-default' 
        }
    },
    methods: {
        async fetchListings(){
            const params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state)

            console.log(params)

            if(!this.SearchParamsStore.triggered){
                this.ListingsStore.listings = await ListingsServices._getListings(params)
            }
        }, 

        updatedFeatured(value){
            this.SearchParamsStore.featured = value == true ? 1 : 0
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
