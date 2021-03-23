<template lang="pug">

  .search-bar(
    data-target="dropdown"
    @click="showDropdown($event)")
    nav.search-bar__nav
      .search-bar__wrapper.white.nav-wrapper(
          v-model="type"
          @input="search(query)")

          .search-bar__field.input-field
            input#search.search-bar__input(
              type="search"
              v-model="query"
              placeholder="Search...")

            label.search-bar__label.label-icon(for="search")
              i.search-bar__icon.material-icons.black-text search

    drop-down(
      :type="type"
      v-if="isActive"
      :loaderData="isLoading"
      @changeType="updateType"
      @click="isActive = false"
      :class="'dropdown_is-shown'"
      :searchedData="query.length >= 3 && searchedData.length ? searchedData : []")

</template>

<script>

  import { mapActions, mapGetters } from "vuex"
  import DropDown from "@/components/elements/DropDown"

  export default {
    name: "SearchBar",
    components: {
      DropDown
    },
    data() {
      return {
        query: "",
        type: "anime",
        isActive: false,
        searchedData: [],
        isLoading: false
      }
    },
    computed: {
      ...mapGetters({
        getAnimeSearched: "anime/getAnimeSearched",
        getMangaSearched: "manga/getMangaSearched"
      })
    },
    methods: {
      ...mapActions({
        loadAnimeSearched: "anime/loadAnimeSearched",
        loadMangaSearched: "manga/loadMangaSearched"
      }),
      showDropdown(event) {
        const dropDownEl = document.querySelector(".cards__wrapper")

        this.query = ""
        if (event.target.classList.contains("overlay") || dropDownEl) {
          this.isActive = false
        } else {
          this.isActive = true
        }
      },
      updateType(el) {
        this.type = el
      },
      async search(query) {
        if (query.length >= 3) {
        this.isLoading = true
        if (this.type === "anime") {
          await this.loadAnimeSearched(query)
          this.searchedData = this.getAnimeSearched
        } else if (this.type === "manga") {
          await this.loadMangaSearched(query)
          this.searchedData = this.getMangaSearched
        }
        this.isLoading = false
        }
      }
    }
  }

</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"

  .search-bar
    width: 100%
    position: relative

    &__nav
      width: 100%
      height: 34px
      border-radius: 3px

    &__wrapper
      border-radius: 3px

    &__field
      border-radius: 3px
      background-color: $color-white

    &__input
      border-radius: 3px !important
      padding-left: 50px !important
      width: calc(100% - 50px) !important
      &::placeholder
        color: $color-grey-dark !important

    &__label
      top: 6px
      margin: 0
      left: 14px !important

    &__icon
      height: 34px
      line-height: 34px

</style>
