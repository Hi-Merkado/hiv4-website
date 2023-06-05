<template>
    <div>
        <a :href="listing.url" class="relative">
            <span class="absolute inline bg-blue-light rounded-lg text-blue-default px-2 py-1 top-2 right-2 font-bold"
            :class="SearchParamsStore.division == 1 ? 'bg-green-light text-green-default' : 'bg-blue-light text-blue-default'"
            >{{ listing.city_name }}</span>
            <img :src="listing.thumbnail" class="w-full">
            <div class="flex justify-between items-center my-2 text-sm">
                <p v-if="listing.is_for_sale">
                    ₱ <span class="font-bold text-sm lg:text-xl">{{ formatMoney(listing.sale_price) }}</span>
                </p>
                <p v-else>
                    ₱ <span class="font-bold text-sm lg:text-xl">{{ formatMoney(listing.rent_price) }}</span> / month
                </p>
                <ul class="flex justify-between items-center gap-2">
                    <li v-if="listing.bedrooms > 0">
                        <span class="font-bold text-sm lg:text-xl">{{ listing.bedrooms }}</span> bedrooms
                    </li>
                    <li v-if="listing.bedrooms > 0 && listing.floor_area > 0.00">
                        <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
                    </li>
                    <li v-if="listing.floor_area == 0.00">
                        <span class="font-bold text-sm lg:text-xl">{{ listing.lot_area }}</span> sqm
                    </li>
                    <li v-else>
                        <span class="font-bold text-sm lg:text-xl">{{ listing.floor_area }}</span> sqm
                    </li>
                </ul>
            </div>
            <p class="text-sm">{{ listing.property_name }}</p>
        </a>
    </div>
</template>

<script>
import { useSearchParamsStore } from '@/stores/SearchParamsStore'

export default {
    props: ['listing'],

    setup(){
        const SearchParamsStore = useSearchParamsStore()

        return {
            SearchParamsStore
        }
    },

    methods: {
        formatMoney(value){
            const numericValue = value.toString().length > 0 ? parseFloat(value.toString().replace(/,/g, '')) : 0;
            return (new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(numericValue));
        }
    }
}

</script>