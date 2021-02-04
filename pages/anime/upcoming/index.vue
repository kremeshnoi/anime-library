<template lang='pug'>

  .anime-by-popularity
    .anime-by-popularity__container
      .anime-by-popularity__title
        | Upcoming Anime

      query-content
        cards(
          v-for='(anime, animeIndex) in animeUpcoming',
          :key='animeIndex',
          :cardsData='anime')

</template>

<script>

  import jikanjs from 'jikanjs/lib/jikan';
  import Cards from '@/components/elements/Cards';
  import QueryContent from '@/components/elements/QueryContent';
  import layoutMiddleware from '@/middleware/layoutMiddleware';

  export default {
    name: 'AnimeUpcoming',
    metaInfo: {
      title: 'Otaku Library - Upcoming anime',
    },
    layout: layoutMiddleware,
    components: {
      Cards,
      QueryContent,
    },
    async asyncData() {
      const animeUpcomingResponse = await jikanjs.loadTop('anime', 1, 'upcoming');
      return {
        animeUpcoming: animeUpcomingResponse.top,
      };
    }
  };

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'
	@import '~/assets/styles/modules/containers'

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
