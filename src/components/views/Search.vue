<template lang="pug">

	.search
		.search__container
			search-bar
			.search__query-content( v-if="getAnimeSearched.length" )
				cards( :query="result"
						 v-for="result in getAnimeSearched" )

</template>

<script>

	import { mapActions, mapGetters } from "vuex";
	import SearchBar from "@/components/modules/SearchBar.vue";
	import Cards from "@/components/modules/Cards.vue";

	export default {
		name: "Search",
		components: {
			Cards,
			SearchBar
		},
		metaInfo: {
			title: "Otaku Library / Search"
		},
		computed: {
			...mapGetters(["getAnimeSearched"])
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/modules/containers.sass"
	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.search
		width: 100%

		&__container
			@extend .container-default

		&__query-content
			display: grid
			grid-template-columns: repeat(5, 1fr)
			justify-content: center
			grid-gap: 20px
			height: 100%
			+mq(desktop, max)
				grid-template-columns: repeat(4, 1fr)
			+mq(tablet-mid, max)
				grid-template-columns: repeat(3, 1fr)
			+mq(tablet, max)
				grid-template-columns: repeat(2, 1fr)
			+mq(phablet-small, max)
				grid-template-columns: repeat(1, 1fr)

</style>
