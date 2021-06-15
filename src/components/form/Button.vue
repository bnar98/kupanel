<template>
  <button :class="['btn', { loading: loading }, ui]" :type="type">
    <span :class="['content', { hide: isLoading }]">
      <span v-if="title">{{ title }}</span>
      <ion-icon class="icon" v-if="icon !== ''" :name="icon"></ion-icon>
    </span>
    <svg
      width="25px"
      v-show="loading"
      height="25px"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
      class="material-spinner"
    >
      <circle
        fill="none"
        stroke-width="6"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
        class="path"
      ></circle>
    </svg>
    <span class="tooltip top" v-if="tooltip !== ''">{{ tooltip }}</span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    tooltip: {
      type: String,
      default: "",
    },
    ui: {
      type: String,
      default: "",
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "button",
    },
  },

  created() {
    this.loading = this.isLoading;
  },

  watch: {
    isLoading(value) {
      this.loading = value;
    },
  },
};
</script>
<style lang="scss" scoped>
@mixin button($bgColor, $darkBgColor, $textColor: var(--white-color)) {
  border-color: $bgColor;

  &:not(.bordered):not(.transparent) {
    background-color: $bgColor;
    .content span,
    .icon {
      color: $textColor;
    }
    --spinerColor: var(--white-color);
  }

  &.bordered,
  &.transparent {
    .content span,
    .icon {
      color: $bgColor;
    }
    --spinerColor: #{$darkBgColor};
    //--spinerColor: red
  }

  &.transparent {
    @apply border-transparent;
  }

  &:hover {
    &:not(.transparent) {
      border-color: $darkBgColor;
    }

    &:not(.bordered):not(.transparent) {
      background-color: $darkBgColor;
    }
    &.bordered,
    &.transparent {
      @apply bg-transparent;
      .content span,
      .icon {
        color: $darkBgColor;
      }
    }
  }
}

.btn {
  @apply inline-block bg-transparent text-gray-700 p-0 font-medium border border-solid border-transparent rounded-md no-underline antialiased select-none relative shadow-none cursor-pointer outline-none;
  text-rendering: optimizeLegibility;
  transition: all 100ms;

  &.loading {
    @apply pointer-events-none;
  }

  &:disabled {
    @apply bg-gray-500 border-gray-500 cursor-not-allowed;
  }

  .content {
    @apply flex rounded-md min-w-full justify-center items-center;

    span {
      @apply py-0 px-3;
    }
    &.hide {
      @apply opacity-0;
    }
  }

  .material-spinner {
    @apply absolute my-0 mx-auto inset-x-0 top-1.5;
  }

  .tooltip {
    @apply opacity-0 absolute py-1 px-5 text-xs rounded-md z-10 whitespace-nowrap invisible bg-secondary text-white;
    transition: opacity 0.3s;

    &::after {
      @apply absolute border-4 border-solid;
      content: "";
    }

    &.top {
      bottom: 115%;
      left: 50%;
      transform: translateX(-50%);

      &::after {
        @apply -ml-1.5;
        top: 100%;
        left: 50%;
        border-color: var(--secondary-color) transparent transparent transparent;
      }
    }

    &.bottom {
      top: 115%;
      transform: translateX(-50%);

      &::after {
        @apply -ml-1.5;
        bottom: 100%;
        left: 50%;
        border-color: transparent transparent var(--gray-600-color) transparent;
      }
    }

    &.right {
      top: 50%;
      transform: translateY(-50%);

      &::after {
        @apply -mt-1.5;
        top: 50%;
      }
    }

    &.left {
      top: 50%;
      transform: translateY(-50%);

      &::after {
        @apply -mt-1.5;
        top: 50%;
      }
    }
  }

  &.bordered {
    @apply bg-transparent;
  }

  &.default {
    .content {
      @apply text-base p-4;
    }
  }

  &.medium {
    .content {
      @apply text-sm p-2;

      .icon {
        @apply text-lg;
      }
    }
  }

  &.small {
    min-height: 39px;
    min-width: 39px;

    .content {
      @apply p-2;

      span {
        @apply text-sm;
      }

      .icon {
        @apply text-lg;
      }
    }
  }

  &:hover {
    @apply bg-gray-300;

    .tooltip {
      @apply visible opacity-100;
    }
  }

  &:disabled {
    @apply cursor-not-allowed;
  }

  &.btn-primary {
    @include button(var(--primary-color), var(--primary-dark-color));
  }

  &.btn-secondary {
    @include button(var(--secondary-color), var(--secondary-dark-color));
  }

  &.btn-success {
    @include button(var(--green-color), var(--green-dark-color));
  }

  &.btn-error {
    @include button(var(--red-color), var(--red-dark-color));
  }

  &.btn-warning {
    @include button(var(--yellow-color), var(--yellow-dark-color));
  }

  &.btn-info {
    @include button(var(--blue-color), var(--blue-dark-color));
  }

  &.btn-default {
    @include button(
      var(--btn-default-background-color),
      var(--btn-default-background-hover-color),
      var(--btn-default-forground-color)
    );
  }
}

.localization-rtl {
  .btn {
    .tooltip {
      &.right {
        left: 110%;

        &::after {
          right: 100%;
          border-color: transparent var(--gray-600-color) transparent
            transparent;
        }
      }

      &.left {
        right: 110%;

        &::after {
          left: 100%;
          border-color: transparent transparent transparent
            var(--gray-600-color);
        }
      }
    }

    + .btn {
      @apply ml-2.5;
    }
  }
}

.localization-ltr {
  .btn {
    .content {
      .icon {
        transform: rotate(180deg);
      }
    }

    .tooltip {
      &.right {
        right: 110%;

        &::after {
          left: 100%;
          border-color: transparent transparent transparent
            var(--gray-600-color);
        }
      }

      &.left {
        left: 110%;

        &::after {
          right: 100%;
          border-color: transparent var(--gray-600-color) transparent
            transparent;
        }
      }
    }

    + .btn {
      @apply mr-2.5;
    }
  }
}
// btn loader
.material-spinner {
  @apply origin-center;
  -webkit-animation: rotator 1.4s linear infinite;
  animation: rotator 1.4s linear infinite;
}

@-webkit-keyframes rotator {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }

  100% {
    -webkit-transform: rotate3d(0, 0, 1, 270deg);
    transform: rotate3d(0, 0, 1, 270deg);
  }
}

@keyframes rotator {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }

  100% {
    -webkit-transform: rotate3d(0, 0, 1, 270deg);
    transform: rotate3d(0, 0, 1, 270deg);
  }
}

.path {
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-animation: dash 1.4s ease-in-out infinite,
    colors 5.6s ease-in-out infinite;
  animation: dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite;
}

@-webkit-keyframes colors {
  0%,
  100%,
  25%,
  50%,
  75% {
    stroke: var(--spinerColor);
  }
}

@-webkit-keyframes dash {
  0% {
    stroke-dashoffset: 187;
  }

  50% {
    stroke-dashoffset: 46.75;
    -webkit-transform: rotate3d(0, 0, 1, 135deg);
    transform: rotate3d(0, 0, 1, 135deg);
  }

  100% {
    stroke-dashoffset: 187;
    -webkit-transform: rotate3d(0, 0, 1, 450deg);
    transform: rotate3d(0, 0, 1, 450deg);
  }
}
</style>