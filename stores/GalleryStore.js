import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('GalleryStore', {
    state: () => ({
        listing: [],
        showGallery: false
    })
})