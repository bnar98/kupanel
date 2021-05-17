<template>
  <div class="input-loader-box">
    <span class="input-loader-label loader-box">
      <div class="loader-animation"></div>
    </span>

    <span class="input-loader loader-box">
      <div class="loader-animation"></div>
    </span>
  </div>
</template>

<style lang="scss">
.input-loader-box {
  .input-loader-label {
    @apply mb-2;
    height: 10px;
    width: 60%;
  }

  .input-loader {
    @apply w-full;
    height: 30px;
  }
}
</style>