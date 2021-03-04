<template lang="pug">

  main.anime-genre
    .anime-genre__container
      .anime-genre__title(v-if="animeGenre.mal_url")
        | {{ animeGenre.mal_url.name }}

      CardsGrid
        Card(
          :key="anime.mal_id"
          :resultItem="anime"
          v-for="(anime) in animeGenre.anime")

        Card(
          :key="anime.mal_id"
          :resultItem="anime"
          v-for="(anime) in list")

        client-only
          infinite-loading(@infinite="infiniteHandler")

</template>

<script>

  import axios from "axios"
  import jikanjs from "jikanjs/lib/jikan"
  import Card from "@/components/elements/Card"
  import InfiniteLoading from "vue-infinite-loading"
  import CardsGrid from "@/components/grids/CardsGrid"
  import layoutMiddleware from "@/middleware/layoutMiddleware"

  export default {
    name: "AnimeGenre",
    metaInfo: {
      title: "Otaku Library - Explore anime genres",
    },
    layout: layoutMiddleware,
    components: {
      Cards,
      CardsGrid,
      InfiniteLoading
    },
    data() {
      return {
        page: 2,
        list: []
      }
    },
    async asyncData({ params }) {
      const animeGenreResponse = await jikanjs.loadGenre("anime", params.id)
      return {
        animeGenre: animeGenreResponse
      }
    },
    methods: {
      infiniteHandler($state) {
        axios.get(`https://api.jikan.moe/v3/genre/anime/${ $nuxt.$route.params.id }/${ this.page }`)
        .then(({data}) => {
          if (data.anime.length) {
            this.page += 1
            this.list.push(...data.anime)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
      }
    }
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

	.anime-genre
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
