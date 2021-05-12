<template>
  <div>
    <input :id="name" type="checkbox" v-model="check" @click="toggle(!check)" />
    <label :for="name"><span></span>{{ title }}</label>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Watch, Vue, Emit } from "vue-property-decorator";

@Component
export default class Checkbox extends Vue {
  private check: Boolean = false;

  @Prop(String) readonly name!: string;
  @Prop(String) readonly title!: string;
  @Prop(Boolean) readonly value!: boolean;

  created() {
    this.check = this.value;
  }

  @Watch("value")
  checkChanged(newVal: boolean) {
    this.check = newVal;
  }

  @Emit("input")
  toggle(check: boolean) {}
}
</script>
<style lang="scss" scoped>
// checkbox
input[type="checkbox"] {
  @apply hidden;

  + label {
    @apply cursor-pointer font-extralight	text-base text-input-label-color select-none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    span {
      @apply inline-block cursor-pointer relative bg-transparent  border-2 border-input-border-color border-solid box-border align-middle;
      width: 18px;
      height: 18px;
      border-radius: 3px;
    }
  }

  &:checked {
    + label {
      span {
        @apply bg-primary border-2 border-primary border-solid;
        &:after,
        &:before {
          @apply absolute bg-white rounded-sm;
          content: "";
        }

        &:after {
          @apply w-2.5 top-1.5 left-1;
          height: 2px;
          transform: rotate(-45deg);
        }

        &:before {
          @apply w-1.5 top-2;
          height: 2px;
          transform: rotate(45deg);
          left: 1px;
        }
      }
    }
  }
}

.localization-rtl {
  input[type="checkbox"] {
    + label {
      span {
        @apply mb-0 ml-0 mr-2.5;
        margin-top: -1px;
      }
    }
  }
}

.localization-ltr {
  input[type="checkbox"] {
    + label {
      span {
        @apply ml-2.5 mb-0 mr-0;
        margin-top: -1px;
      }
    }
  }
}
</style>
