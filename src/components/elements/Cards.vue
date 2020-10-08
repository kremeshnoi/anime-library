<template lang='pug'>

	.cards
		.cards__image-wrapper
			img.cards__image(@click='computeRoute(cardsData)'
				:src='cardsData.image_url')

			.cards__title-wrapper
				span.cards__title
					| {{ cardsData.title || cardsData.name }}

</template>

<script>

	// IMPORTS

	import { mapActions } from 'vuex';

	// COMPONENT OPTIONS

	export default {
		name: 'Cards',
		props: ['cardsData'],
		methods: {
			...mapActions(['computeRoute'])
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'

	// CARDS STYLES

	.cards
		width: 100%
		box-shadow: none
		margin: 0 0 10px 0
		position: relative

		&:hover
			opacity: 0.9

		&__image
			width: 100%
			height: 260px
			display: block
			background-color: $color-blue-light
			transform: scale(1.01)
			+mq(tablet-small, max)
				height: 240px

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
			background: rgb(0,0,0)
			background: linear-gradient(0deg, rgba(0,0,0,0.6) 50%, rgba(0, 0, 0, 0.0) 100%)
			box-shadow: 0 8px 7px -7px rgba(0, 0, 0, 1)
			+flex(center,center, initial)

</style>
