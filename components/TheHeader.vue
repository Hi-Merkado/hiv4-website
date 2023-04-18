<template>
    <header class="sticky top-0 bg-zinc-50 z-50">
        <div class="container flex px-7 py-5 justify-between items-center mx-auto">
            <div class="flex items-center gap-x-14">
                <a href="/">
                    <Logo />
                </a>
                <nav class="lg:block hidden">
                    <ul class="flex gap-8 font-bold text-base" @click-away="closeSubmenu">
                        <li v-for="(link, index) in links" :key="index" class="relative">
                            <a :href="link.url" v-if="!link.submenu">
                                <span>{{ link.text }}</span>
                            </a>
                            <a v-else class="flex gap-2 cursor-pointer" v-on:click="links[index].showSubmenu = !links[index].showSubmenu">
                                <span>{{ link.text }}</span>
                                <font-awesome-icon icon="chevron-down" style="height: 13px;margin-top: 5px" v-if="link.submenu"/>
                            </a>
                            <div v-if="link.submenu" 
                                    :class="!links[index].showSubmenu ? 'hidden' : 'inline-block'" 
                                    class="opacity-0 fixed inset-0 z-10 bg-white" @click="closeSubmenu(index)"></div>
                            <div class="origin-top-right absolute left-0 right-0 mt-2 rounded-md shadow-lg bg-white focus:outline-none z-40 w-40"
                                role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"
                                :class="!links[index].showSubmenu ? 'hidden' : 'inline-block'" v-if="link.submenu">
                                <ul class="py-1" role="none">
                                    <li class="pt-1.5 pb-0.5 px-2 hover:bg-gray-5" v-for="(menu, index) in link.submenus" :key="menu.text">
                                        <a :href="menu.url" class="flex gap-2" @click.native="closeSubmenu(index)">
                                            {{ menu.text }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            <nav class="grid place-items-end">
                <div class="flex justify-end">
                    <NuxtLink to="http://app.housinginteractive.com.ph" class="lg:flex lg:gap-4 lg:w-32 lg:h-5 font-bold text-base">
                        <span class="hidden lg:inline">Log in</span>
                        <font-awesome-icon icon="user" size="xs" class="place-items-end" :style="{ color: '#2f80ed', width: '37px', height: '20px', lineHeight: '1' }"/>
                    </NuxtLink>
                    <a href="#" class="lg:hidden" @click="showMobilemenu = !showMobilemenu">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="apps_24px">
                                <path id="icon/navigation/apps_24px" fill-rule="evenodd" clip-rule="evenodd" d="M4 8H8V4H4V8ZM10 20H14V16H10V20ZM8 20H4V16H8V20ZM4 14H8V10H4V14ZM14 14H10V10H14V14ZM16 4V8H20V4H16ZM14 8H10V4H14V8ZM16 14H20V10H16V14ZM20 20H16V16H20V20Z" fill="black" fill-opacity="0.54"/>
                            </g>
                        </svg>
                    </a>
                </div>
            </nav>
        </div>
        <div class="container" v-if="showMobilemenu">
            <ul class="w-full font-bold text-base px-6" @click-away="closeSubmenu">
                <li v-for="(link, index) in links" :key="index" class="relative py-1">
                    <a :href="link.url" v-if="!link.submenu" class="block">
                        <span>{{ link.text }}</span>
                    </a>
                    <a v-else class="flex gap-2 cursor-pointer block" v-on:click="links[index].showSubmenu = !links[index].showSubmenu">
                        <span>{{ link.text }}</span>
                        <font-awesome-icon icon="chevron-down" style="height: 13px;margin-top: 5px" v-if="link.submenu"/>
                    </a>
                    <div v-if="link.submenu" 
                            :class="!links[index].showSubmenu ? 'hidden' : 'inline-block'" 
                            class="opacity-0 fixed inset-0 z-10 bg-white" @click="closeSubmenu(index)"></div>
                    <div class="origin-top-right absolute left-0 right-0 mt-2 rounded-md shadow-lg bg-white focus:outline-none z-40 w-40"
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1"
                        :class="!links[index].showSubmenu ? 'hidden' : 'inline-block'" v-if="link.submenu">
                        <ul class="py-1" role="none">
                            <li class="pt-1.5 pb-0.5 px-2 hover:bg-gray-5" v-for="(menu, index) in link.submenus" :key="menu.text">
                                <a :href="menu.url" class="flex gap-2" @click.native="closeSubmenu(index)">
                                    {{ menu.text }}
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>
import VueClickAway from "vue3-click-away"

export default {
    data(){
        return {
            showSubmenu: false,
            showMobilemenu: false,
            links: [
                {
                    name: '',
                    text: 'Buy',
                    submenu: true,
                    showSubmenu: false,
                    submenus: [
                        {
                            url: '/residential-property-sale',
                            text: 'Residential',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                            ]
                        },
                        {
                            url: '/house-sale',
                            text: 'House',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                            ]
                        },
                        {
                            url: '/condo-sale',
                            text: 'Condo',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                            ]
                        },
                        {
                            url: '/lot-sale',
                            text: 'Lot',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                            ]
                        },
                        {
                            url: '/commercial-property-sale',
                            text: 'Commercial',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                            ]
                        },
                        {
                            url: '/office-space-sale',
                            text: 'Office Space',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                            ]
                        },
                        {
                            url: '/building-sale',
                            text: 'Building',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                            ]
                        },
                        {
                            url: '/serviced-office-sale',
                            text: 'Serviced Office',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                            ]
                        },
                        {
                            url: '/warehouse-sale',
                            text: 'Warehouse',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Residential Property in Makati',
                                },
                            ]
                        },
                    ]

                },                
                {
                    name: '',
                    text: 'Rent',
                    submenu: true,
                    showSubmenu: false,
                    submenus: [
                        {
                            url: '/residential-property-rent',
                            text: 'Residential'
                        },
                        {
                            url: '/house-rent',
                            text: 'House'
                        },
                        {
                            url: '/condo-rent',
                            text: 'Condo'
                        },
                        {
                            url: '/condo-rent',
                            text: 'Condo'
                        },
                        {
                            url: '/lot-rent',
                            text: 'Lot'
                        },
                        {
                            url: '/commercial-property-rent',
                            text: 'Commercial'
                        },
                        {
                            url: '/office-space-rent',
                            text: 'Office Space'
                        },
                        {
                            url: '/building-rent',
                            text: 'Building'
                        },
                        {
                            url: '/serviced-office-rent',
                            text: 'Serviced Office'
                        },
                        {
                            url: '/warehouse-rent',
                            text: 'Warehouse'
                        },
                    ]

                },
                {
                    url: '/about-us',
                    text: 'About',
                    submenu: false
                },
                {
                    url: 'https://housinginteractive.com.ph/blog',
                    text: 'Blog',
                    submenu: false
                },
                {
                    url: '/contact-us',
                    text: 'Contact Us',
                    submenu: false
                }
            ],
        }
    },

    methods: {
        initiateSubmenu(index){
            this.links[index].showSubmenu = !this.links[index].showSubmenu
        },

        closeSubmenu(index){
            this.links[index].showSubmenu = false
            this.showMobilemenu = false
        },
    }
}
</script>

<style>
    .router-link-active.router-link-exact-active{
        color: #2f80ed
    }
</style>