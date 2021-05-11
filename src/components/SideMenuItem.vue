<template>
    <div class="menu-item" :class="{'expend': expand}">
        <router-link :to="route" class="parent-menu" @click.native="expandIfNeeded">
            <ion-icon v-if="currentRout" :name="icon" class="icon"></ion-icon>
            <ion-icon v-if="!currentRout" :name="icon + '-outline'" class="icon"></ion-icon>
            <span>{{ title }}</span>
        </router-link>
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
    .menu-item{
        width: 100%;
        //border-top: 1px solid var(--white-color);
        //border-bottom: 1px solid var(--white-color);
        a{
        text-decoration: none;
        }
        &.expend{
        background-color: var(--sidemenu-expend-background-color);
        border-top: 1px solid var(--sidemenu-expend-seperator-color);
        border-bottom: 1px solid var(--sidemenu-expend-seperator-color);
        .parent-menu{
            .icon{
            color: var(--sidemenu--active-icon-color);
            }
        }
        .sub-menu-box{
            transition: all  var(--sidemenu-animation-duration);
            max-height: 100000px;
            padding: 8px 0;
            .sub-menu-list{
            display: block;
            }
        }
        }
        .parent-menu{
        display: flex;
        align-items: center;
        color: var(--title-color);
        cursor: pointer;
        height: 52px;
        .icon{
            color: var(--sidemenu-icon-color);
            font-size: var(--icon-default-font-size);
            position: absolute;
        }
        span{
            white-space: nowrap;
            width: 180px;
        }
        &:hover, &.active{
            background-color: var(--sidemenu-hover-background-color);
        }
        }
        .sub-menu-box{
        overflow: hidden;
        max-height: 0;
        transition: all var(--sidemenu-animation-duration);
        .sub-menu-list{
            display: none;
            .sub-menu-item{
            position: relative;
            cursor: pointer;

            list-style: none;
            a{
                color: var(--sub-title-color);
                width: 173px;
                display: block;
            }
            &.active{
                a{
                color: var(--primary-color);
                }
                &:before{
                width: 5px;
                height: 5px;
                border-radius: 9999px;
                background-color: var(--sidemenu-expend-right-border-color);
                position: absolute;
                content: '';
                bottom: 10px;
                }
            }
            }
            .sub-menu-item:not(:first-child){
            padding-top: 22px;
            }
        }
        }
    }
</style>
