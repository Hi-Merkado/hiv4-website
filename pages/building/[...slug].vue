<template>
    <div>
        <ListingsSearch />

        <section class="w-full lg:w-11/12 lg:max-w-7xl mx-auto mb-8 p-4">
            <div class="flex gap-2 justify-between mb-8">
                <div>
                    <h1 class="text-2xl font-bold">{{ buildingData?.name }}</h1>
                    <h6 class="flex h-[17px] gap-2"><font-awesome-icon icon="location-dot" style="height: 17px; color: #2f80ed"/> {{ buildingData?.location }}</h6>
                </div>
                <div class="flex items-center" v-if="buildingData?.zonal_value">
                    <font-awesome-icon icon="star" style="height: 30px; color: #FF5856"></font-awesome-icon>
                    <div>
                        <p>Tower Zonal Value</p>
                        <p class="font-bold text-2xl">{{ buildingData?.zonal_value }}</p>
                    </div>
                </div>

            </div>
<!--             
            <div class="grid lg:grid-cols-2 gap-2 mb-8">
                <div class="grid lg:grid-cols-1 lg:grid-rows-1 lg:object-fit md:object-contain">
                    <img src="https://hi-web-cdn.s3.ap-southeast-1.amazonaws.com/hiv4/properties/property-564/9.1682645832.jpg" alt="" class="h-[466px] rounded-lg cursor-pointer w-full">
                </div>
                <div class="lg:grid grid-cols-2 grid-rows-2 gap-2 hidden lg:block">
                    <img src="https://hi-web-cdn.s3.ap-southeast-1.amazonaws.com/hiv4/properties/property-564/conversions/10.1682645833-635x423-watermarked.jpg" alt="" class="h-[222px] rounded-lg cursor-pointer" >
                    <img src="https://hi-web-cdn.s3.ap-southeast-1.amazonaws.com/hiv4/properties/property-564/conversions/10.1682645833-635x423-watermarked.jpg" alt="" class="h-[222px] rounded-lg cursor-pointer" >
                    <img src="https://hi-web-cdn.s3.ap-southeast-1.amazonaws.com/hiv4/properties/property-564/conversions/10.1682645833-635x423-watermarked.jpg" alt="" class="h-[222px] rounded-lg cursor-pointer" >
                    <img src="https://hi-web-cdn.s3.ap-southeast-1.amazonaws.com/hiv4/properties/property-564/9.1682645832.jpg" alt="" class="h-[222px] rounded-lg cursor-pointer" >
                </div>
            </div> -->

            <div class="flex flex-col lg:flex-row justify-between mb-8 gap-8">
                <div class="w-full">
                    <div class="grid lg:grid-cols-2 gap-8 mb-6">
                        <div class="w-full flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 justify-between items-center h-16" v-if="buildingData?.property_sale > 0">
                            <div>
                                <p class="font-bold uppercase">FOR SALE</p>
                                <p>{{ buildingData?.property_sale }} Units</p>
                            </div>
                            <div>
                                <p>Starting from <span class="font-bold">{{ buildingData?.property_sale_min }}</span></p>
                            </div>
                        </div>
                        <div class="w-full flex bg-gray-50 rounded-lg p-3 text-[15px] gap-3.5 justify-between items-center h-16" v-if="buildingData?.property_rent > 0">
                            <div>
                                <p class="font-bold uppercase">FOR RENT</p>
                                <p>{{ buildingData?.property_rent }} Units</p>
                            </div>
                            <div>
                                <p>Starting from <span class="font-bold">{{ buildingData?.property_rent_min }} / month</span></p>
                            </div>
                        </div>
                    </div>

                    <div class="lg:w-9/12 pb-6" v-if="buildingData?.description != null">
                        <h3 class="font-bold text-xl mb-4">About {{ buildingData?.name }}</h3>
                        {{ buildingData?.description }}
                    </div>

                    <div class="">
                        <h3 class="font-bold text-xl mb-4">Building amenities & unit features</h3>
                        <ul>
                            <li class="flex mb-4 ml-4 gap-2" v-for="(amenity, index) in buildingData?.amenities" :key="index">
                                <font-awesome-icon :icon="['fas', 'check']" style="height: 20px; color: #808080"/>
                                <span>{{ amenity?.name }}</span>
                            </li>
                        </ul>
                    </div>

                    <!-- div class="lg:w-9/12 py-6">
                        <h3 class="font-bold text-xl mb-4">About the developer</h3>
                        <p>Ayala Land transformed the Philippine landscape with the nation's premier business district over five decades ago. As the largest, most experienced, and most trusted company in its field, Ayala Land leads the burgeoning real estate industry in the Philippines with prime residential and commercial developments. Ayala Land Premier carries the heritage of Ayala Land. From high-rise condominiums to suburban environments and leisure communities, Ayala Land Premier developments are true testaments to high-quality living. Heralded for their prestige, choice location, and unrivaled land value appreciation, each development guarantees prime locations and desired addresses.</p>
                    </div -->

                    <!-- div class="lg:w-9/12 py-6">
                        <h3 class="font-bold text-xl mb-4">About the developer</h3>
                        <ul class="list-disc ml-8">
                            <li class="mb-2">
                                <a href="#" class="text-blue-default">Garden Towers</a> within 326m
                            </li>
                            <li class="mb-2">
                                <a href="#" class="text-blue-default">Garden Towers</a> within 326m
                            </li>
                            <li class="mb-2">
                                <a href="#" class="text-blue-default">Garden Towers</a> within 326m
                            </li>
                            <li class="mb-2">
                                <a href="#" class="text-blue-default">Garden Towers</a> within 326m
                            </li>
                            <li class="mb-2">
                                <a href="#" class="text-blue-default">Garden Towers</a> within 326m
                            </li>
                        </ul>
                    </div -->

                </div>

                <div>
                    <div class="lg:w-[380px] bg-gray-50 rounded-lg px-6 py-4">
                        <div class="flex gap-4 mb-6">
                            <!-- <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" class="w-16 h-16 rounded-full" alt=""> -->
                            <div>
                                <p class="font-bold">Housinginteractive Inc</p>
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


            <div class="py-6">
                <h3 class="font-bold text-xl mb-4">Room Types</h3>
                <p class="mb-4" v-if="buildingData?.property_sale > 0">There are {{ buildingData?.property_sale }} condos for sale in {{ buildingData?.name }} available from {{ buildingData?.property_sale_min }} to {{ buildingData?.property_sale_max }}</p>
                <p class="mb-4" v-if="buildingData?.property_rent > 0">There are {{ buildingData?.property_rent }} condos for rent in {{ buildingData?.name }} available for {{ buildingData?.property_rent_min }} to {{ buildingData?.property_rent_max }} per month (based on 1 year rental term)</p>
            </div>

            <!-- <div class="mb-8">
                <h3 class="font-bold text-xl mb-4">Location</h3>
                <GoogleMaps :location="buildingData?.coordinates"/>
            </div> -->

            <div>
                <h3 class="font-bold text-xl mb-4">Similar projects near to {{ buildingData?.name }} in Metro Manila</h3>
                <section class="grid lg:grid-cols-3 gap-8">
                    <ListingsListing v-for="(listing, index) in listings" :key="index" :listing="listing"/>
                </section>
            </div>
        </section>
        <!-- <ListingsEnquiry 
            :showEnquiry="showEnquiry"
            :referrerUrl="buildingData?.slug" 
            :model="`building`" 
            :modelId="buildingData?.id"
            @toggleEnquiry="toggleEnquiry"
            /> -->
    </div>
