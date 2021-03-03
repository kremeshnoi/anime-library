<template lang='pug'>

	.cards
		.cards__image-wrapper(
			@click='computeRoute({ resultItem })'
			@click.middle='computeRoute({ resultItem, clickType })')
			img.cards__image(draggable="false" :src='resultItem.image_url')

			.cards__title-wrapper
				span.cards__title
					| {{ resultItem.title || resultItem.name }}

</template>

<script>

	import { mapActions } from 'vuex'

	export default {
		name: 'Cards',
		props: ['resultItem'],
		data() {
			return {
				clickType: "middle"
			}
		},
		methods: {
			...mapActions({
				computeRoute: 'computeRoute',
			})
		}
	}

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'

	.cards
		width: 100%
		box-shadow: none
		position: relative
		&:hover
			opacity: 0.8
		&__image
			width: 100%
			display: block
			height: 240px
			background-color: $color-blue-light
			transform: scale(1.01)
		&__image-wrapper
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
			width: 100%
			padding: 4px 0 4px 0
			position: absolute
			bottom: 0
			text-align: center
			background: rgb(0,0,0)
			background: linear-gradient(0deg, rgba(0,0,0,0.6) 50%, rgba(0, 0, 0, 0.0) 100%)
			+flex(center,center, initial)

</style>
