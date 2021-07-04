<template>
  <div class="label-icon">
    <ion-icon v-if="icon" class="icon" :name="icon"></ion-icon>
    <label class="label">{{ label }}</label>
    <span v-if="value" :class="[color]">{{ value }}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },

    icon: {
      type: String,
      required: false,
    },

    value: {
      type: String,
      required: false,
    },

    color: {
      required: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.label-icon {
  @apply flex items-center py-2.5 px-0;

  .icon {
    @apply text-icon-default text-gray-400;
  }

  span {
    @apply text-lg;
  }
}

.localization-rtl {
  .label-icon {
    label {
      @apply pl-4 pt-0 pb-0;
    }

    .icon {
      @apply ml-4;
    }
  }
}

.localization-ltr {
  .label-icon {
    label {
      @apply pr-4;
    }

    .icon {
      @apply mr-4;
    }
  }
}
</style>
