<template>
    <div class="">
        <!-- header -->
        <slot name="header"></slot>

        <div class="h-screen flex flex-row-reverse">
            <!-- sidebar  -->
            <slot name="sidebar"></slot>
            <!-- body -->
            <div id="mainContent" class="col-xs main-content narrow">
                <div class="col-xs">
                    <slot name="content"></slot>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>