</template>

<script>
import { useBuildingsStore } from '~/stores/BuildingsStore' 
import BuildingsServices from '~/services/BuildingsServices'
import { watchEffect } from 'vue'

export default {
    data(){
        return {
            building: {},
            images: {},
            listingData: {
                uploader: 'Housinginteractive'
            },
            buildingData: {
                id : null,
                name: '',
                location: '',
                description: '',
                amenities: [],
                property_count: 0,
                property_sale: 0,
                property_rent: 0,
                property_rent_min: 0,
                property_rent_max: 0,
                property_sale_min: 0,
                property_sale_max: 0,
                zonal_value: 0
            },
            showGallery: false,
            showEnquiry: false
        }
    },

    setup(){
        const BuildingsStore = useBuildingsStore()

        return {
            BuildingsStore
        }
    },

    created(){
        watchEffect( () => {
            let slug = this.$route.params.slug[0]
            this.fetchBuilding(slug)
        })
    }, 

    methods: {
        async fetchBuilding(slug){
            let building = await BuildingsServices._getBuilding(slug)
            this.building = building.data
            
            this.buildingData.id = this.building.data.id
            this.buildingData.slug = slug
            this.buildingData.name = this.building.data.building_name
            this.buildingData.location = this.building.data.area_name +', '+this.building.data.city_name
            this.buildingData.description = this.building.data.description
            this.buildingData.property_sale = this.building.data.property_sale
            this.buildingData.property_rent = this.building.data.property_rent
            this.buildingData.zonal_value = this.building.data.zonal_value
            this.buildingData.amenities = this.building.data.amenities
            this.buildingData.coordinates = { lat: this.building.data.latitude, lng: this.building.data.longitude }
            this.buildingData.property_rent_min = "₱ "+this.formatMoney(this.building.data.property_rent_min)
            this.buildingData.property_rent_max = "₱ "+this.formatMoney(this.building.data.property_rent_max)
            this.buildingData.property_sale_min = "₱ "+this.formatMoney(this.building.data.property_sale_min)
            this.buildingData.property_sale_max = "₱ "+this.formatMoney(this.building.data.property_sale_max)
            this.listings = this.building.other

        },

        formatMoney(value){
            const numericValue = value?.toString().length > 0 ? parseFloat(value?.toString().replace(/,/g, '')) : 0;
            return (new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(numericValue));
        },

        toggleEnquiry(){
            this.showEnquiry = !this.showEnquiry
        }
    }
}
</script>
