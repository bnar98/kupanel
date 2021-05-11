<template>

    <div :class="['tabs', 'grid', 'grid-cols-1', 'w-full', height]">
        <div class="w-full tab-titles px-0">
            <ul class="m-0 p-0">
                <li v-for="(tab, index) in tabs" :key="index" v-if="tab.componentInstance" :class="['list-none', 'inline-block', 'my-0', 'mx-4', 'cursor-pointer', 'text-lg', 'text-title',{'is-active': tab.componentInstance.isActive}]">
                    <a class="px-0 pt-0 pb-4 flex items-center" @click="selectTab(tab)">

                        <div class="icon-box" v-if="tab.componentInstance.icon !== ''">
                            <ion-icon class="icon text-2xl py-0 px-1.5 text-primary" :name="tab.componentInstance.icon"></ion-icon>
                        </div>

                        <span>{{tab.componentInstance.name}}</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="tab-details w-full">
            <slot></slot>
        </div>
    </div>

</template>
<script lang="ts">

  import { Component, Prop, Vue } from 'vue-property-decorator'

  @Component
  export default class Tabs extends Vue {

    private tabs: Array<object> = []

    @Prop({required: false, type: String, default: 'default'}) readonly height!: string;

    public selectTab(selectedTab: any): void {
        // this.$emit('getActiveId', selectedTab.id);
        this.tabs.forEach((tab: any) => {
            tab.componentInstance.isActive = (tab.componentInstance.name === selectedTab.componentInstance.name);
        })
    }

    created() {
      if (this.$slots.default){
        this.tabs = this.$slots.default.filter(tab => tab.tag === 'vue-component-3-Tab');
      }
    }

  }

</script>

<style lang="scss">

  .tabs {

    .tab-titles {

      ul {

        li {

          &.is-active {
             border-bottom: 2px solid var(--primary-color);
           }

        }

      }

    }

    &.default {

      .tab {

        .tab-content {
          min-height: 445px;
        }

      }

    }

  }
</style>
