<template lang="pug">

	main.manga-genre
		.manga-genre__container
			.manga-genre__title(v-if="mangaGenre.mal_url")
				| {{ mangaGenre.mal_url.name }}

			CardsGrid
				Card(
					:key="manga.mal_id"
					:resultItem="manga"
					v-for="(manga) in mangaGenre.manga")

				Card(
					:key="manga.mal_id"
					:resultItem="manga"
					v-for="(manga) in list")

				InfiniteLoading(@infinite="infiniteHandler")

</template>

<script>

	import axios from "axios"
	import jikanjs from "jikanjs/lib/jikan"
	import Card from "@/components/elements/Card"
	import InfiniteLoading from "vue-infinite-loading"
	import CardsGrid from "@/components/grids/CardsGrid"
	import layout from "~/middleware/layout"

	export default {
		name: "MangaGenre",
		metaInfo: {
			title: "Otaku Library - Explore manga genres"
		},
		layout: layout,
		components: {
			Card,
			CardsGrid,
			InfiniteLoading
		},
		data() {
			return {
				page: 2,
				list: []
			}
		},
		async asyncData({ params }) {
			const mangaGenreResponse = await jikanjs.loadGenre("manga", params.id)
			return {
				mangaGenre: mangaGenreResponse,
			}
		},
		methods: {
			infiniteHandler($state) {
				axios.get(`https://api.jikan.moe/v3/genre/manga/${ $nuxt.$route.params.id }/${ this.page }`)
				.then(({data}) => {
					if (data.manga.length) {
						this.page += 1
						this.list.push(...data.manga)
						$state.loaded()
					} else {
						$state.complete()
					}
				})
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

	.manga-genre
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

</style>
