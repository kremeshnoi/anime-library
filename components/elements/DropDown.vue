<template lang='pug'>

  #dropdown.dropdown
    .dropdown__search-type(v-if='!searchedData.length && !loaderData')
      ul.dropdown__list
        button.dropdown__list-item(
          @click='changeType(`anime`)',
          :class='{ active: activeEl === `anime` }'
        )
          .dropdown__icon.material-icons video_library
          | Anime

        button.dropdown__list-item(
          @click='changeType(`manga`)',
          :class='{ active: activeEl === `manga` }'
        )
          .dropdown__icon.material-icons collections_bookmark
          | Manga

    .dropdown__content(v-else)
      .loader(v-if='loaderData')
        | Loading...

        .loader__progress.progress
          .indeterminate

      .cards(
        v-if='!loaderData',
        v-for='(result, resultIndex) in searchedData',
        :key='resultIndex',
        @click='computeRoute(result)'
      )
        .cards__wrapper
          img.cards__image(draggable="false" :src='result.image_url')

          ul.cards__description
            li.cards__title
              | {{ result.title }}

            li.cards__value
              span.info__list-key
                | Type:
              | &nbsp;
              span.info__list-value(v-if='result.type && result.start_date')
                | {{ result.type }} / {{ result.start_date.substring(0, 4) }}

              span.info__list-value(v-else-if='result.type')
                | {{ result.type }} / Unknown

              span.info__list-value(v-else)
                | {{ result.type }}

            li.cards__value
              span.info__list-key
                | Score:
              | &nbsp;
              span.info__list-value(v-if='result.score')
                | {{ result.score }}

              span.info__list-value(v-else)
                | Uknown

    .overlay

</template>

<script>

  import { mapActions } from 'vuex';

  export default {
    name: 'DropDown',
    props: ['searchedData', 'loaderData', 'type'],
    computed: {
      activeEl: {
        set() {},
        get() {
          return this.type === 'anime' ? 'anime' : 'manga';
        }
      }
    },
    methods: {
      ...mapActions({
        computeRoute: 'computeRoute',
      }),
      changeType(el) {
        this.activeEl = el;
        this.$emit('changeType', el);
      }
    }
  };

</script>

<style lang='sass' scoped>

    @import '~/assets/styles/utils/vars'
    @import '~/assets/styles/utils/mixins'

    .dropdown
      top: 56px
      width: 100%
      display: none
      position: absolute
      flex-direction: column
      align-items: flex-start
      justify-content: space-between
      background-color: $color-white-pure
      z-index: 99
      border-bottom-left-radius: 3px
      border-bottom-right-radius: 3px
      &_is-shown
        display: flex
      &__content
        background-size: cover
        z-index: 99
        width: 100%
        height: 61vh
        overflow-y: scroll
      &__search-type
        z-index: 99
        background-color: white
        width: 100%
      &__list
        width: 100%
        height: 100%
        +flex(flex-start, flex-start, column)
      &__list-item
        text-align: start
        color: $color-black
        width: 100%
        padding: 20px
        transition: 0s
        cursor: pointer
        transition: 0.4s ease
        border-bottom: 1px solid $color-grey-light
        background-color: $color-white-pure
        +flex(flex-start, center, row)
        &:hover
          .dropdown__icon
            color: $color-orange
      &__icon
        margin: 0 14px 0 0
      .cards
        padding: 10px 0 10px 10px
        width: 100%
        cursor: pointer
        transition: 0.4s ease
        border-bottom: 1px solid $color-grey-light
        background-color: $color-white-pure
        &:hover
          border-bottom: 1px solid $color-blue
        &__wrapper
          +flex(flex-start, initial, row)
          +mq(phone, max)
            flex-direction: column
        &__image
          margin: 0 20px 0 0
          height: 125px
          width: 84px
          display: block
          background-color: $color-blue-light
          +mq(phone, max)
            margin: 0 0 10px 0
        &__value
          line-height: 30px
          text-align: start
        &__title
          color: $color-blue
          text-align: start
          font-weight: 700
          font-size: 16px
          line-height: 30px
        &__description
          color: $color-black
          display: flex
          flex-direction: column
          align-items: flex-start
          +mq(phone, max)
            max-width: 90%

    .overlay
      z-index: 1
      top: 58px
      left: 0
      position: fixed
      width: 100%
      height: 100%
      background-color: rgba(0, 0, 0, 0.6)

    .loader
      color: $color-black
      z-index: 99
      background-color: white
      width: 100%
      height: 100%
      font-size: 20px
      +flex(center, center, column)
      &__progress
        position: absolute
        top: 0
        left: 0
        margin: 0
    .active
      .dropdown__icon
        color: $color-orange

</style>
