<template>
    <transition name="fade-tab" mode="out-in">
        <div class="tab grid grid-cols-1" v-show="isActive">
            <div class="tab-content px-0 w-full">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script lang="js">

  export default {
    name: 'tab',

    data(){
      return{
        isActive: false,
        link: null
      }
    },

    props:{
      name: {
        required: true
      },
      selected: {
        default: false
      },
      icon: {
        default: ''
      },
      id: {
        default: '',
        type: String
      },
      href: {
        default: null
      },

    },
    created() {
      this.link = this.href;
    },

    watch: {
      href(value) {
        this.link = value;
      }
    },

    mounted() {
      this.isActive = this.selected;
    }

  }

  // import { Component, Prop, Watch, Vue } from 'vue-property-decorator'
  //
  // @Component
  // export default class Tab extends Vue {
  //
  //   private isActive: Boolean = false
  //   private link: String = ''
  //
  //   @Prop({required: true, type: String}) readonly name!: string;
  //   @Prop({ type: Boolean, default: false}) readonly selected!: boolean;
  //   @Prop({ type: String, default: ''}) readonly icon!: string;
  //   @Prop({ type: String, default: ''}) readonly href!: string;
  //
  //   created() {
  //       this.link = this.href;
  //   }
  //
  //   mounted() {
  //       this.isActive = this.selected;
  //   }
  //
  //   @Watch('href')
  //   hrefChanged(newVal: string) {
  //     this.link = newVal
  //   }
  //
  // }
</script>
