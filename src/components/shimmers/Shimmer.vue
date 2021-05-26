<template>
  <span class="loader-box" :style="{'height': height, 'width': width}">
      <div :class="['loader-animation',rounded]"></div>
  </span>
</template>

<script>
  export default {
    props: {
      height:{
        default: '40px',
        type: String
      },
      width:{
        default: '100%',
        type: String
      },
      rounded:{
        type: String,
        default: 'rounded'
      }
    }
  }
</script>
