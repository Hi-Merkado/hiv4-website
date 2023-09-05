<template>
    <div class="relative">
        <div class="absolute" v-if="listing.status_id == 5 || listing.status_id == 2">
            <div class="absolute left-[-39px] top-[26px] w-[170px] transform -rotate-45 text-center font-semibold py-2 z-20"
            :class="SearchParamsStore.division == 1 ? 'bg-green-light text-green-default' : 'bg-blue-light text-blue-default'"
            >{{ listing.status_id == 2 ? 'Rented' : listing.status_name }}</div>
        </div>
        <a :href="listing.url" class="relative block">
            <span class="absolute inline rounded-lg text-blue-default px-2 py-1 top-2 right-2 font-bold"
            :class="SearchParamsStore.division == 1 ? 'bg-green-light text-green-default' : 'bg-blue-light text-blue-default'"
            >{{ listing.city_name }}</span>
            <img :src="listing.thumbnail" class="w-[405px] h-[273px] object-fit">
            <div class="absolute bottom-0 w-full text-sm bg-black bg-opacity-50 pt-1">
                <p class="text-sm w-full text-white px-2" :alt="listing.property_name">{{ listing.property_name.substr(0,40).toLowerCase() }}</p>
                <div class="w-full flex justify-between items-center px-2 text-white">
                    <p v-if="listing.is_for_sale">
                        ₱ <span class="font-bold text-sm lg:text-xl">{{ formatMoney(listing.sale_price) }}</span>
                    </p>
                    <p v-else>
                        ₱ <span class="font-bold text-sm lg:text-xl">{{ formatMoney(listing.rent_price) }}</span> / month
                    </p>
                    <ul class="flex justify-between items-center gap-2">
                        <li v-if="listing.bedrooms > 0">
                            <span class="font-bold text-sm lg:text-xl">{{ listing.bedrooms }}</span> br
                        </li>
                        <li v-if="listing.bedrooms > 0 && listing.floor_area > 0.00" class="md:hidden">
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
            </div>
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

            const map = [
                { suffix: 'T', threshold: 1e12 },
                { suffix: 'B', threshold: 1e9 },
                { suffix: 'M', threshold: 1e6 },
                { suffix: 'K', threshold: 1e3 },
                { suffix: '', threshold: 1 },
            ];

            const found = map.find((x) => Math.abs(value) >= x.threshold);

            if (found) {
                const formatted = (value / found.threshold) + found.suffix;
                return formatted;
            }

            return value

            // const numericValue = value.toString().length > 0 ? parseFloat(value.toString().replace(/,/g, '')) : 0;
            // return (new Intl.NumberFormat('en-US', { minimumFractionDigits: 0 }).format(numericValue));
        }
    }
}

</script>
