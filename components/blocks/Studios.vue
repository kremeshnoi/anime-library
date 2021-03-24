<template lang="pug">

	section.studios
		.studios__container
			h2.studios__title(v-if="source_type === 'anime'")
				| Studios

			h2.studios__title(v-if="source_type === 'manga'")
				| Publisher

			span.studios__name(
				:key="name"
				v-if="studios.length"
				v-for="(studio, name) in studios")
				|	{{ studio.name }}

			NotFound(v-if="studios.length === 0")

</template>

<script>

	import NotFound from "@/components/elements/NotFound"

	export default {
		name: "Studios",
		props: ["studios", "source_type"],
		components: {
			NotFound
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/modules/titles"

	.studios
		&__container
			display: grid
			grid-gap: 20px
			grid-auto-flow: row
			justify-items: start

		&__title
			margin: 0
			@extend .title-bordered

		&__name
			font-size: 16px
			height: auto
			margin: 0 10px 0 0
			display: inline-block
			border-bottom: 1px dashed $color-grey-light
			&:hover
				cursor: pointer
				border-bottom: 1px dashed $color-blue-light

</style>