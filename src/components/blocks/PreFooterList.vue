<template lang="pug">

	.PreFooterList
		.PreFooterList-container
			template(v-for="(list, index) in Object.keys(lists)")
				PreFooterItem(:dataList="lists[list]" :key="index")

</template>

<script>

	import { FetchTopList } from "@/services/fetchTopList";
	import { FetchCharacters } from "@/services/fetchCharacters";
	import PreFooterItem from "@/components/modules/PreFooterItem";

	export default {
		name: "PreFooterList",
		data: () => {
			return {
				lists: {
					topAnimeList: [],
					topMangaList: [],
					charactersList: []
				},
				titles: ["Top Anime", "Top Manga", "Most Popular Characters"]
			}
		},
		components: {
			PreFooterItem
		},
		mounted() {
			FetchTopList.fetchTopList("anime",1, "favorite").then(response => {
				this.lists.topAnimeList = response
			});
			FetchTopList.fetchTopList("manga",1, "favorite").then(response => {
				this.lists.topMangaList = response
			});
			FetchCharacters.fetchCharacters("characters", 1).then(response => {
				this.lists.charactersList = response
			});
		}
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/buttons.sass"

	.PreFooterList
		background-color: $color-dirty-white

		&-container
			display: grid
			width: 100%
			justify-content: space-between
			grid-gap: 40px
			grid-template-columns: repeat(3, 1fr)
			max-width: 1300px
			margin: 0 auto
			padding: 40px 40px 40px 40px

</style>
