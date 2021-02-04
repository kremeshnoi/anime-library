<template lang='pug'>

  .manga-genre
    .manga-genre__container
      .manga-genre__title(
        v-if='mangaGenre.mal_url'
        )
        | {{ mangaGenre.mal_url.name }}

      query-content
        cards(
          v-for='(result, resultIndex) in mangaGenre.manga',
          :key='resultIndex',
          :cardsData='result'
          )

</template>

<script>

  import jikanjs from 'jikanjs/lib/jikan';
  import Cards from '@/components/elements/Cards';
  import layoutMiddleware from '@/middleware/layoutMiddleware';
  import QueryContent from '@/components/elements/QueryContent';

  export default {
    name: 'MangaGenre',
    metaInfo: {
      title: 'Otaku Library - Explore manga genres'
    },
    layout: layoutMiddleware,
    components: {
      Cards,
      QueryContent,
    },
    async asyncData({ params }) {
      const mangaGenreResponse = await jikanjs.loadGenre('manga', params.id);
      return {
        mangaGenre: mangaGenreResponse,
      };
    }
  };

</script>

<style lang='sass' scoped>

	@import '~/assets/styles/utils/vars'
	@import '~/assets/styles/utils/mixins'
	@import '~/assets/styles/modules/titles'
	@import '~/assets/styles/modules/containers'

	.manga-genre
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
