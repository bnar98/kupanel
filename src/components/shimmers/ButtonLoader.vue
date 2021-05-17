<template>
    <div class="button-loader">
        <span class="report-title loader-box">
            <div class="loader-animation"></div>
        </span>
    </div>
</template>

<style lang="scss">

    .button-loader{
        width: 100px;

        .loader-box{
            height: 41px;
        }

    }

    .localization-rtl{

        .button-loader + .button-loader{
            @apply ml-2.5;
        }

    }

    .localization-ltr{

        .button-loader + .button-loader{
            @apply mr-2.5;
        }

    }

</style>