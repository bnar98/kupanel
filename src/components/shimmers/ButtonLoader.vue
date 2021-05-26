<template>
    <div class="button-loader">
      <Shimmer :height="'40px'"></Shimmer>
    </div>
</template>

<style lang="scss">

    .button-loader{
        width: 100px;
    }

    .localization-rtl{

        .button-loader + .button-loader{
            @apply ml-2.5;
        }

    }

    .localization-ltr{

        .button-loader + .button-loader{
            @apply mr-2.5;
        }

    }

</style>
<script>
  import Shimmer from './Shimmer'
  export  default {
    components: {Shimmer}
  }
</script>
