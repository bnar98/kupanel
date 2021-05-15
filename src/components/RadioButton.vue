<template>
  <div class="flex align-start">
    <template v-for="(item, index) in items">
      <div
        :class="['radio-holder', { disabled: disabled }]"
        @click="toggle(item)"
        :key="index"
      >
        <input type="radio" :checked="check === item.value" />
        <label
          ><span></span
          >{{
            translatePrefix ? $t(translatePrefix + item.title) : item.title
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
//radio

.radio-holder {
  padding: 0 4px;
}

input[type="radio"] {
  display: none;
}

input[type="radio"] + label {
  -ms-user-select: none;
  user-select: none;
  font-size: var(--input-label-size);
  color: var(--input-label-color);
  font-weight: 200;
}

input[type="radio"] + label span {
  background-color: #fff;
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid var(--input-border-color);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  margin-top: -1px;
  vertical-align: middle;
}

input[type="radio"] + label span:after {
  background-color: inherit;
  position: absolute;
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
  pointer-events: none;
}

input[type="radio"]:checked + label span {
  border: 2px solid var(--primary-color);
}

input[type="radio"]:checked + label span:after {
  background-color: var(--primary-color);
}
</style>