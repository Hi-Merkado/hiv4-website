<template>
    <div>
        <ListingsSearch />

       <section class="lg:w-11/12 lg:max-w-7xl md:w-10/12 mx-auto mb-8 p-4" v-if="listing.data">
            <ul class="flex flex-wrap items-center gap-2 text-sm">
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
                </li>
                <li>
                    <a :href="listing.data.parentUrl">{{ listing.data.parentTitle }}</a>
                </li>
                <li>
                    <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
                </li>
                <li>
                    <a :href="listing.data.cityUrl">{{ listing.data.city_name }}</a>
                </li>
                <li>
                    <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
                </li>
                <li class="text-gray-400" v-if="listing.data.area_name !== null">{{ listing.data.area_name }}</li>
            </ul>
            <div class="flex flex-wrap md:flex-row md:flex-nowrap gap-2 justify-between my-8">
                <div>
                    <h1 class="text-xl lg:text-2xl font-bold">{{ listing.data.property_name }}</h1>
                    <h6 class="flex h-[17px] gap-2 my-4"><font-awesome-icon icon="location-dot" style="height: 17px; color: #2f80ed"/> {{ listing.data.address }}</h6>
                    <h6 class="flex h-[17px] gap-2 my-4 lg:my-0" v-if="listing.data.building_name"><font-awesome-icon icon="building" style="height: 17px; color: #2f80ed"/> <a :href="buildingLink()">{{ listing.data.building_name }}</a> </h6>
                </div>
                <div class="w-full md:w-auto">
                    <div 
                        class="flex lg:w-[297px] h-[52px] rounded-full items-center p-2 gap-2"
                        :class="SearchParamsStore.division == 1 ? 'bg-green-light' : 'bg-blue-light'"
                        v-if="listing.data.is_for_rent">
                        <p class="font-bold ml-5">Rental Price</p>
                        <span class="flex block rounded-full h-[36px] items-center text-white flex-1 justify-center font-bold"
                        :class="SearchParamsStore.division == 1 ? 'bg-green-default' : 'bg-blue-default'"
                        >₱ {{ listing.data.formatted_rent_price }} / month</span>
                    </div>

                    <div class="flex w-full lg:w-[297px] h-[52px] rounded-full items-center p-2 gap-2"
                        :class="[listing.data.is_for_sale ? 'mt-4' : '', SearchParamsStore.division == 1 ? 'bg-green-light' : 'bg-blue-light' ]"
                        v-if="listing.data.sale_price"
                    >
                        <p class="font-bold ml-5">Sale Price</p>
                        <span class="flex block rounded-full h-[36px] items-center text-white flex-1 justify-center font-bold"
                            :class="SearchParamsStore.division == 1 ? 'bg-green-default' : 'bg-blue-default'"
                        >₱ {{ listing.data.formatted_sale_price }}</span>
                    </div>
                </div>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-2 mb-8">
                <div class="grid grid-cols-1 grid-rows-1 object-fit md:object-contain">
                    <img :src="listing.data.thumbnail" alt="" class="md:w-full h-[466px] rounded-lg cursor-pointer"
                        v-on:click="toggleGallery()">
                </div>
                <div class="xs:hidden md:hidden lg:grid grid-cols-2 grid-rows-2 gap-2 place-items-center">
                    <img v-for="(thumbnail, index) in listing.data.images" :src="thumbnail.url" :key="index" :alt="thumbnail.name" class="rounded-lg cursor-pointer h-[222px]" v-on:click="toggleGallery()">
                </div>
            </div>

            <div class="flex flex-col lg:flex-row justify-between mb-8">
                <div>
                    <div class="flex flex-col md:flex-row lg:flex-row gap-8">
                        <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-full lg:w-[175px] h-16">
                            <font-awesome-icon :icon="['fas', 'house']" style="height: 20px; color: #808080"/>
                            <div>
                                <p class="font-bold uppercase">Status</p>
                                <p>{{ listing.data.status_name }}</p>
                            </div>
                        </div>
                        <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-full lg:w-[175px] h-16">
                            <font-awesome-icon :icon="['fas', 'calendar']" style="height: 20px; color: #808080"/>
                            <div>
                                <p class="font-bold uppercase">Available On</p>
                                <p>{{ listing.data.formatted_availability }}</p>
                            </div>
                        </div>
                        <div class="flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 items-center w-full lg:w-[175px] h-16">
                            <font-awesome-icon :icon="['fas', 'calendar']" style="height: 20px; color: #808080"/>
                            <div>
                                <p class="font-bold uppercase">Last Updated</p>
                                <p>{{ listing.data.updated_at }}</p>
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
                                <font-awesome-icon :icon="['fas', 'bed']" style="height: 20px; color: #808080"/>
                                <span>Bedrooms: {{ listing.data.bedrooms > 0 ? listing.data.bedrooms : 'Studio' }}</span>
                            </li>
                            <li class="flex mb-4 ml-4 items-center gap-2" v-if="listing.data.bathrooms > 0">
                                <font-awesome-icon :icon="['fas', 'bath']" style="height: 20px; color: #808080"/>
                                <span>Bathrooms: {{ listing.data.bathrooms }}</span>
                            </li>
                            <li class="flex mb-4 ml-4 items-center gap-2" v-if="listing.data.floor > 0">
                                <img src="/images/floorarea.png" alt="">
                                <span>Floor Area: {{ listing.data.floor }} sqm</span>
                            </li>
                            <li class="flex mb-4 ml-4 items-center gap-2" v-if="listing.data.lot > 0">
                                <img src="/images/area.png" alt="">
                                <span>Lot Area: {{ listing.data.lot }}</span>
                            </li>
                            <li class="flex mb-4 ml-4 items-center gap-2" v-if="listing.data.parking > 0">
                                <font-awesome-icon :icon="['fas', 'square-parking']" style="height: 20px; color: #808080"/>
                                <span>Parking: {{ listing.data.parking }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div class="w-full lg:w-[380px] bg-gray-50 rounded-lg px-6 py-4">
                        <div class="flex gap-4 mb-6">
                            <!-- <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" class="w-16 h-16 rounded-full" alt=""> -->
                            <div>
                                <p class="font-bold">{{ listing.data.uploader_name }}</p>
                                <p>Address: 6th floor LDM Building</p>
                                <p>Polaris St. Makati City</p>
                                <!-- <p>Telephone: (632) 8097574</p> -->
                            </div>
                        </div>
                        <button class="w-full bg-green-default text-center py-2 text-white font-bold rounded-lg" v-on:click="toggleEnquiry()">
                            Ask Agent
                        </button>
                    </div>
                </div>
            </div>

            <template v-if="listing.data.longitude">
                <div class="mb-8">
                    <h3 class="font-bold text-xl mb-4">Location</h3>
                    <GoogleMaps :location="{ lat: listing.data.latitude, lng: listing.data.longitude }"/>
                </div>
            </template>
        </section>
        <ListingsEnquiry @toggleEnquiry="toggleEnquiry"/>
    </div>
</template>

<style>
    .slides-container {
        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
    }
    .slides-container::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
</style>

<script>

import { useSearchParamsStore } from '~/stores/SearchParamsStore'
import { useEnquiryStore } from '~/stores/EnquiryStore'
import ListingsServices from '~/services/ListingsServices'
import { watchEffect } from 'vue'

export default {
    data(){
        return {
            listing: [],
            id: 0,
            images: {},
            thumbnails: {},
            showGallery: false,
            showEnquiry: false,
        }
    },

    setup(){
        const SearchParamsStore = useSearchParamsStore()
        const EnquiryStore = useEnquiryStore()

        return {
            SearchParamsStore,
            EnquiryStore
        }
    },

    created(){
        watchEffect(() => {
            let slug = this.$route.params.slug[0].split('-')
            this.id = slug.slice(-1)[0]
           this.fetchListing(this.id)         
            this.fetchListingImages(this.id)     
        })
    }, 

    mounted(){
        watchEffect(() => {
            let slug = this.$route.params.slug[0].split('-')
            this.id = slug.slice(-1)[0]
            this.fetchListing(this.id)         
            this.fetchListingImages(this.id)     
        })
        ListingsServices._recordVisit(this.id)

    },

    methods: {
        getWidth(){
            return this.$refs.slide.clientWidth
        },

        getHeight(){
            return this.$refs.slide.clientHeight
        },

        nextSlide(){
            this.$refs.slidesContainer.scrollLeft += 408
        },

        prevSlide(){
            this.$refs.slidesContainer.scrollLeft -= 408
        },

        async fetchListing(id){
            let listing = await ListingsServices._getListing(id)
            this.listing = listing.data
            
//            this.EnquiryStore.listing = this.listing.data
        },

        async fetchListingImages(id){
            this.images = await ListingsServices._getListingImages(id).data
        },

        formatMoney(value){
            let numericValue  = 0

            if(value != null ){
                numericValue = value.toString().length > 0 ? parseFloat(value.toString().replace(/,/g, '')) : 0;
            }
            return (new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(numericValue));
        },

        toggleGallery(){
            this.showGallery = !this.showGallery
        },

        toggleEnquiry(){
            this.EnquiryStore.showEnquiry = !this.EnquiryStore.showEnquiry
        },

        buildingLink(){
            return '/building/'+ this.listing.data.buildling_slug
        }
    }
}
</script>
