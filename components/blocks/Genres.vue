<template lang="pug">

	.genres
		.genres__content
			.genres__wrapper(
				v-for="(genresResult, resultIndex) in genres",
				:key="resultIndex")
				router-link.genres__title(:to="genresResult.link")
					| {{ genresResult.title }} Genres
					.top-airing-anime__icon.material-icons keyboard_arrow_right

				.genres__anime
					a.genres__item(
						:key="genreIndex"
						v-for="(genre, genreIndex) in genresResult.data"
						@click="computeRouteByGenre({ genresResult, genre })"
						@click.middle="computeRouteByGenre({ genresResult, genre, clickType })")
						img.genres__item-image(draggable="false" :src="genre.img")

						.genres__title-wrapper
							span.genres__item-title
								| {{ genre.title }}

</template>

<script>

	import { mapActions } from "vuex"
	import { anime, manga } from "@/utils/genres"

	export default {
		name: "Genres",
		data() {
			return {
				clickType: "middle"
			}
		},
		computed: {
			genres() {
				return {
					animeGenres: {
						data: anime.slice(0, 2),
						type: "anime",
						title: "Anime",
						link: "anime/genres"
					},
					mangaGenres: {
						data: manga.slice(0, 2),
						type: "manga",
						title: "Manga",
						link: "manga/genres"
					}
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

	.genres
		@extend .container-default
		&__title
			@extend .title-bordered
			+flex(space-between, center, row)
			&:hover
				color: orange
				.top-airing-anime__icon
					color: inherit
		&__content
			display: grid
			column-gap: 20px
			grid-template-columns: 1fr 1fr
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

		&__anime, &__manga
			display: grid
			column-gap: 20px
			grid-template-columns: 1fr 1fr

</style>
