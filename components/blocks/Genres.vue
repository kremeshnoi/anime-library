<template lang='pug'>

  .genres
    .genres__content
      .genres__wrapper(
        v-for='(result, resultIndex) in genres',
        :key='resultIndex')
        h4.genres__title
          | {{ result.title }} Genres

        .genres__anime
          a.genres__item.genres__item_anime(
            v-for='(genre, genreIndex) in result.data.slice(0, 9)',
            :key='genreIndex',
            @click='computeRouteByGenre({ result, genre })')
            img.genres__item-image(:src='genre.img')

            .genres__title-wrapper
              span.genres__item-title
                | {{ genre.title }}

          .genres__anime
            | more

</template>

<script>

  import { mapActions } from 'vuex';
  import { anime, manga } from '@/utils/genres';

  export default {
    name: 'Genres',
    computed: {
      genres() {
        return {
          animeGenres: {
            title: 'Anime',
            type: 'anime',
            data: anime
          },
          mangaGenres: {
            title: 'Manga',
            type: 'manga',
            data: manga
          }
        }
      }
    },
    methods: {
      ...mapActions({
        computeRouteByGenre: 'computeRouteByGenre'
      })
    }
  };

</script>

<style lang='sass' scoped>

  @import '~/assets/styles/utils/vars'
  @import '~/assets/styles/utils/mixins'
  @import '~/assets/styles/modules/titles'
  @import '~/assets/styles/modules/containers'

  .genres
    @extend .container-default
    &__title
      @extend .title-bordered
      text-align: start
    &__content
      display: grid
      grid-gap: 20px
      grid-template-columns: repeat(2, 1fr)
      +mq(tablet, max)
        grid-template-columns: 1fr
    &__anime, &__manga
      display: grid
      grid-template-columns: 1fr 1fr
      grid-gap: 10px
      +mq(phone-wide, max)
        grid-template-columns: 1fr 1fr
    &__item
      font-size: 16px
      width: 100%
      height: 120px
      color: #FFFFFF
      font-weight: 300
      position: relative

    &__item-image
      width: 100%
      height: 100%
      display: block
      &:hover
        opacity: 0.8

    &__title-wrapper
      width: 100%
      padding: 4px 0 4px 0
      position: absolute
      bottom: 0
      background: black
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 50%, rgba(0, 0, 0, 0) 100%)
      box-shadow: 0 8px 7px -7px black
      display: flex
      justify-content: center
      align-items: center
      flex-direction: initial

</style>
