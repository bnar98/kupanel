<template>
  <div class="thumb">
    <slot></slot>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">

  .thumb{
    width: 58px;
    height: 58px;

    img {
      @apply w-full h-full rounded-lg;
    }

    ion-icon{
      @apply text-icon-default;
    }

  }

</style>
