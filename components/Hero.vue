<template>
    <section class="bg-gray-100 bg-blend-luminosity bg-no-repeat bg-bottom bg-contain lg:bg-auto bg-[url('/images/city.png')]">
        <div class="container mx-auto h-[463px] lg:h-[720px] text-center lg:pt-16 lg:pb-32 flex flex-col items-center bg-bottom ">
            <h1 class="text-3xl font-bold align-middle pt-14">Your next move?</h1>
            <h2 class="text-xl align-middle pb-14">Search for your properties for sale or rent in the Philippines</h2>

            <form class="w-full lg:w-1/2 lg:mx-auto px-7">
                <div class="relative h-12 rounded-lg bg-white border flex justify-between items-stretch mb-4 p-2 lg:p-0">
                    <div class="lg:w-12 h-full p-1 lg:p-3">
                        <font-awesome-icon icon="magnifying-glass" :style="{ color: '#dadada', height: '20px' }"/>
                    </div>
                    <div class="flex-1 relative">
                        <input
                        type="text"
                        class="w-full h-full focus:outline-none text-sm lg:text-xl font-500"
                        placeholder="Search by building, city or area"
                        aria-label="Search by building, city or area"
                        aria-describedby="button-addon2"
                        v-model="SearchParamsStore.search"
                        v-on:input="fetchSuggestions"/>
                        <div class="w-full bg-white border text-left" v-if="showSuggestions">
                            <ul>
                                <li v-for="(suggestion, key) in suggestions.data" :index="key">
                                    <button type="button" class="w-full h-full p-2 cursor-pointer hover:bg-gray-100 text-left"
                                        @click="updateQuery(suggestion.location, suggestion.description, suggestion.city, suggestion.area)">
                                    {{ suggestion.location }} ({{ suggestion.description }})
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button
                        class="lg:w-32 lg:h-full flex items-center rounded px-2 text-white lg:rounded-r-lg lg:font-bold "
                        :class="[SearchParamsStore.division == 1 ? 'bg-green-default' : 'bg-blue-default']"
                        type="button"
                        id="button-addon2"
                        @click="initiateSearch">
                        <div class="w-12 h-full p-3 hidden lg:block">
                            <font-awesome-icon icon="magnifying-glass" :style="{ color: '#fff' }"/>
                        </div>
                        <p class="text-white flex rounded-lg items-center text-sm lg:text-xl font-circularxx">
                            Search
                        </p>
                    </button>
                </div>
                <div class="lg:flex gap-6 hidden">
                    <div class="flex gap-4">
                        <div 
                            class="rounded-lg h-10 p-0.5"
                            :class="SearchParamsStore.division == 1 ? 'bg-green-default' : 'bg-blue-default'"
                            >
                            <button 
                                class="bg-white font-bold py-1.5 px-4 mr-4 rounded-lg flex items-center gap-4"
                                :class="SearchParamsStore.division == 1 ? 'border-green-default' : 'border-blue-default'"
                                @click.prevent="updateDivision()"
                                >
                                <p>{{ SearchParamsStore.division == 1 ? 'Residential' : 'Commercial' }}</p>
                                <span 
                                    class="rounded-full w-2 h-2"
                                    :class="SearchParamsStore.division == 1 ? 'bg-green-default' : 'bg-blue-default'"
                                    >&nbsp;</span>
                            </button>
                        </div>
                        <div 
                            class="rounded-lg h-10 p-0.5"
                            :class="SearchParamsStore.category == 'rent' ? 'bg-'+defaultColor+'-default' : 'bg-gray-default'"
                            >
                            <button 
                                type="submit"
                                class="bg-white font-bold py-1.5 px-4 mr-4 rounded-lg flex items-center gap-4"
                                :class="SearchParamsStore.category == 1 ? 'border-'+defaultColor+'-default' : 'border-gray-default'"
                                @click.prevent="updateCategory()"
                                >
                                <p>{{ SearchParamsStore.category == 'rent' ? 'Rent' : 'Buy' }}</p>
                                <span 
                                    class="rounded-full w-2 h-2"
                                    :class="SearchParamsStore.category == 'rent' ? 'bg-'+defaultColor+'-default' : 'bg-gray-default'"
                                    >&nbsp;</span>
                            </button>
                        </div>
                    </div>
                    <div class="flex justify-between gap-4">
                        <div class="flex flex-1">
                            <input type="text" placeholder="1,375,000" v-model="SearchParamsStore.priceMin" class="w-1/3 border rounded-l-lg text-sm focus:outline-none px-4"
                                v-on:keyup="formatNumber($event)"
                            >
                            <input type="text" placeholder="2,000,000" v-model="SearchParamsStore.priceMax" class="w-1/3 border-y text-sm focus:outline-none px-4">
                            <select class="w-1/3 border rounded-r-lg text-sm px-3" v-model="SearchParamsStore.priceParam" @change="updatePriceParam($event)">
                                <option value="pps">P / sqm</option>
                                <option value="price">Price</option>
                            </select>
                        </div>
                        <div class="w-1/4" v-if="SearchParamsStore.division == 1">
                            <select class="w-full border rounded-lg h-full text-sm px-3" @change="updateBedrooms($event)">
                                <option value="">Bedrooms</option>
                                <option value="0">Studio</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3+</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2 lg:hidden">
                    <div>
                        <select class="w-full border rounded-lg h-[32px] text-sm px-3" @change="updateBedrooms($event)">
                            <option value="sale">Buy</option>
                            <option value="rent">Rent</option>
                        </select>
                    </div>
                    <div>
                        <select class="w-full border rounded-lg h-[32px] text-sm px-3" @change="updateBedrooms($event)">
                            <option value="">Type</option>
                            <option value="condo">Condo</option>
                            <option value="house">House</option>
                            <option value="lot">Lot</option>
                        </select>
                    </div>
                    <div>
                        <select class="w-full border rounded-lg h-[32px] text-sm px-3" @change="updateBedrooms($event)">
                            <option value="">Bedrooms</option>
                            <option value="0">Studio</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3+</option>
                        </select>
                    </div>
                    <div>
                        <select class="w-full border rounded-lg h-[32px] text-sm px-3" @change="updateBedrooms($event)">
                            <option value="">Bedrooms</option>
                            <option value="0">Studio</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3+</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { useSearchParamsStore } from '../stores/SearchParamsStore'
