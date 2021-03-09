<template lang="pug">

	main.anime-genres
		.anime-genres__container
			.anime-genres__title
				| Anime Genres

			CardsGrid.anime-genres__grid
				a.genres__item(
					:key="genreIndex"
					v-for="(genre, genreIndex) in genresResult.data"
					@click="computeRouteByGenre({ genresResult, genre })"
					@click.middle="computeRouteByGenre({ genresResult, genre, clickType })")

					.genres__title-container
						span.genres__item-title
							| {{ genre.title }}

</template>

<script>

	import { mapActions } from "vuex"
	import { anime } from "@/utils/genres"
	import CardsGrid from "@/components/grids/CardsGrid"
	import layoutMiddleware from "@/middleware/layoutMiddleware"

	export default {
		name: "AnimeGenres",
		metaInfo: {
			title: "Otaku Library - Explore anime genres"
		},
		layout: layoutMiddleware,
		components: {
			CardsGrid
		},
		data() {
			return {
				clickType: "middle"
			}
		},
		computed: {
			genresResult() {
				return {
						data: anime,
						type: "anime",
						title: "Anime",
						link: "anime/genres"
				}
			}
		},
		methods: {
			...mapActions({
				computeRouteByGenre: "computeRouteByGenre"
			})
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

	.anime-genres
		&__container
			margin-top: 20px
			@extend .container-default

		&__grid
			grid-auto-flow: row
			grid-template-columns: repeat(auto-fit, minmax(120px, 1fr))

		&__title
			width: 100%
			font-size: 16px
			font-weight: 700
			text-align: start
			margin: 0 0 20px 0
			color: $color-black
			@extend .title-bordered
			text-transform: uppercase

		.genres
			@extend .container-default

			&__title
				@extend .title-bordered
				+flex(space-between, center, row)
				&:hover
					color: orange
					.top-airing-anime__icon
						color: inherit

			&__item
				width: 100%
				height: 32px
				color: #FFFFFF
				font-size: 16px
				max-width: 120px
				font-weight: 300
				position: relative
				box-shadow: 0 8px 7px -7px rgba(0, 0, 0, 1)
				&:hover
					opacity: 0.8

			&__title-container
				bottom: 0
				width: 100%
				display: flex
				background: black
				position: absolute
				align-items: center
				padding: 4px 0 4px 0
				justify-content: center
				flex-direction: initial
				background: rgba(57, 112, 229, 1)

</style>
