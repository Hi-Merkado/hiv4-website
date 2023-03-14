import { defineStore } from 'pinia'

export const useSearchParamsStore = defineStore('searchParamsStore', {
    state: () => ({
        division: 1,
        category: 'sale',
        priceMin: null,
        priceMax: null,
        priceParam: 'price',
        bedrooms: null,
        search: null,
        searchDescription: null,
        type_name: null,
        city_name: null,
        area_name: null,
        building_name: null,
        page: 1
        // featured: true
    })
})