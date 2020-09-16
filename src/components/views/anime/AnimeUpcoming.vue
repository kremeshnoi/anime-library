<template lang='pug'>

	.anime-by-popularity
		.anime-by-popularity__container
			.anime-by-popularity__title
				| Top Airing Anime

			query-content
				cards(v-for='(result, index) in getAnimeUpcoming'
					:key='index'
					:query='result')

</template>

<script>

	import { mapActions, mapGetters } from 'vuex';
	import Cards from '@/components/modules/Cards';
	import QueryContent from '@/components/modules/QueryContent';

	export default {
		name: 'AnimeUpcoming',
		components: {
			Cards,
			QueryContent
		},
		metaInfo: {
			title: 'Otaku Library / Top raited airing anime'
		},
		methods: {
			...mapActions(['loadAnimeUpcoming'])
		},
		computed: {
			...mapGetters(['getAnimeUpcoming'])
		},
		created() {
			this.loadAnimeUpcoming();
		}
	}

</script>

<style lang='sass' scoped>

	@import '../../../assets/styles/utils/vars'
	@import '../../../assets/styles/utils/mixins'
	@import '../../../assets/styles/modules/titles'
	@import '../../../assets/styles/modules/containers'


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
			+mq(phablet-small, max)
				font-size: 20px
				max-width: 235px

</style>
