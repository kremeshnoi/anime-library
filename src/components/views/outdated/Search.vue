<template lang='pug'>

	.search
		.search__container
			search-bar
			query-content
				cards(:query='result'
					v-for='result in getAnimeSearched')

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/elements/Cards';
	import SearchBar from '@/components/elements/SearchBar';
	import QueryContent from '@/components/elements/QueryContent';

	// COMPONENT OPTIONS

	export default {
		name: 'Search',
		metaInfo: {
			title: 'Otaku Library - Search page'
		},
		components: {
			Cards,
			SearchBar,
			QueryContent
		},
		computed: {
			...mapGetters(['getAnimeSearched'])
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../../assets/styles/modules/containers'

	// SEARCH STYLES

	.search
		width: 100%

		&__container
			@extend .container-default

</style>
