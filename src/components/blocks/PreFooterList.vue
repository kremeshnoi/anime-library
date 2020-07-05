<template lang="pug">

	.PreFooterList
		.PreFooterList-container
			template(v-for="(listName, index) in listNames")
				PreFooterItem(:listName="listName" :key="index")

</template>

<script>

	import PreFooterItem from "@/components/modules/PreFooterItem";

	export default {
		name: "PreFooterList",
		data: () => {
			return {
				listNames: [ "topAnimeList", "topMangaList", "charactersList"]
			}
		},
		components: {
			PreFooterItem
		}
	}


</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

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
