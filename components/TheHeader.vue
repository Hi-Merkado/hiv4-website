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
                                <font-awesome-icon icon="chevron-down" style="height: 13px; margin-top: 5px" v-if="link.submenu"/>
                            </a>

                            <div v-if="link.submenu" 
                                    :class="!links[index].showSubmenu ? 'hidden' : 'inline-block'" 
                                    class="opacity-0 fixed inset-0 z-10 bg-white" @click="closeSubmenu(index)"></div>

                            <div class="absolute" v-if="link.submenu" :class="!links[index].showSubmenu ? 'hidden' : 'inline-block'">
                                <div class="bg-white rounded-md p-3 min-w-[220px] top-1 w-full absolute z-10">
                                    <ul class="[&>li]:text-base [&>li]:cursor-pointer [&>li]:px-2 [&>li]:py-1 [&>li]:rounded-md [&>li]:transition-all">
                                        <li v-for="(menu, mindex) in link.submenus" :key="mindex" class="hover:text-white hover:bg-gray-600">
                                            <div :class="menu.thirdmenu ? 'flex justify-between' : ''">
                                                <a :href="menu.url" v-if="!menu.thirdmenu">{{ menu.text }}</a>
                                                <a href="#" v-else v-on:click="links[index].submenus[mindex].showThirdMenu = !links[index].submenus[mindex].showThirdMenu"
                                                @click.prevent="closeThirdmenu(index, mindex)">{{ menu.text }}</a>
                                                <font-awesome-icon icon="chevron-right" style="height: 13px; margin-top: 5px" v-if="menu.thirdmenu"/>
                                            </div>

                                            
                                            <div
                                                v-if="menu.thirdmenu"  
                                                :class="!links[index].submenus[mindex].showThirdMenu ? 'hidden' : 'inline-block'"
                                                class="bg-white rounded-md max-w-[220px] w-full p-3 absolute -right-[220px] top-1 [&>span]:text-base [&>span]:cursor-pointer [&>span]:px-2 [&>span]:py-1 [&>span]:rounded-md">
                                                <span class="block text-black" v-for="(tmenu, tindex) in menu.thirdmenus" :key="tindex">
                                                    <a :href="tmenu.url">{{ tmenu.text }}</a>
                                                </span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </li>
                    </ul>
                </nav>
            </div>
            <nav class="grid place-items-end">
                <div class="flex justify-end">
                    <NuxtLink to="http://app.housinginteractive.com.ph" class="lg:flex lg:gap-4 lg:w-52 lg:h-5 font-bold text-base">
                        <span class="hidden lg:inline">Free Listing Upload</span>
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
                            url: '#',
                            text: 'Residential',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/residential-property-sale-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/residential-property-sale-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/residential-property-sale-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/residential-property-sale-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/residential-property-sale-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/residential-property-sale-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/residential-property-sale-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/residential-property-sale-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/residential-property-sale-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'House',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/house-sale-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/house-sale-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/house-sale-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/house-sale-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/house-sale-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/house-sale-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/house-sale-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/house-sale-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/house-sale-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Condo',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/condo-sale-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/condo-sale-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/condo-sale-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/condo-sale-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/condo-sale-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/condo-sale-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/condo-sale-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/condo-sale-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/condo-sale-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Lot',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/lot-sale-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/lot-sale-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/lot-sale-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/lot-sale-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/lot-sale-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/lot-sale-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/lot-sale-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/lot-sale-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/lot-sale-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Commercial',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/commercial-property-sale-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/commercial-property-sale-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/commercial-property-sale-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/commercial-property-sale-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/commercial-property-sale-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/commercial-property-sale-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/commercial-property-sale-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/commercial-property-sale-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/commercial-property-sale-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Office Space',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/office-space-sale-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/office-space-sale-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/office-space-sale-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/office-space-sale-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/office-space-sale-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/office-space-sale-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/office-space-sale-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/office-space-sale-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/office-space-sale-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Building',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/building-sale-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/building-sale-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/building-sale-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/building-sale-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/building-sale-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/building-sale-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/building-sale-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/building-sale-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/building-sale-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Serviced Office',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/serviced-office-sale-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/serviced-office-sale-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/serviced-office-sale-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/serviced-office-sale-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/serviced-office-sale-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/serviced-office-sale-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/serviced-office-sale-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/serviced-office-sale-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/serviced-office-sale-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Warehouse',
                            thirdmenu: true,
                            showThirdMenu: false,
                            thirdmenus: [
                                {
                                    url: '/warehouse-sale-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/warehouse-sale-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/warehouse-sale-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/warehouse-sale-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/warehouse-sale-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/warehouse-sale-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/warehouse-sale-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/warehouse-sale-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/warehouse-sale-las-pinas',
                                    text: 'Las Pinas',
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
            this.links[index].submenus.forEach(function(item){
                item.showThirdMenu = false
            })
            this.showMobilemenu = false
        },

        closeThirdmenu(index, mindex){
            this.links[index].submenus.forEach(function(item){
                item.showThirdMenu = false
            })
            this.links[index].submenus[mindex].showThirdMenu = !this.links[index].submenus[mindex].showThirdMenu
            // console.log(this.links[index].submenus[mindex].showThirdMenu)
        },
    }
}
</script>

<style>
    .router-link-active.router-link-exact-active{
        color: #2f80ed
    }
</style>