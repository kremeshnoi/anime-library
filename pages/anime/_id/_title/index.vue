<template lang="pug">

  .anime
    .anime__container
      h1.anime__title
        | {{ animeById.title }}
        span.divider_is-hidden
        | {{ animeById.title_japanese }}

      .anime__main-content
        .anime__cover-container
          img.anime__cover(:src="animeById.image_url" alt="anime cover")
          Select.anime__input-field(
            v-if="animeById.type"
            :type="animeById.type"
            :wholeResult="animeById")

        Info.anime__info(:infoData="animeById" title_type="anime")

      .anime__sub-content
        Score(:score="animeById.score")

        Studios(:studios="animeById.studios" source_type="anime")

      //- InFavorites

      Description.anime__description(:descriptionData="animeById.synopsis")

      Recommendations.anime__recommendations(:recommendationsData="animeRecommendationsById.recommendations")

      //- Comments.anime__comments

</template>

<script>

  import jikanjs from "jikanjs/lib/jikan"
  import layout from "@/middleware/layout"
  import Info from "@/components/blocks/Info"
  import Score from "@/components/blocks/Score"
  import Select from "@/components/elements/Select"
  import Studios from "@/components/blocks/Studios"
  import Comments from "@/components/blocks/Comments"
  import Description from "@/components/blocks/Description"
  import InFavorites from "@/components/blocks/InFavorites"
  import Recommendations from "@/components/blocks/Recommendations"

  export default {
    name: "Anime",
    metaInfo() {
      return {
        title: `Anime - ${ this.animeById.title }`
      }
    },
    layout: layout,
    components: {
      Info,
      Score,
      Select,
      Studios,
      Comments,
      Description,
      InFavorites,
      Recommendations
    },
    async asyncData({ params }) {
      const animeByIdResponse = await jikanjs.loadAnime(params.id)
      const animeRecommendationsByIdResponse = await jikanjs.loadAnime(params.id, "recommendations")
      return {
        animeById: animeByIdResponse,
        animeRecommendationsById: animeRecommendationsByIdResponse,
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"
  @import "~/assets/styles/modules/titles"
  @import "~/assets/styles/modules/shadow"
  @import "~/assets/styles/modules/dividers"
  @import "~/assets/styles/modules/containers"

  .anime
    width: 100%
    display: flex
    justify-content: flex-start
    @extend .container

    &__container
      display: grid
      row-gap: 40px
      column-gap: 40px

      grid-template-columns: minmax(auto, 520px) minmax(auto, 310px) minmax(auto, 310px)
      grid-template-areas: "title title title" "main sub in-favorites" "description description none" "recommendations recommendations none" "comments comments none"
      +mq(tablet-middle, max)
        grid-template-columns: 1fr
        grid-template-areas: "title" "main" "sub" "description" "recommendations" "comments"

    &__main-content
      display: grid
      grid-area: main
      column-gap: 40px
      align-content: start
      justify-content: start
      grid-template-columns: minmax(auto, 200px) minmax(auto, 300px)
      grid-template-areas: "title title" "cover info"
      +mq(phablet, max)
        grid-template-areas: "title" "cover" "info"

    &__sub-content
      display: grid
      row-gap: 40px
      grid-area: sub
      column-gap: 40px
      align-content: flex-start
      justify-content: flex-start
      grid-template-columns: minmax(auto, 380px)
      +mq(tablet-middle, max)
        justify-content: flex-start

    &__cover-container
      display: grid
      grid-area: cover
      justify-content: flex-start

    &__cover
      width: 100%

    &__title
      font-size: 20px
      max-width: 460px
      grid-area: title
      text-align: start

    &__input-field
      margin: 0
      max-width: 220px

</style>
