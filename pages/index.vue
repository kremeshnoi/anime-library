<template lang='pug'>

  .home
    hero

    cards-block(
      v-if='animeAiring',
      :cardsBlockData='animeAiring')

    //- genres

    cards-block(
      v-if='animeUpcoming',
      :cardsBlockData='animeUpcoming')

</template>

<script>

  import jikanjs from 'jikanjs';
  import Hero from '@/components/blocks/Hero';
  import Genres from '@/components/blocks/Genres';
  import CardsBlock from '@/components/blocks/CardsBlock';
  import layoutMiddleware from '@/middleware/layoutMiddleware';

  export default {
    name: 'Home',
    layout: layoutMiddleware,
    metaInfo: {
      title: 'Otaku Library - Organize your own anime and manga list'
    },
    components: {
      Hero,
      Genres,
      CardsBlock
    },
    async asyncData() {
      const animeAiringResponse = await jikanjs.loadTop('anime', 1, 'airing');
      const animeUpcomingResponse = await jikanjs.loadTop('anime', 1, 'upcoming');
      return {
        animeAiring: {
          title: 'AIRING ANIME',
          link: '/anime/airing',
          data: animeAiringResponse.top
        },
        animeUpcoming: {
          title: 'UPCOMING ANIME',
          link: '/anime/upcoming',
          data: animeUpcomingResponse.top
        }
      };
    }
  };

</script>

<style lang='sass' scoped>

  .home
    width: 100%

</style>
