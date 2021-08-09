<template>
    <div class="input-code">
        <div class="label font-medium" :for="name" v-html="label"></div>
        <div :class="['input-box',{'error-border': !isValid}]">
            <input maxlength='6'
                   :tabindex="tabindex"
                   :autofocus="autofocus"
                   :name="name"
                   :value="value"
                   autocomplete= "off"
                   @input="onOutput"/>
        </div>
        <div class="error-label" v-if="!isValid">
            <i class="icon-smile-sad"></i>
            {{errorMsg}}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: { type: String, default: "label", required:true },
            name: { type: String, required:true },
            tabindex: { type:Number, default:0, required:false },
            value:{ type: String, default:'', required:false },
            autofocus: { type: Boolean, default: false },
            isValid: { type: Boolean, default: true },
            errorMsg: String,
        },
        methods: {
            onOutput(event) {
                let value = event.target.value;
                this.$emit("input", value);
            }
        }
    }
</script>

<style lang="scss">
  $char-w: 1ch;
  $gap: .6*$char-w;
  $n-char: 6;
  $in-w: $n-char*($char-w + $gap);
  $inputHeight: 46px;
  $dash-color: var(--gray-600-color);

  .input-code{
    @apply w-full;
    .input-box {
      @apply flex flex-col items-center bg-gray-200 p-3 rounded-xl mt-3;

      input {
        @apply block border-0 my-0 mx-auto text-gray-600 ;
        direction: ltr;
        width: $in-w;
        background: repeating-linear-gradient(90deg,
          $dash-color 0, $dash-color $char-w,
          transparent 0, transparent $char-w + $gap)
        0 100%/ #{$in-w - $gap} 1px no-repeat;
        font: 5ch droid sans mono, consolas, monospace;
        letter-spacing: $gap;
        height: $inputHeight;
        &:focus {
          @apply outline-none;
        }
      }
    }
    .label{
      @apply text-gray-600 w-full text-center;
      direction: ltr !important;

    }
  }
</style>
