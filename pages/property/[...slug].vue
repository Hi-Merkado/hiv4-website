<template>
    <div>
        <ListingsSearch />
    </div>
</template>

<script>
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
            showEnquiry: false
        }
    },

    setup(){
        const ListingsStore = useListingsStore()

        return {
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

    methods: {
        async fetchListing(id){
            this.listing = await ListingsServices._getListing(id).data
            this.listingData.images         = this.listing.data.images
            this.listingData.coordinates    = { lat: this.listing.data.latitude, lng: this.listing.data.longitude }
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
        }
    }
}
</script>
