<template lang="pug">

  .anime
    .anime__container
      .related
        .related__title
          | {{ relateName }}
        .related__item
          table.related__table
            tbody.related__tbody
              tr.related__tr(
                :key="dataIndex"
                v-for="(resultItem, dataIndex) in animeById.related[`${ relateName }`]")

                td.related__td
                  a.related__link(
                    @click="computeRoute({ resultItem })"
                    @click.middle="computeRoute({ resultItem, clickType })")
                    | {{ resultItem.name }}

</template>

<script>

  import { mapActions } from "vuex"
  import jikanjs from "jikanjs/lib/jikan"
  import Info from "@/components/elements/Info"
  import layoutMiddleware from "@/middleware/layoutMiddleware"

  export default {
    name: "Anime",
    metaInfo() {
      return {
        title: `Anime - ${ this.animeById.title }`,
      }
    },
    layout: layoutMiddleware,
    components: {
      Info
    },
    data() {
      return {
        clickType: "middle"
      }
    },
    computed: {
      relateName() {
        return this.$nuxt.$route.params.name
      }
    },
    async asyncData({ params }) {
      const animeByIdResponse = await jikanjs.loadAnime(params.id)
      return {
        animeById: animeByIdResponse,
      }
    },
    methods: {
      ...mapActions({
        computeRoute: "computeRoute"
      })
    }
  }

</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"
  @import "~/assets/styles/modules/titles"
  @import "~/assets/styles/modules/dividers"
  @import "~/assets/styles/modules/containers"

  .anime
    width: 100%

    &__container
      display: grid
      row-gap: 40px
      column-gap: 20px
      grid-template-columns: 1fr
      @extend .container-default
      +mq(tablet-mid, max)
        grid-template-columns: 1fr

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
      row-gap: 40px
      grid-area: sub
      column-gap: 20px
      align-content: flex-start
      justify-content: flex-start
      grid-template-columns: minmax(auto, 360px)
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
    justify-content: start
    grid-gap: 10px
    grid-template-rows: auto auto
    grid-template-columns: 100%
    text-align: start
    &__disaster
      text-align: start
      font-size: 30px
    &__title
      padding: 0
      font-weight: 400
      display: flex
      height: auto
      font-size: 20px
      text-transform: none
      flex-direction: column
      align-items: flex-start
      @extend .title-default
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
      height: initial !important
      flex-grow: 0
    &__tab-item
      width: auto !important
      padding: 0 !important
      margin: 0 24px 14px 0
      text-align: start
      line-height: initial
      color: $color-blue-light !important
      &:focus
        background-color: initial !important
      &.active
        background-color: initial !important
        color: $color-orange !important
    &__link
      @extend .title-cut
      max-width: 100%
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
