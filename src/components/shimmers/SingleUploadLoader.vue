<template>
  <div class="single-upload-loader">
    <Shimmer rounded="rounded-full" :height="'100px'" :width="'100px'"></Shimmer>
  </div>
</template>

<script>
  import Shimmer from './Shimmer'
  export  default {
    components: {Shimmer}
  }
</script>
