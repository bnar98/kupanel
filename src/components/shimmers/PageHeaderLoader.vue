<template>
  <div class="flex flex-row page-header-loader">
    <div class="md:w-1/2 sm:w-full">
      <Shimmer class="mt-8 mb-0" :height="'20px'" :width="'50%'"></Shimmer>
      <Shimmer class="mt-2.5 rounded" :height="'20px'"></Shimmer>
    </div>
    <div class="md:w-1/2 sm:w-full">
      <slot />
    </div>
  </div>
</template>

<script>
  import Shimmer from './Shimmer'
  export  default {
    components: {Shimmer}
  }
</script>

<style lang="scss">
.page-header-loader {
  @apply mt-5 mr-0 mb-2.5 ml-0 border-b border-solid border-horizontal-seperator-color pb-5 items-end;
}
</style>
