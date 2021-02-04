<template lang='pug'>

  .anime-genre
    .anime-genre__container
      .anime-genre__title(v-if='animeGenre.mal_url')
        | {{ animeGenre.mal_url.name }}

      query-content
        cards(
          v-for='(anime, animeIndex) in animeGenre.anime',
          :key='animeIndex',
          :cardsData='anime')

</template>

<script>

  import jikanjs from 'jikanjs/lib/jikan';
  import Cards from '@/components/elements/Cards';
  import QueryContent from '@/components/elements/QueryContent';
  import layoutMiddleware from '@/middleware/layoutMiddleware';

  export default {
    name: 'AnimeGenre',
    metaInfo: {
      title: 'Otaku Library - Explore anime genres',
    },
    layout: layoutMiddleware,
    components: {
      Cards,
      QueryContent
    },
    async asyncData({ params }) {
      const animeGenreResponse = await jikanjs.loadGenre('anime', params.id);
      return {
        animeGenre: animeGenreResponse,
      };
    }
  };

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'
	@import '~/assets/styles/modules/containers'

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
