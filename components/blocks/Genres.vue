<template lang="pug">

	section.genres
		.genres__container
			.genres__content

				.genres__block(
					:key="resultIndex"
					v-for="(genresResult, resultIndex) in genres")
					nuxt-link.genres__title(:to="genresResult.link")
						| {{ genresResult.title }} Genres
						.material-icons keyboard_arrow_right

					Carousel.genres-cards(type="genres")
						nuxt-link.genres-cards__item.swiper-slide(
							:key="genreIndex"
							v-for="(genre, genreIndex) in genresResult.data"
							:to="{ name: `${ genresResult.type }-genres-id-title`, params: { id: genre.id, title: $formatRouteTitle(genre.title) } }")

							.genres-cards__title-container
								span.genres-cards__title
									| {{ genre.title }}

</template>

<script>

	import { anime, manga } from "@/utils/genres"
	import Carousel from "@/components/grids/Carousel"

	export default {
		name: "Genres",
		components: {
			Carousel
		},
		computed: {
			genres() {
				return {
					animeGenres: {
						data: anime,
						type: "anime",
						title: "Anime",
						link: "anime/genres"
					},
					mangaGenres: {
						data: manga,
						type: "manga",
						title: "Manga",
						link: "manga/genres"
					}
				}
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

	.genres
		width: 100%

		&__container
			@extend .container-default

		&__content
			display: grid
			row-gap: 40px
			grid-auto-flow: row


		&__title
			@extend .title-bordered
			+flex(space-between, center, row)
			&:hover
				color: orange
				.top-airing-anime__icon
					color: inherit

	.genres-cards
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

		&__image
			width: 100%
			height: 100%
			display: block
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
