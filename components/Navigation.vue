<template>

    <nav class="lg:block hidden">
        <div class="group inline-block" v-for="link in links">
            <button class="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center">
                <span class="pr-1 text-base font-bold flex-1" v-if="link.submenu">{{ link.text }}</span>
                <a class="pr-1 text-base font-bold flex-1" :href="link.url" v-else>{{ link.text }}</a>
                <span v-show="link.submenu">
                    <svg class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                    </svg>
                </span>
            </button>
            <ul class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32" v-show="link.submenu">
                <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100" v-for="submenu in link.submenus">
                    <button class="w-full text-left flex items-center outline-none focus:outline-none">
                        <span class="pr-1 flex-1">{{ submenu.text }}</span>
                        <span class="mr-auto" v-show="submenu.thirdmenu">
                            <svg class="fill-current h-4 w-4 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                            </svg>
                        </span>
                    </button>
                    <ul class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32" v-show="submenu.thirdmenu">
                        <li class="px-3 py-1 hover:bg-gray-100" v-for="menu in submenu.thirdmenus">
                            <a :href="menu.url" class="block">{{ menu.text }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

    </nav>

</template>

<style>
    /* since nested groupes are not supported we have to use 
        regular css for the nested dropdowns 
    */
    li>ul                 { transform: translatex(100%) scale(0) }
    li:hover>ul           { transform: translatex(101%) scale(1) }
    li > button svg       { transform: rotate(-90deg) }
    li:hover > button svg { transform: rotate(-270deg) }

    /* Below styles fake what can be achieved with the tailwind config
        you need to add the group-hover variant to scale and define your custom
        min width style.
        See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
        for implementation with config file
    */
    .group:hover .group-hover\:scale-100 { transform: scale(1) }
    .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
    .scale-0 { transform: scale(0) }
    .min-w-32 { min-width: 8rem }
</style>

<script>
export default {
    data(){
        return {
            links: [
                {
                    url: '#',
                    text: 'Buy',
                    submenu: true,
                    submenus: [
                        {
                            url: '#',
                            text: 'Residential',
                            thirdmenu: true,
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
                    url: '#',
                    text: 'Rent',
                    submenu: true,
                    submenus: [
                        {
                            url: '#',
                            text: 'Residential',
                            thirdmenu: true,
                            thirdmenus: [
                                {
                                    url: '/residential-property-rent-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/residential-property-rent-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/residential-property-rent-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/residential-property-rent-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/residential-property-rent-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/residential-property-rent-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/residential-property-rent-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/residential-property-rent-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/residential-property-rent-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'House',
                            thirdmenu: true,
                            thirdmenus: [
                                {
                                    url: '/house-rent-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/house-rent-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/house-rent-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/house-rent-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/house-rent-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/house-rent-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/house-rent-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/house-rent-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/house-rent-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Condo',
                            thirdmenu: true,
                            thirdmenus: [
                                {
                                    url: '/condo-rent-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/condo-rent-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/condo-rent-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/condo-rent-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/condo-rent-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/condo-rent-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/condo-rent-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/condo-rent-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/condo-rent-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Lot',
                            thirdmenu: true,
                            thirdmenus: [
                                {
                                    url: '/lot-rent-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/lot-rent-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/lot-rent-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/lot-rent-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/lot-rent-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/lot-rent-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/lot-rent-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/lot-rent-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/lot-rent-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Commercial',
                            thirdmenu: true,
                            thirdmenus: [
                                {
                                    url: '/commercial-property-rent-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/commercial-property-rent-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/commercial-property-rent-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/commercial-property-rent-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/commercial-property-rent-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/commercial-property-rent-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/commercial-property-rent-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/commercial-property-rent-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/commercial-property-rent-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Office Space',
                            thirdmenu: true,
                            thirdmenus: [
                                {
                                    url: '/office-space-rent-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/office-space-rent-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/office-space-rent-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/office-space-rent-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/office-space-rent-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/office-space-rent-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/office-space-rent-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/office-space-rent-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/office-space-rent-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Building',
                            thirdmenu: true,
                            thirdmenus: [
                                {
                                    url: '/building-rent-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/building-rent-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/building-rent-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/building-rent-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/building-rent-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/building-rent-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/building-rent-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/building-rent-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/building-rent-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Serviced Office',
                            thirdmenu: true,
                            thirdmenus: [
                                {
                                    url: '/serviced-office-rent-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/serviced-office-rent-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/serviced-office-rent-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/serviced-office-rent-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/serviced-office-rent-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/serviced-office-rent-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/serviced-office-rent-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/serviced-office-rent-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/serviced-office-rent-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
                        },
                        {
                            url: '#',
                            text: 'Warehouse',
                            thirdmenu: true,
                            thirdmenus: [
                                {
                                    url: '/warehouse-rent-makati',
                                    text: 'Makati',
                                },
                                {
                                    url: '/warehouse-rent-taguig',
                                    text: 'Taguig',
                                },
                                {
                                    url: '/warehouse-rent-pasig',
                                    text: 'Pasig',
                                },
                                {
                                    url: '/warehouse-rent-mandaluyong',
                                    text: 'Mandaluyong',
                                },
                                {
                                    url: '/warehouse-rent-muntinlupa',
                                    text: 'Muntinlupa',
                                },
                                {
                                    url: '/warehouse-rent-pasay',
                                    text: 'Pasay',
                                },
                                {
                                    url: '/warehouse-rent-paranaque',
                                    text: 'Paranaque',
                                },
                                {
                                    url: '/warehouse-rent-quezon-city',
                                    text: 'Quezon City',
                                },
                                {
                                    url: '/warehouse-rent-las-pinas',
                                    text: 'Las Pinas',
                                },
                            ]
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
}
</script>