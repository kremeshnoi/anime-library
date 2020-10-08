<template lang='pug'>

	.anime-by-popularity
		.anime-by-popularity__container
			.anime-by-popularity__title
				| Upcoming Anime

			query-content
				cards(v-for='(result, index) in getAnimeUpcoming'
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
		name: 'AnimeUpcoming',
		metaInfo: {
			title: 'Otaku Library - Upcoming anime'
		},
		components: {
			Cards,
			QueryContent
		},
		computed: {
			...mapGetters(['getAnimeUpcoming'])
		},
		async created() {
			await this.loadAnimeUpcoming();
		},
		methods: {
			...mapActions(['loadAnimeUpcoming'])
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'


	// ANIME BY POPULARITY STYLES

	.anime-by-popularity
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
