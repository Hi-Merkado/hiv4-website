<template>
    <div class="p-4">
        <form @submit="submitLogin">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input class="bg-gray-75 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email@email.com" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="bg-gray-75 appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="" required>
            </div>
            
            <div class="mb-4 text-center">
                <button class="bg-blue-default hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg">
                    Log In
                </button>
            </div>
        </form>
    </div>
</template>


<script>
import { ref } from 'vue'


import { showLoading, dismissLoading } from '~/helpers/helpers'
const runtimeConfig = useRuntimeConfig(); 

export default {
    setup(){        
        return {}
    },

    data() {
        return {
            rememberMe: false,
            form: {
                /**
                 * rob@housinginteractive.com
                 * H!R0beygo
                */
                email: '',
                password: '',
            },
            errors: {},
            showPassword : false
        }
    },

    methods : {

        submitLogin(event) {
            event.preventDefault();
            this.login();
        },

        async login() {
            await showLoading();
            try {
                this.$auth
                    .loginWith('laravelSanctum', {
                        data: this.form,
                    })
                    .then(async () => {
                        this.setFormToStorage();
                        dismissLoading();
                        window.location.replace( runtimeConfig.public.platformURL );
                    })
                    .catch(({ response }) => {
                        dismissLoading();
                        if (response.status === 422) {
                            const errors = response.data.errors
                            for (let key in errors) {
                                if (errors.hasOwnProperty(key)) {
                                    errors[key] = errors[key][0]
                                }
                            }
                            this.errors = errors
                        } else {
                            //console.log(response);
                            //alert('Oops. Something went wrong. Please try again later.')
                        }
                    });
            } catch {

            }

        }
    }
}
</script>