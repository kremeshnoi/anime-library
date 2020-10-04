<template lang='pug'>

	.anime-genre
		.anime-genre__container
			.anime-genre__title(v-if='getAnimeGenre.mal_url')
				| {{ getAnimeGenre.mal_url.name }}

			query-content
				cards(v-for='(result, index) in getAnimeGenre.anime'
					:key='index'
					:query='result')

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import QueryContent from '@/components/modules/QueryContent';

	export default {
		name: 'AnimeGenre',
		components: {
			Cards,
			QueryContent
		},
		computed: {
			...mapGetters(['getAnimeGenre'])
		},
		async created() {
			await this.loadAnimeGenre();
		},
		methods: {
			...mapActions(['loadAnimeGenre'])
		},
		metaInfo: {
			title: 'Otaku Library - Explore anime genres'
		}
}

</script>

<style lang='sass' scoped>

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'


	.anime-genre
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
