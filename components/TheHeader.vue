<template>
    <header class="sticky top-0 bg-zinc-50">
        <div class="container flex px-7 py-5 justify-between items-center mx-auto">
            <div class="flex items-center gap-x-14">
                <a href="/">
                    <Logo />
                </a>
                <nav>
                    <ul class="flex gap-8 font-bold text-base">
                        <li>
                            <a href="#">Buy</a>
                        </li>
                        <li>
                            <a href="#">Rent</a>
                        </li>
                        <li>
                            <NuxtLink to="/about">
                                About
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="https://housinginteractive.com.ph/blog/">
                                Blog
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/contact">
                                Contact
                            </NuxtLink>
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

<style>
    .router-link-active.router-link-exact-active{
        color: #2f80ed
    }
</style>