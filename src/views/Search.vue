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
    div.query-content(v-if="getAnime.length")
      .card(v-for="result in getAnime")
        .card-image.waves-effect.waves-block.waves-light
          img.activator(v-bind:src="result")
        .card-content
          span.card-title.activator.grey-text.text-darken-4 Card Title
            i.material-icons.right more_vert
          p
            a(href='#') This is a link
        .card-reveal
          span.card-title.grey-text.text-darken-4 Card Title
            i.material-icons.right close
          p Here is some more information about this product that is only revealed once clicked on.

</template>

<script>

import {mapActions, mapGetters} from "vuex"

export default {
  name: "Search",
  data: ()=> ({
    query: ''
  }),
  metaInfo: {
    title: "Anime Library - Search"
  },
  methods: {
    ...mapActions(['fetchAnime']),
    getResult(query) {
      this.fetchAnime(query)
    }
  },
  computed: {
    ...mapGetters(['getAnime'])
  }
}

</script>

<style lang="sass" scoped>

.Search
  width: 100%
  padding: 0 40px
  display: flex
  flex-direction: column
  align-items: center
  justify-content: flex-start

  .nav-search
    width: 60%
    height: 50px
    margin: 100px 0 80px 0
    border-radius: 3px

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
    grid-template-columns: repeat(5, 1fr)
    grid-gap: 20px


</style>
