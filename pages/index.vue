<template>
    <div>
        <Head>
            <Title>{{ title }}</Title>
            <Meta name="description" :content="description" />
            <link rel="canonical" href="https://housinginteractive.com.ph">
        </Head>
    </div>

    <Hero />

    <Featured />

    <Testimonial />

    <TheSteps />
</template>

<script>
import { ref } from 'vue'

export default {
    setup(){
        return {
            title: ref(''),
            description: ref('')
        }
    },
    created(){
        useHead({
            title: 'Housinginteractive.com.ph'
        })
    }, 
}
</script>