<template>
    <div :class="['row collapse-box', {'active' : collapse}]">
        <div class="collapse-header" @click="toggleCollapse">
            <div class="collapse-header-title"><ion-icon v-if="icon" :name="icon"></ion-icon><span v-html="title"></span></div>
            <span v-if="!this.collapse"><ion-icon class="icon" name="chevron-down-outline"></ion-icon></span>
            <span v-else><ion-icon class="icon" name="chevron-up-outline"></ion-icon></span>
        </div>
        <transition name="ku-fadeHeight">
            <div class="collapse-body" v-show="collapse">
                <div class="row m-0">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                collapse: false
            }
        },

        methods: {

            toggleCollapse() {
                this.collapse = !this.collapse;
            }

        },

        mounted() {
            this.collapse = this.collapsed;
        },

        props: {

            title: {
                type: String,
                required: true
            },

            icon: {
                type: String,
                required: false
            },

            collapsed: {
                default: false,
                type: Boolean
            }

        }

    }

</script>

<style lang="scss">
  .collapse-box{

    &.active {

      .icon{
        @apply rotate-180;
      }

      .collapse-body{
        /*padding: 0 15px !important;*/
      }

    }

    .collapse-header{
      @apply flex w-full items-center justify-between py-2 px-4 cursor-pointer border-b border-solid border-gray-400;

      .collapse-header-title{
        @apply flex items-center text-secondary text-base;

        span{
          @apply py-0;
        }

        .icon{
          @apply text-secondary;
        }

      }

    }

    .collapse-body{
      @apply py-0 px-4 w-full;
      /*max-height: 1000px;*/
    }

  }
</style>
