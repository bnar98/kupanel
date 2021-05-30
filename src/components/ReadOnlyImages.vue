<template>
  <div class="flex flex-row mx-0 bg-gray-200 p-4">
    <div class="w-1/6" v-for="(img, index) in images" :key="index">
      <img
        :src="`${baseUrl}/free/${img}`"
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
    baseUrl: {
      default: "",
      type: String,
      required: true,
    },
  },
};
</script>
