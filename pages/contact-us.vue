<template>
    <div>
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="description" />
            <Meta property="og:title" :content="title" />
            <Meta property="og:type" content="website" />
            <Meta property="og:url" :content="currentPath" />
            <Meta property="og:image" content="https://hi-web-cdn.s3.ap-southeast-1.amazonaws.com/images/HousingInteractive_Logo.png" />
            <Link rel="canonical" :href="currentPath" />
        </Head>
    </div>

    <ListingsSearch />
    <section class="lg:w-9/12 lg:max-w-7xl flex flex-col lg:flex-row mx-auto gap-8 mt-8 mb-16 px-4 lg:px-0">
        <div class="bg-gray-50 p-6 w-full lg:w-1/2 rounded-lg">
            <h3 class="text-4xl text-center">Get in touch</h3>
            <form>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                        Name
                    </label>
                    <input class="bg-gray-75 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="bg-gray-75 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email@email.com">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="phone">
                        Phone
                    </label>
                    <input class="bg-gray-75 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="phone" placeholder="0xxxxxxxxxx">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                        Message
                    </label>
                    <textarea class="bg-gray-75 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message"></textarea>
                </div>
                <div class="mb-4">
                    <button class="bg-blue-default hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg">
                        Send Inquiry
                    </button>
                </div>
            </form>
        </div>
        <div class="bg-gray-50 p-6 w-full lg:w-1/2 rounded-lg">
            <GoogleMaps style="height: 250px;"/>
            <div class="grid lg:grid-cols-2 py-5">
                <div class="flex items-center gap-4 mb-4 lg:mb-0">
                    <div>
                        <font-awesome-icon icon="phone" :style="{ height: '18px', color: '#2F80ED' }" />
                    </div>
                    <div class="text-sm leading-4">
                        <p class="uppercase">
                            M: +63 956 134 3180 (Globe)
                        </p>
                        <p class="uppercase">
                            M: +63 919 474 1067 (Smart)
                        </p>
                        <p class="uppercase">
                            T: +632 8401 6302
                        </p>
                    </div>
                </div>                    
                <div class="flex items-center gap-4">
                    <div>
                        <font-awesome-icon icon="location-dot" :style="{ height: '18px', color: '#2F80ED' }" />
                    </div>
                    <p class="text-sm leading-4">
                        6th Flr. LDM Building,<br>
                        Polaris St. Makati City
                    </p>
                </div>
                <div class="flex items-center gap-4 mt-4">
                    <div>
                        <font-awesome-icon icon="envelope" :style="{ height: '18px', color: '#2F80ED' }" />
                    </div>
                    <p class="text-sm leading-4">
                        <a href="mailto:info@housinginteractive.com">info@housinginteractive.com</a>
                    </p>
                </div>
            </div>
            <div class="border-t-2 border-[#cccccc] pt-5">
                <p class="text-base leading-5">Our partner brokers are flexing their muscles as we speak. We want to help connect you with your perfect property. <span class="font-bold">Let's get started!</span></p>
            </div>
        </div>
    </section>
</template>

<script>
import { useSearchParamsStore } from '@/stores/SearchParamsStore'

export default {
    setup(){
        const SearchParamsStore = useSearchParamsStore()

        return {
            SearchParamsStore,
            title: ref('Contact Us | Housinginteractive.com.ph'),
            description: ref('Contact Us'),
            currentPath: 'https://housinginteractive.com.ph/contact-us'
        }
    },
}
</script>