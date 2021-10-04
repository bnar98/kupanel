<template>
  <div :class="['tabs', 'grid', 'grid-cols-1', 'w-full', height]">
    <div class="w-full tab-titles px-0">
      <ul class="m-0 p-0">
        <li v-for="(tab, index) in tabs" :key="index" v-if="tab.componentInstance" :class="['list-none', 'inline-block', 'my-0', 'px-4', 'cursor-pointer', 'text-lg', 'text-title',{'disable': tab.componentInstance.disabled},{'is-active': tab.componentInstance.isActive}]">
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
<script lang="js">
  export default {

    data(){
      return {
        tabs: []
      }
    },

    mounted() {
      if (this.$slots.default){
        this.tabs = this.$slots.default.filter((tab) => {
          if (tab.tag){
            const tag = tab.tag.substr(tab.tag.length - 3);
            return (tag === 'tab' || tag === 'Tab');}
        })
      }
    },

    methods:{
      selectTab(selectedTab) {
        this.$emit('getActiveId', selectedTab.componentInstance.id);
        this.tabs.forEach((tab) => {
          tab.componentInstance.isActive = (tab.componentInstance.name === selectedTab.componentInstance.name);
        })
      }
    },

    props: {
      height: {
        default: 'default',
        type: String
      }
    }
    
  }

</script>

<style lang="scss">
  .tabs {
    .tab-titles {
      ul {
        li {
          &.disable{
            cursor: not-allowed;
            pointer-events: none;
            ion-icon{
              color: rgb(202, 202, 202);
            }
            span{
              color: rgb(202, 202, 202);
            }
          }
          &.is-active {
            @apply border-b-2 border-solid border-primary
           }
        }
      }
    }
    &.default {
      .tab {
        .tab-content {
          @apply min-h-tab
        }
      }
    }
  }
</style>
