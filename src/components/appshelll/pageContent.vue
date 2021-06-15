<template>
    <div class="content" :class="size">
        <slot></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: {
        size: {
            type: String,
            default: 'default',
            validator: function (value) {
                // The value must match one of these strings
                return ['small', 'full', 'default'].indexOf(value) !== -1
            },
        },
     },
}
</script>

<style lang="scss" scoped>
    .content{
        @apply w-11/12 mt-3 mb-14 mx-auto ;
        &.small{
            @apply w-3/5;
        }
        &.full{
            @apply w-full;
        }
    }
</style>
