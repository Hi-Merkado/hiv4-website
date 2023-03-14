<template>
    <div>
        <div v-if="showEnquiry"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-2/6 my-6 mx-auto max-w-3xl">
                <!--content-->
                <div
                    class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <div>
                            <h3 class="text-3xl font-semibold text-[20px] mb-0 leading-none">
                                {{ listingData.uploader }}
                            </h3>
                            <p>Address: 6th floor LDM Building, Polaris St. Makati City</p>
                            <p>Telephone: (632) 8809 7574</p>
                        </div>

                        <button
                            class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            v-on:click="toggleModal()">
                            <span
                                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                            </span>
                        </button>
                    </div>
                    <!--body-->
                    <div class="relative p-6">
                        
                        <div class="text-center">
                            <h2 class="font-bold">Ask Agent</h2>
                        </div>

                        <div>
                            <label class="block mb-4">
                                <span class="block text-sm font-medium text-slate-700">Name</span>
                                <!-- Using form state modifiers, the classes can be identical for every input -->
                                <input type="text" v-model="enquiryData.name" placeholder="Name" class="mt-1 block w-full px-3 py-2 bg-gray-200 border rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none
                                "/>
                            </label>

                            <label class="block mb-4">
                                <span class="block text-sm font-medium text-slate-700">Email</span>
                                <!-- Using form state modifiers, the classes can be identical for every input -->
                                <input type="email" v-model="enquiryData.email" placeholder="Email" class="mt-1 block w-full px-3 py-2 bg-gray-200 border rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none
                                "/>
                            </label>

                            <label class="block mb-4">
                                <span class="block text-sm font-medium text-slate-700">Phone</span>
                                <!-- Using form state modifiers, the classes can be identical for every input -->
                                <input type="phone" v-model="enquiryData.phone" placeholder="091xxxxxxxx" class="mt-1 block w-full px-3 py-2 bg-gray-200 border rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none
                                "/>
                            </label>

                            <label class="block mb-4">
                                <span class="block text-sm font-medium text-slate-700">Message</span>
                                <!-- Using form state modifiers, the classes can be identical for every input -->
                                <textarea v-model="enquiryData.message" class="mt-1 block w-full px-3 py-2 bg-gray-200 border rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none h-32" placeholder="Message"></textarea>
                            </label>

                            <div class="text-center">
                                <button class="bg-green-default text-white py-2 px-16 rounded-lg font-bold">Send</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-if="showEnquiry" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>
export default {
    props: {
        showEnquiry: Boolean,
        listingData: Object,
    },
    data(){
        return {
            enquiryData: {
                name: '',
                email: '',
                phone: '',
                message: ''
            }
        }
    },

    created(){

    },

    methods: {

        toggleModal(){
            this.$emit('toggleEnquiry')
        }
    }
}
</script>