<template>
  <div>
    <div
      class="px-2 flex justify-center relative cursor-pointer"
      @click="show"
      v-click-outside="hideDropDown"
    >
      <ion-icon
        class="text-icon-color text-icon-default"
        name="notifications-outline"
      ></ion-icon>
      <span
        v-show="blink"
        class="notification-blink absolute top-0 right-5 w-3 h-3 rounded-full"
      ></span>
    </div>
    <transition name="ku-fade">
      <div
        v-show="showDroDown"
        class="
          notification-dropDown
          absolute
          w-96
          bg-dropdown-background-color
          border border-solid border-dropdown-border-color
          rounded-lg
        "
      >
        <div class="dropdown-header flex">
          <div class="text-gray-600">{{ title }}</div>
          <nuxt-link :to="url">
            <div class="text-blue-500 cursor-pointer">
              {{ headerActiontitle }}
            </div>
          </nuxt-link>
        </div>
        <slot></slot>
        <nuxt-link :to="url">
          <span
            class="w-full flex justify-center text-blue-500 cursor-pointer p-4"
            >{{ footerTitle }}</span
          >
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDroDown: false,
    };
  },
  methods: {
    show() {
      this.showDroDown = !this.showDroDown;
    },
    hideDropDown() {
      this.showDroDown = false;
    },
  },
  props: {
    blink: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    headerActiontitle: {
      type: String,
      default: "",
    },
    footerTitle: {
      type: String,
      default: "",
    },
    url: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss">
.notification-dropDown {
  @apply mt-3;
  &::before {
    content: "";
    @apply absolute w-0 h-0 box-border border-8 border-solid border-black rounded-sm;
    top: 0.04rem;
    border-color: transparent transparent var(--dropdown-triangle-color)
      var(--dropdown-triangle-color);
    transform-origin: 0 0;
    transform: rotate(136deg);
    box-shadow: -1px 1px 0 0 var(--dropdown-border-color);
  }
}

.dropdown-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--kgray-300-color);
  padding: 12px;
}

.notification-blink {
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: blink;
  animation-timing-function: linear;
}
@keyframes blink {
  0% {
    background-color: var(--kgray-300-color);
  }
  50% {
    background-color: var(--kgreen-color);
  }
  100% {
    background-color: var(--kgray-300-color);
  }
}

.localization-rtl {
  .notification-dropDown {
    left: 230px;
    &::before {
      @apply left-10;
    }
  }
}

.localization-ltr {
  .notification-dropDown {
    right: 230px;
    &::before {
      @apply right-0;
    }
  }
}
@media (max-width: 768px) {
  .localization-rtl {
    .notification-dropDown {
      left: 30px;
      &::before {
        @apply left-10;
      }
    }
  }

  .localization-ltr {
    .notification-dropDown {
      right: 30px;
      &::before {
        @apply right-0;
      }
    }
  }
}
</style>
