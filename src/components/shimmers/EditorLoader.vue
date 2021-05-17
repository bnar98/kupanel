<template>
  <div class="editor-loader">
    <div class="w-full">
      <span class="loader-box medium-text">
        <div class="loader-animation"></div>
      </span>

      <span class="loader-box long-text">
        <div class="loader-animation"></div>
      </span>

      <span class="loader-box medium-text">
        <div class="loader-animation"></div>
      </span>

      <span class="loader-box long-text">
        <div class="loader-animation"></div>
      </span>

      <span class="loader-box short-text">
        <div class="loader-animation"></div>
      </span>

      <span class="loader-box medium-text">
        <div class="loader-animation"></div>
      </span>

      <span class="loader-box long-text">
        <div class="loader-animation"></div>
      </span>

      <span class="loader-box short-text">
        <div class="loader-animation"></div>
      </span>

      <span class="loader-box medium-text">
        <div class="loader-animation"></div>
      </span>

      <span class="loader-box long-text">
        <div class="loader-animation"></div>
      </span>

      <span class="loader-box short-text">
        <div class="loader-animation"></div>
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.editor-loader {
  @apply bg-gray-300;
  /*padding: 15px;*/
  direction: ltr;

  .loader-box {
    @apply mb-5;
    height: 15px;

    &.long-text {
      @apply w-full;
    }

    &.medium-text {
      width: 60%;
    }

    &.short-text {
      width: 30%;
    }
  }
}
</style>