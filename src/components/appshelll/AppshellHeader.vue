<template>
  <div
    class="
      navigation
      flex
      items-center
      w-full
      h-16
      fixed
      top-0
      m-0
      p-0
      z-10
      bg-white
      border-b-2 border-gray-100
    "
  >
    <div class="right flex justify-start items-center w-2/5">
      <ion-icon
        name="menu-outline"
        size="large"
        class="text-icon-color p-4 cursor-pointer"
        @click="toggle"
      ></ion-icon>
      <slot name="right"></slot>
    </div>
    <div class="w-1/5 flex justify-center">
      <slot name="center"></slot>
    </div>
    <div class="left flex justify-end items-center w-2/5">
      <slot name="left"></slot>
    </div>
  </div>
</template>
<script>
import { EventBus } from "../../event";
export default {
  data() {
    return {};
  },
  methods: {
    toggle() {
      EventBus.$emit("sidebarToggle");
    },
  },
};
</script>





<style lang="scss">
.navigation {
  background: var(--header-background-color);
  border-bottom: 2px solid var(--default-border-color);
  .left {
    > div {
      display: flex;
      align-items: center;
    }
  }
}

.localization-rtl {
  .navigation {
    right: 0;
  }
}

.localization-ltr {
  .navigation {
    left: 0;
  }
}
</style>
