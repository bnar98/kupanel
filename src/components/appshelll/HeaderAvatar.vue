<template>
  <div class="avatar relative">
    <div
      class="
        h-16
        flex
        items-center
        md:w-44
        justify-around
        md:bg-overlay-background-color
      "
    >
      <div class="mx-3 text-title-color hidden md:block">
        <h1 class="w-full text-center text-md">{{ adminInfo.name }}</h1>
        <h1 class="text-xs w-full text-center">{{ adminInfo.role }}</h1>
      </div>
      <img
        @click="toggle"
        v-click-outside="hideDropDown"
        :src="avatar"
        alt="avatar"
        class="w-10 cursor-pointer rounded-full"
      />

      <!-- <div class="text-title-color cursor-pointer">
        <ion-icon name="caret-down-outline"></ion-icon>
      </div> -->
    </div>
    <transition name="ku-fade">
      <div
        v-show="showMenu"
        class="
          drodown
          absolute
          w-72
          h-auto
          bg-dropdown-background-color
          border border-solid border-dropdown-border-color
          rounded-lg
          mt-3
        "
      >
        <div class="dropdown-items max-h-96 overflow-y-auto">
          <slot name="item"></slot>
        </div>
        <div class="dropdown-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggle() {
      this.showMenu = !this.showMenu;
    },
    hideDropDown() {
      this.showMenu = false;
    },
  },
  props: {
    adminInfo: {
      name: "",
      role: "",
    },
    avatar: {
      type: String,
      require: true,
    },
  },
};
</script>
<style lang="scss">
.drodown {
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
.localization-rtl {
  .avatar {
    .drodown {
      @apply left-1;
      &::before {
        @apply left-9;
      }
    }
  }
}
.localization-ltr {
  .avatar {
    .drodown {
      @apply right-1;
      &::before {
        @apply right-0;
      }
      .dropdown-footer {
        @apply ml-3;
      }
    }
  }
}
</style>
