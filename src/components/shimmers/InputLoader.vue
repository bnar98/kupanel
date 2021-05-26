<template>
  <div class="input-loader-box">
    <Shimmer class="mb-2" :height="'10px'" :width="'60%'"></Shimmer>
    <Shimmer :height="'30px'" :width="'100%'"></Shimmer>
  </div>
</template>

<script>
  import Shimmer from './Shimmer'
  export  default {
    components: {Shimmer}
  }
</script>