import { useListingsStore } from '../stores/ListingsStore'
import ListingsServices from '../services/ListingsServices'

export default {
    data(){
        return {
            showSuggestions: false,
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

    computed:{
        defaultColor(){
            return this.SearchParamsStore.division == 1 ? 'green' : 'blue'
        }
    },

    methods: {
        async fetchSuggestions(event){
            this.SearchParamsStore.triggered = false
            const params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state) + '&search=' + event.target.value

            this.suggestions = await ListingsServices._getSuggestions(params)
            
            if(this.suggestions.data.data){
                this.suggestions.data = this.suggestions.data.data
            }
            this.showSuggestions = true

        },

        async fetchListings(){
            let params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state)

            if(this.SearchParamsStore.query !== null){
                params += '&searchColumn=location'
            }

            if(!this.SearchParamsStore.triggered){
                this.ListingsStore.listings = await ListingsServices._getListings(params)
            }
        }, 

        updateQuery(value, description, city, area){
            this.SearchParamsStore.search = value
            this.SearchParamsStore.searchDescription = description
            this.SearchParamsStore.city_name = city
            this.SearchParamsStore.area_name = area
            this.suggestions = []
            this.showSuggestions = false
        },

        updateDivision(){
            this.SearchParamsStore.division = this.SearchParamsStore.division == 1 ?  2 : 1
            this.SearchParamsStore.priceParam = this.SearchParamsStore.division == 1 ?  'price' : 'pps'
            this.SearchParamsStore.priceMin = 0
            this.SearchParamsStore.priceMax = 0
            this.fetchListings()
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

        initiateSearch(){  

            const division = this.SearchParamsStore.division == 1 ? 'residential' : 'commercial'
            let landingPage = '/'+division+'-property-'+this.SearchParamsStore.category
            
            if(this.SearchParamsStore.search !== null){

                if(this.SearchParamsStore.searchDescription.includes('Building')){
                    landingPage += '-'+this.SearchParamsStore.city_name+'/'
                    landingPage += this.SearchParamsStore.area_name+'/'
                    landingPage += this.SearchParamsStore.search.toLowerCase().replace(' ', '-')
                } else if(this.SearchParamsStore.searchDescription.includes('Area')) {
                    landingPage += '-'+this.SearchParamsStore.city_name+'/'
                    landingPage += this.SearchParamsStore.search.toLowerCase().replace(' ', '-')
                } else if(this.SearchParamsStore.searchDescription.includes('City')){
                    landingPage += '-'+this.SearchParamsStore.search.toLowerCase()
                }

                this.SearchParamsStore.search = null
                this.SearchParamsStore.city_name = null
                this.SearchParamsStore.area_name = null
                this.SearchParamsStore.searchDescription = null

            }

            window.location.href = landingPage
            
        },

        formatNumber(event){
            console.log(event.target.value)
        }
    }
}
</script>