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
            this.listingData.division       = this.listing.data.division_id == 1 ? 'Residential' : 'Commercial'
            this.listingData.category       = this.listing.data.is_for_rent == 1 ? 'Rent' : 'Sale' 
            this.listingData.building       = this.listing.data.building_name
            this.listingData.building_slug  = this.listing.data.building_slug
            this.listingData.rental_price   = "₱ "+this.formatMoney(this.listing.data.rent_price)
            this.listingData.sale_price     = "₱ "+this.formatMoney(this.listing.data.sale_price)
            this.listingData.status_name    = this.listing.data.status_name
            this.listingData.amenities      = this.listing.data.amenities
            this.listingData.other          = this.listing.other
            this.listingData.uploader       = this.listing.data.uploader_name
            this.listingData.thumbnail      = this.listing.data.thumbnail
            this.listingData.images         = this.listing.data.images
            this.listingData.parentTitle    = this.listingData.division + ' properties for ' + this.listingData.category
            this.listingData.parentUrl      = '/'+this.listingData.division.toLowerCase()+'-property-'+this.listingData.category.toLowerCase()

            this.listingData.cityUrl        = this.listingData.parentUrl+'-'+this.listing.data.city_name.toLowerCase().replace(/\s+/g, '-')

            if(this.listing.data.building_name !== null) {
                this.listingData.address += this.listing.data.building_name+' '
            }            
            if(this.listing.data.area_name  !== null){
                this.listingData.address += this.listing.data.area_name+', '
            }
            this.listingData.address        += this.listing.data.city_name
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
        },

        buildingLink(){
            return '/building/'+ this.listing.data.buildling_slug
        }
    }
}
</script>
