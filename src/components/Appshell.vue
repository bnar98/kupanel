<template>
    <div class="">
        <!-- header -->
        <slot name="header"></slot>

        <div class="flex flex-row-reverse">
            <!-- sidebar  -->
            <slot name="sidebar"></slot>
            <!-- body -->
            <div id="mainContent" class="relative top-14" :class="state" >
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
    
</style>

