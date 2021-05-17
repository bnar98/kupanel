<template>
  <div class="input-container">
    <ion-icon :name="icon" class="input-icon" v-if="icon !== ''"></ion-icon>
    <span class="input-separator" v-if="separator"></span>
    <span class="input-unit" v-if="unit">{{unit}}</span>
    <input :type="type" :class="{'input-with-icon': icon !== '','error': !valid}" @input="handler" @blur="blurHandler"
           @paste="handlePaste" @keypress='isNumberKey($event)' :placeholder="placeholder"
           :min="minValue" :disabled="disabled" :value="value">
  </div>
</template>

<script>
  import englishDigit from "../../plugins/englishDigit";
  export default {

    data() {
      return {
        normalizedValue: ''
      }
    },

    props: {
      icon: {
        type: String,
        default: ''
      },
      placeholder: {
        type: String,
        default: ''
      },
      separator: {
        type: Boolean,
        default: false
      },
      numeric: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      value: {
        type: String
      },
      type: {
        type: String,
        default: 'text'
      },
      unit: {
        type: String
      },
      valid: {
        type: Boolean,
        default: true
      }
    },

    created() {
      this.normalizedValue = this.value ? this.value : ''
    },

    computed: {
      minValue() {
        return this.type === 'number' ? 0 : '';
      }
    },

    watch: {
      value(newValue) {
        this.normalizedValue = newValue;
      }
    },

    methods: {

      handler(event) {
        this.$emit("input", englishDigit(event.target.value));
      },

      blurHandler() {
        this.$emit("blur");
      },

      handlePaste(event) {

        if (this.numeric) {
          let pastedValue = event.clipboardData.getData('text');
          pastedValue = pastedValue.split('');
          this.onlyDigits(pastedValue, event);
        }

      },

      onlyDigits(value, event) {
        let BreakException = {};

        try {
          value.forEach(char => {
            const charCode = char.charCodeAt(0);
            if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 1776 || charCode > 1785) && (charCode < 1632 || charCode > 1641)) {
              event.preventDefault();
              throw BreakException
            }
          })
        } catch (e) {
          if (e !== BreakException) throw e;
        }
      },

      isNumberKey(evt) {
        if (this.numeric) {
          const charCode = (evt.which) ? evt.which : evt.keyCode
          if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 1776 || charCode > 1785) && (charCode < 1632 || charCode > 1641)) {
            evt.preventDefault();
          }
          return true;
        }
      },

    }
  }
</script>
