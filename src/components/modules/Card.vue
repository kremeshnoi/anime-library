<template lang="pug">

	.card
		.card__image-wrapper.card-image
			img.card__image(@click="computeRoute(result)" :src="result['image_url']")
		.card__title-wrapper.card-content
			span.card__title {{ result['title'] }}

</template>

<script>

	import { mapActions } from "vuex";

	export default {
		name: "Card",
		data: () => {
			return {
				result: ""
			}
		},
		methods: {
			...mapActions(["computeRoute"])
		}
	}

</script>

<style lang="sass" scoped>

	.card
		width: 100%
		margin: 10px 10px 10px 0
		height: fit-content
		box-shadow: none
		&:hover
			opacity: 0.9

		&__image
			object-fit: cover
			transform: scale(1.02)

			&-wrapper
				overflow: hidden
				cursor: pointer

		&__title
			margin: 0 !important
			width: 160px
			font-size: 16px
			display: block
			overflow: hidden
			white-space: nowrap
			text-overflow: ellipsis

			&-wrapper
				display: flex
				justify-content: center
				align-items: center
				padding: 10px
				box-shadow: 0 8px 7px -7px rgba(0, 0, 0, 1)

</style>
