<template>

    <div class="row page-header-loader">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <span class="page-title loader-box">
                <div class="loader-animation"></div>
            </span>
            <span class="page-description loader-box">
                <div class="loader-animation"></div>
            </span>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <slot />
        </div>
    </div>

</template>

<style lang="scss">

    .page-header-loader {
        margin: 20px 0 10px 0;
        border-bottom: 1px solid var(--horizontal-seperator-color);
        padding-bottom: 20px;
        align-items: flex-end;

        .page-title {
            margin-top: 32px;
            margin-bottom: 0;
            height: 20px;
            width: 50%;
        }

        .page-description {
            height: 20px;
            margin-top: 10px;
            border-radius: 5px;
        }
    }

</style>