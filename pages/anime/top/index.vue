<template lang='pug'>

  .top-anime
    .top-anime__container
      .top-anime__title
        | Viewers' Favorite Anime

      query-content(v-if='topAnime')
        cards(
          v-for='(anime, animeIndex) in topAnime',
          :key='animeIndex',
          :cardsData='anime')

</template>

<script>

  import jikanjs from 'jikanjs/lib/jikan';
  import Cards from '@/components/elements/Cards';
  import QueryContent from '@/components/elements/QueryContent';
  import layoutMiddleware from '@/middleware/layoutMiddleware';

  export default {
    name: 'TopAnime',
    metaInfo: {
      title: 'Otaku Library - Top rated anime'
    },
    layout: layoutMiddleware,
    components: {
      Cards,
      QueryContent
    },
    async asyncData() {
      const topAnimeResponse = await jikanjs.loadTop('anime', 1, 'favorite');
      return {
        topAnime: topAnimeResponse.top,
      };
    }
  };

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'
	@import '~/assets/styles/modules/containers'

	.top-anime
		&__container
			@extend .container-default

		&__title
			width: 100%
			font-size: 16px
			font-weight: 700
			text-align: start
			margin: 0 0 20px 0
			color: $color-black
			@extend .title-bordered
			text-transform: uppercase

</style>
