<template lang="pug">

	.search
		.search__container
			search-bar
			query-content
				cards( :query="result"
						 v-for="result in getAnimeSearched" )

</template>

<script>

	import { mapActions, mapGetters } from "vuex";
	import SearchBar from "@/components/modules/SearchBar.vue";
	import QueryContent from "@/components/modules/QueryContent.vue";
	import Cards from "@/components/modules/Cards.vue";

	export default {
		name: "Search",
		components: {
			SearchBar,
			QueryContent,
			Cards
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

	.search
		width: 100%

		&__container
			@extend .container-default

</style>
