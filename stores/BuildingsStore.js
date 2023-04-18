import { defineStore } from 'pinia'

export const useBuildingsStore = defineStore('BuildingsStore', {
    state: () => ({
        location: []
    })
})