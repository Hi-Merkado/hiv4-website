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

    <header class="bg-gray-100 bg-blend-luminosity bg-no-repeat bg-bottom bg-contain lg:bg-auto bg-[url('/images/about.png')] h-[234px] md:h-[340px] lg:h-[489px] pt-10 md:pt-5 lg:pt-20">
        <h1 class="text-center font-bold text-[24px] md:text-[32px] lg:text-[36px] leading-10">Privacy Policy</h1>
    </header>
    <section>
        <div class="lg:w-[789px] mx-auto lg:max-w-3xl py-[60px] px-6 lg:px-0">

            <div class="text-base lg:px-6 mt-4">
                <h2 class="mb-4">At HousingInteractive.com.ph, we are committed to protecting your privacy. This privacy policy describes how we collect and use your personal information when you visit our website. By using our website, you consent to the collection and use of your personal information as described in this policy.</h2>

                <h3 class="text-xl font-bold mb-4">Collection of Information</h3>

                <p class="mb-4">We may collect personal information from you when you visit our website, including your name, email address, phone number, and other contact details. We collect this information when you voluntarily provide it to us, such as when you fill out a form or sign up for our newsletter. We use this information to respond to your requests, provide you with the services you have requested, and to communicate with you about our products and services.</p>

                <p class="mb-8">We may also collect non-personally identifiable information about your visit to our website, such as your IP address, browser type, and operating system. This information is used to analyze website usage and to improve our website and services.</p>

                <h3 class="text-xl font-bold mb-4">Use of Cookies</h3>

                <p class="mb-4">We use cookies on our website to enhance your browsing experience. Cookies are small text files that are placed on your device when you visit our website. They allow us to recognize your device and remember your preferences, so that we can provide you with a personalized experience. We do not collect any personally identifiable information through cookies.</p>

                <p class="mb-8">You may choose to disable cookies in your browser settings, but please note that this may limit your ability to use some features of our website.</p>

                <h3 class="text-xl font-bold mb-4">Sharing of Information</h3>

                <p class="mb-8">We do not share your personal information with third parties for marketing purposes. However, we may share your information with our service providers, such as our website hosting provider, in order to provide you with the services you have requested. We may also share your information with government agencies or other companies when required by law or to prevent fraud or unauthorized transactions.</p>

                <h3 class="text-xl font-bold mb-4">Security of Information</h3>

                <p class="mb-8">We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We store your information on secure servers and restrict access to authorized personnel only.</p>

                <h3 class="text-xl font-bold mb-4">Your Rights</h3>

                <p class="mb-8">You have the right to access, modify, or delete your personal information that we have collected. You may also opt out of receiving marketing communications from us at any time. To exercise these rights, please contact us using the contact information provided below.</p>

                <h3 class="text-xl font-bold mb-4">Updates to Privacy Policy</h3>

                <p class="mb-8">We may update this privacy policy from time to time. Any changes will be posted on this page, and will be effective immediately upon posting.</p>

                <h3 class="text-xl font-bold mb-4">Contact Us</h3>

                <p class="mb-8">If you have any questions or concerns about this privacy policy, or if you would like to exercise your rights, please contact us at <a href="mailto:info@housinginteractive.com" target="_blank" class="underline text-blue-default">info@housinginteractive.com</a>.</p>
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
            title: ref('Privacy Policy | Housinginteractive.com.ph'),
            description: ref('Privacy Policy'),
            currentPath: 'https://housinginteractive.com.ph/privacy-policy'
        }
    },
}
</script>