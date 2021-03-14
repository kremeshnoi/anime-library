<template lang="pug">

	section.studios
		.studios__container
			//- nuxt-link.studios__title(to="/")
			//- 	| Studios
			//- 	.studios__icon.material-icons keyboard_arrow_right
			.studios__items
				img.studios__item(
					draggable="false"
					:src="studio.img"
					:key="studioIndex"
					v-for="(studio, studioIndex) in studios.data")

</template>

<script>

	import { studios } from "@/utils/studios"
	import layoutMiddleware from "@/middleware/layoutMiddleware"

	export default {
		name: "Studios",
		layout: layoutMiddleware,
		computed: {
			studios() {
				return {
					data: studios
				}
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

	.studios
		width: 100%
		&__container
			@extend .container-default

		&__title
			@extend .title-bordered
			+flex(space-between, center, row)
			&:hover
				color: orange
				.top-airing-anime__icon
					color: inherit

		&__items
			display: grid
			grid-gap: 40px
			grid-auto-flow: column
			justify-content: space-between

		&__item
			width: 100%
			height: 50px
			max-width: 110px
			object-fit: contain
			&:hover
				opacity: 0.9
				cursor: pointer

</style>
