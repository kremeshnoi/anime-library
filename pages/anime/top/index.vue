<template lang="pug">

  .top-anime
    .top-anime__container
      .top-anime__title
        | Viewers" Favorite Anime

      query-content
        cards(
          :key="anime.mal_id"
          :resultItem="anime"
          v-for="(anime) in topAnime")

        cards(
          :key="anime.mal_id"
          :resultItem="anime"
          v-for="(anime) in list")

        infinite-loading(@infinite="infiniteHandler")

</template>

<script>

  import axios from "axios"
  import jikanjs from "jikanjs/lib/jikan"
  import Cards from "@/components/elements/Cards"
  import InfiniteLoading from "vue-infinite-loading"
  import layoutMiddleware from "@/middleware/layoutMiddleware"
  import QueryContent from "@/components/elements/QueryContent"

  export default {
    name: "TopAnime",
    metaInfo: {
      title: "Otaku Library - Top rated anime"
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
      }
    },
    async asyncData() {
      const topAnimeResponse = await jikanjs.loadTop("anime", 1, "favorite")
      return {
        topAnime: topAnimeResponse.top
      }
    },
    methods: {
      infiniteHandler($state) {
        axios.get(`https://api.jikan.moe/v3/top/anime/${ this.page }/favorite`)
        .then(({data}) => {
          if (data.top.length) {
            this.page += 1
            this.list.push(...data.top)
            $state.loaded()
          } else {
            $state.complete()
          }
        })
      }
    },
    fetchDelay: 10000
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"
	@import "~/assets/styles/modules/titles"
	@import "~/assets/styles/modules/containers"

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
