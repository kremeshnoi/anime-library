<template lang='pug'>

	.manga-genre
		.manga-genre__container
			.manga-genre__title(v-if='getMangaGenre.mal_url')
				| {{ getMangaGenre.mal_url.name }}

			query-content
				cards(v-for='(result, index) in getMangaGenre.manga'
				:key='index'
				:cardsData='result')

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/elements/Cards';
	import QueryContent from '@/components/elements/QueryContent';

	// COMPONENT OPTIONS

	export default {
		name: 'MangaGenre',
		metaInfo: {
			title: 'Otaku Library - Explore manga genres'
		},
		components: {
			Cards,
			QueryContent
		},
		computed: {
			...mapGetters(['getMangaGenre'])
		},
		async created() {
			await this.loadMangaGenre();
		},
		methods: {
			...mapActions(['loadMangaGenre']),
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'

	// MANGA GENRES STYLES

	.manga-genre
		&__container
			@extend .container-default

		&__title
			color: $color-black
			width: 100%
			font-size: 16px
			font-weight: 700
			text-transform: uppercase
			margin: 0 0 20px 0
			text-align: start
			@extend .title-bordered



</style>
