<template lang="pug">

  .Home
    h1.Home-title.blue-text Airing Anime

    div.query-content(v-if="fetchTop.length")
      .card.query-content-card(v-for="result in fetchTop")
        .card-image.query-content-card-wrapper
          img.activator.query-content-card-image(v-bind:src="result.image_url")

        .card-content.query-content-card-outer
          span.card-title.activator.query-content-card-title {{result.title}}

        .card-reveal.query-content-card-inner
          span.card-title.query-content-card-inner-title.black-text {{result.title}}
          p.black-text.query-content-card-inner-text Type : {{result.type}}
          p.black-text.query-content-card-inner-text Score : {{result.score}}
          .input-field
            select.browser-default.query-content-card-inner-select
              option(value="") Status
              option(value="1") Plan to watch
              option(value="2") Watching
              option(value="3") Completed
              option(value="4") Dropped
            label
          p.query-content-card-inner-text
            a.blue-text(href="") More info

</template>

<script>

  import {mapActions, mapGetters} from "vuex"

  export default {
    name: "Home",
    components: {

    },
    metaInfo: {
      title: "Anime Library - Homepage"
    },
    methods: {
      ...mapActions(["getTop"]),
      getTopResult(type, page, subtype) {
        this.getTop({ type, page, subtype })
      }
    },
    computed: {
      ...mapGetters(["fetchTop"])
    },
    mounted() {
      this.getTopResult("anime", 1,"airing")
    }
  };

</script>

<style lang="sass" scoped>

  .Home
    width: 100%
    padding: 0 20px 54px

    &-title
      font-size: 36px
      margin: 108px 0 54px
      color: #1F1F23 !important

    .query-content
      display: grid
      grid-template-columns: repeat(auto-fill, 228px)
      justify-content: center
      grid-gap: 20px

      &-card
        margin: 0

        &-wrapper
          height: 84%
          cursor: pointer
          padding: 16px 0 0 0

        &-title
          text-overflow: ellipsis
          overflow: hidden
          width: 160px
          display: inline-block
          white-space: nowrap
          margin: 0
          font-size: 16px

        &-image
          height: 100%
          max-height: 280px
          object-fit: contain

        &-outer
          display: flex
          justify-content: center
          align-items: center
          padding: 10px

        &-inner
          &-title
            font-size: 16px

          &-select
            border: none
            padding: 0
            outline: none

          &-text
            text-align: start

            &:first-of-type
              margin: 30px 0 0 0

</style>
