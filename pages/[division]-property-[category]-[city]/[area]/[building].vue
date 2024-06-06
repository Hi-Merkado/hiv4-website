<template>
    <ListingsSearch />

    <section class="lg:w-11/12 lg:max-w-7xl mx-auto mb-8 p-4">
        <ul class="flex flex-wrap items-center gap-2 text-sm">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
            </li>
            <li>
                <a :href="parentUrl">{{ parentTitle }}</a>
            </li>            
            <li>
                <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
            </li>
            <li>
                <a :href="cityUrl">
                    {{ cityTitle }}
                </a>
            </li>
            <li>
                <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
            </li>            
            <li>
                <a :href="areaUrl">
                    {{ areaTitle }}
                </a>
            </li>
            <li>
                <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
            </li>
            <li class="text-gray-400">{{ buildingTitle }}</li>
        </ul>

        <h1 class="text-2xl font-bold mt-8 mb-1">{{ pageTitle }}</h1>
        <a :href="getBuildingUrl()" class="mb-6 block flex">
            <font-awesome-icon :icon="['fas', 'building']" style="height: 20px; color: #808080;"/> <span class="ml-2">Check Building Profile</span>
        </a>

        <div class="flex justify-between items-center mb-8">
            <p class="text-lg font-bold">{{ ListingsStore.listings.data?.meta?.total?.toLocaleString() }} properties found</p>
            <ul class="flex gap-2">
                <li class="h-8">
                    <select class="h-full bg-gray-50 rounded font-bold" v-model="sorting" @change="updateSort">
                        <option value="0">Date Modified (Newest First)</option>
                        <option value="1">Date Modified (Oldest First)</option>
                        <option value="2">Price (Highest First)</option>
                        <option value="3">Price (Lowest First)</option>
                    </select>
                </li>
            </ul>
        </div>

        <section>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8" :class="columns">
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

        <section class="mt-10" id="page-description">
            <span v-html="ListingsStore.listings.data.seo.page_description" v-show="readMoreActivated"></span>
            <button class="underline" v-on:click="readMoreActivated = !readMoreActivated">Read property description</button>
        </section>

        <section id="seo-allocation" class="mt-10">
            <h2 class="text-xl font-bold mb-4">How much is a {{ pageQuestion }}?</h2>

            <p class="mb-4">In total, there are {{ ListingsStore.listings.data?.meta?.total?.toLocaleString() }} {{ pageIntro }}. The average price for a {{ $route.params.division }} property for {{ $route.params.category }} in this location is ₱{{ formatMoney(ListingsStore.listings.data.pricing.average) }} per {{ $route.params.category == 'rent' ? 'month' : 'unit' }}. The most expensive {{ $route.params.category == 'rent' ? 'rental' : 'sales price' }} for a {{ $route.params.division }} property here costs about ₱{{ formatMoney(ListingsStore.listings.data.pricing.max) }}  while the most affordable {{ $route.params.category == 'rent' ? 'rental' : 'sales price' }} is about ₱{{ formatMoney(ListingsStore.listings.data.pricing.min) }}.</p>

            <p class="mb-4">You may find the most expensive and luxurious {{ $route.params.division }} properties for {{ $route.params.category }} at <span v-html="ListingsStore.listings.data.location.expensive"></span>. While you can find classy yet affordable ones at <span v-html="ListingsStore.listings.data.location.affordable"></span>.</p>

            <p class="mb-4">Below are the average sales prices according to the number of bedrooms in this location.</p>

            <div class="overflow-x-auto w-full">
                <table class="table-auto border-collapse w-full">
                    <thead>
                        <tr>
                            <th class="px-4 py-2 text-left">Bedrooms</th>
                            <th class="px-4 py-2 text-left">Average Floor Area/SQM</th>
                            <th class="px-4 py-2 text-left">Average Sales Price</th>
                            <th class="px-4 py-2 text-left">Average Cost Price/SQM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(bedroom, index) in ListingsStore.listings.data.bedrooms" :key="index">
                            <td class="border px-4 py-2 border-l-0 border-r-0">{{ bedroom.key == 0 ? 'Studio' : bedroom.key + ' bedroom(s)' }}</td>
                            <td class="border px-4 py-2 border-l-0 border-r-0">{{ formatMoney(bedroom.avg_floor_area.value) }} sqm</td>
                            <td class="border px-4 py-2 border-l-0 border-r-0">₱{{ formatMoney(bedroom.avg_price.value) }}</td>
                            <td class="border px-4 py-2 border-l-0 border-r-0">₱{{ formatMoney(bedroom.avg_pps.value) }} sqm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    </section>
