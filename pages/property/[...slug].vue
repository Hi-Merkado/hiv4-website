<template>
    <div>
        <ListingsSearch />
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

import { useSearchParamsStore } from '@/stores/SearchParamsStore'
import { useListingsStore } from '~/stores/ListingsStore'
import ListingsServices from '~/services/ListingsServices'
import { watchEffect } from 'vue'

export default {
    data(){
        return {
            listing: [],
            id: 0,
            images: {},
            thumbnails: {},
            listingData: {
                property_name: '',
                address: '',
                status: '',
                availability: '',
                last_updated: '',
                bedrooms: 0,
                bathrooms: 0,
                floor: 0,
                lot: 0,
                parking: 0,
                amenities: {},
                other: {},
                rent: true,
                sale: false,
                uploader: '',
                thumbnail: '',
                parentTitle: '',
                parentUrl: '',
                coordinates: {}
            },
            showGallery: false,
            showEnquiry: false,
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
        watchEffect(() => {
            let slug = this.$route.params.slug[0].split('-')
            this.id = slug.slice(-1)[0]
            this.fetchListing(this.id)
            this.fetchListingImages(this.id)
        })
    }, 

    mounted(){
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
            console.log(this.$refs.slidesContainer)
            this.$refs.slidesContainer.scrollLeft += 408
        },

        prevSlide(){
            this.$refs.slidesContainer.scrollLeft -= 408
        },

        async fetchListing(id){
            this.listing = await ListingsServices._getListing(id).data
            console.log(this.listing.data)
        },

        async fetchListingImages(id){
            this.images = await ListingsServices._getListingImages(id).data
        },

        formatMoney(value){
            const numericValue = value.toString().length > 0 ? parseFloat(value.toString().replace(/,/g, '')) : 0;
            return (new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(numericValue));
        },

        toggleGallery(){
            this.showGallery = !this.showGallery
        },

        toggleEnquiry(){
            this.showEnquiry = !this.showEnquiry
        },

        buildingLink(){
            return '/building/'+ this.listing.data.buildling_slug
        }
    }
}
</script>
