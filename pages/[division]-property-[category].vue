<template>
    <ListingsSearch />

    <section class="lg:w-9/12 lg:max-w-7xl mx-auto mb-8 p-4">
        <ul class="flex items-center gap-2 text-sm">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
            </li>
            <li class="text-gray-400">{{ pageTitle }}</li>
        </ul>

        <h1 class="text-2xl font-bold my-8">{{ pageTitle }}</h1>

        <div class="flex justify-between items-center mb-8">
            <p class="text-sm font-bold">{{ ListingsStore.listings.data.meta.total.toLocaleString() }} properties found</p>
            <ul class="flex gap-2">
                <li class="h-8 hidden lg:block">
                    <button @click="updateCols(3)">
                        <img src="/images/3-cols.png" />
                    </button>
                </li>
                <li class="h-8 hidden lg:block">
                    <button @click="updateCols(2)">
                        <img src="/images/2-cols.png" />
                    </button>
                </li>
                <li class="h-8">
                    <select class="h-full bg-gray-50 rounded font-bold" v-model="sorting" @change="updateSort">
                        <option value="0">Newest First</option>
                        <option value="1">Oldest First</option>
                        <option value="2">Highest First</option>
                        <option value="3">Lowest First</option>
                    </select>
                </li>
            </ul>
        </div>

        <section>

            <div class="grid gap-8 md:grid-cols-2" :class="columns">
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

        <section class="mt-10" id="page-description" v-if="ListingsStore.listings.data.seo.page_description != null">
            <span v-html="ListingsStore.listings.data.seo.page_description"></span>
        </section>

        <section id="seo-allocation" class="mt-10">
            <h2 class="text-xl font-bold mb-4">How much is a {{ pageTitle }}?</h2>

            <p class="mb-4">In total, there are {{ ListingsStore.listings.data.meta.total.toLocaleString() }} {{ pageTitle }}. The average price for a {{ $route.params.division }} property for {{ $route.params.category }} in this location is ₱{{ formatMoney(ListingsStore.listings.data.pricing.average) }} per {{ $route.params.category == 'rent' ? 'month' : 'unit' }}. The most expensive {{ $route.params.category == 'rent' ? 'rental' : 'sales price' }} for a {{ $route.params.division }} property here costs about {{ formatMoney(ListingsStore.listings.data.pricing.max) }}  while the most affordable {{ $route.params.category == 'rent' ? 'rental' : 'sales price' }} is about ₱{{ formatMoney(ListingsStore.listings.data.pricing.min) }}.</p>

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
                        <tr>
                            <td class="border px-4 py-2 border-l-0 border-r-0">10 bedrooms</td>
                            <td class="border px-4 py-2 border-l-0 border-r-0">30sqm</td>
                            <td class="border px-4 py-2 border-l-0 border-r-0">₱230,533,455</td>
                            <td class="border px-4 py-2 border-l-0 border-r-0">₱174,709sqm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <section id="quick-links" class="mt-10">
            <h2 class="text-lg font-bold mb-4">Quick Links</h2>
            <ul class="grid grid-cols-3">
                <li v-for="(link, index) in ListingsStore.listings.data.quickLinks" :key="index">
                    <a :href="$route.path+'-'+link.key.replace(/\s+/g, '-').toLowerCase()">{{ link.key }}</a>
                </li>
            </ul>
        </section>
    </section>
</template>

<style>
    #page-description h2{ font-size: 24px; font-weight: bold; }
    #page-description h3{ font-size: 20px; font-weight: bold; }
    
    #page-description h4, #page-description h5{ font-size: 18px; font-weight: bold }
    #page-description a, #seo-allocation a{ text-decoration: underline; color: #0080ED; }
</style>

<script>
import { useSearchParamsStore } from '@/stores/SearchParamsStore'
import { useListingsStore } from '@/stores/ListingsStore'
import ListingsServices from '@/services/ListingsServices'
import { watchEffect } from 'vue'

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
            ListingsStore
        }
    },
    created(){
        watchEffect( () => {
            useHead({
                title: `${this.pageTitle} | Housinginteractive.com.ph`
            })

            const division = this.$route.params.division == 'residential' ? 1 : 2
            this.SearchParamsStore.division = division
            this.SearchParamsStore.category = this.$route.params.category
            this.fetchListings();
        })

    }, 
    computed: {
        pageTitle(){
            return this.titleCase(this.$route.params.division) + ' properties for ' + this.$route.params.category
        },        
        columns(){
            return 'lg:grid-cols-'+this.columns
        }
    },
    methods: {

        async fetchListings(){
            const params = ListingsServices.buildQueryParams(this.SearchParamsStore.$state)
            console.log(params)

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

        titleCase(str) {
            return str.toLowerCase().split(' ').map(function(word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }

    }
}

</script>