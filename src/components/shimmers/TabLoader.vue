<template>
  <div class="tab-loader">
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.tab-loader {
  .tab-content {
    @apply bg-gray-300 p-4;
    min-height: 445px;
  }
}
</style>
