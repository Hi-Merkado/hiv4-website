<template>
    <div @keydown.esc="toggleModal()">
        <div v-if="GalleryStore.showGallery"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-11/12 lg:w-[825px] my-6 mx-auto lg:max-w-6xl">
                <!--content-->
                <div
                    class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <div>
                            <h3 class="text-3xl font-semibold text-[20px] mb-0 leading-none">
                                Photo Gallery
                            </h3>
                            <p>{{ GalleryStore.listing.property_name }}</p>
                        </div>

                        <button
                            class="p-1 ml-auto bg-transparent border-0 text-black opacity-25 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            v-on:click="toggleModal()"> x
                            
                        </button>
                    </div>
                    <!--body-->
                    <div class="relative p-6 flex h-full">
                        <Splide :options="options" aria-label="Vue Splide Example">
                            <SplideSlide  v-for="(image, index) in images" :key="index">
                                <img :src="image.url">
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="GalleryStore.showGallery" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>

import { useGalleryStore } from '~/stores/GalleryStore'
import ListingsServices from '~/services/ListingsServices'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue';
import '@splidejs/vue-splide/css';

export default defineComponent({
    components: { Splide, SplideSlide },
    data(){
        return {
            images: [],
        }
    },

    setup(){
        const GalleryStore = useGalleryStore()
        const options = {
            rewind: true,
            gap   : '1rem',
        };

        return {
            GalleryStore,
            options
        }
    },

    created(){
        this.fetchListingImages(this.GalleryStore.listing.id)
    },

    methods: {
        
        async fetchListingImages(id){
            let images = await ListingsServices._getListingImages(id)
            this.images = images.data
        },

        toggleModal(){
            this.$emit('toggleGallery')
        }
    }
})
</script>
