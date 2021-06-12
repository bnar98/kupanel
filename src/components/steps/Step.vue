<template>
    <transition name="fade-tab" mode="out-in">
        <div class="tab row" v-show="isActive">
            <div class="tab-content col-xs-12">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'step',
        
        data(){

            return{

                isActive: false,
                isValidation: false

            }

        },

        props:{

            name: {
                required: true
            },

            selected: {
                default: false
            },

            id: {
                default: '',
                type: String
            },

            validation: {
                default: false,
                type: Boolean
            }

        },

        mounted() {
            this.isActive = this.selected;
            this.isValidation = this.validation
        }

    }
</script>
