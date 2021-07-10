<template>
    <div>
        <label :for="name" class="label" v-if="label">{{ label }}</label>
        <div class="flex w-full relative" v-click-outside="hideSelectBox">
            <Input :numeric="true" class="input" type="text" :gap="false" @keyup.prevent.native="pressKey" @keyup.enter.native="enter" :name="name" v-model="input" :placeholder="placeholder"></Input>
            <div class='select-box' @click="visible = !visible">
                <ion-icon name="chevron-down-outline"></ion-icon>
                <span class='select-box-selected-item '>{{ selected === undefined ? $t("mobile-input.code") : selected }}</span>
            </div>
            <div v-if="visible" class="z-50 flex flex-col w-auto border border-solid border-input-border-color bg-input-background-color text-center absolute top-11 left-0 rounded-l-md">
                <div v-for="(option, index) in options" :key="index" @click="onChange(option)"  class="flex justify-end m-1 px-1 cursor-pointer text-gray-100">
                    <span class="text-gray-700">{{options[index].country}}</span>
                    <span class="code w-12 text-left text-gray-700">{{options[index].code}}</span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Input from "./Input.vue"
  export default {
    components:{Input},
    data(){
        return{
            visible: false,
            selected: undefined,
            input: "",
            timeout: null,
            code: {},
            options:[
                {country: "ایران" , code: "+98"},
                {country: "Iraq" , code: "+964"},
                {country: "USA" , code: "+1"}
            ]
        }
    },
    props: {
        value: {},
        placeholder: {},
        property: {},
        name: {
            type: String,
            default: '',
            required: true
        },
        label: {
            type: String,
            default: ''
        },
        default:{
            type: Number,
            default: null,
            required: false
        }
    },
    mounted(){
        if (this.default != null && this.default <  this.options.length ) {
            this.selected = this.options[this.default].code;
        }
    },
    methods: {
        pressKey(){
            let mobile = this.input.replace(/^0+/, "")
            clearTimeout(this.timeout);
            this.timeout = setTimeout( () => {
                this.$emit("input",this.selected + mobile);
            },300);
        },
        onChange(option) {
            this.selected = option.code;
            this.hideSelectBox();
            let mobile = this.input.replace(/^0+/, "")
            this.$emit("input",this.selected + mobile);
        },
        enter(){
            if (this.selected) {
                let mobile = this.selected + this.input.replace(/^0+/, "")
                
                this.$emit("input",mobile)
                this.$emit("enter");

            }
        },

        hideSelectBox() {
            this.visible = false
        }
    },
    created() {
        
    },
    watch: {
      value(newValue) {
            console.log(newValue);
      }
    },
  }
</script>
<style lang="scss" >
input{
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
}
.code{
    direction: ltr;
}
.select-box {
      @apply flex items-center justify-between relative cursor-pointer border-r-0 bg-input-background-color font-extralight text-sm py-2 px-4  rounded-l-lg outline-none box-border border border-solid border-input-border-color;
        height: 41px;
        min-width: 100px;
      &:focus {
        @apply border border-solid border-input-focus-border-color;
      }
      ion-icon {
        @apply text-icon-small text-icon-color;
      }

      .select-box-selected-item{
          direction: ltr;
          text-align: center;
          margin: auto;
      }

    }

</style>
