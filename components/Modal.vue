<template>
    <Transition name="modal">
        <section class="fixed z-10 inset-0 overflow-y-auto" v-if="isOpen" v-click-away="onclickAway">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 bg-black bg-opacity-60 transition-opacity" aria-hidden="true">
                </div>
                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden inline-block sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div class="hi-modal inline-block align-bottom bg-white rounded-lg text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle sm:w-full" :class="modalWidthCheck">
                    <!-- Loaing bar -->
                    <!-- <div class="-mb-1">
                        <div class="h-1.5 rounded shim-blue"></div>
                    </div> -->
                    <div class="flex px-4 py-4 border-b border-black-10">
                        <h3 class="text-xl font-bold">{{title}}</h3>
                        <button type="button" @click="toggleModal"
                            class="w-6 h-6 rounded-full ml-auto my-auto bg-black-10 hover:bg-black-20 text-center">
                            <span class="w-4 h-4 opacity-50 hover:text-black-80 hover:opacity-100 block mx-auto">
                                <font-awesome-icon icon="times" />
                            </span>
                        </button>
                    </div>
                    <!-- Content -->
                    <slot />
                </div>
            </div>
        </section>
    </Transition>
</template>

<script>
    // Icons
    //import Close from 'vue-material-design-icons/Close.vue'

    import {directive} from "vue3-click-away"
    
    import { library } from '@fortawesome/fontawesome-svg-core'
    //import specific icons
    import { faTimes } from '@fortawesome/free-solid-svg-icons'

    library.add(faTimes)

    export default {
        expose: ['toggleModal'],
        props: ['title'],
        //components: { VueClickAway },
        directives: {
            ClickAway: directive
        },
        data() {
            return {
                isOpen: false,
                modalWidth: 'sm:max-w-3xl'
            }
        },
        computed: {
            modalWidthCheck(){
                if(this.title == 'Advance Filters'){
                    this.modalWidth = 'sm:max-w-7xl'
                } 

                return this.modalWidth
            }   
        },
        methods: {
            toggleModal() {
                this.isOpen = !this.isOpen;
            },

            onclickAway(event) {
                this.toggleModal();
                alert("here");
            }
            /*
            bindEscEvent() {

                const onEscape = (e) => {
                    if (this.isOpen && e.keyCode === 27) {
                        this.toggleModal();
                    }
                }
                
                window.document.addEventListener('keydown', onEscape)

                this.$once('hook:destroyed', () => {
                    window.document.removeEventListener('keydown', onEscape)
                })
            }
            */
        },

        created() {
            //this.bindEscEvent()
        }
    }
</script>

<style>
    /* we will explain what these classes do next! */
    .modal-enter-active,
    .modal-leave-active {
        transition: opacity 0.2s ease;
    }

    .modal-enter-from,
    .modal-leave-to {
        opacity: 0;
    }
</style>