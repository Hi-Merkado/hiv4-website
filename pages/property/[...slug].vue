<template>
    <div>
        <ListingsSearch />

        <section class="lg:w-9/12 lg:max-w-7xl mx-auto mb-8 p-4">
            <ul class="flex flex-wrap items-center gap-2 text-sm">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
                </li>
                <li>
                    <a :href="listingData.parentUrl">{{ listingData.parentTitle }}</a>
                </li>
                <li>
                    <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
                </li>
                <li>
                    <a :href="listingData.cityUrl">{{ listingData.city }}</a>
                </li>
                <li>
                    <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
                </li>
                <li class="text-gray-400">{{ listingData.area }}</li>
            </ul>
            <div class="flex flex-wrap md:flex-row md:flex-nowrap gap-2 justify-between my-8">
                <div>
                    <h1 class="text-xl lg:text-2xl font-bold">{{ listingData.property_name }}</h1>
                    <h6 class="flex h-[17px] gap-2 my-4 lg:my-0">{{ listingData.address }} <font-awesome-icon icon="location-dot" style="height: 17px; color: #2f80ed"/></h6>
                </div>
                <div class="w-full md:w-auto">
                    <div class="flex bg-blue-light w-full lg:w-[297px] h-[52px] rounded-full items-center p-2 gap-2" v-if="listingData.rent">
                        <p class="font-bold ml-5">Rental Price</p>
                        <span class="flex block bg-blue-default rounded-full h-[36px] items-center text-white flex-1 justify-center font-bold">{{ listingData.rental_price }} / month</span>
                    </div>

                    <div class="flex bg-blue-light w-full lg:w-[297px] h-[52px] rounded-full items-center p-2 gap-2"
                        :class="listingData.rent ? 'mt-4' : ''"
                        v-if="listingData.sale"
                    >
                        <p class="font-bold ml-5">Sale Price</p>
                        <span class="flex block bg-blue-default rounded-full h-[36px] items-center text-white flex-1 justify-center font-bold">{{ listingData.sale_price }}</span>
                    </div>
                </div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-2 mb-8">
                <div class="grid grid-cols-1 grid-rows-1 object-fit md:object-contain">
                    <img :src="listingData.thumbnail" alt="" class="md:w-full h-full rounded-lg cursor-pointer"
                        v-on:click="toggleGallery()">
                </div>
                <div class="lg:grid grid-cols-2 grid-rows-2 gap-2 hidden">
                    <img v-for="(thumbnail, index) in thumbnails" :src="thumbnail.url" :key="index" :alt="thumbnail.name" class="rounded-lg cursor-pointer" v-on:click="toggleGallery()">
                </div>
            </div>

            <div class="flex flex-col lg:flex-row justify-between mb-8">
                <div>
                    <div class="flex flex-col md:flex-row lg:flex-row gap-8">
                        <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-full lg:w-[175px] h-16">
                            <img src="/images/home.png" alt=""> 
                            <div>
                                <p class="font-bold uppercase">Status</p>
                                <p>{{ listingData.status_name }}</p>
                            </div>
                        </div>
                        <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-full lg:w-[175px] h-16">
                            <img src="/images/calendar.png" alt=""> 
                            <div>
                                <p class="font-bold uppercase">Available On</p>
                                <p>{{ listingData.availability }}</p>
                            </div>
                        </div>
                        <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-full lg:w-[175px] h-16">
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
                    <div class="w-full lg:w-[380px] bg-gray-50 rounded-lg px-6 py-4">
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

            <div class="mb-8">
                <h3 class="font-bold text-xl mb-4">Location</h3>
                <GoogleMaps />
            </div>

            <div>
                <h3 class="font-bold text-xl mb-4">Other residential properties for rent</h3>
                <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            id: 0,
            images: {},
            thumbnails: {},
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
                uploader: '',
                thumbnail: '',
                parentTitle: '',
                parentUrl: '',
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
        this.id = slug.slice(-1)[0]
        this.fetchListing(this.id)
        this.fetchListingImages(this.id)
        this.fetchListingThumbnailImages(this.id)

    }, 

    methods: {
        async fetchListing(id){
            this.listing = await ListingsServices._getListing(id).data
            this.listingData.division       = this.listing.data.division_id == 1 ? 'Residential' : 'Commercial'
            this.listingData.category       = this.listing.data.is_for_rent == 1 ? 'Rent' : 'Sale' 
            this.listingData.property_name  = this.listing.data.property_name
            this.listingData.city           = this.listing.data.city_name
            this.listingData.area           = this.listing.data.area_name
            this.listingData.address        = this.listing.data.area_name+', '+this.listing.data.city_name
            this.listingData.rental_price   = "₱ "+this.formatMoney(this.listing.data.rent_price)
            this.listingData.sale_price     = "₱ "+this.formatMoney(this.listing.data.sale_price)
            this.listingData.status_name    = this.listing.data.status_name
            this.listingData.availability   = this.listing.data.formatted_availability
            this.listingData.last_updated   = this.listing.data.updated_at
            this.listingData.description    = this.listing.data.description
            this.listingData.bedrooms       = this.listing.data.bedrooms
            this.listingData.bathrooms      = this.listing.data.bathrooms
            this.listingData.floor          = this.listing.data.floor_area
            this.listingData.lot            = this.listing.data.lot_area
            this.listingData.parking        = this.listing.data.car_space
            this.listingData.amenities      = this.listing.data.amenities
            this.listingData.other          = this.listing.other
            this.listingData.sale           = this.listing.data.is_for_sale ? true : false
            this.listingData.rent           = this.listing.data.is_for_rent ? true : false
            this.listingData.uploader       = this.listing.data.uploader_name
            this.listingData.thumbnail      = this.listing.data.thumbnail
            this.listingData.parentTitle    = this.listingData.division + ' properties for ' + this.listingData.category
            this.listingData.parentUrl      = '/'+this.listingData.division.toLowerCase()+'-property-'+this.listingData.category.toLowerCase()
            this.listingData.cityUrl        = this.listingData.parentUrl+'-'+this.listing.data.city_name.toLowerCase()
        },

        async fetchListingThumbnailImages(id){
            this.thumbnails = await ListingsServices._getListingThumbnailImages(id).data
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