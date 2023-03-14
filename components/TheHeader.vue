<template>
    <header class="sticky top-0 bg-zinc-50 z-50">
        <div class="container flex px-7 py-5 justify-between items-center mx-auto">
            <div class="flex items-center gap-x-14">
                <a href="/">
                    <Logo />
                </a>
                <nav>
                    <ul class="flex gap-8 font-bold text-base" @click-away="closeSubmenu">
                        <li v-for="(link, index) in links" :key="index" class="relative">
                            <a href="#" v-if="!link.submenu">
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
            <nav>
                <NuxtLink to="http://app.housinginteractive.com.ph" class="flex gap-4 w-32 h-5 font-bold text-base">
                    <span>Log in</span>
                    <font-awesome-icon icon="user" size="xs" :style="{ color: '#2f80ed' }"/>
                </NuxtLink>
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
            links: [
                {
                    name: '',
                    text: 'Buy',
                    submenu: true,
                    showSubmenu: false,
                    submenus: [
                        {
                            url: '/residential-property-sale',
                            text: 'Residential'
                        },
                        {
                            url: '/house-sale',
                            text: 'House'
                        },
                        {
                            url: '/condo-sale',
                            text: 'Condo'
                        },
                        {
                            url: '/lot-sale',
                            text: 'Lot'
                        },
                        {
                            url: '/commercial-property-sale',
                            text: 'Commercial'
                        },
                        {
                            url: '/office-space-sale',
                            text: 'Office Space'
                        },
                        {
                            url: '/building-sale',
                            text: 'Building'
                        },
                        {
                            url: '/serviced-office-sale',
                            text: 'Serviced Office'
                        },
                        {
                            url: '/warehouse-sale',
                            text: 'Warehouse'
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
                    name: '/about-us',
                    text: 'About',
                    submenu: false
                },
                {
                    name: 'https://housinginteractive.com.ph/blog',
                    text: 'Blog',
                    submenu: false
                },
                {
                    name: '/contact-us',
                    text: 'Contact Us',
                    submenu: false
                }
            ],
        }
    },

    methods: {
        initiateSubmenu(index){
            this.links[index].showSubmenu = !this.links[index].showSubmenu
            console.log(this.links[index].showSubmenu)
        },

        closeSubmenu(index){
            this.links[index].showSubmenu = false
        },
    }
}
</script>

<style>
    .router-link-active.router-link-exact-active{
        color: #2f80ed
    }
</style>