<template lang='pug'>

	.genres
		.genres__content
			.genres__wrapper(v-for='(result, index) in genres'
			:key='index')
				h4.genres__title
					| {{ result.title }}

				.genres__anime
					a.genres__item.genres__item_anime(v-for='(genre, genre_index) in result.data'
					:key='genre_index' @click='computeRouteByGenre({ result, genre })')
						| {{ genre.title }}

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';
	import Genres from '../../utils/genres'

	// COMPONENT OPTIONS

	export default {
		name: 'Genres',
		computed: {
			genres() {
				const genres = {
					anime_genres: {
						title: 'Anime',
						type: 'anime',
						data: Genres.data
					},
					manga_genres: {
						title: 'Manga',
						type: 'manga',
						data: Genres.data
					}
				};

				return genres
			}
		},
		methods: {
			...mapActions(['computeRouteByGenre'])
		}
	}

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'
	@import '../../assets/styles/modules/titles'
	@import '../../assets/styles/modules/containers'

	// GENRES BLOCK STYLES

	.genres
		@extend .container-default

		&__title
			@extend .title-bordered
			border-left: 4px solid $color-orange
			text-align: start

		&__content
			display: grid
			grid-gap: 20px
			grid-template-columns: repeat(2, 1fr)
			+mq(tablet, max)
				grid-template-columns: 1fr

		&__anime, &__manga
			display: flex
			flex-wrap: wrap
			+mq(phone-wide, max)
				grid-template-columns: 1fr 1fr

		&__item
			font-size: 16px
			padding: 10px
			margin: 10px 10px 10px 0
			width: max-content
			border-radius: 3px

			&_anime, &_manga
				$colors: $color-blue, $color-blue-light, $color-blue-dark
				$repeat: 50
				@for $i from 1 through $repeat
					&:nth-child(#{length($colors)}n+#{$i})
						background: lighten(nth($colors, random(length($colors))), 20%)

				color: $color-white-pure
				&:hover
					opacity: 0.9

</style>
