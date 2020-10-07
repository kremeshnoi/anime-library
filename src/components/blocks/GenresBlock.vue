<template lang='pug'>

	.genres-block
		.genres-block__content
			.genres-block__anime-wrapper
				h4.genres-block__title
					| Anime

				.genres-block__anime
					a.genres-block__item.genres-block__item_anime(v-for='(result, index) in sortedAnime[0]'
						@click='computeRouteByGenre(result)')
						| {{ result.title }}
			.genres-block__manga-wrapper
				h4.genres-block__title
					| Manga
				.genres-block__manga


					a.genres-block__item.genres-block__item_manga(v-for='(result, index) in sortedManga[0]'
						@click='computeRouteByGenre(result)')
						| {{ result.title }}

</template>

<script>

	// IMPORTS

	import { mapActions, mapGetters } from 'vuex';

	// COMPONENT OPTIONS

	export default {
		name: 'GenresBlock',
		data: () => {
			return {
				//Hardcode part :c
				//Request with a list of genres will be available in v4-alpha
				animeGenres: [
					{ "id": 1, "title": "Action","type": "anime" },
					{ "id": 2, "title": "Adventure","type": "anime" },
					{ "id": 3, "title": "Cars","type": "anime" },
					{ "id": 4, "title": "Comedy","type": "anime" },
					{ "id": 5, "title": "Dementia","type": "anime" },
					{ "id": 6, "title": "Demons","type": "anime" },
					{ "id": 7, "title": "Mystery","type": "anime" },
					{ "id": 8, "title": "Drama","type": "anime" },
					{ "id": 9, "title": "Ecchi","type": "anime" },
					{ "id": 10, "title": "Fantasy","type": "anime" },
					{ "id": 11, "title": "Game","type": "anime" },
					{ "id": 12, "title": "Hentai","type": "anime" },
					{ "id": 13, "title": "Historical","type": "anime" },
					{ "id": 14, "title": "Horror","type": "anime" },
					{ "id": 15, "title": "Kids","type": "anime" },
					{ "id": 16, "title": "Magic","type": "anime" },
					{ "id": 17, "title": "Martial Arts","type": "anime" },
					{ "id": 18, "title": "Mecha","type": "anime" },
					{ "id": 19, "title": "Music","type": "anime" },
					{ "id": 20, "title": "Parody","type": "anime" },
					{ "id": 21, "title": "Samurai","type": "anime" },
					{ "id": 22, "title": "Romance","type": "anime" },
					{ "id": 23, "title": "School","type": "anime" },
					{ "id": 24, "title": "Sci-Fi","type": "anime" },
					{ "id": 25, "title": "Shoujo","type": "anime" },
					{ "id": 26, "title": "Shoujo Ai","type": "anime" },
					{ "id": 27, "title": "Shounen","type": "anime" },
					{ "id": 28, "title": "Shounen Ai","type": "anime" },
					{ "id": 29, "title": "Space","type": "anime" },
					{ "id": 30, "title": "Sports","type": "anime" },
					{ "id": 31, "title": "Super Power","type": "anime" },
					{ "id": 32, "title": "Vampire","type": "anime" },
					{ "id": 33, "title": "Yaoi","type": "anime" },
					{ "id": 34, "title": "Yuri","type": "anime" },
					{ "id": 35, "title": "Harem","type": "anime" },
					{ "id": 36, "title": "Slice of Life","type": "anime" },
					{ "id": 37, "title": "Supernatural","type": "anime" },
					{ "id": 38, "title": "Military","type": "anime" },
					{ "id": 39, "title": "Police","type": "anime" },
					{ "id": 40, "title": "Psychological","type": "anime" },
					{ "id": 41, "title": "Thriller","type": "anime" },
					{ "id": 42, "title": "Seinen","type": "anime" },
					{ "id": 43, "title": "Josei","type": "anime" }
				],
				mangaGenres: [
					{ "id": 1, "title": "Action","type": "manga" },
					{ "id": 2, "title": "Adventure","type": "manga" },
					{ "id": 3, "title": "Cars","type": "manga" },
					{ "id": 4, "title": "Comedy","type": "manga" },
					{ "id": 5, "title": "Dementia","type": "manga" },
					{ "id": 6, "title": "Demons","type": "manga" },
					{ "id": 7, "title": "Mystery","type": "manga" },
					{ "id": 8, "title": "Drama","type": "manga" },
					{ "id": 9, "title": "Ecchi","type": "manga" },
					{ "id": 10, "title": "Fantasy","type": "manga" },
					{ "id": 11, "title": "Game","type": "manga" },
					{ "id": 12, "title": "Hentai","type": "manga" },
					{ "id": 13, "title": "Historical","type": "manga" },
					{ "id": 14, "title": "Horror","type": "manga" },
					{ "id": 15, "title": "Kids","type": "manga" },
					{ "id": 16, "title": "Magic","type": "manga" },
					{ "id": 17, "title": "Martial Arts","type": "manga" },
					{ "id": 18, "title": "Mecha","type": "manga" },
					{ "id": 19, "title": "Music","type": "manga" },
					{ "id": 20, "title": "Parody","type": "manga" },
					{ "id": 21, "title": "Samurai","type": "manga" },
					{ "id": 22, "title": "Romance","type": "manga" },
					{ "id": 23, "title": "School","type": "manga" },
					{ "id": 24, "title": "Sci-Fi","type": "manga" },
					{ "id": 25, "title": "Shoujo","type": "manga" },
					{ "id": 26, "title": "Shoujo Ai","type": "manga" },
					{ "id": 27, "title": "Shounen","type": "manga" },
					{ "id": 28, "title": "Shounen Ai","type": "manga" },
					{ "id": 29, "title": "Space","type": "manga" },
					{ "id": 30, "title": "Sports","type": "manga" },
					{ "id": 31, "title": "Super Power","type": "manga" },
					{ "id": 32, "title": "Vampire","type": "manga" },
					{ "id": 33, "title": "Yaoi","type": "manga" },
					{ "id": 34, "title": "Yuri","type": "manga" },
					{ "id": 35, "title": "Harem","type": "manga" },
					{ "id": 36, "title": "Slice of Life","type": "manga" },
					{ "id": 37, "title": "Supernatural","type": "manga" },
					{ "id": 38, "title": "Military","type": "manga" },
					{ "id": 39, "title": "Police","type": "manga" },
					{ "id": 40, "title": "Psychological","type": "manga" },
					{ "id": 41, "title": "Thriller","type": "manga" },
					{ "id": 42, "title": "Seinen","type": "manga" },
					{ "id": 43, "title": "Josei","type": "manga" }
				],
				sortedAnime: [],
				sortedManga: []
			}
		},
		async created() {
			await this.randomizeGenres(this.animeGenres);
			await this.randomizeGenres(this.mangaGenres);
		},
		methods: {
			...mapActions(['computeRouteByGenre']),
			randomizeGenres(array) {
				let currentIndex = array.length, temporaryValue, randomIndex;

				while (0 !== currentIndex) {

					randomIndex = Math.floor(Math.random() * currentIndex);
					currentIndex -= 1;

					temporaryValue = array[currentIndex];
					array[currentIndex] = array[randomIndex];
					array[randomIndex] = temporaryValue;
				}

				if(array[0].type === 'anime') {
					this.sortedAnime.push(array.slice(0, 22));
				} else if(array[0].type === 'manga') {
					this.sortedManga.push(array.slice(0, 22));
				}
			}
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

	.genres-block
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
				$repeat: 20
				@for $i from 1 through $repeat
					&:nth-child(#{length($colors)}n+#{$i})
						background: lighten(nth($colors, random(length($colors))), 20%)

				color: $color-white-pure
				&:hover
					opacity: 0.9

</style>
