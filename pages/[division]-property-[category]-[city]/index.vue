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
                    aria-describedby="button-addon2"
                    v-model="SearchParamsStore.search"
                    v-on:input="fetchSuggestions">
                    <div class="w-full bg-white border text-left">
                        <ul>
                            <li v-for="(suggestion, key) in suggestions.data" :index="key">
                                <button type="button" class="w-full h-full p-2 cursor-pointer hover:bg-gray-100 text-left"
                                    @click="updateQuery(suggestion.location, suggestion.description)">
                                {{ suggestion.location }} ({{ suggestion.description }})
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex gap-4 h-8">
                <select class="w-[139px] border rounded-lg text-sm px-3" v-model="SearchParamsStore.division"
                    @change="updateDivision"
                >
                    <option value="null">Division</option>
                    <option value="1">Residential</option>
                    <option value="2">Commercial</option>
                </select>
                <select class="w-[139px] border rounded-lg text-sm px-3" v-model="SearchParamsStore.category"
                    @change="updateCategory"
                >
                    <option value="null">Category</option>
                    <option value="sale">Buy</option>
                    <option value="rent">Rent</option>
                </select>
                <select class="w-[139px] border rounded-lg text-sm px-3" v-model="SearchParamsStore.type_name">
                    <option value="null">Type</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="lot">Lot</option>
                </select>
                <div class="flex flex-1">
                    <input type="text" placeholder="1,375,000" class="w-1/3 border rounded-l-lg text-sm focus:outline-none px-4" v-model="SearchParamsStore.priceMin">
                    <input type="text" placeholder="2,000,000" class="w-1/3 border-y text-sm focus:outline-none px-4" v-model="SearchParamsStore.priceMax">
                    <select class="w-1/3 border rounded-r-lg text-sm px-3" v-model="SearchParamsStore.priceParam">
                        <option value="pps">P / sqm</option>
                        <option value="price">Price</option>
                    </select>
                </div>
                <select class="w-[139px] border rounded-lg text-sm px-3" v-model="SearchParamsStore.bedrooms" v-if="SearchParamsStore.division == 1">
                    <option value="null">Bedrooms</option>
                    <option value="0">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3+</option>
                </select>
                <button
                    class="w-[139px] h-full bg-green-default flex justify-center text-white rounded-lg font-bold"
                    type="button"
                    id="button-addon2"
                    @click="initiateSearch">
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
            <ul>
                <li>
                    <button>

                    </button>
                </li>
            </ul>
        </div>

        <section>

            <div class="grid grid-cols-3 gap-8">
                <ListingsListing v-for="(listing, index) in ListingsStore.listings.data.data" :key="index" :listing="listing"/>
            </div>

            <nav class="w-full flex justify-center mt-8">
                <ul class="flex gap-3">
                    <li v-for="(link, index) in ListingsStore.listings.data.meta.links">
                        <button class="text-sm" v-html="link.label"
                            :class="link.active ? 'text-blue-default' : '' "
                            v-if="!link.active"
                            @click.prevent="updatePage(link.label)"
                        >
                        </button>
                        <span v-else class="text-blue-default text-sm" v-html="link.label"></span>
                    </li>
                </ul>
            </nav>

        </section>
    </section>
</template>

<script>

import { useSearchParamsStore } from '@/stores/SearchParamsStore'
import { useListingsStore } from '@/stores/ListingsStore'
import ListingsServices from '@/services/ListingsServices'

export default {   
    data(){
        return {
            suggestions: []
        }
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
        useHead({
            title: `${this.pageTitle} | Housinginteractive.com.ph`
        })

        const division = this.$route.params.division == 'residential' ? 1 : 2
        this.SearchParamsStore.division = division
        this.SearchParamsStore.category = this.$route.params.category
        this.SearchParamsStore.city_name = this.$route.params.city
        this.fetchListings();

    }, 
    computed: {
        pageTitle(){
            return this.titleCase(this.$route.params.division) + ' properties for ' + this.$route.params.category + ' in ' + this.titleCase(this.$route.params.city.replace('-', ' '))
        }
    },
    methods: {
        async fetchSuggestions(event){
            const params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state) + '&search=' + event.target.value
            this.suggestions = await ListingsServices._getSuggestions(params)
            
            if(this.suggestions.data.data){
                this.suggestions.data = this.suggestions.data.data
            }

        },

        async fetchListings(){
            const params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state)
            this.ListingsStore.listings = await ListingsServices._getListings(params)
        }, 

        updateQuery(value, description){
            this.SearchParamsStore.search = value
            this.SearchParamsStore.searchDescription = description
            this.suggestions = []
        },

        titleCase(str) {
            return str.toLowerCase().split(' ').map(function(word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        },

        updateDivision(){
            this.SearchParamsStore.priceParam = this.SearchParamsStore.division == 1 ?  'price' : 'pps'
            this.SearchParamsStore.priceMin = 0
            this.SearchParamsStore.priceMax = 0
        }, 

        updateCategory(){
            this.SearchParamsStore.category == 'rent' ? this.SearchParamsStore.category = 'sale' : this.SearchParamsStore.category = 'rent'
            this.fetchListings()
        },

        updatePriceParam(event){
            this.SearchParamsStore.priceParam = event.target.value
            this.SearchParamsStore.priceMin = 0
            this.SearchParamsStore.priceMax = 0
        },

        updateBedrooms(event){
            this.SearchParamsStore.bedrooms = event.target.value
            this.fetchListings()
        },

        updatePage(value){

            if(value == '&laquo;'){
                this.SearchParamsStore.page--
            } else if (value == '&raquo;'){
                this.SearchParamsStore.page++
            } else {
                this.SearchParamsStore.page = parseInt(value)
            }
            this.fetchListings()
        },
        initiateSearch(){  

            const division = this.SearchParamsStore.division == 1 ? 'residential' : 'commercial'
            let landingPage = '/'+division+'-property-'+this.SearchParamsStore.category

            if(this.SearchParamsStore.search !== null && this.SearchParamsStore.searchDescription.includes('City')){

                landingPage += '-'+this.SearchParamsStore.search.toLowerCase()
                this.SearchParamsStore.search = null
                this.SearchParamsStore.searchDescription = null

            }

            navigateTo(landingPage)

        }

    }
}

</script>