<template lang='pug'>

  .top-manga
    .top-manga__container
      .top-manga__title
        | Viewers' Favorite Manga

      query-content
        cards(
          v-for='(manga, mangaIndex) in topManga',
          :key='mangaIndex',
          :cardsData='manga')

</template>

<script>

  import jikanjs from 'jikanjs/lib/jikan';
  import Cards from '@/components/elements/Cards';
  import layoutMiddleware from '@/middleware/layoutMiddleware';
  import QueryContent from '@/components/elements/QueryContent';

  export default {
    name: 'TopManga',
    metaInfo: {
      title: 'Otaku Library – Top rated manga'
    },
    layout: layoutMiddleware,
    components: {
      Cards,
      QueryContent,
    },
    async asyncData() {
      const topMangaResponse = await jikanjs.loadTop('manga', 1, 'favorite');
      return {
        topManga: topMangaResponse.top,
      };
    }
  };

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'
	@import '~/assets/styles/modules/containers'

	.top-manga
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

