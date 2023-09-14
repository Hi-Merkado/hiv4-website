import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('GalleryStore', {
    state: () => ({
        listing: [],
        firstImage: 0,
        showGallery: false
    })
})