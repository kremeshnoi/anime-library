<template lang="pug">

	main.top-manga
		.top-manga__container
			.top-manga__title
				| Viewers Favorite Manga

			CardsGrid
				Card(
					:key="manga.mal_id"
					:resultItem="manga"
					v-for="(manga) in topManga")

				Card(
					:key="manga.mal_id"
					:resultItem="manga"
					v-for="(manga) in list")

				infinite-loading(@infinite="infiniteHandler")

</template>

<script>

	import axios from "axios"
	import jikanjs from "jikanjs/lib/jikan"
	import Card from "@/components/elements/Card"
	import InfiniteLoading from "vue-infinite-loading"
	import layout from "~/middleware/layout"
	import CardsGrid from "@/components/grids/CardsGrid"

	export default {
		name: "TopManga",
		metaInfo: {
			title: "Otaku Library – Top rated manga"
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
		async asyncData() {
			const topMangaResponse = await jikanjs.loadTop("manga", 1, "favorite")
			return {
				topManga: topMangaResponse.top,
			}
		},
		methods: {
			infiniteHandler($state) {
				axios.get(`https://api.jikan.moe/v3/top/manga/${ this.page }/favorite`)
				.then(({data}) => {
					if (data.top.length) {
						this.page += 1
						this.list.push(...data.top)
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

	.top-manga
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

