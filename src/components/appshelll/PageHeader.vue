<template>
	<div class="grid grid-cols-2 gap-4 my-5 mx-0 border-b border-solid border-horizontal-seperator-color pb-5">
		<div class="col-span-2 md:col-span-1">
			<p class="page-title text-sub-title-color text-2xl font-medium mt-4 mb-0 ">{{ title }}</p>
			<small class=" text-description-color">{{ description }}</small>
		</div>
		<div class="grid content-end col-span-2 md:col-span-1">
			<slot />
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title', 'description']
	}
</script>
