<template lang='pug'>

	.cards
		.cards__image-wrapper
			img.cards__image( @click='computeRoute(query)'
									:src='query.image_url' )

		.cards__title-wrapper
			span.cards__title
				| {{ query.title }}

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
		margin: 10px 10px 10px 0
		height: fit-content
		box-shadow: none
		&:hover
			opacity: 0.9

		&__image
			width: 100%
			object-fit: cover
			transform: scale(1.02)

		&__image-wrapper
			overflow: hidden
			cursor: pointer

		&__title
			margin: 0
			width: 160px
			font-size: 16px
			display: block
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis

		&__title-wrapper
			padding: 10px
			box-shadow: 0 8px 7px -7px rgba(0, 0, 0, 1)
			+flex(center,center, initial)

</style>
