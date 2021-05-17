
<template>

    <div class="tabs-loader row">
        <div class="col-xs-12 tab-titles">
            <ul >
                <li class="tabs-loader-item" v-for="index in tabsCount" :key="index">
                    <span class="loader-box">
                        <div class="loader-animation"></div>
                    </span>
                </li>
            </ul>
        </div>
        <div class="tab-details col-xs-12">
            <slot></slot>
        </div>
    </div>

</template>

<script>

    export default {

        props: ['tabsCount']

    }
</script>

<style lang="scss">

    .tabs-loader{

        ul{
            padding: 0;
            margin: 0;

            .tabs-loader-item{
                display: inline-block;
                margin-left: 10px;

                .loader-box{
                    height: 30px;
                    width: 100px;
                }

            }


        }

    }

</style>
