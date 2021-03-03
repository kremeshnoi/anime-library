<template lang="pug">

	.home
		hero

		studios

		genres

		cards-block(
			v-if="animeAiring",
			:cardsBlockData="animeAiring")

</template>

<script>

	import { studios } from "@/utils/studios"
	import Hero from "@/components/blocks/Hero"
	import { mapActions, mapGetters } from "vuex"
	import Genres from "@/components/blocks/Genres"
	import Studios from "@/components/blocks/Studios"
	import CardsBlock from "@/components/blocks/CardsBlock"
	import layoutMiddleware from "@/middleware/layoutMiddleware"

	export default {
		name: "Home",
		layout: layoutMiddleware,
		metaInfo: {
			title: "Otaku Library - Organize your own anime and manga list"
		},
		components: {
			Hero,
			Genres,
			Studios,
			CardsBlock,
		},
		computed: {
			...mapGetters({
				getAnimeAiring: "anime/getAnimeAiring",
			}),
			animeAiring() {
				return {
					title: "AIRING ANIME",
					link: "/anime/airing",
					data: this.getAnimeAiring
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
		},
		mounted() {
			document.documentElement.style.setProperty("--item-count", studios.length)
		},
		methods: {
			...mapActions({
				loadAnimeAiring: "anime/loadAnimeAiring"
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

	.studios
		display: grid
		@extend .container-default
		grid-auto-flow: column
		justify-content: space-between
		.studio
			object-fit: contain
			width: 100px
			height: 50px
			&:hover
				cursor: pointer
				opacity: 0.6

</style>
