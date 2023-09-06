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
                    <div class="relative p-6 flex h-[481px]">
                        <div class="h-full flex-1 mr-3 sm:w-full">
                            <img v-if="hasCurrentImage" class="w-full h-full object-contain" :src="currentImage.url" alt="Image" />
                        </div>
                    
                        <div class="h-full relative hidden">
                            <div v-if="images.length > 5" @click="scrollUp" ref="scrollUp" class="w-28 h-9 absolute top-0 bg-white opacity-50 cursor-pointer text-center justify-center grid">
                                <font-awesome-icon :icon="['fas', 'arrow-up']" style="height: 28px;"/>
                            </div>
                            <div ref="thumbnails" class="h-full overflow-hidden">
                                <div class="flex flex-col">
                                    <div v-for="(image, index) in images" :key="index" @click="setCurrentImage(index)" :ref="`image-${index}`" class="w-28 h-20 rounded overflow-hidden mb-3 cursor-pointer">
                                    <img v-if="images" class="w-28 h-20 object-cover" :src="image.url" alt="Image">
                                    </div>
                                </div>
                            </div>
                            <div v-if="images.length > 5" @click="scrollDown" class="w-28 h-9 absolute bottom-0 bg-white opacity-50 cursor-pointer text-center justify-center grid">
                                <font-awesome-icon :icon="['fas', 'arrow-down']" style="height: 28px;"/>
                            </div>
                        </div>

                    </div>
                    <!--footer-->
                    <div class="text-center p-6 border-t border-solid border-slate-200 rounded-b text-center text-black-80 font-medium text-lg">
                        <span>{{ currentImageIndex + 1 }}</span> / <span>{{ images.length }}</span>
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

function scrollTop(e, scrollTop, duration = 300) {
    const originalScrollTop = e.scrollTop;
    let currentScrollTop = originalScrollTop;

    if (currentScrollTop === scrollTop) {
        return;
    }

    const distance = Math.abs(scrollTop - currentScrollTop);
    const step = duration / distance;

    function frame() {
        currentScrollTop = scrollTop > currentScrollTop
            ? currentScrollTop + step
            : currentScrollTop - step;
        e.scrollTop = currentScrollTop
        if (originalScrollTop < scrollTop && currentScrollTop >= scrollTop) {
            clearInterval(id);
        }
        else if (originalScrollTop > scrollTop && currentScrollTop <= scrollTop) {
            clearInterval(id);
        }
    }
    const id = setInterval(frame, 1)
}

export default {
    data(){
        return {
            images: [],
            currentImageIndex: 0,
            currentImage : null,
            scrollTopIndex: 0,
            hasCurrentImage : false,
            originalScrollTop: 0,
            currentScrollTop: 0
        }
    },

    setup(){
        const GalleryStore = useGalleryStore()

        return {
            GalleryStore
        }
    },

    created(){
        this.fetchListingImages(this.GalleryStore.listing.id)
    },

    mounted(){
        this.hasCurrentImage = true
    },

    methods: {
        
        async fetchListingImages(id){
            let images = await ListingsServices._getListingImages(id)
            this.images = images.data
            this.currentImage = this.images[0]
        },

        setCurrentImage(index) {
            this.currentImageIndex = index;
            this.currentImage = this.images[index];
            this.hasCurrentImage = true;
        },

        scrollUp() {
            if (this.scrollTopIndex > 0) {
                this.scrollTopIndex--;
                scrollTop(this.$refs['thumbnails'], this.$refs[`image-${this.scrollTopIndex}`][0].offsetTop);
            }
        },

        scrollDown() {
            if (this.scrollTopIndex < this.images.length - 5) {
                this.scrollTopIndex++;
                scrollTop(this.$refs['thumbnails'], this.$refs[`image-${this.scrollTopIndex}`][0].offsetTop);
            }
        },

        toggleModal(){
            this.$emit('toggleGallery')
        }
    }
}
</script>
