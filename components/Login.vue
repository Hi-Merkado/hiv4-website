<template>
    <div>
        <div v-if="showLogin"
            class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-11/12 lg:w-2/6 my-6 mx-auto lg:max-w-3xl">
                <!--content-->
                <div
                    class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <!--header-->
                    <div class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <span class="text-3xl font-semibold text-[20px] mb-0 leading-none mt-3">Login to Housinginteractive</span>

                        <button
                            class="p-1 ml-auto bg-transparent border-0 text-black opacity-25 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            v-on:click="toggleModal()">x
                        </button>
                    </div>
                    <!--body-->
                    <div class="relative p-6">
                        
                        <div class="text-center">
                            <h2 class="font-bold">Welcome Back!</h2>
                        </div>
                        <div>
                            <label class="block mb-4">
                                <span class="block text-sm font-medium text-slate-700">Email</span>
                                <!-- Using form state modifiers, the classes can be identical for every input -->
                                <input type="email" v-model="enquiryData.email" placeholder="Email" class="mt-1 block w-full px-3 py-2 bg-gray-200 border rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none
                                "/>
                            </label>

                            <label class="block mb-4">
                                <span class="block text-sm font-medium text-slate-700">Password</span>
                                <!-- Using form state modifiers, the classes can be identical for every input -->
                                <input type="password" v-model="enquiryData.phone" placeholder="********" class="mt-1 block w-full px-3 py-2 bg-gray-200 border rounded-md text-sm shadow-sm placeholder-slate-400
                                focus:outline-none
                                "/>
                            </label>

                            <div class="text-center">
                                <button class="bg-green-default text-white py-2 px-16 rounded-lg font-bold" @click="save">Login</button>
                            </div>

                            <div class="text-center mt-4">
                                <p>Not yet a member? <a href="" class="font-bold">Sign Up</a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div v-if="showLogin" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>

import AuthServices from '~/services/AuthServices'

export default {
    props: {
        showLogin: Boolean,
        listingData: Object,
        referrerUrl : { type : Array },
        model : { type : String },
        modelId : { type : Number }
    },
    data(){
        return {
            enquiryData: {
                name: '',
                email: '',
                phone: '',
                message: '',
                referrer : this.referrerUrl,
                model : this.model,
                model_id : this.modelId
            }
        }
    },

    created(){
    },

    methods: {

        toggleModal(){
            this.$emit('toggleLogin')
        },

        async save() {

            const { data, pending, error, refresh } = await AuthServices._initToken()
            const token = getCookie('XSRF-TOKEN')
            console.log(token)

            // console.log(this.enquiryData)
            // console.log(this.listingData.parentUrl)

            // const result = await EnquiryServices._store(this.enquiryData)

            // if(result && result.success) {
            //    showToast({ title: 'Your enquiry submitted successfully!' })
            // }

            this.toggleModal();

            this.resetForm();
            
        },

        resetForm() {
            this.enquiryData.name = null;
            this.enquiryData.email = null;
            this.enquiryData.phone = null;
            this.enquiryData.message = null;
        }
    }
}
</script>