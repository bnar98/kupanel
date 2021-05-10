<template>
    <div class="">
        <!-- header -->
        <slot name="header"></slot>

        <div class="kbk-container row">
            <!-- sidebar  -->
            <slot name="sidebar"></slot>
            <!-- body -->
            <div id="mainContent" class="col-xs main-content narrow">
                <div class="col-xs">
                    <!-- <router-view></router-view> -->
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

