<template lang='pug'>

	.cards
		.cards__image-wrapper
			img.cards__image(@click='computeRoute(query)'
				:src='query.image_url')

			.cards__title-wrapper
				span.cards__title
					| {{ query.title || query.name }}

</template>

<script>

	import { mapActions } from 'vuex';

	export default {
		name: 'Cards',
		props: ['query'],
		methods: {
			...mapActions(['computeRoute'])
		}
	}

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.cards
		width: 100%
		margin: 0 0 10px 0
		box-shadow: none
		position: relative

		&:hover
			opacity: 0.9

		&__image
			width: 100%
			height: 100%
			display: block
			background-color: $color-blue-light
			object-fit: cover
			transform: scale(1.01)

		&__image-wrapper
			overflow: hidden
			cursor: pointer
			position: relative

		&__title
			margin: 0
			padding: 0 10px 0 10px
			font-size: 14px
			display: block
			color: $color-white
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis
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
