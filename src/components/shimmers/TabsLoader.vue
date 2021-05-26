
<template>
  <div class="tabs-loader flex flex-row">
    <div class="w-full tab-titles">
      <ul>
        <li class="tabs-loader-item" v-for="index in tabsCount" :key="index">
          <Shimmer :height="'30px'" :width="'100px'"></Shimmer>
        </li>
      </ul>
    </div>
    <div class="tab-details w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Shimmer from './Shimmer'
  export  default {
    props: ["tabsCount"],
    components: {Shimmer}
  }
</script>

<style lang="scss">
.tabs-loader {
  ul {
    @apply p-0 m-0;

    .tabs-loader-item {
      @apply inline-block ml-2.5;
    }
  }
}
</style>
