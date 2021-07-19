<template>
  <div :class="['status',statusValue]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        statusValue: ''
      }
    },
    props:{
      status:{
        type: Object,
        required: true
      }
    },

    created() {
      this.statusValue = this.status;
    },

    watch:{
      status(newValue) {
        this.statusValue = newValue;
      }
    }
  }
</script>

<style lang="scss">

  .status {
    @apply relative rounded-full text-sm whitespace-nowrap inline font-medium;

  &::before {
    @apply inline-block rounded-md absolute top-2;;
     content: '';
     width: 10px;
     height: 10px;
   }

  &.success {
    @apply text-white bg-pruple-light;
  &::before{
    @apply bg-white;
   }
  }

  &.green {
    @apply text-white bg-green-light;
  &::before{
    @apply bg-white;
   }
  }

  &.warning {
    @apply text-white bg-yellow-light;
  &::before{
    @apply bg-white;
   }
  }

  &.error {
    @apply text-white bg-red-light;
  &::before{
    @apply bg-white;
   }
  }

  &.info {
    @apply text-white bg-blue-light;
  &::before{
    @apply bg-white;
   }
  }

  &.default {
    @apply text-white bg-gray-400;
    &::before{
      @apply bg-white;
    }
  }

  }

  .localization-rtl{

    .status {
      @apply py-1 pr-8 pl-5 ;

      &::before {
         @apply right-3;
       }

    }

  }

  .localization-ltr{

    .status {
      @apply py-1 pl-8 pr-5 ;

      &::before {
        @apply left-3;
       }

    }

  }

</style>
