<template lang="pug">

	main.manga-genres
		.manga-genres__container
			.manga-genres__title
				| Manga Genres

			query-content
				a.genres__item(
					:key="genreIndex"
					v-for="(genre, genreIndex) in genresResult.data"
					@click="computeRouteByGenre({ genresResult, genre })"
					@click.middle="computeRouteByGenre({ genresResult, genre, clickType })")
					img.genres__item-image(
						draggable="false"
						:src="genre.img")

					.genres__title-wrapper
						span.genres__item-title
							| {{ genre.title }}

</template>

<script>

	import { mapActions } from "vuex"
	import { manga } from "@/utils/genres"
	import Cards from "@/components/elements/Cards"
	import layoutMiddleware from "@/middleware/layoutMiddleware"
	import QueryContent from "@/components/elements/QueryContent"

	export default {
		name: "MangaGenres",
		metaInfo: {
			title: "Otaku Library - Explore manga genres"
		},
		layout: layoutMiddleware,
		components: {
			Cards,
			QueryContent
		},
		data() {
			return {
				clickType: "middle"
			}
		},
		computed: {
			genresResult() {
				return {
						data: manga,
						type: "manga",
						title: "Manga",
						link: "manga/genres"
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

	.query-content
		grid-template-columns: repeat(4, 1fr)

	.manga-genres
		&__container
			@extend .container-default

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
					.top-airing-manga__icon
						color: inherit

			&__item
				width: 100%
				height: 120px
				color: #FFFFFF
				font-size: 16px
				font-weight: 300
				position: relative

			&__item-image
				width: 100%
				height: 100%
				display: block
				&:hover
					opacity: 0.8

			&__title-wrapper
				bottom: 0
				width: 100%
				display: flex
				background: black
				position: absolute
				align-items: center
				padding: 4px 0 4px 0
				justify-content: center
				flex-direction: initial
				background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%)

</style>
