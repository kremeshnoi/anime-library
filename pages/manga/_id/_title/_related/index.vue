<template lang='pug'>

  .manga
    .manga__container
      .manga__main-content
        h1.manga__title
          | {{ mangaById.title }}
          .divider-hidden
          | {{ mangaById.title_japanese }}

        .manga__cover-container
          img.manga__cover(
            draggable="false"
            :src='mangaById.image_url')

        info.manga__info(
          :infoData='mangaById')

      .manga__sub-content
        .related
          .related__title
            | {{ relateName }}
          .related__item
            table.related__table.striped
              tbody.related__tbody
                tr.related__tr(
                  v-for='(data, dataIndex) in mangaById.related[`${ relateName }`]',
                  :key='dataIndex'
                )

                  td.related__td
                    a.related__link(@click='computeRoute(data)')
                      | {{ data.name }}

</template>

<script>

  import { mapActions } from 'vuex';
  import jikanjs from 'jikanjs/lib/jikan';
  import Info from '@/components/elements/Info';
  import layoutMiddleware from '@/middleware/layoutMiddleware';

  export default {
    name: 'MangaRelated',
    metaInfo() {
      return {
        title: `Manga - ${ this.mangaById.title }`,
      };
    },
    layout: layoutMiddleware,
    components: {
      Info
    },
    computed: {
      relateName() {
        return this.$nuxt.$route.params.name
      }
    },
    async asyncData({ params }) {
      const mangaByIdResponse = await jikanjs.loadManga(params.id);
      return {
        mangaById: mangaByIdResponse
      };
    },
    methods: {
      ...mapActions({
        computeRoute: 'computeRoute'
      })
    },
  };

</script>

<style lang='sass' scoped>

  @import '~/assets/styles/utils/vars'
  @import '~/assets/styles/utils/mixins'
  @import '~/assets/styles/modules/titles'
  @import '~/assets/styles/modules/dividers'
  @import '~/assets/styles/modules/containers'

  .manga
    width: 100%

    &__container
      display: grid
      row-gap: 40px
      column-gap: 20px
      grid-template-columns: 1fr 1fr
      grid-template-areas: 'main sub'
      @extend .container-default
      +mq(tablet-mid, max)
        grid-template-columns: 1fr
        grid-template-areas: 'main' 'sub'
    &__main-content
      display: grid
      grid-gap: 20px
      grid-area: main
      align-content: start
      justify-content: start
      grid-template-rows: 50 auto
      grid-template-areas: 'title title' 'cover info'
      +mq(phablet, max)
        grid-template-rows: auto
        grid-template-areas: 'title' 'cover' 'info'

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
    grid-gap: 20px
    grid-template-rows: 50px auto
    grid-template-columns: 100%
    text-align: start
    &__disaster
      text-align: start
      font-size: 30px
    &__title
      display: flex
      align-items: center
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
