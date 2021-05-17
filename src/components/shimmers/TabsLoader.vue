
<template>
  <div class="tabs-loader flex flex-row">
    <div class="w-full tab-titles">
      <ul>
        <li class="tabs-loader-item" v-for="index in tabsCount" :key="index">
          <span class="loader-box">
            <div class="loader-animation"></div>
          </span>
        </li>
      </ul>
    </div>
    <div class="tab-details w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabsCount"],
};
</script>

<style lang="scss">
.tabs-loader {
  ul {
    @apply p-0 m-0;

    .tabs-loader-item {
      @apply inline-block ml-2.5;

      .loader-box {
        height: 30px;
        width: 100px;
      }
    }
  }
}
</style>
