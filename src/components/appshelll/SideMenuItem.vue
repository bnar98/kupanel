<template>
    <div class="menu-item w-full" :class="{'expend': expand}">
        <nuxt-link :to="route" class="parent-menu" @click.native="expandIfNeeded">
            <ion-icon v-if="currentRout" :name="icon" class="icon"></ion-icon>
            <ion-icon v-if="!currentRout" :name="icon + '-outline'" class="icon"></ion-icon>
            <span>{{ title }}</span>
        </nuxt-link>
            <div class="sub-menu-box" v-if="!!$slots.default">
                <ul class="sub-menu-list">
                    <slot />
                </ul>
            </div>
    </div>
</template>

<script>
    export default {
        props: ['route', 'title', 'icon'],

        data() {
            return {
                expand: false
            }
        },

        methods: {
            expandIfNeeded() {
                if (!this.$slots.default) {
                    this.expand = false
                    return
                }
                if (this.$slots.default.length > 0) {
                    this.expand = !this.expand
                }
            }
        },

        watch: {
            $route (to){
                if (!to.path.includes(this.route)) {
                    this.expand = false
                }
            }
        },

        mounted() {
            if (window.location.href.indexOf(this.route) > -1) {
                this.expandIfNeeded()
            }
        },

        computed: {

            currentRout(){
                return this.$route.path.includes(this.route) ;
            }

        }
    }
</script>

<style lang="scss">
  $sidemenu-animation-duration: .5s;
    .menu-item{
        @apply border-b border-solid border-white;
        a{
            @apply no-underline;
        }
        &.expend{
            @apply bg-sidemenu-expend-background-color border-b border-solid border-sidemenu-expend-seperator-color ;
            .parent-menu{
                .icon{
                    @apply text-sidemenu--active-icon-color;
                }
            }
            .sub-menu-box{
                transition: all $sidemenu-animation-duration;
                max-height: 1000px;
                .sub-menu-list{
                    @apply  px-0 block;
                }
            }
        }
        .parent-menu{
            @apply flex items-center text-title-color cursor-pointer h-14;
            .icon{
                @apply text-icon-default text-sidemenu-icon-color absolute;
            }
            span{
                @apply w-44 whitespace-nowrap;
            }

            &:hover, &.active{
                @apply bg-sidemenu-hover-background-color;
            }
        }
        .sub-menu-box{
            @apply overflow-hidden max-h-0;
            .sub-menu-list{
                
                .sub-menu-item{
                    @apply relative cursor-pointer list-none;
                    a{
                        @apply w-44 block text-sub-title-color;
                    }
                    &.active{
                        a{
                            @apply text-primary;
                        }
                        &:before{
                            width: 5px;
                            height: 5px;
                            content: '';
                            @apply rounded-full bg-sidemenu-expend-right-border-color absolute bottom-3;
                        }
                    }
                }
                .sub-menu-item:not(:first-child){
                    @apply pt-6;
                }
            }
        }
    }
.localization-rtl {
    .menu-item {
        .sub-menu-box {
                @apply border-r-4 border-solid border-sidemenu-active-border-color;
                transition: all $sidemenu-animation-duration;
            }
        &.expend {
            .sub-menu-box {
                transition: all $sidemenu-animation-duration;
                
            }
        }
        .parent-menu {
            @apply border-r-4 border-solid border-default-border-color;
            .icon {
                @apply right-5;
            }

            &:hover, &.active {
                @apply border-r-4 border-solid border-sidemenu-active-border-color;
            }
        }
        .sub-menu-box { 
            .sub-menu-list {
                @apply border-r border-solid border-sidemenu-expend-right-border-color px-8 mr-7;
                .sub-menu-item {
                    &.active {
                        &:before {
                            right: -35px
                        }
                    }
                }
            }
        }
    }
}

.localization-ltr {
    .menu-item {
        &.expend {
            .sub-menu-box {
                // transition: all $sidemenu-animation-duration;
                 @apply border-l-4 border-solid border-sidemenu-active-border-color border-r-0;
            }
        }
        .parent-menu {
            @apply border-l-4 border-solid border-default-border-color border-r-0;
            .icon {
                @apply left-5;
            }

            &:hover, &.active {
                @apply border-l-4 border-solid border-sidemenu-active-border-color border-r-0;
            }
        }
        .sub-menu-box {
            // transition: all $sidemenu-animation-duration;
           
            .sub-menu-list {
                margin-left: 28px;
                @apply border-l-2 border-solid border-sidemenu-expend-right-border-color border-r-0 px-9 ml-7;
                .sub-menu-item {
                    &.active {
                        &:before {
                            @apply -left-10;
                        }
                    }
                }
            }
        }
    }
}



</style>
