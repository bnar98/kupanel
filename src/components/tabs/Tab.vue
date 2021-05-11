<template>
    <transition name="fade-tab" mode="out-in">
        <div class="tab grid grid-cols-1" v-show="isActive">
            <div class="tab-content px-0 w-full">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">

  import { Component, Prop, Watch, Vue } from 'vue-property-decorator'

  @Component
  export default class Tab extends Vue {

    private isActive: Boolean = false
    private link: String = ''

    @Prop({required: true, type: String}) readonly name!: string;
    @Prop({ type: Boolean, default: false}) readonly selected!: boolean;
    @Prop({ type: String, default: ''}) readonly icon!: string;
    @Prop({ type: String, default: ''}) readonly href!: string;

    created() {
        this.link = this.href;
    }

    mounted() {
        this.isActive = this.selected;
    }

    @Watch('href')
    hrefChanged(newVal: string) {
      this.link = newVal
    }

  }
</script>
