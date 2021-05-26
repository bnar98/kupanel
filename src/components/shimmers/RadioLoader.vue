<template>
  <div class="radio-loader">
    <div class="radio-box" v-for="index in radioCount" :key="index">
      <Shimmer :height="'20px'" :width="'130px'"></Shimmer>
    </div>
  </div>
</template>

<script>
  import Shimmer from './Shimmer'
export default {
  props: ["radioCount"],
  components: {Shimmer}
};
</script>

<style lang="scss">
.radio-loader {
  .radio-box {
    @apply inline-block ml-2.5;
  }
}
</style>
