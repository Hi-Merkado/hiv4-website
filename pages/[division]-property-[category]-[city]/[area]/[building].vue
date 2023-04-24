<template>
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

            <div class="grid gap-8 md:grid-cols-2"
                :class="columns">
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
    </section>
</template>

<script>

import { useSearchParamsStore } from '@/stores/SearchParamsStore'
import { useListingsStore } from '@/stores/ListingsStore'
import ListingsServices from '@/services/ListingsServices'

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
            console.log(params)
            if(!this.SearchParamsStore.triggered){
                this.ListingsStore.listings = await ListingsServices._getListings(params)
            }
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