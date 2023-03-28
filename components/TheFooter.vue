<template>
    <footer class="bg-gray-50 lg:bg-white text-xs p-7">
        <div class="w-full text-center lg:text-left lg:w-9/12 grid grid-cols-1 lg:grid-cols-3 lg:mx-auto lg:max-w-7xl lg:border-y-2 lg:border-neutral-200 lg:pt-12 lg:pb-24 lg:bg-white bg-blend-luminosity bg-no-repeat bg-left-bottom lg:bg-[url('/images/city-footer.png')]">
            <div class="flex justify-center lg:justify-start">
                <Logo />
            </div>
            <div class="mb-6">
                <h6 class="text-xs uppercase font-bold mb-6">Get in touch</h6>
                <div class="grid grid-cols-1 lg:grid-cols-2 justify-center">
                    <div class="w-full flex items-center gap-4 mb-4">
                        <div>
                            <font-awesome-icon icon="location-dot" :style="{ height: '18px', color: '#dadada' }" />
                        </div>
                        <p class="uppercase">
                            6th Flr. LDM Building Polaris St. Makati City
                        </p>
                    </div>
                    <div class="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                        <div class="flex items-center">
                            <font-awesome-icon icon="phone" :style="{ height: '18px', color: '#dadada' }" />
                        </div>
                        <div class="w-full flex flex-row lg:flex-col lg:justify-start justify-between">
                            <p class="uppercase">
                                t: (632) 8809 7574
                            </p>
                            <p class="uppercase">
                                t: (632) 7759 2026
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mb-8">
                <h6 class="text-xs uppercase font-bold mb-6">Social Media</h6>
                <ul class="flex gap-4 justify-center lg:justify-start">
                    <li>
                        <NuxtLink to="/" class="w-8 h-8 bg-gray-400 rounded-full block flex items-center justify-center">
                            <font-awesome-icon :icon="['fab', 'facebook-f']" :style="{ height: '20px', color: '#333' }" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="w-8 h-8 bg-gray-400 rounded-full block flex items-center justify-center">
                            <font-awesome-icon :icon="['fab', 'twitter']" :style="{ height: '20px', color: '#333' }" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="w-8 h-8 bg-gray-400 rounded-full block flex items-center justify-center">
                            <font-awesome-icon :icon="['fab', 'linkedin']" :style="{ height: '20px', color: '#333' }" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="w-8 h-8 bg-gray-400 rounded-full block flex items-center justify-center">
                            <font-awesome-icon :icon="['fab', 'instagram']" :style="{ height: '20px', color: '#333' }" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="w-8 h-8 bg-gray-400 rounded-full block flex items-center justify-center">
                            <font-awesome-icon :icon="['fab', 'youtube']" :style="{ height: '20px', color: '#333' }" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="w-8 h-8 bg-gray-400 rounded-full block flex items-center justify-center">
                            <font-awesome-icon :icon="['fab', 'tiktok']" :style="{ height: '20px', color: '#333' }" />
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/" class="w-8 h-8 bg-gray-400 rounded-full block flex items-center justify-center">
                            <font-awesome-icon :icon="['fas', 'envelope']" :style="{ height: '20px', color: '#333' }" />
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        <div class="lg:w-9/12 lg:mx-auto lg:max-w-7xl flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start py-5 text-xs">
            <div class="mb-4 lg:mb-0">
                <p>Housinginteractive Inc &copy; 2003 - 2023</p>
            </div>
            <nav>
                <ul class="flex items-center justify-between gap-2">
                    <li>
                        Terms & conditions
                    </li>
                    <li>
                        <span class="rounded-full w-1 h-1 block bg-gray-400">&nbsp;</span>
                    </li>
                    <li>Privacy Policy</li>
                </ul>
            </nav>
        </div>
    </footer>
</template>