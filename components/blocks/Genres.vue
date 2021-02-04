<template lang='pug'>

  .genres
    .genres__content
      .genres__wrapper(
        v-for='(result, resultIndex) in genres',
        :key='resultIndex')
        h4.genres__title
          | {{ result.title }} Genres

        .genres__anime
          a.genres__item.genres__item_anime(
            v-for='(genre, genreIndex) in result.data',
            :key='genreIndex',
            @click='computeRouteByGenre({ result, genre })')
            | {{ genre.title }}

</template>

<script>

  import { mapActions } from 'vuex';
  import Genres from '@/utils/genres';

  export default {
    name: 'Genres',
    computed: {
      genres() {
        return {
          animeGenres: {
            title: 'Anime',
            type: 'anime',
            data: Genres.data,
          },
          mangaGenres: {
            title: 'Manga',
            type: 'manga',
            data: Genres.data,
          }
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

	.genres
		@extend .container-default
		&__title
			@extend .title-bordered
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
