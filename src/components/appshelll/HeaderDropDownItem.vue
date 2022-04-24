<template>
  <div
    class="
      flex
      p-3
      justify-items-center
      border-b border-solid
      cursor-pointer
      border-gray-300
    "
    :class="{ 'bg-gray-300': active }"
    @click="action"
  >
    <div v-if="image">
      <img :src="image" alt="image" class="w-10 h-10 rounded-full" />
    </div>
    <div
      v-else
      class="
        bg-gray-400
        w-10
        h-10
        rounded-full
        flex
        items-center
        justify-center
      "
    >
      {{ title.charAt(0) }}
    </div>
    <div class="px-3 flex flex-col justify-center h-10">
      <span class="text-sub-title-color">{{ title }}</span>
      <span class="text-sm text-gray-800">{{ subtitle }}</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    action() {
      this.$emit("actionEvent");
    },
  },
  props: {
    image: {
      type: String,
      require: false,
    },
    title: {
      type: String,
      require: true,
    },
    subtitle: {
      type: String,
      require: false,
    },
    active: {
      type: Boolean,
      require: false,
    },
  },
};
</script>
<style lang="scss" scoped>
p {
  @apply m-0;
}
</style>
