<template lang="pug">

	main.top-anime
		.top-anime__container
			.top-anime__title
				| Viewers Favorite Anime

			CardsGrid
				Card(
					:key="anime.mal_id"
					:resultItem="anime"
					v-for="(anime) in topAnime")

				Card(
					:key="anime.mal_id"
					:resultItem="anime"
					v-for="(anime) in list")

				InfiniteLoading(@infinite="infiniteHandler")

</template>

<script>

	import axios from "axios"
	import jikanjs from "jikanjs/lib/jikan"
	import layout from "@/middleware/layout"
	import Card from "@/components/elements/Card"
	import InfiniteLoading from "vue-infinite-loading"
	import CardsGrid from "@/components/grids/CardsGrid"

	export default {
		name: "TopAnime",
		metaInfo: {
			title: "Otaku Library - Top rated anime"
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
			const topAnimeResponse = await jikanjs.loadTop("anime", 1, "favorite")
			return {
				topAnime: topAnimeResponse.top
			}
		},
		methods: {
			infiniteHandler($state) {
				axios.get(`https://api.jikan.moe/v3/top/anime/${ this.page }/favorite`)
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
		},
		fetchDelay: 10000
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

	.top-anime
		&__container
			@extend .container

		&__title
			width: 100%
			font-size: 16px
			font-weight: 700
			text-align: start
			margin: 0 0 20px 0
			color: $color-black
			@extend .title_is-bordered
			text-transform: uppercase

	.infinite-loading-container
		display: flex
		align-items: center
		justify-content: center

</style>
