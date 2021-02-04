<template lang='pug'>

  .home
    hero(v-if='user[0] === null')

    cards-block(
      v-if='animeAiring',
      :cardsBlockData='animeAiring')

    cards-block(
      v-if='animeUpcoming',
      :cardsBlockData='animeUpcoming')

    genres

</template>

<script>

  import jikanjs from 'jikanjs'
  import { mapActions } from 'vuex';
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
    data() {
      return {
        user: []
      };
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
    },
    async created() {
      await this.getUid().then((result) => this.user.push(result));
    },
    methods: {
      ...mapActions({
        getUid: 'auth/getUid'
      })
    }
  };

</script>

<style lang='sass' scoped>

  .home
    width: 100%

</style>
