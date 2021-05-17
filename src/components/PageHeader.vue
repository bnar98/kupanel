<template>
	<div class="my-5 mx-0 border-b border-solid border-horizontal-seperator-color pb-5 justify-items-end">
		<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			<p class="page-title text-sub-title-color text-2xl font-medium mt-8 mb-0 ">{{ title }}</p>
			<small class=" text-description-color">{{ description }}</small>
		</div>
		<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
			<slot />
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'description']
	}
</script>
