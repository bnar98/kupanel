<template>
    <div class="avatar relative" @click="toggle" v-click-outside="hideDropDown">
        <img :src="avatar" alt="avatar" class="w-10 cursor-pointer rounded-full">
        <transition name="ku-fade">
            <div v-show="showMenu" class="drodown absolute w-72 h-auto bg-dropdown-background-color border border-solid border-dropdown-border-color rounded-lg mt-3" >
                <div class="dropdown-items ">
                    <slot name="item"></slot>
                </div>
                <div class="dropdown-footer ">
                    <slot name="footer"></slot>
                </div>
            </div>
        </transition>

    </div>
</template>
<script>
export default {
    data() {
        return {
            showMenu: false,
        }
    },
    methods: {
        toggle(){
            this.showMenu = !this.showMenu;
        },
        hideDropDown(){
            this.showMenu = false;
        }
    },
    props: {
        avatar: {
            type: String,
            require: true,
        },
    },
}
</script>
<style lang="scss">
    .drodown{
        &::before{
            content: "";
            @apply absolute w-0 h-0 box-border border-8 border-solid border-black rounded-sm;
            top: .04rem;
            border-color: transparent transparent var(--dropdown-triangle-color) var(--dropdown-triangle-color);
            transform-origin: 0 0;
            transform: rotate(136deg);
            box-shadow: -1px 1px 0 0 var(--dropdown-border-color);
        }
    }
    .localization-rtl{
        .avatar{
            @apply pl-3 ;
            .drodown{
                @apply left-1;
                &::before{
                    @apply left-9
                }
            }
        }
    }
    .localization-ltr{
        .avatar{
            @apply pr-3 ;
            .drodown{
                @apply right-1;
                &::before{
                    @apply right-0
                }
            }
        }
    }

</style>
