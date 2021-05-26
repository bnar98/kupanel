<template>
  <div class="editor-loader">
    <div class="w-full p-4">

      <Shimmer class="mb-5" :height="'15px'" :width="'60%'"></Shimmer>

      <Shimmer class="mb-5" :height="'15px'" :width="'100%'"></Shimmer>

      <Shimmer class="mb-5" :height="'15px'" :width="'60%'"></Shimmer>

      <span class="loader-box long-text">
        <div class="loader-animation"></div>
      </span>

      <Shimmer class="mb-5" :height="'15px'" :width="'30%'"></Shimmer>

      <Shimmer class="mb-5" :height="'15px'" :width="'60%'"></Shimmer>

      <Shimmer class="mb-5" :height="'15px'" :width="'100%'"></Shimmer>

      <Shimmer class="mb-5" :height="'15px'" :width="'30%'"></Shimmer>

      <Shimmer class="mb-5" :height="'15px'" :width="'60%'"></Shimmer>

      <Shimmer class="mb-5" :height="'15px'" :width="'100%'"></Shimmer>

      <Shimmer class="mb-5" :height="'15px'" :width="'30%'"></Shimmer>

    </div>
  </div>
</template>

<style lang="scss">
.editor-loader {
  @apply bg-gray-300;
  /*padding: 15px;*/
  direction: ltr;
}
</style>

<script>
  import Shimmer from './Shimmer'
  export  default {
    components: {Shimmer}
  }
</script>
