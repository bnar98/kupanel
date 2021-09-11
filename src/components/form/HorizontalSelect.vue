<template>
  <div :class="{'form-group': gap}">
    <label :for="name" class="label" v-if="label">{{ label }}</label>
    <div
      class="horizontal-select flex flex-row items-center justify-start overflow-hidden"
    >
      <template v-for="item in items">
        <div
          class="horizontal-select-item"
          :key="item.key"
          :class="{ active: item.key === selected }"
          @click="changevalue(item)"
        >
          <span class="whitespace-nowrap py-0 px-7" v-html="item.value"></span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      default: [],
    },

    value: {
      default: "",
    },

    label: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: '',
      required:true
    },
    gap:{
      type: Boolean,
      default: true
    },

  },

  data() {
    return {
      selected: "",
    };
  },

  methods: {
    changevalue(selectedItem) {
      this.selected = selectedItem.key;
      this.$emit("input", this.selected);
    },
  },

  created() {
    this.selected = this.value;
  },

  watch: {
    value(newValue) {
      this.selected = newValue;
    },
  },
};
</script>
<style lang="scss" scoped>
// horizontal select
.horizontal-select {
  div.horizontal-select-item {
    @apply py-2.5 px-0 bg-gray-200 text-white cursor-pointer;
    transition: all 200ms;

    &:hover {
      @apply bg-gray-300;
    }

    &.active {
      @apply bg-secondary;

      span {
        @apply border-secondary text-white;
      }
    }
  }
}

.localization-rtl {
  .horizontal-select {
    div.horizontal-select-item {
      span {
        @apply border-l border-solid border-input-border-color;
      }

      &:first-child {
        @apply rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none;
      }

      &:last-child {
        @apply rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg;
        span {
          @apply border-0;
        }
      }
    }
  }
}

.localization-ltr {
  .horizontal-select {
    div.horizontal-select-item {
      span {
        @apply border-r border-solid border-input-border-color;
      }

      &:first-child {
        @apply rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg;
      }

      &:last-child {
        @apply rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none;
        span {
          @apply border-0;
        }
      }
    }
  }
}
</style>
