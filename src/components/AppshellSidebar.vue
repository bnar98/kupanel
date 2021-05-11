<template>
    <div class="side-menu p-0 absolute top-16 bottom-0 z-100 overflow-x-hidden overflow-y-auto h-sidebar bg-sidemenu-background" :class="state">
        <slot></slot>
    </div>
</template>
<script>
import {EventBus} from '../event'
export default {
    
    data() {
        return {
            state: "open", // closed
        }
    },
    created() {
        EventBus.$on(
            'sidebarToggle', () => {
                if (this.state == "closed") {
                    this.state = "open"
                } else {
                    this.state = "closed"
                }
                
            }
        );
    }
}
</script>

<style lang="scss">
    $sideWidthOpen:256px;
    $sideWidthClosed:66px;

    .side-menu{
    -webkit-transition: var(--sidemenu-animation-duration);
    transition: var(--sidemenu-animation-duration);


    &.open{
        width: $sideWidthOpen;
    }

    &.closed{
        width: $sideWidthClosed;
        .parent-menu{
            justify-content: center;
            span{
                display: none;
            }
        }
        .sub-menu-box{
            display: none;
        }
    }

    
}


    .localization-rtl{

    .side-menu{
        border-left: 2px solid var(--default-border-color);
        right: 0;
        &.open{

        .parent-menu{
            padding-right: 24px;

            span{
            padding-right: 42px;
            }

        }

        }

        .menu-item{

        &.expend{

            .sub-menu-box{
            border-right: 4px solid var(--sidemenu-active-border-color);
            }

        }

        .parent-menu{
            border-right: 4px solid var(--default-border-color);

            .icon{
            right: 20px;
            }

            &:hover, &.active{
            border-right: 4px solid var(--sidemenu-active-border-color);
            }

        }
        .sub-menu-box{
            border-right: 4px solid var(--white-color);

            .sub-menu-list{
            border-right: 1px solid var(--sidemenu-expend-right-border-color);
            padding: 0 36px 0 32px;
            margin-right: 28px;

            .sub-menu-item{

                &.active{

                &:before{

                    right: -39px;

                }

                }

            }

            }
        }
        }
    }

    }

    .localization-ltr{

    .side-menu{
        border-right: 2px solid var(--default-border-color);
        border-left: none;
        left: 0;
        &.open{

        .parent-menu{
            padding-left: 24px;

            span{
            padding-left: 42px;
            }

        }

        }

        .menu-item{

        &.expend{

            .sub-menu-box{
            border-left: 4px solid var(--sidemenu-active-border-color);
            border-right: none;
            }

        }

        .parent-menu{
            border-left: 4px solid var(--default-border-color);
            border-right: none;

            .icon{
            left: 20px;
            }

            &:hover, &.active{
            border-left: 4px solid var(--sidemenu-active-border-color);
            border-right: none;
            }

        }
        .sub-menu-box{
            border-left: 4px solid var(--white-color);
            border-right: none;

            .sub-menu-list{
            border-left: 1px solid var(--sidemenu-expend-right-border-color);
            border-right: none;
            padding: 0 32px 0 36px;
            margin-left: 28px;

            .sub-menu-item{

                &.active{

                &:before{

                    left: -39px;

                }

                }

            }

            }
        }
        }
    }

    }
</style>