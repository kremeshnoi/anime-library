<template lang="pug">

  .Search
    nav.nav-search
      .nav-wrapper.white.nav-search-wrapper
        form.nav-search-form(v-on:submit.prevent="getResult(query)")
          .input-field.nav-search-field
            input#search.nav-search-input(type="search", v-model="query")
            label.label-icon(for="search")
              i.material-icons.black-text.nav-search-icon search

    section
      div.query-content(v-if="fetchAnime.length")
        .card.query-content-card(v-for="result in fetchAnime")
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


      div.query-content(v-else-if="fetchTop.length")
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
    name: "Search",
    data: ()=> ({
      query: ""
    }),
    metaInfo: {
      title: "Anime Library - Search"
    },
    methods: {
      ...mapActions(["getAnime", "getTop"]),
      getResult(query) {
        this.getAnime(query)
      },
      getTopResult() {
        this.getTop()
      }
    },
    computed: {
      ...mapGetters(["fetchAnime", "fetchTop"])
    },
    mounted() {
      this.getTopResult()
    }
  }

</script>

<style lang="sass" scoped>

  @import "../assets/styles/utils/index"

  .Search
    width: 100%
    padding: 40px
    display: flex
    flex-direction: column
    align-items: center
    justify-content: flex-start

    .nav-search
      width: 70%
      height: 50px
      margin: 100px 0 80px 0
      border-radius: 3px
      +mq(phone, max)
        width: 90%

      &-wrapper
        border-radius: 3px

      &-field
        border-radius: 3px
        background-color: #ececec

      &-input
        border-radius: 3px

      &-icon
        height: 50px
        line-height: 50px

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
