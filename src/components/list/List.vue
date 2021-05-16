<template>
  <ul class="list-striped">
    <slot></slot>
  </ul>
</template>
<style lang="scss" scoped>
.list-striped {
  @apply p-0 m-0 list-none w-full;

  .list-item {
    @apply p-2.5 w-full;

    &:nth-child(odd) {
      @apply bg-table-row-hover-background-color;
    }

    &:nth-child(even) {
      @apply bg-transparent;
    }
  }
}
</style>