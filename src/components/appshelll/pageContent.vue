<template>
    <div class="content" :class="size">
        <div class="flex items-center justify-start router-back" v-if="back" @click="routerBack">
          <ion-icon class="icon" name="chevron-forward-outline"></ion-icon>
          <span>{{$t('components.back')}}</span>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        size: {
            type: String,
            default: 'default',
            validator: function (value) {
                // The value must match one of these strings
                return ['small', 'full', 'default'].indexOf(value) !== -1
            },
        },
        back:{
          type:Boolean,
          default: false
        }
     },

    methods:{
      routerBack() {
        this.$router.back();
      }
    }
}
</script>

<style lang="scss" scoped>
    .content{
        @apply w-11/12 mt-3 mb-14 mx-auto ;
        &.small{
            @apply w-3/5;
        }
        &.full{
            @apply w-full;
        }

      .router-back{
        @apply cursor-pointer text-lg mt-8;

        span, .icon{
         @apply text-gray-600;
        }

        .icon {
          @apply text-icon-default;
        }
      }
    }

</style>
