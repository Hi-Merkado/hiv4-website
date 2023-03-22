<template>
    <section class="shadow-lg">
        <div class="container mx-auto flex gap-4 px-7 py-4 mb-4">
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

    <section class="w-9/12 max-w-7xl flex mx-auto gap-8 mt-8 mb-16">
        <div class="bg-gray-50 p-6 w-1/2 rounded-lg">
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
            <div>
                <label for=""></label>
            </div>
        </div>
        <div class="bg-gray-50 p-6 w-1/2 rounded-lg">
            <div class="grid grid-cols-2 py-5">
                <div class="flex items-center gap-4">
                    <div>
                        <font-awesome-icon icon="phone" :style="{ height: '18px', color: '#dadada' }" />
                    </div>
                    <div class="text-sm leading-4">
                        <p class="uppercase">
                            t: (632) 8809 7574
                        </p>
                        <p class="uppercase">
                            t: (632) 7759 2026
                        </p>
                    </div>
                </div>                    
                <div class="flex items-center gap-4">
                    <div>
                        <font-awesome-icon icon="location-dot" :style="{ height: '18px', color: '#dadada' }" />
                    </div>
                    <p class="text-sm leading-4">
                        6th Flr. LDM Building<br /> 
                        Polaris St. Makati City
                    </p>
                </div>
                <div class="flex items-center gap-4 py-5">
                    <div>
                        <font-awesome-icon icon="location-dot" :style="{ height: '18px', color: '#dadada' }" />
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