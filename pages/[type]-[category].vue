<template>
    <ListingsSearch />

    <section class="w-9/12 max-w-7xl mx-auto">
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

        <div class="flex justify-between mb-8">
            <p class="text-sm font-bold">{{ ListingsStore.listings.data.meta.total.toLocaleString() }} properties found</p>
            <ul class="flex gap-2">
                <li class="h-8">
                    <button @click="updateCols(3)">
                        <img src="/images/3-cols.png" />
                    </button>
                </li>
                <li class="h-8">
                    <button @click="updateCols(2)">
                        <img src="/images/2-cols.png" />
                    </button>
                </li>
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
    </section>
</template>

<script>
import { useSearchParamsStore } from '@/stores/SearchParamsStore'
import { useListingsStore } from '../stores/ListingsStore'
import ListingsServices from '../services/ListingsServices'

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

        this.SearchParamsStore.type_name = this.$route.params.type
        console.log(this.SearchParamsStore.category)
        this.fetchListings();

    }, 
    computed: {
        pageTitle(){
            return this.titleCase(this.$route.params.type) + ' properties for ' + this.$route.params.category
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
        }

    }
}

</script>