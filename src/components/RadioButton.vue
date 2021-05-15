<template>
  <div class="flex items-start">
    <template v-for="(item, index) in items">
      <div
        :class="['py-0 px-1', { disabled: disabled }]"
        @click="toggle(item)"
        :key="index"
      >
        <input type="radio" :checked="check === item.value" />
        <label
          ><span></span
          >{{
            translatePrefix ? translatePrefix + item.title : item.title
          }}</label
        >
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: ["items", "value", "disabled", "translatePrefix"],

  data() {
    return {
      check: "",
    };
  },

  methods: {
    toggle(item) {
      if (item.value !== this.check) {
        this.$emit("input", item.value);
        this.check = item;
      }
    },
  },

  mounted() {
    this.check = this.value;
    $(":radio").attr("disabled", this.disabled);
  },

  watch: {
    value(value) {
      this.check = value;
    },
  },
};
</script>
<style lang="scss" scoped>
input[type="radio"] {
  @apply hidden;
}

input[type="radio"] + label {
  @apply select-none text-input-label text-input-label-color font-extralight;
  -ms-user-select: none;
}

input[type="radio"] + label span {
  @apply bg-white inline-block border-2 border-solid border-input-border-color cursor-pointer relative align-middle;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  margin-top: -1px;
}

input[type="radio"] + label span:after {
  @apply absolute;
  background-color: inherit;
  border-radius: 50%;
  content: "";
  width: 107%;
  height: 107%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

input[type="radio"]:checked + label {
  @apply pointer-events-none;
}

input[type="radio"]:checked + label span {
  @apply border-2 border-solid border-primary;
}

input[type="radio"]:checked + label span:after {
  @apply bg-primary;
}
</style>