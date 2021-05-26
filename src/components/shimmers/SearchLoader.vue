<template>
  <div class="md:w-1/2 sm:w-full">
    <div class="search-container">
      <Shimmer :height="'40px'" :width="'100%'"></Shimmer>
      <ButtonLoader class="mx-2"></ButtonLoader>
    </div>
  </div>
</template>

<script>
  import Shimmer from './Shimmer'
  import InputLoader from "./InputLoader";
  import ButtonLoader from "./ButtonLoader";
  export  default {
    components: {ButtonLoader, InputLoader, Shimmer}
  }
</script>
<style lang="scss">
  .search-container {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .localization-rtl{

  .search-container {

  .btn-search {
    margin-right: 8px;
  }

  }

  }

  .localization-ltr{

  .search-container {

  .btn-search {
    margin-left: 8px;
  }

  }

  }
</style>
