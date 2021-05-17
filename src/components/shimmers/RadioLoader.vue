<template>
  <div class="radio-loader">
    <div class="radio-box" v-for="index in radioCount" :key="index">
      <span class="report-title loader-box">
        <div class="loader-animation"></div>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["radioCount"],
};
</script>

<style lang="scss">
.radio-loader {
  .radio-box {
    @apply inline-blockinline-block ml-2.5;

    .loader-box {
      height: 20px;
      width: 130px;
    }
  }
}
</style>