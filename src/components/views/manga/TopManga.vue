<template lang='pug'>

	.top-manga
		.top-manga__container
			.top-manga__title
				| Top Manga

			query-content
				cards(v-for='(result, index) in getMangaFavorite'
					:key='index'
					:query='result')

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/elements/Cards';
	import QueryContent from '@/components/elements/QueryContent';

	// COMPONENT OPTIONS

	export default {
		name: 'TopManga',
		metaInfo: {
			title: 'Otaku Library – Top raited manga'
		},
		components: {
			Cards,
			QueryContent
		},
		computed: {
			...mapGetters(['getMangaFavorite'])
		},
		created() {
			this.loadMangaFavorite();
		},
		methods: {
			...mapActions(['loadMangaFavorite'])
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'

	// TOP MANGA STYLES

	.top-manga
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

