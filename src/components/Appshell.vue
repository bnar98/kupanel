<template>
    <div>
        <!-- header -->
        <slot name="header"></slot>

        <div class="flex h-screen">
            <!-- sidebar  -->
            <slot name="sidebar"></slot>
            <!-- body -->
            <div id="main-content" class="bg-background-color w-full h-full mt-16 pb-16 overflow-y-auto overflow-x-hidden" :class="state" >
                <slot name="content"></slot>
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
$sidemenu-animation-duration: .4s;

.localization-rtl {
    #main-content {
        transition: padding-right $sidemenu-animation-duration;
        &.wide{
            @apply pr-20;
        }
        &.narrow{
            @apply pr-64;
        }
    }
}

.localization-ltr {
    #main-content {
        transition: padding-left $sidemenu-animation-duration;
        &.wide{
            @apply pl-16;
        }
        &.narrow{
            @apply pl-64;
        }
    }
}

    
</style>

