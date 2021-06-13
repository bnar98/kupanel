<template>
  <div :class="{'form-group': gap}">
    <label class="label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    props: {
      gap:{
        type: Boolean,
        default: true
      }
    }
  }
</script>
