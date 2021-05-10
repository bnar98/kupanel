<template>
  <div class="px-1 flex justify-between items-center h-14 bg-white border-b-2 border-gray-100">

    <div class="">
      <slot name="left"></slot>
      
    </div>

    <div class="">
      <slot name="center"></slot>
    </div>

    <div class="">
      <slot name="right"></slot>
      
    </div>
    
  </div>
</template>