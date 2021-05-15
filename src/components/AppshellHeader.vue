<template>
  <div class="navigation flex justify-between items-center w-full h-16 fixed top-0 m-0 p-0 z-10 bg-white border-b-2 border-gray-100">

    <div class="right flex items-center">
      <ion-icon name="menu-outline" size="large" class="text-icon-color p-4 cursor-pointer" @click="toggle"></ion-icon>
      <slot name="right"></slot>
    </div>
    
    <slot name="center"></slot>
    <slot name="left"></slot>
    
    
  </div>
</template>
<script>
import {EventBus} from '../event'
export default {
  data() {
    return {
      
    }
  },
  methods: {
    toggle(){
      EventBus.$emit("sidebarToggle");
    }
  }
}
</script>





<style lang="scss">
  .navigation{
    background: var(--header-background-color);
    border-bottom: 2px solid var(--default-border-color);
    position: absolute;
}

.localization-rtl{
  .navigation{
    right: 0;
  }
}

.localization-ltr{
  .navigation{
    left: 0;
  }

}

</style>