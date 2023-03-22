<template>
    <div>
        <ListingsSearch />

        <section class="w-9/12 max-w-7xl mx-auto mb-8">
            <div class="flex gap-2 justify-between mb-8">
                <div>
                    <h1 class="text-2xl font-bold">{{ listingData.property_name }}</h1>
                    <h6 class="flex h-[17px] gap-2">{{ listingData.address }} <font-awesome-icon icon="location-dot" style="height: 17px; color: #2f80ed"/></h6>
                </div>
                <div>
                    <div class="flex bg-blue-light w-[297px] h-[52px] rounded-full items-center p-2 gap-2" v-if="listingData.rent">
                        <p class="font-bold ml-5">Rental Price</p>
                        <span class="flex block bg-blue-default rounded-full h-[36px] items-center text-white flex-1 justify-center font-bold">{{ listingData.rental_price }} / month</span>
                    </div>

                    <div class="flex bg-blue-light w-[297px] h-[52px] rounded-full items-center p-2 gap-2"
                        :class="listingData.rent ? 'mt-4' : ''"
                        v-if="listingData.sale"
                    >
                        <p class="font-bold ml-5">Sale Price</p>
                        <span class="flex block bg-blue-default rounded-full h-[36px] items-center text-white flex-1 justify-center font-bold">{{ listingData.sale_price }}</span>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-2 gap-2 mb-8">
                <div class="grid grid-cols-1 grid-rows-1 object-fit">
                    <img :src="images[0].url" alt="" class="h-full rounded-lg cursor-pointer"
                        v-on:click="toggleGallery()">
                </div>
                <div class="grid grid-cols-2 grid-rows-2 gap-2">
                    <img v-for="n in 4" :src="images[n].url" alt="" class="rounded-lg cursor-pointer" v-on:click="toggleGallery()">
                </div>
            </div>

            <div class="flex justify-between mb-8">
                <div>
                    <div class="flex gap-8">
                        <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-[175px] h-16">
                            <img src="/images/home.png" alt=""> 
                            <div>
                                <p class="font-bold uppercase">Status</p>
                                <p>{{ listingData.status_name }}</p>
                            </div>
                        </div>
                        <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-[175px] h-16">
                            <img src="/images/calendar.png" alt=""> 
                            <div>
                                <p class="font-bold uppercase">Available On</p>
                                <p>{{ listingData.availability }}</p>
                            </div>
                        </div>
                        <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-[175px] h-16">
                            <img src="/images/calendar.png" alt=""> 
                            <div>
                                <p class="font-bold uppercase">Last Updated</p>
                                <p>{{ listingData.last_updated }}</p>
                            </div>
                        </div>
                    </div>

                    <div class="my-8">
                        <p>{{ description }}</p>
                    </div>

                    <div class="mb-8">
                        <h3 class="font-bold text-xl mb-4">Attributes</h3>
                        <ul>
                            <li class="flex mb-4 ml-4 items-center gap-2">
                                <img src="/images/bedroom.png" alt=""> 
                                <span>Bedrooms: {{ listingData.bedrooms }}</span>
                            </li>
                            <li class="flex mb-4 ml-4 items-center gap-2">
                                <img src="/images/bathroom.png" alt="">
                                <span>Bathrooms: {{ listingData.bathrooms }}</span>
                            </li>
                            <li class="flex mb-4 ml-4 items-center gap-2">
                                <img src="/images/floorarea.png" alt="">
                                <span>Floor Area: {{ listingData.floor }} sqm</span>
                            </li>
                            <li class="flex mb-4 ml-4 items-center gap-2" v-if="lot > 0">
                                <img src="/images/area.png" alt="">
                                <span>Lot Area: {{ listingData.lot }}</span>
                            </li>
                            <li class="flex mb-4 ml-4 items-center gap-2" v-if="parking > 0">
                                <img src="/images/parking.png" alt="">
                                <span>Parking: {{ listingData.parking }}</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 class="font-bold text-xl mb-4">Building amenities & unit features</h3>
                        <ul>
                            <li v-for="(amenity, index) in listingData.amenities" :key="index" class="flex mb-4 ml-4 gap-2">
                                <img src="/images/check.png" alt="">
                                <span>{{ amenity.name }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="w-[380px] bg-gray-50 rounded-lg px-6 py-4">
                        <div class="flex gap-4 mb-6">
                            <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" class="w-16 h-16 rounded-full" alt="">
                            <div>
                                <p class="font-bold">{{ listingData.uploader }}</p>
                                <p>Address: 6th floor LDM Building</p>
                                <p>Polaris St. Makati City</p>
                                <p>Telephone: (632) 8097574</p>
                            </div>
                        </div>
                        <button class="w-full bg-green-default text-center py-2 text-white font-bold rounded-lg" v-on:click="toggleEnquiry()">
                            Ask Agent
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <!-- <GoogleMaps /> -->
            </div>

            <div>
                <h3 class="font-bold text-xl mb-4">Other residential properties for rent</h3>
                <section class="grid grid-cols-3 gap-8">
                    <ListingsListing v-for="(listing, index) in listingData.other" :key="index" :listing="listing"/>
                </section>
            </div>
        </section>
        <ListingsGallery 
            :showGallery="showGallery"
            :listingData="listingData" 
            :images="images"
            @toggleGallery="toggleGallery"/>
        <ListingsEnquiry 
            :showEnquiry="showEnquiry"
            :listingData="listingData" 
            @toggleEnquiry="toggleEnquiry"/>
    </div>
</template>

<script>
import { useListingsStore } from '~/stores/ListingsStore'
import ListingsServices from '~/services/ListingsServices'

export default {
    data(){
        return {
            listing: [],
            images: {},
            listingData: {
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
                sale: false,
                uploader: ''
            },
            showGallery: false,
            showEnquiry: false
        }
    },

    setup(){
        const ListingsStore = useListingsStore()

        return {
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
            this.listingData.property_name = this.listing.data.property_name
            this.listingData.address = this.listing.data.area_name+', '+this.listing.data.city_name
            this.listingData.rental_price = "₱ "+this.formatMoney(this.listing.data.rent_price)
            this.listingData.sale_price = "₱ "+this.formatMoney(this.listing.data.sale_price)
            this.listingData.status_name = this.listing.data.status_name
            this.listingData.availability = this.listing.data.formatted_availability
            this.listingData.last_updated = this.listing.data.updated_at
            this.listingData.description = this.listing.data.description
            this.listingData.bedrooms = this.listing.data.bedrooms
            this.listingData.bathrooms = this.listing.data.bathrooms
            this.listingData.floor = this.listing.data.floor_area
            this.listingData.lot = this.listing.data.lot_area
            this.listingData.parking = this.listing.data.car_space
            this.listingData.amenities = this.listing.data.amenities
            this.listingData.other = this.listing.other
            this.listingData.sale = this.listing.data.is_for_sale ? true : false
            this.listingData.rent = this.listing.data.is_for_rent ? true : false
            this.listingData.uploader = this.listing.data.uploader_name
        },

        async fetchListingImages(id){
            this.images = await ListingsServices._getListingImages(id).data
        },

        formatMoney(value){
            const numericValue = value.toString().length > 0 ? parseFloat(value.toString().replace(/,/g, '')) : 0;
            return (new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(numericValue));
        },

        toggleGallery(){
            this.showGallery = !this.showGallery
        },

        toggleEnquiry(){
            this.showEnquiry = !this.showEnquiry
        }
    }
}
</script>