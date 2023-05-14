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
        <h1 class="text-center font-bold text-[24px] md:text-[32px] lg:text-[36px] leading-10">Terms of use</h1>
    </header>
    <section>
        <div class="lg:w-[789px] mx-auto lg:max-w-3xl py-[60px] px-6 lg:px-0">

            <div class="text-base lg:px-6 mt-4">
                <h2 class="mb-4">Welcome to HousingInteractive.com.ph, owned and operated by Housing Interactive, Inc. By accessing and using our website, you agree to comply with and be bound by the following terms of use. Please read these terms carefully before using our website.</h2>

                <h3 class="text-xl font-bold mb-4">Content</h3>

                <p class="mb-8">The content on our website, including but not limited to text, images, videos, and other materials, is provided for informational purposes only. We make no representations or warranties regarding the accuracy, completeness, or reliability of this content. We reserve the right to modify or remove content on our website at any time, without prior notice.</p>

                <h3 class="text-xl font-bold mb-4">Intellectual Property</h3>

                <p class="mb-8">All content on our website is the property of Housing Interactive, Inc., or our licensors, and is protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content on our website without our prior written consent.</p>

                <h3 class="text-xl font-bold mb-4">User Conduct</h3>

                <p class="mb-8">You may not use our website for any unlawful purpose, or in any way that violates these terms of use. You may not engage in any conduct that could damage, disable, or impair our website or interfere with the operation of our website.</p>

                <h3 class="text-xl font-bold mb-4">Registration</h3>

                <p class="mb-8">Some features of our website may require registration. When you register, you agree to provide accurate and complete information about yourself, and to update this information as necessary. You are responsible for maintaining the confidentiality of your account information, including your username and password, and for all activities that occur under your account.</p>

                <h3 class="text-xl font-bold mb-4">Links to Third-Party Websites</h3>

                <p class="mb-8">Our website may contain links to third-party websites. We provide these links for your convenience only, and do not endorse or have any control over these websites. We are not responsible for the content or practices of these websites.</p>

                <h3 class="text-xl font-bold mb-4">Disclaimer of Warranties</h3>

                <p class="mb-8">We provide our website on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We make no representations or warranties regarding the operation or availability of our website, or the accuracy, completeness, or reliability of any content on our website.</p>

                <h3 class="text-xl font-bold mb-4">Limitation of Liability</h3>

                <p class="mb-8">In no event shall Housing Interactive, Inc., our affiliates, or our licensors be liable for any damages, including without limitation, direct or indirect, incidental, special, consequential, or punitive damages, arising out of or in connection with your use of our website.</p>

                <h3 class="text-xl font-bold mb-4">Indemnification</h3>

                <p class="mb-8">You agree to indemnify and hold Housing Interactive, Inc., our affiliates, and our licensors harmless from any claims, damages, or losses arising out of or in connection with your use of our website, or any violation of these terms of use.</p>

                <h3 class="text-xl font-bold mb-4">Governing Law</h3>

                <p class="mb-8">These terms of use shall be governed by and construed in accordance with the laws of the Philippines, without giving effect to any principles of conflicts of law.</p>

                <h3 class="text-xl font-bold mb-4">Changes to terms of use</h3>

                <p class="mb-8">We may update these terms of use from time to time. Any changes will be posted on this page, and will be effective immediately upon posting.</p>

                <h3 class="text-xl font-bold mb-4">Contact Us</h3>

                <p class="mb-8">If you have any questions or concerns about these terms of use, please contact us at <a href="mailto:info@housinginteractive.com" target="_blank" class="underline text-blue-default">info@housinginteractive.com</a>.</p>
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
            title: ref('Terms of use | Housinginteractive.com.ph'),
            description: ref('Terms of use'),
            currentPath: 'https://housinginteractive.com.ph/terms-of-use'
        }
    },
}
</script>