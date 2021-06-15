<template>
	<div class="row">
        <div class="section col-lg-12 col-md-12 col-xs-12 col-sm-12">
            <div class="box bg-box-background-color border border-solid border-box-border-color " v-if="hasBox">
            	<div class="body py-3 px-6 text-title-color ">
            	    <slot />
            	</div>
            </div>
            <slot v-if="!hasBox" />
        </div>
    </div>
</template>

<script>
	export default {
		props: {
            hasBox: { default: true }
        }
	}
</script>
<style lang="scss">
    .box {
          box-shadow: 0 0 0 0 var();
          border-radius: var(--box-border-radius-size);
          .body {
              font-size: 13px;
          }


      }
</style>