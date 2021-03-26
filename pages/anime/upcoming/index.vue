<template lang="pug">

	main.anime-by-popularity
		.anime-by-popularity__container
			.anime-by-popularity__title
				| Upcoming Anime

			CardsGrid
				Card(
					:key="anime.mal_id"
					:resultItem="anime"
					v-for="(anime) in animeUpcoming")

				Card(
					:resultItem="anime"
					:key="anime.mal_id"
					v-for="(anime) in list")

				infinite-loading(@infinite="infiniteHandler")

</template>

<script>

	import axios from "axios"
	import jikanjs from "jikanjs/lib/jikan"
	import Card from "@/components/elements/Card"
	import InfiniteLoading from "vue-infinite-loading"
	import layout from "@/middleware/layout"
	import CardsGrid from "@/components/grids/CardsGrid"

	export default {
		name: "AnimeUpcoming",
		metaInfo: {
			title: "Otaku Library - Upcoming anime"
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
			const animeUpcomingResponse = await jikanjs.loadTop("anime", 1, "upcoming")
			return {
				animeUpcoming: animeUpcomingResponse.top
			}
		},
		methods: {
			infiniteHandler($state) {
				axios.get(`https://api.jikan.moe/v3/top/anime/${ this.page }/upcoming`)
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

	.anime-by-popularity
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

</style>
