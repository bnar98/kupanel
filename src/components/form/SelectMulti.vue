<template>
  <div :class="['select-box-area', {'form-group': gap,'disabled': disabled === true}]" v-click-outside="hideSelectBox">
    <label :for="name" class="label" v-if="label">{{ label }}</label>
    <div class='select-box' @click="visible = !visible">
      <span class='select-box-selected-item'>{{ placeholder }}</span>
      <ion-icon name="chevron-down-outline"></ion-icon>
      <ul class="select-box-item" v-if="visible">
        <li v-for="(option, index) in options" :key="index" :class="{'selected': isSelected(option)}"
            @click="onChange(option)">{{ option[property] }}
        </li>
      </ul>
    </div>
    <div class="tag-list">
      <ul>
        <li v-for="(selectedItem, index) in selected" :key="index">
            <span class="tag-content">
                <span :class="['tag-title', {'disabled': disabled}]">{{getTitle(selectedItem)}}</span>
                <span class="tag-remove-btn" v-if="!disabled" @click="removeSelected(index)">
                    <ion-icon class="icon" name="close-outline"></ion-icon>
                </span>
            </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {},
      options: {},
      property: {},
      placeholder: {},
      disabled: {},
      name: {
        type: String,
        default: '',
        required: true
      },
      label: {
        type: String,
        default: ''
      },
      gap: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        visible: false,
        selected: []
      }
    },

    watch: {
      value() {
        this.find(this.value);
      },
      options() {
        this.find(this.value);
      }
    },

    computed: {



    },

    methods: {
      onChange(option) {
        if (!this.isSelected(option)) {
          this.selected.push(option.value)
          this.$emit('change', this.selected);
        }
        this.$emit('input', this.selected);
        this.$emit('onSelect', option.value);
      },

      find(value) {
        try {
          if (value !== undefined && value !== [])
            // eslint-disable-next-line no-undef
            this.selected = this.value
        } catch (e) {
          console.error('There is an error in SelectBox component:' + e);
        }
      },

      isSelected(option) {
        return this.selected.findIndex(x => x.toString() === option.value.toString()) !== -1
      },

      hideSelectBox() {
        this.visible = false
      },

      getTitle(selectedValue) {
        return this.options.find(x => x.value.toString() === selectedValue.toString()).title
      },

      removeSelected(selectedIndex) {
        this.selected.splice(selectedIndex, 1);
        this.$emit('input', this.selected);
      }

    },

    mounted() {
      this.find(this.value);
    }

  }
</script>

<style lang="scss">
  //SelectBox
  .select-box-area {

    &.disabled {
      @apply pointer-events-none cursor-not-allowed;

      .select-box {
        @apply border-input-background-color;
      }

    }

    .select-box {
      @apply flex items-center justify-between relative cursor-pointer bg-input-background-color
      font-extralight text-sm py-2 px-4 rounded-lg outline-none box-border border border-solid border-input-border-color;

      &:focus {
        @apply border border-solid border-input-focus-border-color;
      }

      ul {
        @apply absolute w-full p-0 mb-10 bg-input-background-color rounded-lg overflow-y-auto overflow-x-hidden z-20
        left-0 top-8;
        max-height: 300px !important;

        li {
          @apply cursor-pointer h-8 px-4 pt-2 pb-1.5 box-border transition-all duration-100 whitespace-nowrap;

          &:hover {
            @apply bg-gray-300;
          }

          &.selected {
            @apply bg-gray-300;
          }

        }

      }

      ion-icon {
        @apply text-icon-small text-icon-color;
      }

    }

  }
</style>
