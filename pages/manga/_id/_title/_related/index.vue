<template lang="pug">

  main.manga
    .manga__container
      .related
        .related__title
          | {{ $formatRelatedTitle(title) }}
        .related__item
          table.related__table
            tbody.related__tbody
              tr.related__tr(
                :key="dataIndex"
                v-for="(resultItem, dataIndex) in mangaById.related[`${ $formatRelatedTitle(title) }`]")
                td.related__td
                  nuxt-link.related__link(:to="{ name: `${ type }-id-title`, params: { id: resultItem.mal_id, title: $formatRouteTitle(resultItem.name) } }")
                    | {{ resultItem.name }}

</template>

<script>

  import jikanjs from "jikanjs/lib/jikan"
  import layoutMiddleware from "@/middleware/layoutMiddleware"

  export default {
    name: "MangaRelated",
    metaInfo() {
      return {
        title: `Manga - ${ this.mangaById.title }`
      }
    },
    layout: layoutMiddleware,
    async asyncData({ params }) {
      const mangaByIdResponse = await jikanjs.loadManga(params.id)
      return {
        mangaById: mangaByIdResponse
      }
    },
    computed: {
      type() {
        return this.$nuxt.$route.query.type
      },
      title() {
        return this.$nuxt.$route.params.related
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"
  @import "~/assets/styles/modules/titles"
  @import "~/assets/styles/modules/dividers"
  @import "~/assets/styles/modules/containers"

  .manga
    width: 100%

    &__container
      display: grid
      row-gap: 20px
      column-gap: 20px
      grid-template-columns: 1fr
      grid-template-areas: "main"
      @extend .container-default
      +mq(tablet-mid, max)
        grid-template-columns: 1fr
        grid-template-areas: "main"

    &__main-content
      display: grid
      grid-gap: 20px
      grid-area: main
      align-content: start
      justify-content: start
      grid-template-rows: 50 auto
      grid-template-areas: "title title" "cover info"
      +mq(phablet, max)
        grid-template-rows: auto
        grid-template-areas: "title" "cover" "info"

    &__sub-content
      display: grid
      row-gap: 20px
      grid-area: sub
      column-gap: 20px
      align-content: flex-start
      justify-content: flex-start
      grid-template-columns: minmax(auto, 330px)
      +mq(tablet-mid, max)
        justify-content: flex-start

    &__cover-container
      display: grid
      row-gap: 20px
      grid-area: cover
      justify-content: flex-start

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

  .related
    display: grid
    grid-gap: 10px
    text-align: start
    justify-content: start
    grid-template-columns: 100%
    grid-template-rows: auto auto

    &__disaster
      font-size: 30px
      text-align: start

    &__title
      padding: 0
      height: auto
      display: flex
      font-size: 20px
      font-weight: 400
      text-transform: none
      flex-direction: column
      @extend .title-default
      align-items: flex-start

    &__tr
      display: block
      position: relative

    &__tabs
      display: flex
      flex-wrap: wrap
      overflow-x: initial
      overflow-y: initial
      height: min-content

    &__tab
      flex-grow: 0
      height: initial !important

    &__tab-item
      text-align: start
      line-height: initial
      padding: 0 !important
      margin: 0 24px 14px 0
      width: auto !important
      color: $color-blue-light !important
      &:focus
        background-color: initial !important
      &.active
        background-color: initial !important
        color: $color-orange !important

    &__link
      max-width: 100%
      @extend .title-cut
      color: $color-grey-dark
      +mq(phone-wide, max)
        max-width: 250px
      &:hover
        text-decoration: underline
      &_more
        position: absolute
        color: $color-blue-light
        right: 0
        width: auto
        bottom: -30px

</style>
