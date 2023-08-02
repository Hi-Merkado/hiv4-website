<template>
    <div>
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="description" />
        </Head>
    </div>
    <ListingsSearch />

    <section class="w-9/12 max-w-7xl mx-auto">
        <ul class="flex items-center gap-2 text-sm">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
            </li>
            <li>
                <a :href="parentUrl" v-if="$route.params.category != 'property'">{{ parentTitle }}</a>
                <span class="text-gray-400" v-else>{{ cityTitle }}</span>
            </li>
            <li v-if="$route.params.category != 'property'">
                <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
            </li>
            <li class="text-gray-400" v-if="$route.params.category != 'property'">{{ cityTitle }}</li>
        </ul>

        <h1 class="text-2xl font-bold my-8">{{ pageTitle }}</h1>

        <div class="flex justify-between mb-8">
            <p class="text-lg font-bold">{{ ListingsStore.listings.data.meta.total.toLocaleString() }} properties found</p>
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

        <section class="grid gap-8" :class="columns">
            <ListingsListing v-for="(listing, index) in ListingsStore.listings.data.data" :key="index" :listing="listing"/>
        </section>

        <section class="mt-10 pt-10 border-t-2 border-neutral-200" id="page-description" v-if="ListingsStore.listings.data.seo.page_description != null">
            <span v-html="ListingsStore.listings.data.seo.page_description" v-show="readMoreActivated"></span>
            <button class="underline" v-on:click="readMoreActivated = !readMoreActivated">Read property description</button>
        </section>

        <section id="seo-allocation" class="mt-10">
            <h2 class="text-xl font-bold mb-4">How much is a {{ pageTitle }}?</h2>

            <p class="mb-4">In total, there are {{ ListingsStore.listings.data.meta.total.toLocaleString() }} {{ pageTitle }}. The average price for a {{ $route.params.division }} property for {{ $route.params.category }} in this location is ₱{{ formatMoney(ListingsStore.listings.data.pricing.average) }} per {{ $route.params.category == 'rent' ? 'month' : 'unit' }}. The most expensive {{ $route.params.category == 'rent' ? 'rental' : 'sales price' }} for a {{ $route.params.division }} property here costs about ₱{{ formatMoney(ListingsStore.listings.data.pricing.max) }}  while the most affordable {{ $route.params.category == 'rent' ? 'rental' : 'sales price' }} is about ₱{{ formatMoney(ListingsStore.listings.data.pricing.min) }}.</p>

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

        

        <section id="quick-links" class="mt-10">
            <h2 class="text-lg font-bold mb-4">Quick Links</h2>
            <ul class="grid grid-cols-3">
                <li v-for="(link, index) in ListingsStore.listings.data.quickLinks" :key="index">
                    <a :href="quickLinkUrl(link.key)">{{ link.key }}</a>
                </li>
            </ul>
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
            title: ref('Housinginteractive Inc'),
            description: ref(''),
            readMoreActivated: ref(false)
        }
    },
    created(){

        if(this.$route.params.category == 'property'){
            const division = this.$route.params.type == 'residential' ? 1 : 2
            this.SearchParamsStore.division = division
            this.SearchParamsStore.category = this.$route.params.city
        } else {
            this.SearchParamsStore.type_name = this.$route.params.type
            this.SearchParamsStore.city_name = this.$route.params.city
        }
        
        this.fetchListings();

    }, 
    computed: {
        parentUrl(){
            return '/'+this.$route.params.type +'-'+ this.$route.params.category
        },
        parentTitle(){
            if(this.$route.params.category == 'property'){
                return this.titleCase(this.$route.params.type) + ' properties for ' + this.$route.params.city
            } else {
                return this.titleCase(this.$route.params.type) + ' properties for ' + this.$route.params.category +' in '+ this.$route.params.city
            }
        },
        pageTitle(){
            if(this.$route.params.category == 'property'){
                return this.titleCase(this.$route.params.type) + ' properties for ' + this.$route.params.city
            } else {
                return this.titleCase(this.$route.params.type) + ' properties for ' + this.$route.params.category +' in '+ this.$route.params.city
            }
        },      
        cityTitle(){
            if(this.$route.params.category != 'property'){
                return this.titleCase(this.$route.params.type) + ' properties for ' + this.$route.params.category +' in '+ this.$route.params.city
            } else {
                return this.titleCase(this.$route.params.type) + ' properties for ' + this.$route.params.category;
            }
        },       
        columns(){
            return 'grid-cols-'+this.columns
        }
    },
    methods: {

        async fetchListings(){
            const params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state)
            if(!this.SearchParamsStore.triggered){
                this.ListingsStore.listings = await ListingsServices._getListings(params)
                this.title = this.ListingsStore.listings.data.seo.keyword +' | Housinginteractive.com.ph'
                this.description = this.ListingsStore.listings.data.seo.description
            }
        }, 

        formatMoney(value){
            let numericValue  = 0

            if(value != null ){
                numericValue = value.toString().length > 0 ? parseFloat(value.toString().replace(/,/g, '')) : 0;
            }
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

        quickLinkUrl(linKey){

            if(this.$route.params.category == 'property'){
                return this.$route.path+'-'+linKey.replace(/\s+/g, '-').toLowerCase()
            } else {
                return this.$route.path+'/'+linKey.replace(/\s+/g, '-').toLowerCase()
            }

        },

        titleCase(str) {
            return str.toLowerCase().split(' ').map(function(word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }

    }
}

</script>