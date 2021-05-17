<template>

    <div class="editor-loader">

        <div class="col-xs-12">

            <span class="loader-box medium-text">
                <div class="loader-animation"></div>
            </span>

            <span class="loader-box long-text">
                <div class="loader-animation"></div>
            </span>

            <span class="loader-box medium-text">
                <div class="loader-animation"></div>
            </span>

            <span class="loader-box long-text">
                <div class="loader-animation"></div>
            </span>

            <span class="loader-box short-text">
                <div class="loader-animation"></div>
            </span>

            <span class="loader-box medium-text">
                <div class="loader-animation"></div>
            </span>

            <span class="loader-box long-text">
                <div class="loader-animation"></div>
            </span>

            <span class="loader-box short-text">
                <div class="loader-animation"></div>
            </span>

            <span class="loader-box medium-text">
                <div class="loader-animation"></div>
            </span>

            <span class="loader-box long-text">
                <div class="loader-animation"></div>
            </span>

            <span class="loader-box short-text">
                <div class="loader-animation"></div>
            </span>

        </div>

    </div>

</template>

<style lang="scss">

    .editor-loader{
        background-color: var(--gray-300-color);
        /*padding: 15px;*/
        direction: ltr;

        .loader-box{
            height: 15px;
            margin-bottom: 20px;

            &.long-text{
                width: 100%;
            }

            &.medium-text{
                width: 60%;
            }

            &.short-text{
                width: 30%;
            }

        }

    }

</style>