<template lang='pug'>
.top-airing
  .top-airing__container
    .top-airing__title
      | Airing Anime

    query-content
      cards(
        v-for='(result, resultIndex) in animeAiring',
        :key='resultIndex',
        :cardsData='result'
      )
</template>

<script>

import jikanjs from 'jikanjs/lib/jikan';
import Cards from '@/components/elements/Cards';
import QueryContent from '@/components/elements/QueryContent';
import layoutMiddleware from '@/middleware/layoutMiddleware';

export default {
  name: 'TopAiring',
  metaInfo: {
    title: 'Otaku Library - Top airing anime',
  },
  layout: layoutMiddleware,
  components: {
    Cards,
    QueryContent,
  },
  async asyncData() {
    const animeAiringResponse = await jikanjs.loadTop('anime', 1, 'airing');
    return {
      animeAiring: animeAiringResponse.top,
    };
  },
};
</script>

<style lang='sass' scoped>

  @import '~/assets/styles/utils/vars'
  @import '~/assets/styles/utils/mixins'
  @import '~/assets/styles/modules/titles'
  @import '~/assets/styles/modules/containers'

.top-airing
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
