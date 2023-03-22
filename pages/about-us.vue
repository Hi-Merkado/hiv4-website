<template>
    <section class="shadow-lg">
        <div class="container mx-auto flex gap-4 px-7 py-4">
            <div class="relative w-1/4 h-8 rounded-lg bg-white border flex justify-between items-stretch">
                <div class="w-8 h-full p-2">
                    <font-awesome-icon icon="magnifying-glass" :style="{ color: '#dadada' }"/>
                </div>
                <div class="flex-1 relative">
                    <input
                    type="text"
                    class="w-full h-full focus:outline-none text-xs font-500"
                    placeholder="Search by building, city or area"
                    aria-label="Search by building, city or area"
                    aria-describedby="button-addon2">
                </div>
            </div>
            <div class="flex gap-4 h-8">
                <select class="w-[139px] border rounded-lg text-sm px-3">
                    <option value="">Division</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                </select>
                <select class="w-[139px] border rounded-lg text-sm px-3">
                    <option value="">Category</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                </select>
                <select class="w-[139px] border rounded-lg text-sm px-3">
                    <option value="">Type</option>
                    <option value="House">House</option>
                    <option value="Condo">Condo</option>
                    <option value="lot">Lot</option>
                </select>
                <div class="flex flex-1">
                    <input type="text" placeholder="1,375,000" class="w-1/3 border rounded-l-lg text-sm focus:outline-none px-4">
                    <input type="text" placeholder="2,000,000" class="w-1/3 border-y text-sm focus:outline-none px-4">
                    <select class="w-1/3 border rounded-r-lg text-sm px-3">
                        <option value="pps">P / sqm</option>
                        <option value="price">Price</option>
                    </select>
                </div>
                <select class="w-[139px] border rounded-lg text-sm px-3">
                    <option value="">Bedrooms</option>
                    <option value="0">Studio</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3+</option>
                </select>
                <button
                    class="w-[139px] h-full bg-green-default flex justify-center text-white rounded-lg font-bold"
                    type="button"
                    id="button-addon2">
                    <p class="text-white pt-1.5 text-md font-circularxx">
                        Search
                    </p>
                </button>
            </div>
        </div>
    </section>
    <header class="bg-gray-100 bg-blend-luminosity bg-no-repeat bg-bottom bg-[url('/images/about.png')] h-[489px] pt-20">
        <h1 class="text-center font-bold text-[36px] leading-10">About Housinginteractive</h1>
    </header>
    <section>
        <div class="w-[789px] mx-auto max-w-3xl py-[60px]">
            <h2 class="font-bold text-center">HousingInteractive is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat imperdiet sed. Sit amet nisl purus in mollis nunc. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Pretium aenean pharetra magna ac.</h2>
            <div class="relative py-[72px]">
                <img src="/images/founder.png"/>
                <div class="bg-gray-50 py-8 px-6 w-96 absolute bottom-0 left-8 rounded-md">
                    <h3 class="font-bold text-3xl">About the founder</h3>
                    <p class="text-xl">John Riad is an interesting guy. He is the oldest of two brothers born to Egyptian parents in Denmark.</p>
                </div>
            </div>

            <div class="text-base px-6 mt-4">
                <p class="mb-4">John spent his youth in Copenhagen, where he also took his business degree. Eventually, his studies led him to an internship in Manila. He fell in love with the city.</p>

                <p class="mb-4">John realized that the Philippines was sorely lacking an online brokerage that simplified the sale and purchase of Real Estate. In 2003, a small investment and big dreams led to the creation of HousingInteractive, the first online brokerage in the country.</p>

                <p class="mb-4">Nowadays, bigger name brands come to mind — Lamudi, Property 24, My Property, and Trovit, to name a few — but HousingInteractive stands out as the brokerage that opened the door for these new players.</p>

                <p class="mb-4">In short, HousingInteractive started the trend that ushered in a way of life.</p>
            </div>

            <div class="px-6 my-28">
                <h4 class="text-xl font-bold border-l-4 border-[#333] leading-6 pl-4">HousingInteractive started the trend that ushered in a way of life.</h4>
            </div>

            <div class="flex gap-3 h-[322px]">
                <img src="/images/about-us.jpg" alt="" class="w-3/5">
                <div class="w-2/5">
                    <img src="/images/high-street.jpg" alt="">
                    <div class="bg-blue-light mt-3 p-7 flex text-[#556A89] justify-between">
                        <p class="w-1/2 uppercase text-base leading-5 font-semibold">
                            Available Residential Properties for Sale
                        </p>
                        <div class="flex flex-col justify-between">
                            <p class="leading-10 text-[40px] font-bold">1756</p>
                            <a href="#" class="text-blue-default">Explore</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="my-28">
                <h3 class="text-3xl text-center font-semibold">Housinginteractive's Story</h3>
                <div class="flex justify-between gap-8 my-10">
                    <div class="w-1/5">
                        <p class="bg-gray-50 py-2.5 text-center font-bold text-lg rounded">2005</p>
                    </div>
                    <div class="w-4/5">
                        <p>In 2005, HousingInteractive included a sales section, paving the way to a more sophisticated platform that simplified real estate purchase in the country.</p>
                    </div>
                </div>

                <div class="flex justify-between gap-8 my-10">
                    <div class="w-1/5">
                        <p class="bg-gray-50 py-2.5 text-center font-bold text-lg rounded">2008</p>
                    </div>
                    <div class="w-4/5">
                        <p>In 2008, HousingInteractive branched out to cover commercial real estate lease and purchase. Now, it was offering a holistic contribution to the country — to handle your house and your office.</p>

                        <p>This distinction was clear to multinational giants, including the Asian Development Bank, who signed on as a major client of HousingInteractive. We started catering to the distinct home needs of the busy ADB executives.</p>
                    </div>
                </div>

                <div class="flex justify-between gap-8 my-10">
                    <div class="w-1/5">
                        <p class="bg-gray-50 py-2.5 text-center font-bold text-lg rounded">2014</p>
                    </div>
                    <div class="w-4/5">
                        <p>Expansion continued over the years, and in 2014, we invested in an affiliate company — who you all know now as Hoppler. Business boomed under the careful and caring watch of our partners. HousingInteractive took a step back and Hoppler took center stage.</p>

                        <p>Now it's time for HousingInteractive to shine once more. Hoppler's magnitude covers the entire Metro Manila; HousingInteractive will shine laser focus on the economic capitals of the Philippines - Makati, Bonifacio Global City, Ortigas, and the emerging financial district of Alabang.</p>
                    </div>
                </div>

                <div class="flex justify-between gap-8 my-10">
                    <div class="w-1/5">
                        <p class="bg-gray-50 py-2.5 text-center font-bold text-lg rounded">2018</p>
                    </div>
                    <div class="w-4/5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat imperdiet sed. Sit amet nisl purus in mollis nunc. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Pretium aenean pharetra magna ac.</p>
                    </div>
                </div>

                <div class="flex justify-between gap-8 my-10">
                    <div class="w-1/5">
                        <p class="bg-blue-light py-2.5 text-center font-bold text-lg text-blue-default rounded">Today</p>
                    </div>
                    <div class="w-4/5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat imperdiet sed. Sit amet nisl purus in mollis nunc. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Pretium aenean pharetra magna</p>
                    </div>
                </div>
            </div>
            <div class="bg-gray-50 py-11 px-16">
                <div class="border-l-4 border-black pl-8 py-6">
                    <h3 class="text-2xl leading-none font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
                    <p class="my-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet est placerat in egestas erat imperdiet sed. Sit amet nisl purus in mollis nunc. Curabitur vitae nunc sed velit dignissim sodales ut eu sem.</p>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="text-center">
                            <h4 class="text-[88px] font-bold leading-tight">
                                15
                            </h4>
                            <span class="text-sm">Years</span>
                        </div>
                        <div class="text-center">
                            <h4 class="text-[88px] font-bold leading-tight">
                                125
                            </h4>
                            <span class="text-sm">Lorem Ipsum</span>
                        </div>
                        <div class="text-center">
                            <h4 class="text-[88px] font-bold leading-tight">
                                15k
                            </h4>
                            <span class="text-sm">Happy Clients</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>