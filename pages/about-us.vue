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

    <header class="bg-gray-100 bg-no-repeat bg-bottom bg-contain lg:bg-cover bg-[url('/images/about-us.jpg')] h-[234px] md:h-[340px] lg:h-[489px] pt-10 md:pt-5 lg:pt-52">
        <h1 class="text-center font-bold text-[24px] md:text-[32px] lg:text-[36px] leading-10">About Housinginteractive</h1>
    </header>
    <section>
        <div class="mx-auto lg:w-9/12 lg:max-w-7xl py-[60px] px-6 lg:px-0">
            <h2 class="font-bold mb-[30px]">HousingInteractive is the largest online real estate brokerage company in the Philippines, which services international and local clientele. Housinginteractive's real estate platform features a wide selection of properties fit for most consumers. With a team of efficient and dedicated professionals, HousingInteractive is committed to delivering complete and first class property solutions.</h2>
            
            <h2 class="font-bold mb-[30px]">The humble beginnings of Housinginteractive started in 2003, with only a small investment fund and two people to develop the business. When its formal operation began in 2004, four people managed and serviced the primary housing needs of foreign expatriates seeking residence in the Philippines. Today, Housinginteractive employs over 50 highly qualified individuals who are enthusiastic and determined to provide excellent, professional services.</h2>

            <h2 class="font-bold mb-[30px]">The establishment was a challenging period because the pioneer employees had to personally encourage landlords to work with them. They literally had to go over each houses and make inquiries one by one. Some owners also gave them difficulties in getting photos of the properties. Through it all, the company endured and gained a reputation of being one of the most depenable brokerage firms in the country. Even with distinguished real estate developers, particularly Rockwell Land, Inc., Housinginteractive is the preferred brokerage rental company.</h2>

            <h2 class="font-bold mb-[30px]">Its first website, www.housinginteractive.com, was also launched as a tool that will help clients in their home search. Housinginteractive established solid relationships with valued partners, property owners and professional network of brokers that led the company to build its strongest asset now the property listings database.</h2>

            <h2 class="font-bold mb-[30px]">The success of the initial operation encouraged Housinginteractive to expand its scope. Consequently, Asset Management service was developed. The company began to sublease empty apartments. These were fixed, furnished, and then offered to expatriates in need oftemporary accommodation in the country. As of this present time, Housinginteractive is managing 26 units.</h2>

            <!-- <div class="px-6 my-6 md:my-10 lg:my-28">
                <h4 class="text-xl font-bold border-l-4 border-[#333] leading-6 pl-4">HousingInteractive started the trend that ushered in a way of life.</h4>
            </div> -->

            <!-- div class="my-6 md:my-10 lg:my-28">
                <h3 class="text-2xl lg:text-3xl text-center font-semibold">Housinginteractive's Story</h3>
                <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-8 my-10">
                    <div class="w-full md:w-1/5 lg:w-1/5">
                        <p class="bg-gray-50 py-2.5 text-center font-bold text-lg rounded">2005</p>
                    </div>
                    <div class="w-full md:w-4/5 lg:w-4/5">
                        <p>The year 2005 was one of the defining moments for Housinginteractive. Through hard work and perseverance, more direct owners entrusted the company with their homes. This made the residential properties for rent flourished. Majority of the business came from the areas of Makati City, Ortigas, Ayala Alabang, Quezon City, and Taguig, specifically in Bonifacio Global City. This inspired and pushed the company to move forward and branch out to residential properties for sale.</p>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-8 my-10">
                    <div class="w-full md:w-1/5 lg:w-1/5">
                        <p class="bg-gray-50 py-2.5 text-center font-bold text-lg rounded">2008</p>
                    </div>
                    <div class="w-full md:w-4/5 lg:w-4/5">
                        <p>In 2008, the company became the market leader in the residential sector. After some time, it expanded its operation and started offering commercial properties either for sale or for lease. During this period, HousingInteractive also began ministering to embassies, multinational companies, and other reputable institutions.</p>

                        <p>With the growing list of clientele, the company realized that each client has different and unique requirements that needed to be addressed individually. HousingInteractiveresponded by improving its services and customizing them according to the needs of the customers, making the real estate buying or renting process painless as possible.</p>

                        <p>>Over the years, HousingInteractive has been actively upgrading the website features and look as its database. increases, including premium worldwide listings. This made the company the largest online brokerage platform in the country.</p>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-8 my-10">
                    <div class="w-full md:w-1/5 lg:w-1/5">
                        <p class="bg-gray-50 py-2.5 text-center font-bold text-lg rounded">2011</p>
                    </div>
                    <div class="w-full md:w-4/5 lg:w-4/5">
                        <p>Meanwhile, in 2011, AsiaRelocation was founded. It is a sister company of Housing Interactive that is the only one-stop-shop provider covering all international moves and relocation. services in the Philippines. As a result of the company's success in the Philippine market, it decided to globalize their services/products by establishing Housing Interactive Vietnam in 2012. It follows the same model created in the Philippines.</p>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-8 my-10">
                    <div class="w-full md:w-1/5 lg:w-1/5">
                        <p class="bg-gray-50 py-2.5 text-center font-bold text-lg rounded">2014</p>
                    </div>
                    <div class="w-full md:w-4/5 lg:w-4/5">
                        <p>On 2014, Housinginteractive celebrated another milestone. The Database was behind Hoppler which was co-founded by Mr John Riad, the CEO of HousingInteractive. Powered by Google and FourSquare, it promises new and exciting features that will further enhance user experience and promote growth in the Real Estate Industry</p>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-8 my-10">
                    <div class="w-full md:w-1/5 lg:w-1/5">
                        <p class="bg-gray-50 py-2.5 text-center font-bold text-lg rounded">2017</p>
                    </div>
                    <div class="w-full md:w-4/5 lg:w-4/5">
                        <p>In the year 2017, HousingInteractive started a new and improve portal that makes real estate in the Philippines easier for .both clients and brokers To date, clients and network brokes choose HousingInteractive for different real estate services. Housinginteractive is still surviving and excited to see what's coming in the succeeding years.</p>
                    </div>
                </div>

                <div class="flex flex-col md:flex-row lg:flex-row justify-between gap-8 my-10">
                    <div class="w-full md:w-1/5 lg:w-1/5">
                        <p class="bg-blue-light py-2.5 text-center font-bold text-lg text-blue-default rounded">Today</p>
                    </div>
                    <div class="w-full md:w-4/5 lg:w-4/5">
                        <p class="mb-4">The pandemic has truly turned the world upside down, and the real estate industry was no exception. However, at HousingInteractive, we saw this as an opportunity to step up and make things easier for our clients. We poured our hearts and souls into optimizing our website, ensuring that property buyers, sellers, and clients can have a seamless and efficient real estate experience.</p>
                        <p class="mb-4">And now, as we celebrate our 20th year in the business, we are thrilled to unveil our new look, new team, and new website design. But one thing remains constant - our unwavering commitment to providing top-notch service to our clients. We take pride in being able to deliver the best possible service, no matter the circumstances.</p>
                        <p class="mb-4">We understand how daunting the process of buying or selling a property can be, especially during these trying times. That's why we want to assure you that we are here for you every step of the way. We are more than just a real estate company - we are your partners in finding your dream home, your trusted advisors in making informed decisions, and your dedicated advocates in negotiating the best deals.</p>
                    </div>
                </div>
            </div -->
            
            <div class="flex w-full gap-4 mb-12">
                <div class="w-1/2 flex h-[295] items-center flex-col justify-center">
                    <h3 class="w-full text-2xl mb-4">About the Founder</h3>
                    <p class="mb-4">John realized that the Philippines was sorely lacking an online brokerage that simplified the sale and purchase of Real Estate. In 2003, a small investment and big dreams led to the creation of HousingInteractive, the first online brokerage in the country. Nowadays, bigger name brands come to mind -- Lamudi, Property 24, My Property, and Trovit, to name a few -- but HousingInteractive stands out as the brokerage that opened the door for these new players.</p>

                    <p class="w-full">In short, HousingInteractive started the trend that ushered in a way of life.</p>
                </div>
                <div class="w-1/2">
                    <img src="~/assets/images/sj2.jpg" alt="" class="w-full">
                </div>
            </div>

            <div class="flex w-full gap-4 mb-12">
                <div class="w-1/2">
                    <img src="~/assets/images/adb1.jpg" class="w-full" alt="">
                </div>
                <div class="w-1/2 flex h-[295] items-center flex-col justify-center">
                    <h3 class="w-full text-2xl mb-4">Company Story</h3>
                    <p class="w-full mb-4">In 2005, HousingInteractive included a sales section, paving the way to a more sophisticated platform that simplified real estate purchase in the country.</p>

                    <p>In 2008, HousingInteractive branched out to cover commercial real estate lease and purchase. Now, it was offering a holistic contribution to the country -- to handle your house and your office.</p>
                </div>
            </div>

            <div class="flex w-full gap-4 mb-12">
                <div class="w-1/2 flex h-[295] items-center flex-col justify-center">
                    <p class="w-full mb-4">This distinction was clear to multinational giants, including the Asian Development Bank, who signed on as a major client of HousingInteractive. We started catering to the distinct home needs of the busy ADB executives.</p>

                    <p>Expansion continued over the years, and in 2014, we invested in an affiliate company -- who you all know now as Hoppler. Business boomed under the careful and caring watch of our partners. HousingInteractive took a step back and Hoppler took center stage.</p>
                </div>
                <div class="w-1/2">
                    <img src="~/assets/images/upper2.jpg" class="w-full" alt="">
                </div>
            </div>

            <div class="flex w-full gap-4 mb-12">
                <div class="w-1/2">
                    <img src="~/assets/images/upper1.jpg" class="w-full" alt="">
                </div>
                <div class="w-1/2 flex h-[295] items-center flex-col justify-center">
                    <p class="w-full mb-4">Now it&apos;s time for HousingInteractive to shine once more. Hoppler&apos;s magnitude covers the entire Metro Manila; HousingInteractive will shine laser focus on the economic capitals of the Philippines - Makati, Bonifacio Global City, Ortigas, and the emerging financial district of Alabang.</p>

                    <p class="w-full">In 2010, a census showed the Makati population at slightly over 500 thousand -- but which grew to over a million during the day with the sheer traffic coming into the key economic area for commercial reasons. BGC meanwhile is catching up with the rising amount of commercial real estate spaces available for reach. Even the country&apos;s Stock Exchange transferred its trading floors to BGC in 2018.</p>
                </div>
            </div>

            <div class="flex w-full gap-4">
                <div class="w-1/2 flex h-[295] items-center flex-col justify-center">
                    <p class="mb-4 w-full">The needs surrounding the financial districts are so unique, that HousingInteractive has chosen to devote its years of pioneering experience to the particular needs of people living and working in these four key areas. When the citizens of Makati, BGC, Ortigas, and Alabang are busy making the money that drives the nation, HousingInteractive makes their lives simpler and easier through the easy discovery of their perfect space.</p>
                </div>
                <div class="w-1/2">
                    <img src="~/assets/images/bottom3.jpg" class="w-full" alt="">
                </div>
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
            title: ref('About Housinginteractive Inc | Housinginteractive.com.ph'),
            description: ref('About Housinginteractive Inc'),
            currentPath: 'https://housinginteractive.com.ph/about-us'
        }
    },
}
</script>