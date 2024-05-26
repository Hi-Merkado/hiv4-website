<template>
    <div>
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="description" />
            <Meta property="og:title" content="Buy, Sell & Rent Properties - 1st Philippine Real Estate Portal" />
            <Meta property="og:type" content="website" />
            <Meta property="og:url" :content="currentPath" />
            <Meta property="og:image" content="https://hi-web-cdn.s3.ap-southeast-1.amazonaws.com/images/HousingInteractive_Logo.png" />
            <Link rel="canonical" href="https://housinginteractive.com.ph" />
        </Head>
    </div>

    <Hero />

    <!-- <Featured /> -->

    <Testimonial />

    <TheSteps />
    
</template>

<script>
import { ref } from 'vue'

export default {
    setup(){

        return {
            title: ref('Buy, Sell & Rent Properties - 1st Philippine Real Estate Portal | Housinginteractive.com.ph'),
            description: ref('Buy, Sell & Rent Properties - 1st Philippine Real Estate Portal'),
            currentPath: 'https://housinginteractive.com.ph/'
        }
    }
}
</script>
