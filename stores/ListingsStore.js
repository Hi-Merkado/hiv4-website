import { defineStore } from 'pinia'
import ListingsServices from '../services/ListingsServices'

export const useListingsStore = defineStore('ListingsStore', {
    state: () => ({
        listings: []
    }),
    actions: {
        async fetchListings(){
            const params = this.buildQueryParams()
            this.listings = await ListingsServices._getListings(params)
        }
    }
})