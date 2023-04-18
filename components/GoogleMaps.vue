<template>
    <GoogleMap api-key="AIzaSyAmir0rmN6jiEFgvCKrUGjyvKAWqG-Anhw" style="width: 100%; height: 500px" :center="center"
        :zoom="15">
        <Marker :options="{ position: center }" />
    </GoogleMap>
</template>
  
<script>
import { defineComponent, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import { GoogleMap, Marker } from 'vue3-google-map'
import { useBuildingsStore } from '~/stores/BuildingsStore'

export default defineComponent({
    components: { GoogleMap, Marker },
    props: ['location'],
    async setup(props){
        const BuildingsStore = useBuildingsStore()
        const route = useRoute()

        let center = { lat: 14.562543330310746, lng: 121.02902349618186 }

        if(route.name == 'building-slug' || route.name == 'property-slug'){
            center = props.location
        } 

        return {
            BuildingsStore,
            center
        }
    }
})
</script>