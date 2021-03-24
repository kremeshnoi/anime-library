<template lang="pug">

	main.home
		Hero.home__section

		Cards.home__section(
			v-if="animeAiring"
			:cardsBlockData="animeAiring")

		Genres.home__section(
		v-if="animeGenres"
		:genresData="animeGenres")

		//- Cards.home__section(
		//- 	v-if="mangaPopular"
		//- 	:cardsBlockData="mangaPopular")

		//- Genres.home__section(
		//- 	v-if="mangaGenres"
		//- 	:genresData="mangaGenres")

</template>

<script>

	import jikanjs from "jikanjs/lib/jikan"
	import layout from "@/middleware/layout"
	import Hero from "@/components/blocks/Hero"
	import { anime, manga } from "@/utils/genres"
	import Cards from "@/components/blocks/Cards"
	import Genres from "@/components/blocks/Genres"

	export default {
		name: "Home",
		layout: layout,
		metaInfo: {
			title: "Otaku Library - Organize your own anime and manga list"
		},
		components: {
			Hero,
			Cards,
			Genres
		},
		async asyncData() {
			const animeAiringResponse = await jikanjs.loadTop("anime", 1, "airing")
			const mangaPopularResponse = await jikanjs.loadTop("manga", 1, "bypopularity")
			return {
				animeAiring: {
					title: "AIRING ANIME",
					link: "/anime/airing",
					data: animeAiringResponse.top
				},
				mangaPopular: {
					title: "POPULAR MANGA",
					link: "/manga/popular",
					data: mangaPopularResponse.top
				},
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

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/state/scroll"
	@import "~/assets/styles/modules/containers"

	.home
		width: 100%

		&__section
			margin: 54px 0 54px 0

</style>
