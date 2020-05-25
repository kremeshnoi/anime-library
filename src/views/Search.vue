<template lang="pug">

.Search
  nav.nav-search
    .nav-wrapper.white
      form
        .input-field
          input#search(type="search")
          label.label-icon(for="search")
            i.material-icons.black-text search
          i.material-icons close

</template>

<script>

import {searchAnime} from "../services/search"

export default {
  name: "Search",
  metaInfo: {
    title: "Anime Library - Search"
  },
  mounted() {
    searchAnime('naruto')
  }
}

</script>

<style lang="sass" scoped>

.Search
  width: 100%
  padding: 0 40px
  display: flex
  justify-content: center

  .nav-search
    width: 60%
    height: 50px
    margin-top: 50px
    border-radius: 3px !important

    .nav-wrapper
      border-radius: 3px !important

    .input-field
      border-radius: 3px !important
      background-color: #ececec !important

      i
        height: 50px
        line-height: 50px

      input
        border-radius: 3px !important

</style>
