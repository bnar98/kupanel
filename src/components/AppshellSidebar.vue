<template>
    <div class="side-menu p-0 absolute top-16 bottom-0 z-50 overflow-x-hidden overflow-y-auto h-sidebar bg-sidemenu-background" :class="state">
        side Menu
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