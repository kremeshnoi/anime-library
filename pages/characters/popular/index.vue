<template lang="pug">

	main.top-characters
		.top-characters__container
			.top-characters__title
				| Most Popular Characters

			CardsGrid
				Card(
					v-for="(character) in favoriteCharacters",
					:key="character.name",
					:resultItem="character")

				Card(
					v-for="(character) in list",
					:key="character.name",
					:resultItem="character")

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
		name: "TopCharacters",
		metaInfo: {
			title: "Otaku Library - Most popular characters"
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
			const favoriteCharactersResponse = await jikanjs.loadTop("characters")
			return {
				favoriteCharacters: favoriteCharactersResponse.top,
			}
		},
		methods: {
			infiniteHandler($state) {
				axios.get(`https://api.jikan.moe/v3/top/characters/${ this.page }`)
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

	.top-characters
		&__container
			@extend .container
		&__title
			color: $color-black
			width: 100%
			font-size: 16px
			font-weight: 700
			text-transform: uppercase
			margin: 0 0 20px 0
			text-align: start
			@extend .title_is-bordered

	.infinite-loading-container
		display: flex
		align-items: center
		justify-content: center

</style>
