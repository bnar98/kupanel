<template>
  <h4 class="col-span-1 section-header" v-else>{{title}}</h4>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
  .section-header {
    @apply relative text-lg z-10 overflow-hidden text-right block w-full text-gray-500 my-14 font-normal;
  }
  .section-header:after{
    @apply absolute top-1/2 overflow-hidden w-full h-px bg-gray-400 mr-4;
    content: '\a0';
  }
</style>
