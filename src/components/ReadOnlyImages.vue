<template>
  <div class="row mx-0 bg-gray-200 p-4">
    <div class="col-xs-2" v-for="(img, index) in images" :key="index">
      <img
        :src="`${$store.state.static.fileBaseUrl}file/free/${img}`"
        alt=""
        class="img-responsive"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
  },
};
</script>