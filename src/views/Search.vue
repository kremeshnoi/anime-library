<template lang="pug">

.Search
  h1 Search
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
  width: 80%

  .nav-search
    margin-top: 100px
    border-radius: 3px !important

    .nav-wrapper
      border-radius: 3px !important

    .input-field
      border-radius: 3px !important
      background-color: #ececec !important

      input
        border-radius: 3px !important

</style>
