<template lang='pug'>

	.anime-genres
		.anime-genres__container
			.anime-genres__title
				| Anime Genres

			query-content
				a.genres__item(
					v-for='(genre, genreIndex) in genresResult.data',
					:key='genreIndex',
					@click='computeRouteByGenre({ genresResult, genre })'
					@click.middle='computeRouteByGenre({ genresResult, genre, clickType })')
					img.genres__item-image(
						draggable="false" :src='genre.img')

					.genres__title-wrapper
						span.genres__item-title
							| {{ genre.title }}

</template>

<script>

	import { mapActions } from 'vuex';
	import { anime } from '@/utils/genres';
	import Cards from '@/components/elements/Cards';
	import layoutMiddleware from '@/middleware/layoutMiddleware';
	import QueryContent from '@/components/elements/QueryContent';

	export default {
		name: 'AnimeGenres',
		metaInfo: {
			title: 'Otaku Library - Explore anime genres',
		},
		layout: layoutMiddleware,
		components: {
			Cards,
			QueryContent
		},
		data() {
			return {
				clickType: "middle"
			}
		},
		computed: {
			genresResult() {
				return {
						data: anime,
						type: 'anime',
						title: 'Anime',
						link: "anime/genres"
				}
			}
		},
		methods: {
			...mapActions({
				computeRouteByGenre: 'computeRouteByGenre'
			})
		}
	};

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'
	@import '~/assets/styles/modules/containers'

	.query-content
		grid-template-columns: repeat(4, 1fr)

	.anime-genres
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


		.genres
			@extend .container-default
			&__title
				@extend .title-bordered
				+flex(space-between, center, row)
				&:hover
					color: orange
					.top-airing-anime__icon
						color: inherit
			&__item
				width: 100%
				height: 120px
				color: #FFFFFF
				font-size: 16px
				font-weight: 300
				position: relative

			&__item-image
				width: 100%
				height: 100%
				display: block
				&:hover
					opacity: 0.8

			&__title-wrapper
				bottom: 0
				width: 100%
				display: flex
				background: black
				position: absolute
				align-items: center
				padding: 4px 0 4px 0
				justify-content: center
				flex-direction: initial
				background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%)

</style>
