<template id="switch-button">
    <div class="switch-button-control">
        <div class="switch-button" :class="{ enabled: isEnabled }" @click="toggle" :style="{'--color': color}">
            <div class="button"></div>
        </div>
        <div class="label">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    export default {

        data() {
            return{
                isEnabled: false
            }
        },

        props: {
            value: Boolean,
            color: {
                type: String,
                required: false,
                default: "#4D4D4D"
            }
        },

        watch: {
            value(value) {
                this.isEnabled = value;
            }
        },

        created() {
            this.isEnabled = this.value;
        },

        methods: {
            toggle: function() {
                this.isEnabled = !this.isEnabled;
                this.$emit("input", this.isEnabled);
            }
        }

    }

</script>

<style lang="scss">
  .switch-button-control {
    @apply flex flex-row items-center cursor-pointer;

    .switch-button {
      $switch-button-height: 1.1rem;
      $switch-button-color: var(--green-color);
      $switch-button-border-thickness: 2px;
      $switch-transition: all 0.3s ease-in-out;
      $switch-is-rounded: true;
      $button-side-length: calc(
        #{$switch-button-height} - (2 * #{$switch-button-border-thickness})
      );

      height: $switch-button-height;
      width: calc(#{$switch-button-height} * 2);
      border: $switch-button-border-thickness solid $switch-button-color;
      box-shadow: inset 0 0 $switch-button-border-thickness 0
      rgba(0, 0, 0, 0.33);
      border-radius: if($switch-is-rounded, $switch-button-height, 0);
      transition: $switch-transition;

      .button {
        height: $button-side-length;
        width: $button-side-length;
        border: $switch-button-border-thickness solid $switch-button-color;
        border-radius: if($switch-is-rounded, $button-side-length, 0);
        background: $switch-button-color;
        transition: $switch-transition;
      }

      &.enabled {
        background-color: $switch-button-color;
        box-shadow: none;

        .button {
          @apply bg-white;
        }
      }
    }

    .label {
      @apply pb-0;
    }
  }

  //rtl

  .localization-rtl{

    .switch-button-control {

      .switch-button {
        $switch-button-height: 1.1em;
        $switch-button-color: var(--green-color);
        $switch-button-border-thickness: 2px;
        $switch-transition: all 0.3s ease-in-out;
        $switch-is-rounded: true;
        $button-side-length: calc(
          #{$switch-button-height} - (2 * #{$switch-button-border-thickness})
        );

        &.enabled {

          .button {
            transform: translateX(
                calc((#{$button-side-length} + (2 *#{$switch-button-border-thickness}))* -1)
            );
          }
        }
      }

      .label {
        @apply mr-2.5;
      }
    }

  }

  //ltr

  .localization-ltr{

    .switch-button-control {

      .switch-button {
        $switch-button-height: 1.1em;
        $switch-button-color: var(--green-color);
        $switch-button-border-thickness: 2px;
        $switch-transition: all 0.3s ease-in-out;
        $switch-is-rounded: true;
        $button-side-length: calc(
          #{$switch-button-height} - (2 * #{$switch-button-border-thickness})
        );

        &.enabled {

          .button {
            transform: translateX(
                calc(#{$button-side-length} + (2 *#{$switch-button-border-thickness}))
            );
          }
        }
      }

      .label {
        @apply ml-2.5
      }
    }

  }
</style>
