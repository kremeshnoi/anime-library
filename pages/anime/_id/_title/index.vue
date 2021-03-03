<template lang='pug'>

  .anime
    .anime__container
      .anime__main-content
        h1.anime__title
          | {{ animeById.title }}
          .divider-hidden
          | {{ animeById.title_japanese }}

        .anime__cover-container
          img.anime__cover(:src='animeById.image_url')

          select-options.anime__input-field(
            v-if='animeById.type'
            :type='animeById.type'
            :wholeResult='animeById')

        info.anime__info(:infoData='animeById')

      .anime__sub-content
        trailer.anime__trailer(:trailerData='animeById.trailer_url')

        related.anime__related(
          :wholeData='animeById'
          :relatedData='animeById.related')

      description.anime__description(:descriptionData='animeById.synopsis')

      recommendations.anime__recommendations(:recommendationsData='animeRecommendationsById.recommendations')

</template>

<script>

  import jikanjs from 'jikanjs/lib/jikan'
  import Info from '@/components/elements/Info'
  import Related from '@/components/elements/Related'
  import Trailer from '@/components/elements/Trailer'
  import Description from '@/components/elements/Description'
  import layoutMiddleware from '@/middleware/layoutMiddleware'
  import SelectOptions from '@/components/elements/SelectOptions'
  import Recommendations from '@/components/elements/Recommendations'

  export default {
    name: 'Anime',
    metaInfo() {
      return {
        title: `Anime - ${ this.animeById.title }`
      }
    },
    layout: layoutMiddleware,
    components: {
      Info,
      Related,
      Trailer,
      Description,
      SelectOptions,
      Recommendations
    },
    async asyncData({ params }) {
      const animeByIdResponse = await jikanjs.loadAnime(params.id)
      const animeRecommendationsByIdResponse = await jikanjs.loadAnime(params.id, 'recommendations')
      return {
        animeById: animeByIdResponse,
        animeRecommendationsById: animeRecommendationsByIdResponse,
      }
    },
    mounted() {
      const modal = document.querySelectorAll('.modal')
      const modalInstance = M.Modal.init(modal)
      if (Object.keys(this.animeById.related).length > 0) {
        const tabs = document.querySelectorAll('.tabs')
        const instanceTabs = M.Tabs.init(tabs)
      }
    }
  }

</script>

<style lang='sass' scoped>

  @import '~/assets/styles/utils/vars'
  @import '~/assets/styles/utils/mixins'
  @import '~/assets/styles/modules/titles'
  @import '~/assets/styles/modules/dividers'
  @import '~/assets/styles/modules/containers'

  .anime
    width: 100%

    &__container
      display: grid
      column-gap: 20px
      row-gap: 40px
      grid-template-columns: 1fr 1fr
      grid-template-areas: 'main sub' 'description description' 'recommendations recommendations'
      @extend .container-default
      +mq(tablet-mid, max)
        grid-template-columns: 1fr
        grid-template-areas: 'main' 'sub' 'description' 'recommendations'

    &__main-content
      grid-area: main
      display: grid
      justify-content: start
      grid-template-areas: 'title title' 'cover info'
      grid-gap: 20px
      align-content: start
      grid-template-rows: 50 auto
      +mq(phablet, max)
        grid-template-rows: auto
        grid-template-areas: 'title' 'cover' 'info'

    &__sub-content
      grid-area: sub
      display: grid
      column-gap: 20px
      row-gap: 40px
      justify-content: flex-start
      align-content: flex-start
      grid-template-columns: minmax(auto, 360px)
      +mq(tablet-mid, max)
        justify-content: flex-start

    &__cover-container
      grid-area: cover
      display: grid
      justify-content: flex-start
      row-gap: 20px
      grid-template-rows: min-content

    &__title
      font-size: 20px
      max-width: 460px
      grid-area: title
      text-align: start
      -webkit-line-clamp: 2
      @extend .title-vertical-cut

    &__input-field
      margin: 0
      max-width: 220px

</style>
