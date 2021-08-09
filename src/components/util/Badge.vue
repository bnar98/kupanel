<template>
  <div :class="['circle', color]">
    <span class="circle__content">{{value}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default:'bg-gray-200'
      },
      value: {
        required: false
      }
    }
  }
</script>

<style>
  .circle {
    @apply flex rounded-full justify-center items-center;
    min-width: 20px;
    min-height: 20px;
    padding: 0 3px;
  }

  .circle__content {
    @apply flex justify-center items-center text-white text-xs font-extralight;
    margin-bottom: -3px;
  }
</style>
