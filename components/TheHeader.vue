<template>
    <header class="sticky top-0 bg-zinc-50 z-50">
        <div class="container flex px-7 py-5 justify-between items-center mx-auto">
            <div class="flex items-center gap-x-14">
                <a href="/">
                    <Logo />
                </a>
                <Navigation />
            </div>
            <nav class="grid place-items-end">
                <div class="flex justify-end">
                    <a href="http://app.housinginteractive.com.ph" class="lg:flex lg:gap-4 lg:w-52 lg:h-5 font-bold text-base">
                        <span class="hidden lg:inline">Free Listing Upload</span>
                        <font-awesome-icon icon="user" size="xs" class="place-items-end" :style="{ color: '#2f80ed', width: '37px', height: '20px', lineHeight: '1' }"/>
                    </a>
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

        <Login
            :showLogin="showLogin"
            :referrerUrl="[]" 
            :model="`property`" 
            :modelId="1"
            :listingData="[]"
            @toggleLogin="toggleLogin"
        />

    </header>
</template>

<script>
export default {
    data(){
        return {
            showMobilemenu: false,
            showLogin: false
        }
    },

    methods: {
        toggleLogin(){
            this.showLogin = !this.showLogin
        }
    }
}
</script>

<style>
    .router-link-active.router-link-exact-active{
        color: #2f80ed
    }
</style>
