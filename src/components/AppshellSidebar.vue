<template>
    <div class="side-menu p-0 fixed top-16 bottom-0 z-100 overflow-x-hidden overflow-y-auto h-screen bg-sidemenu-background-color z-50" :class="state">
        <slot></slot>
    </div>
</template>
<script>
import { EventBus } from '../event'

export default {

    data () {
        return {
            state: 'open', // closed
        }
    },
    created () {
        EventBus.$on(
            'sidebarToggle', () => {
                if (this.state == 'closed') {
                    this.state = 'open'
                } else {
                    this.state = 'closed'
                }

            }
        )
    }
}
</script>

<style lang="scss">
$sideWidthOpen: 256px;
$sideWidthClosed: 66px;
$sidemenu-animation-duration: .4s;

.side-menu {
    -webkit-transition: $sidemenu-animation-duration;
    transition:  $sidemenu-animation-duration;


    &.open {
        width: $sideWidthOpen;
    }

    &.closed {
        width: $sideWidthClosed;

        .parent-menu {
            @apply justify-center;
            span {
                @apply hidden;
            }
        }

        .sub-menu-box {
            @apply hidden;
        }
    }
}

.localization-rtl {
    .side-menu {
        @apply border-l-2 border-solid border-default-border-color right-0;
        &.open {
            .parent-menu {
                @apply pr-6;
                span {
                    @apply pr-11;
                }
            }
        }
    }

}

.localization-ltr {
    .side-menu {
        @apply border-r-2 border-solid border-default-border-color border-l-0 left-0;
        &.open {
            .parent-menu {
                @apply pl-6;
                span {
                    @apply pl-11;
                }

            }
        } 
    }
}
</style>
