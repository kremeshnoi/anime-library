<template lang="pug">

	.card
		.card__image-wrapper(
			@click="computeRoute({ resultItem })"
			@click.middle="computeRoute({ resultItem, clickType })")
			img.card__image(
				draggable="false"
				:src="resultItem.image_url")

			.card__title-wrapper
				span.card__title
					| {{ resultItem.title || resultItem.name }}

</template>

<script>

	import { mapActions } from "vuex"

	export default {
		name: "Card",
		props: ["resultItem"],
		data() {
			return {
				clickType: "middle"
			}
		},
		methods: {
			...mapActions({
				computeRoute: "computeRoute"
			})
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"

	.card
		margin: 0
		width: 100%
		max-width: 160px
		position: relative
		box-shadow: 0 8px 7px -7px rgba(0, 0, 0, 1)
		&:hover
			opacity: 0.8

		&__image
			width: 100%
			height: 240px
			display: block
			transform: scale(1.01)

		&__image-wrapper
			width: 100%
			cursor: pointer
			overflow: hidden
			position: relative

		&__title
			margin: 0
			font-size: 14px
			@extend .title-cut
			color: $color-white
			padding: 0 10px 0 10px
			text-shadow: rgba(0,0,0,.8) 1px 1px 0

		&__title-wrapper
			bottom: 0
			width: 100%
			position: absolute
			text-align: center
			padding: 4px 0 4px 0
			background: rgb(0,0,0)
			+flex(center,center, initial)
			background: linear-gradient(0deg, rgba(0,0,0,0.6) 50%, rgba(0, 0, 0, 0.0) 100%)

</style>
