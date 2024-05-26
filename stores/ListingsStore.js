import { defineStore } from 'pinia'
import ListingsServices from '../services/ListingsServices'

export const useListingsStore = defineStore('ListingsStore', {
    state: () => ({
        listings: [],
        address: ''
    }),
    actions: {
        async fetchListings(){
            const params = this.buildQueryParams()
            console.log("checking before this.listings" ,this.listings)
            this.listings = await ListingsServices._getListings(params)
            console.log("checking this.listings" ,this.listings)
        }
    }
})