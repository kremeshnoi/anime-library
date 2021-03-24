<template lang="pug">

	section.studios
		.studios__container
			h2.studios__title
				| Studios

			h3.studios__name(
				:key="name"
				v-if="studios.length"
				v-for="(studio, name) in studios")
				|	{{ studio.name }}

			h3.studios__disaster(v-if="studios.length === 0")
				| Not found ( ಥ﹏ಥ )

</template>

<script>

	export default {
		name: "Studios",
		props: ["studios"]
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

		&__disaster
			font-size: 24px
			text-align: start

</style>