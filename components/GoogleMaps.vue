<template>
    <GoogleMap api-key="AIzaSyAmir0rmN6jiEFgvCKrUGjyvKAWqG-Anhw" style="width: 100%; height: 500px" :center="center"
        :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>
  
<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { GoogleMap, Marker } from 'vue3-google-map'
import { useBuildingsStore } from '~/stores/BuildingsStore'
import { useListingsStore } from '~~/stores/ListingsStore'
import MapsServices from '~/services/MapsServices'

export default defineComponent({
    components: { GoogleMap, Marker },
    data() {
        return {
            coordinates: []
        }
    },
    async setup(){
        const BuildingsStore = useBuildingsStore()
        const ListingsStore = useListingsStore()
        const route = useRoute()

        let center = { lat: 14.562543330310746, lng: 121.02902349618186 }
        if(route.name == 'building-slug'){
            const coordinates = await MapsServices._getCoordinates('Ayala Avenue, Makati')
            center = coordinates.data.value.results[0].geometry.location

        } else if(route.name == 'property-slug'){
            const coordinates = await MapsServices._getCoordinates(ListingsStore.address)
            center = coordinates.data.value.results[0].geometry.location
        } 

        return {
            BuildingsStore,
            center
        }
    }
})
</script>