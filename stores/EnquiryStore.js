import { defineStore } from 'pinia'

export const useEnquiryStore = defineStore('EnquiryStore', {
    state: () => ({
        listing: [],
        model: 'property',
        modelId: 0,
        showEnquiry: false
    })
})