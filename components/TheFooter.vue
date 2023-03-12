<template>
    <footer class="bg-white text-xs">
        <div class="w-9/12 grid grid-cols-3 mx-auto max-w-7xl border-y-2 border-neutral-200 pt-12 pb-24 bg-white bg-blend-luminosity bg-no-repeat bg-left-bottom bg-[url('/images/city-footer.png')]">
            <div>
                <Logo />
            </div>
            <div>
                <h6 class="text-xs uppercase font-bold mb-6">Get in touch</h6>
                <div class="grid grid-cols-2">
                    <div class="flex items-center gap-4">
                        <div>
                            <font-awesome-icon icon="location-dot" :style="{ height: '18px', color: '#dadada' }" />
                        </div>
                        <p class="uppercase">
                            6th Flr. LDM Building<br /> 
                            Polaris St. Makati City<br />
                            Manila, Philippines
                        </p>
                    </div>
                    <div class="flex items-center gap-4">
                        <div>
                            <font-awesome-icon icon="phone" :style="{ height: '18px', color: '#dadada' }" />
                        </div>
                        <div>
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
            <div>
                <h6 class="text-xs uppercase font-bold mb-6">Social Media</h6>
                <ul class="flex gap-4">
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
        <div class="w-9/12 mx-auto max-w-7xl flex justify-between items-center py-5 text-xs">
            <div>
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