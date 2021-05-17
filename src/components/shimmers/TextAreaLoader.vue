<template>
  <div class="textarea-loader-box">
    <span class="textarea-loader-label loader-box">
      <div class="loader-animation"></div>
    </span>

    <span class="textarea-loader loader-box">
      <div class="loader-animation"></div>
    </span>
  </div>
</template>

<style lang="scss">
.textarea-loader-box {
  .textarea-loader-label {
    @apply mb-2;
    height: 10px;
    width: 60%;
  }

  .textarea-loader {
    @apply w-full;
    height: 80px;
  }
}
</style>