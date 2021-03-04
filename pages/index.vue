<template lang="pug">

	main.home
		Hero.home__section

		Studios.home__section

		Genres.home__section

		Cards.home__section(
			v-if="animeAiring"
			:cardsBlockData="animeAiring")

		Cards.home__section(
			v-if="animeUpcoming"
			:cardsBlockData="animeUpcoming")

</template>

<script>

	import { studios } from "@/utils/studios"
	import Hero from "@/components/blocks/Hero"
	import { mapActions, mapGetters } from "vuex"
	import Cards from "@/components/blocks/Cards"
	import Genres from "@/components/blocks/Genres"
	import Studios from "@/components/blocks/Studios"
	import layoutMiddleware from "@/middleware/layoutMiddleware"

	export default {
		name: "Home",
		layout: layoutMiddleware,
		metaInfo: {
			title: "Otaku Library - Organize your own anime and manga list"
		},
		components: {
			Hero,
			Cards,
			Genres,
			Studios
		},
		computed: {
			...mapGetters({
				getAnimeAiring: "anime/getAnimeAiring",
				getAnimeUpcoming: "anime/getAnimeUpcoming"
			}),
			animeAiring() {
				return {
					title: "AIRING ANIME",
					link: "/anime/airing",
					data: this.getAnimeAiring
				}
			},
			animeUpcoming() {
				return {
					title: "UPCOMING ANIME",
					link: "/anime/upcoming",
					data: this.getAnimeUpcoming
				}
			},
			studios() {
				return {
					data: studios
				}
			}
		},
		async created() {
			await this.loadAnimeAiring()
			await this.loadAnimeUpcoming()
		},
		methods: {
			...mapActions({
				loadAnimeAiring: "anime/loadAnimeAiring",
				loadAnimeUpcoming: "anime/loadAnimeUpcoming"
			})
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
