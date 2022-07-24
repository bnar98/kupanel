<template>
  <div :class="['raiting', statusValue]">
    <ion-icon :name="raitingIcon"></ion-icon>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusValue: "",
    };
  },
  props: {
    raiting: {
      type: Object,
      required: true,
    },
    raitingIcon: {
      type: String,
      default: "star-outline",
    },
  },

  created() {
    this.statusValue = this.raiting;
  },

  watch: {
    status(newValue) {
      this.statusValue = newValue;
    },
  },
};
</script>

<style lang="scss">
.raiting {
  @apply relative rounded-md text-sm font-medium h-8 w-14 shadow-md flex justify-around items-center;

  &.succes {
    background-color: rgba(80, 165, 116, 0.3);
    color: #50a574;
  }
  &.bad {
    background-color: rgba(45, 162, 214, 0.3);
    color: #2da2d6;
  }
  &.error {
    background-color: rgba(230, 125, 112, 0.3);
    color: #e67d70;
  }
}

.localization-rtl {
  .raiting {
    // @apply py-1 pr-8 pl-5;
  }
}

.localization-ltr {
  .raiting {
    @apply flex-row-reverse;
  }
}
</style>
