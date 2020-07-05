<template lang="pug">

	.PreFooterListItem
		router-link.PreFooterListItem-title(to="/") {{ titles[listName] }}
			.PreFooterListItem-icon.material-icons keyboard_arrow_right
		.PreFooterListItem-content(v-for="(result, index) in lists[listName]" :key="index")
			p.PreFooterListItem-digit {{ index + 1 }}.
			router-link.PreFooterListItem-link(to="/") {{ result['title'] }}

</template>

<script>

	import {FetchTopList} from "@/services/fetchTopList";

	const titles = Object.freeze({
		topAnimeList: "Top Anime",
		topMangaList: "Top Manga",
		charactersList: "Most Popular Characters"
	});

	const titlesVerb = Object.freeze({
		  topAnimeList: "anime",
		  topMangaList: "manga",
		  charactersList: "characters"
  	})

	export default {
		name: "PreFooterItem",
		props: {
			listName: {
				type: String,
				required: true
			}
		},
		data: () => {
			return {
				lists: {},
				titles
			}
		},
		created() {
			this.$nextTick(() => {
				this.fetchList(this.listName);
			});

		},
		methods: {
			fetchList(listName) {
				const isFav = listName !== "charactersList" ? "favorite" : "";
				FetchTopList.fetchTopList(titlesVerb[listName],1, isFav).then(response => {
					this.lists[listName] = response
				});
			}
		}
	}

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.PreFooterListItem
		+flex(center, flex-start, column)

		&-title
			color: $color-dark
			font-size: 16px
			text-align: start
			padding: 0 0 8px 0
			width: 100%
			border-bottom: 1px solid rgba($color-dark, 0.2)
			+flex(space-between, center, row)
			&:hover
				color: $color-orange
				.PreFooterList-icon
					color: inherit

		&-content
			margin: 8px 0 0 0
			+flex(center, center, row)

		&-digit
			margin: 0 8px 0 0

		&-link
			color: $color-blue
			&:hover
				text-decoration: underline $color-blue

</style>
