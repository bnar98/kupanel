<template>
  <div :class="['w-full', {'form-group': gap}]">
    <label :for="name" class="label" v-if="label">{{ label }}</label>
    <textarea type="text"
              :name="name"
              :id="name"
              :placeholder="placeholder"
              autocomplete="off"
              :rows="row"
              :value="normalizedValue"
              :class="{ 'error': !valid }"
              :disabled="disabled"
              @input="handler" @blur="blurHandler"
    />
  </div>

</template>

<script>

  export default {
    data() {
      return {
        normalizedValue: ''
      }
    },

    props: {
      placeholder: {
        type: String,
        default: ''
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: String
      },
      valid: {
        type: Boolean,
        default: true
      },
      row:{
        type:Number,
        default: 3
      },
      name: {
        type: String,
        default: '',
        required:true
      },
      label: {
        type: String,
        default: ''
      },
      gap:{
        type: Boolean,
        default: true
      }
    },

    created() {
      this.normalizedValue = this.value ? this.value : ''
    },

    watch: {
      value(newValue) {
        this.normalizedValue = newValue;
      }
    },

    methods: {

      handler(event) {
        this.$emit("input", event.target.value);
      },

      blurHandler() {
        this.$emit("blur");
      },

    }

  }
</script>