</template>

<script>

import { useSearchParamsStore } from '@/stores/SearchParamsStore'
import { useListingsStore } from '@/stores/ListingsStore'
import ListingsServices from '@/services/ListingsServices'
import { ref } from 'vue'

export default {   
    data(){
        return {
            columns: 3,
            sorting: 0,
        }
    },
    setup(){
        const SearchParamsStore = useSearchParamsStore()
        const ListingsStore = useListingsStore()

        return {
            SearchParamsStore,
            ListingsStore,
            readMoreActivated: ref(false)
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
        this.SearchParamsStore.area_name = this.$route.params.area
        this.SearchParamsStore.building_name = this.$route.params.building
        this.fetchListings();

    }, 
    computed: {
        parentUrl(){
            return '/'+this.$route.params.division +'-property-'+ this.$route.params.category
        },
        parentTitle(){
            return this.titleCase(this.$route.params.division) + ' properties for ' + this.$route.params.category
        },
        pageQuestion(){
            return this.$route.params.division.toLowerCase() + ' property for ' + this.$route.params.category + ' in ' + this.titleCase(this.$route.params.building.replace(/-/g, ' ')) +' '+ this.titleCase(this.$route.params.area.replace(/-/g, ' '))+', '+this.titleCase(this.$route.params.city.replace(/-/g, ' '))
        },
        pageIntro(){
            return this.$route.params.division.toLowerCase() + ' properties for ' + this.$route.params.category + ' in ' + this.titleCase(this.$route.params.building.replace(/-/g, ' ')) +' '+ this.titleCase(this.$route.params.area.replace(/-/g, ' '))+', '+this.titleCase(this.$route.params.city.replace(/-/g, ' '))
        },
        pageTitle(){
            return this.titleCase(this.$route.params.division) + ' properties for ' + this.$route.params.category + ' in ' + this.titleCase(this.$route.params.building.replace(/-/g, ' ')) +' '+ this.titleCase(this.$route.params.area.replace(/-/g, ' '))+', '+this.titleCase(this.$route.params.city.replace(/-/g, ' '))
        },
        cityUrl(){
            return '/'+this.$route.params.division +'-property-'+ this.$route.params.category +'-'+ this.$route.params.city
        },
        cityTitle(){
            return this.titleCase(this.$route.params.city.replace(/-/g, ' '))
        },
        areaUrl(){
            return '/'+this.$route.params.division +'-property-'+ this.$route.params.category +'-'+ this.$route.params.city+'/'+this.$route.params.area
        },
        areaTitle(){
            return this.titleCase(this.$route.params.area.replace(/-/g, ' '))
        },
        buildingTitle(){
            return this.titleCase(this.$route.params.building.replace(/-/g, ' '))
        },
        columns(){
            return 'lg:grid-cols-'+this.columns
        }
    },
    methods: {

        async fetchListings(){
            const params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state)
            console.log("checking params from buildind:",params)
            // console.log("this.SearchParamsStore.$state",this.SearchParamsStore.$state)
            // console.log("check params",params)
            if(!this.SearchParamsStore.triggered){
                this.ListingsStore.listings = await ListingsServices._getListings(params)
            }
        }, 

        formatMoney(value){
            const numericValue = value.toString().length > 0 ? parseFloat(value.toString().replace(/,/g, '')) : 0;
            return (new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(numericValue));
        },

        updateSort(){
            this.SearchParamsStore.orderBy = this.sorting == 0 || this.sorting == 1 ? 'updated_at' : 'price'
            this.SearchParamsStore.order = this.sorting == 0 || this.sorting == 2 ? 'desc' : 'asc'
            this.fetchListings();
        },

        updateCols(cols){
            this.columns = cols
        },

        titleCase(str) {
            return str.toLowerCase().split(' ').map(function(word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        },

        getBuildingUrl(){
            return '/building/'+this.$route.params.building
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

    }
}

</script>