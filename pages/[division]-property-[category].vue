<template>
    <section class="shadow-lg">
        <div class="container mx-auto flex gap-4 px-7 py-4 mb-4">
            <div class="relative w-1/4 h-8 rounded-lg bg-white border flex justify-between items-stretch">
                <div class="w-8 h-full p-2">
                    <font-awesome-icon icon="magnifying-glass" :style="{ color: '#dadada' }"/>
                </div>
                <div class="flex-1 relative">
                    <input
                    type="text"
                    class="w-full h-full focus:outline-none text-xs font-500"
                    placeholder="Search by building, city or area"
                    aria-label="Search by building, city or area"
                    aria-describedby="button-addon2">
                    <!-- <div class="w-full bg-white border text-left">
                        <ul>
                            <li v-for="(suggestion, key) in suggestions.data" :index="key">
                                <button type="button" class="w-full h-full p-2 cursor-pointer hover:bg-gray-100 text-left"
                                    @click="updateQuery(suggestion.location)">
                                {{ suggestion.location }} ({{ suggestion.description }})
                                </button>
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>
            <div class="flex gap-4 h-8">
                <select class="w-[139px] border rounded-lg text-sm px-3" v-model="SearchParamsStore.division">
                    <option value="">Division</option>
                    <option value="1">Residential</option>
                    <option value="2">Commercial</option>
                </select>
                <select class="w-[139px] border rounded-lg text-sm px-3">
                    <option value="">Category</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
                <select class="w-[139px] border rounded-lg text-sm px-3">
                    <option value="">Type</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="lot">Lot</option>
                </select>
                <div class="flex flex-1">
                    <input type="text" placeholder="1,375,000" class="w-1/3 border rounded-l-lg text-sm focus:outline-none px-4">
                    <input type="text" placeholder="2,000,000" class="w-1/3 border-y text-sm focus:outline-none px-4">
                    <select class="w-1/3 border rounded-r-lg text-sm px-3">
                        <option value="pps">P / sqm</option>
                        <option value="price">Price</option>
                    </select>
                </div>
                <select class="w-[139px] border rounded-lg text-sm px-3">
                    <option value="">Bedrooms</option>
                    <option value="0">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3+</option>
                </select>
                <button
                    class="w-[139px] h-full bg-green-default flex justify-center text-white rounded-lg font-bold"
                    type="button"
                    id="button-addon2">
                    <p class="text-white pt-1.5 text-md font-circularxx">
                        Search
                    </p>
                </button>
            </div>
        </div>
    </section>

    <section class="w-9/12 max-w-7xl mx-auto mb-8">
        <h1 class="text-2xl font-bold mb-8">{{ pageTitle }}</h1>

        <div class="flex justify-between mb-8">
            <p class="text-sm font-bold">{{ ListingsStore.listings.data.meta.total.toLocaleString() }} properties found</p>
        </div>

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
    head: {
        title: this.pageTitle
    },  
    setup(){
        const SearchParamsStore = useSearchParamsStore()
        const ListingsStore = useListingsStore()

        return {
            SearchParamsStore,
            ListingsStore
        }
    },
    created(){

        const division = this.$route.params.division == 'residential' ? 1 : 2
        this.SearchParamsStore.division = division
        this.SearchParamsStore.category = this.$route.params.category
        this.fetchListings();

    }, 
    computed: {
        pageTitle(){
            return this.titleCase(this.$route.params.division) + ' properties for ' + this.$route.params.category
        }
    },
    methods: {

        async fetchListings(){
            const params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state)

            console.log(params)

            this.ListingsStore.listings = await ListingsServices._getListings(params)
        }, 

        titleCase(str) {
            return str.toLowerCase().split(' ').map(function(word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }

    }
}

</script>