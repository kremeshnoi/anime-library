<template lang='pug'>
.top-airing
  .top-airing__container
    .top-airing__title
      | Airing Anime

    query-content
      cards(
        v-for='(anime) in animeAiring',
        :key='anime.mal_id',
        :cardsData='anime')

      cards(
        v-for='(anime) in list',
        :key='anime.mal_id',
        :cardsData='anime')

      infinite-loading(@infinite='infiniteHandler')

</template>

<script>

  import axios from 'axios';
  import jikanjs from 'jikanjs/lib/jikan';
  import Cards from '@/components/elements/Cards';
  import InfiniteLoading from 'vue-infinite-loading';
  import layoutMiddleware from '@/middleware/layoutMiddleware';
  import QueryContent from '@/components/elements/QueryContent';

export default {
  name: 'TopAiring',
  metaInfo: {
    title: 'Otaku Library - Top airing anime',
  },
  layout: layoutMiddleware,
  components: {
    Cards,
    QueryContent,
    InfiniteLoading
  },
  data() {
    return {
      page: 2,
      list: []
    };
  },
  async asyncData() {
    const animeAiringResponse = await jikanjs.loadTop('anime', 1, 'airing');
    return {
      animeAiring: animeAiringResponse.top,
    };
  },
  methods: {
    infiniteHandler($state) {
      axios.get(`https://api.jikan.moe/v3/top/anime/${ this.page }/airing`)
      .then(({data}) => {
        if (data.top.length) {
          this.page += 1;
          this.list.push(...data.top);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    }
  }
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
