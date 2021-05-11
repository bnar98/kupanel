<template>
  <div class="flex justify-between items-center w-full h-16 fixed top-0 z-10 bg-white border-b-2 border-gray-100">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <div class="right flex items-center">
      <slot name="right"></slot>
      <ion-icon name="menu-outline" size="large" class="text-icon-color p-2 cursor-pointer" @click="toggle"></ion-icon>
    </div>
    
    
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


 
</style>