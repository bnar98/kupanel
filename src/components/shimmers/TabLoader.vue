<template>

    <div class="tab-loader" >
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>

</template>

<style lang="scss">

    .tab-loader{

        .tab-content{
            background-color: var(--gray-300-color);
            padding: 15px;
            min-height: 445px;
        }

    }

</style>
