<template>
    <div>
        <ListingsSearch />

        <ListingsEnquiry @toggleEnquiry="toggleEnquiry"/>
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

import { useSearchParamsStore } from '~/stores/SearchParamsStore'
import { useEnquiryStore } from '~/stores/EnquiryStore'
import ListingsServices from '~/services/ListingsServices'
import { watchEffect } from 'vue'

export default {
    data(){
        return {
            listing: [],
            id: 0,
            images: {},
            thumbnails: {},
            showGallery: false,
            showEnquiry: false,
        }
    },

    setup(){
        const SearchParamsStore = useSearchParamsStore()
        const EnquiryStore = useEnquiryStore()

        return {
            SearchParamsStore,
            EnquiryStore
        }
    },

    created(){
        watchEffect(() => {
            let slug = this.$route.params.slug[0].split('-')
            this.id = slug.slice(-1)[0]
           this.fetchListing(this.id)         
            //this.fetchListingImages(this.id)     
        })
    }, 

    mounted(){
        watchEffect(() => {
            let slug = this.$route.params.slug[0].split('-')
            this.id = slug.slice(-1)[0]
            //this.fetchListing(this.id)         
            //this.fetchListingImages(this.id)     
        })
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
            this.$refs.slidesContainer.scrollLeft += 408
        },

        prevSlide(){
            this.$refs.slidesContainer.scrollLeft -= 408
        },

        async fetchListing(id){
            this.listing = await ListingsServices._getListing(id).data
            this.EnquiryStore.listing = this.listing.data
        },

        async fetchListingImages(id){
            this.images = await ListingsServices._getListingImages(id).data
        },

        formatMoney(value){
            let numericValue  = 0

            if(value != null ){
                numericValue = value.toString().length > 0 ? parseFloat(value.toString().replace(/,/g, '')) : 0;
            }
            return (new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(numericValue));
        },

        toggleGallery(){
            this.showGallery = !this.showGallery
        },

        toggleEnquiry(){
            this.EnquiryStore.showEnquiry = !this.EnquiryStore.showEnquiry
        },

        buildingLink(){
            return '/building/'+ this.listing.data.buildling_slug
        }
    }
}
</script>
