<template lang='pug'>

	.search
		.search__container
			search-bar
			query-content
				cards(:query='result'
					v-for='result in getAnimeSearched')

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import SearchBar from '@/components/modules/SearchBar';
	import QueryContent from '@/components/modules/QueryContent';

	export default {
		name: 'Search',
		components: {
			Cards,
			SearchBar,
			QueryContent
		},
		computed: {
			...mapGetters(['getAnimeSearched'])
		},
		metaInfo: {
			title: 'Otaku Library - Search page'
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../../assets/styles/modules/containers'

	.search
		width: 100%

		&__container
			@extend .container-default

</style>
