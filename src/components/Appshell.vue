<template>
    <div class="">
        <!-- header -->
        <slot name="header"></slot>

        <div class="flex flex-row-reverse">
            <!-- sidebar  -->
            <slot name="sidebar"></slot>
            <!-- body -->
            <div id="main-content" class="relative top-16" :class="state" >
                <div class="col-xs">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import {EventBus} from '../event'
export default {
    data() {
        return {
            state: "narrow" //wide
        }
    },
    created() {
        EventBus.$on(
            'sidebarToggle', () => {
                if (this.state == "wide") {
                    this.state = "narrow"
                } else {
                    this.state = "wide"
                }
                    
            }
        );
    }
}
</script>

<style lang="scss">
#main-content {
    &.wide{
        @apply pr-20;
    }

    &.narrow{
        @apply pr-64;
    }

  }
    
</style>

