<template>
    <section class="shadow-lg">
        <div class="md:container mx-auto flex gap-4 px-4 lg:px-7 py-4 mb-4">
            <div class="relative w-full lg:w-1/4 h-8 rounded-lg bg-white border flex justify-between items-stretch">
                <div class="w-8 h-full p-2">
                    <font-awesome-icon icon="magnifying-glass" :style="{ color: '#dadada' }"/>
                </div>
                <div class="flex-1 relative z-20">
                    <input
                    type="text"
                    class="w-full h-full focus:outline-none text-xs font-500"
                    placeholder="Search by building, city or area"
                    aria-label="Search by building, city or area"
                    aria-describedby="button-addon2"
                    v-model="SearchParamsStore.search"
                    v-on:input="fetchSuggestions">
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
                    class="lg:hidden w-[100px] h-full bg-green-default flex justify-center text-white rounded-r-lg font-bold"
                    type="button"
                    id="button-addon2"
                    @click="initiateSearch">
                    <p class="text-white pt-1.5 text-md font-circularxx">
                        Search
                    </p>
                </button>
            </div>
            <div class="hidden lg:flex gap-4 h-8 ">
                <select class="w-[139px] border rounded-lg text-sm px-3" v-model="SearchParamsStore.division"
                    @change="updateDivision"
                >
                    <option value="1">Residential</option>
                    <option value="2">Commercial</option>
                </select>
                <select class="w-[139px] border rounded-lg text-sm px-3" v-model="SearchParamsStore.category"
                    @change="updateCategory"
                >
                    <option value="sale">Buy</option>
                    <option value="rent">Rent</option>
                </select>
                <select class="w-[139px] border rounded-lg text-sm px-3" v-model="SearchParamsStore.type_name"
                >
                    <option v-for="(type, index) in types" :key="index" :value="type.slug">{{ type.name }}</option>
                </select>
                <div class="flex flex-1">
                    <input type="text" placeholder="1,375,000" class="w-1/3 border rounded-l-lg text-sm focus:outline-none px-4" v-on:keyup="formatNumber($event)" v-model="SearchParamsStore.priceMin">
                    <input type="text" placeholder="2,000,000" class="w-1/3 border-y text-sm focus:outline-none px-4" v-on:keyup="formatNumber($event)" v-model="SearchParamsStore.priceMax">
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
</template>


<script>
import { useSearchParamsStore } from '~/stores/SearchParamsStore'
import ListingsServices from '~/services/ListingsServices'

export default {
    data(){
        return {
            showSuggestions: false,
            suggestions: [],
            showGallery: false,
            showEnquiry: false,
            types: []
        }
    },

    setup(){
        const SearchParamsStore = useSearchParamsStore()

        return {
            SearchParamsStore
        }
    },

    created() {
        this.fetchDivisionTypes()
    },

    methods: {
        async fetchSuggestions(event){
            const params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state) + '&search=' + event.target.value
            this.suggestions = await ListingsServices._getSuggestions(params)
            
            if(this.suggestions.data.data){
                this.suggestions.data = this.suggestions.data.data
            }
            this.showSuggestions = true

        },

        async fetchDivisionTypes(){
            this.types = ListingsServices._getDivisionTypes(this.SearchParamsStore.division).data
        }, 

        updateQuery(value, description, city, area){
            this.SearchParamsStore.search = value
            this.SearchParamsStore.searchDescription = description
            this.SearchParamsStore.city_name = city
            this.SearchParamsStore.area_name = area
            this.suggestions = []
            this.showSuggestions = false
            this.SearchParamsStore.triggered = true
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
            this.fetchDivisionTypes();
        }, 

        updateCategory(){
            this.SearchParamsStore.category == 'rent' ? this.SearchParamsStore.category = 'rent' : this.SearchParamsStore.category = 'sale'
            this.fetchListings()
        },

        updateType(){
            // this.SearchParamsStore.type_name
            // this.fetchListings()
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

            this.SearchParamsStore.triggered = false

            const division = this.SearchParamsStore.division == 1 ? 'residential' : 'commercial'
            const type = this.SearchParamsStore.type_name

            let landingPage = '/'+division+'-property-'+this.SearchParamsStore.category

            if( type != null ){
                landingPage = '/'+type+'-'+this.SearchParamsStore.category
            }

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

        formatMoney(event){
            this.SearchParamstore.priceMin = parseInt(this.SearchParamsStore.priceMin).toLocaleString('en-US')
        },

        formatNumber(event){
            let numberRegex = /^(?:-(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))|(?:0|(?:[1-9](?:\d{0,2}(?:,\d{3})+|\d*))))(?:.\d+|)$/

            console.log(event.target.id)

            let current_value = event.target.value

            if(numberRegex.test(current_value)){
                let tmp = current_value.replace(/,/g,'')
                let val = Number(tmp).toLocaleString('en-US')

                event.target.value = val
            } else {
                event.target.value = ''
            }


        }

    }

}
</script>