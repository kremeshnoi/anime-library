<template lang="pug">

	main.manga-title-characters
		.manga-title-characters__container
			.manga-title-characters__title
				| {{ mangaResponseById.title }} Characters

			CardsGrid
				Card(
					:key="characters.name"
					:resultItem="characters"
					v-for="(characters) in mangaCharactersById.characters")

				//- Card(
				//- 	:resultItem="characters"
				//- 	:key="characters.name"
				//- 	v-for="(characters) in list")

				//- infinite-loading(@infinite="infiniteHandler")

</template>

<script>

	import axios from "axios"
	import jikanjs from "jikanjs/lib/jikan"
	import Card from "@/components/elements/Card"
	import InfiniteLoading from "vue-infinite-loading"
	import CardsGrid from "@/components/grids/CardsGrid"
	import layout from "~/middleware/layout"

	export default {
		name: "MangaTitleCharacters",
    metaInfo() {
      return {
        title: `${ this.mangaResponseById.title } - characters`
      }
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
			const mangaResponse = await jikanjs.loadManga(params.id)
			const mangaCharactersResponse = await jikanjs.loadManga(params.id, "characters")
			return {
				mangaResponseById: mangaResponse,
				mangaCharactersById: mangaCharactersResponse
			}
		},
		// methods: {
		// 	infiniteHandler($state) {
		// 		axios.get(`https://api.jikan.moe/v3/top/anime/${ this.page }/upcoming`)
		// 		.then(({data}) => {
		// 			if (data.top.length) {
		// 				this.page += 1
		// 				this.list.push(...data.top)
		// 				$state.loaded()
		// 			} else {
		// 				$state.complete()
		// 			}
		// 		})
		// 	}
		// }
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

	.manga-title-characters
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
