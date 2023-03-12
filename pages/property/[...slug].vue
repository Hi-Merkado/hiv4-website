<template>
    <div>
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
            <div class="flex gap-2 justify-between mb-8">
                <div>
                    <h1 class="text-2xl font-bold">{{ property_name }}</h1>
                    <h6 class="flex h-[17px] gap-2">{{ address }} <font-awesome-icon icon="location-dot" style="height: 17px; color: #2f80ed"/></h6>
                </div>
                <div>
                    <div class="flex bg-blue-light w-[297px] h-[52px] rounded-full items-center p-2 gap-2" v-if="rent">
                        <p class="font-bold ml-5">Rental Price</p>
                        <span class="flex block bg-blue-default rounded-full h-[36px] items-center text-white flex-1 justify-center font-bold">{{ rental_price }} / month</span>
                    </div>

                    <div class="flex bg-blue-light w-[297px] h-[52px] rounded-full items-center p-2 gap-2"
                        :class="rent ? 'mt-4' : ''"
                        v-if="sale"
                    >
                        <p class="font-bold ml-5">Sale Price</p>
                        <span class="flex block bg-blue-default rounded-full h-[36px] items-center text-white flex-1 justify-center font-bold">{{ sale_price }}</span>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-2 gap-2 mb-8">
                <div class="grid grid-cols-1 grid-rows-1 object-fit">
                    <img :src="images[0].url" alt="" class="h-full rounded-lg">
                </div>
                <div class="grid grid-cols-2 grid-rows-2 gap-2">
                    <img :src="images[1].url" alt="" class="rounded-lg">
                    <img :src="images[2].url" alt="" class="rounded-lg">
                    <img :src="images[3].url" alt="" class="rounded-lg">
                    <img :src="images[4].url" alt="" class="rounded-lg">
                </div>
            </div>

            <div class="flex justify-between mb-8">
                <div class="flex gap-8">
                    <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-[175px] h-16">
                        <img src="/images/home.png" alt=""> 
                        <div>
                            <p class="font-bold uppercase">Status</p>
                            <p v-html="status_name"></p>
                        </div>
                    </div>
                    <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-[175px] h-16">
                        <img src="/images/calendar.png" alt=""> 
                        <div>
                            <p class="font-bold uppercase">Available On</p>
                            <p v-html="availability"></p>
                        </div>
                    </div>
                    <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-[175px] h-16">
                        <img src="/images/calendar.png" alt=""> 
                        <div>
                            <p class="font-bold uppercase">Last Updated</p>
                            <p v-html="last_updated"></p>
                        </div>
                    </div>
                </div>
                <div class="w-[380px] bg-gray-50 rounded-lg px-6 py-4">
                    <div class="flex gap-4 mb-6">
                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" class="w-16 h-16 rounded-full" alt="">
                        <div>
                            <p class="font-bold">Marion Ramirez</p>
                            <p>Address: 6th floor LDM Building</p>
                            <p>Polaris St. Makati City</p>
                            <p>Telephone: (632) 8097574</p>
                        </div>
                    </div>
                    <button class="w-full bg-green-default text-center py-2 text-white font-bold rounded-lg ">
                        Ask Agent
                    </button>
                </div>
            </div>

            <div class="mb-8">
                <h3 class="font-bold text-xl mb-4">Attributes</h3>
                <ul>
                    <li class="flex mb-4 ml-4 items-center gap-2">
                        <img src="/images/bedroom.png" alt=""> 
                        <span>Bedrooms: {{ bedrooms }}</span>
                    </li>
                    <li class="flex mb-4 ml-4 items-center gap-2">
                        <img src="/images/bathroom.png" alt="">
                        <span>Bathrooms: {{ bathrooms }}</span>
                    </li>
                    <li class="flex mb-4 ml-4 items-center gap-2">
                        <img src="/images/floorarea.png" alt="">
                        <span>Floor Area: {{ floor }} sqm</span>
                    </li>
                    <li class="flex mb-4 ml-4 items-center gap-2" v-if="lot > 0">
                        <img src="/images/area.png" alt="">
                        <span>Lot Area: {{ lot }}</span>
                    </li>
                    <li class="flex mb-4 ml-4 items-center gap-2" v-if="parking > 0">
                        <img src="/images/parking.png" alt="">
                        <span>Parking: {{ parking }}</span>
                    </li>
                </ul>
                <p>{{ description }}</p>
            </div>

            <div>
                <h3 class="font-bold text-xl mb-4">Building amenities & unit features</h3>
                <ul>
                    <li v-for="(amenity, index) in amenities" :key="index" class="flex mb-4 ml-4 gap-2">
                        <img src="/images/check.png" alt="">
                        <span>{{ amenity.name }}</span>
                    </li>
                </ul>
            </div>

            <div class="mb-8">
                <h3 class="font-bold text-xl mb-4">Location</h3>
                <GoogleMaps />
            </div>

            <div>
                <h3 class="font-bold text-xl mb-4">Other residential properties for rent</h3>
                <section class="grid grid-cols-3 gap-8">
                    <ListingsListing v-for="(listing, index) in other" :key="index" :listing="listing"/>
                </section>
            </div>
        </section>

    </div>
</template>

<script>
import { useSearchParamsStore } from '~/stores/SearchParamsStore'
import { useListingsStore } from '~/stores/ListingsStore'
import ListingsServices from '~/services/ListingsServices'

export default {
    data(){
        return {
            suggestions: [],
            listing: [],
            images: {},
            property_name: '',
            address: '',
            status: '',
            availability: '',
            last_updated: '',
            bedrooms: 0,
            bathrooms: 0,
            floor: 0,
            lot: 0,
            parking: 0,
            amenities: {},
            other: {},
            rent: true,
            sale: false
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

        let slug = this.$route.params.slug[0].split('-')
        const id = slug.slice(-1)[0]

        this.fetchListing(id)
        this.fetchListingImages(id)

    }, 

    methods: {
        async fetchListing(id){
            this.listing = await ListingsServices._getListing(id).data
            this.property_name = this.listing.data.property_name
            this.address = this.listing.data.area_name+', '+this.listing.data.city_name
            this.rental_price = "₱ "+this.formatMoney(this.listing.data.rent_price)
            this.sale_price = "₱ "+this.formatMoney(this.listing.data.sale_price)
            this.status_name = this.listing.data.status_name
            this.availability = this.listing.data.formatted_availability
            this.last_updated = this.listing.data.updated_at
            this.description = this.listing.data.description
            this.bedrooms = this.listing.data.bedrooms
            this.bathrooms = this.listing.data.bathrooms
            this.floor = this.listing.data.floor_area
            this.lot = this.listing.data.lot_area
            this.parking = this.listing.data.car_space
            this.amenities = this.listing.data.amenities
            this.other = this.listing.other
            this.sale = this.listing.data.is_for_sale ? true : false
            this.rent = this.listing.data.is_for_rent ? true : false
            console.log(this.listing);
        },

        async fetchListingImages(id){
            this.images = await ListingsServices._getListingImages(id).data
        },

        formatMoney(value){
            const numericValue = value.toString().length > 0 ? parseFloat(value.toString().replace(/,/g, '')) : 0;
            return (new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(numericValue));
        }
    }
}
</script>