<template>
  <div class="flex flex-row page-header-loader">
    <div class="md:w-1/2 sm:w-full">
      <span class="page-title loader-box">
        <div class="loader-animation"></div>
      </span>
      <span class="page-description loader-box">
        <div class="loader-animation"></div>
      </span>
    </div>
    <div class="md:w-1/2 sm:w-full">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.page-header-loader {
  @apply mt-5 mr-0 mb-2.5 ml-0 border-b-1 border-solid border-horizontal-seperator-color pb-5 items-end;

  .page-title {
    @apply mt-8 mb-0 w-1/2;
    height: 20px;
  }

  .page-description {
    @apply mt-2.5 rounded;
    height: 20px;
  }
}
</style>