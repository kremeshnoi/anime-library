<template lang="pug">

  section.related
    .related__title
      | Related
    .related__content
      ul.related__tabs.tabs(v-if="relatedData")
        li.related__tab.tab(
          :key="name"
          v-for="(value, name, counter) in relatedData")

          a.related__tab-item(:href="`#` + counter")
            | {{ name }}

      .related__item(
        :key="name"
        :id="counter"
        v-for="(value, name, counter) in relatedData")
        table.related__table
          tbody.related__tbody
            tr.related__tr(
              :key="dataIndex"
              v-for="(resultItem, dataIndex) in value.slice(0, 1)")
              router-link.related__link.related__link_more.modal-trigger(
                v-if="value.length >= 2"
                :to="{ name: `anime-id-title-related`, params: { id: wholeData.mal_id, title: wholeData.title, related: relatedData } }")
                | More

              td.related__td
                a.related__link(
                  @click="computeRoute({ resultItem })"
                  @click.middle="computeRoute({ resultItem, clickType })")
                  | {{ resultItem.name }}

      h4.related__disaster(v-if="relatedLength === 0")
        | Not found

</template>

<script>

  import { mapActions } from "vuex"

  export default {
    name: "Related",
    props: ["wholeData", "relatedData"],
    computed: {
      relatedLength() {
        if (typeof this.relatedData === "object") {
          const length = Object.keys(this.relatedData).length
          return length
        }
      },
    },
    computed: {
      type() {
        let type
        if (type === undefined) {
          if (this.wholeData.role || this.wholeData.name_kanji) type = "characters"
          else if ($nuxt.$router.app.$route.name === "anime-id-title") type = "anime"
          else if ($nuxt.$router.app.$route.name === "manga-id-title") type = "manga"
        }

        else if (type === "manga") type = "manga"
        else if (type === "Manga") type = "manga"
        else if (type === "Novel") type = "manga"
        else if (type === "Manhwa") type = "manga"
        else if (type === "One-shot") type = "manga"
        else if (type === "Doujinshi") type = "manga"
        else if (type !== "Manga" && type !== "manga") type = "anime"

        return type
      }
    },
    methods: {
      ...mapActions({
        computeRoute: "computeRoute",
        computeRouteByRelated: "computeRouteByRelated"
      })
    },
    created() {
      console.log(this.wholeData)
    }
  }

</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"
  @import "~/assets/styles/modules/titles"

  .related
    display: grid
    grid-gap: 20px
    text-align: start
    align-items: flex-end
    justify-content: start
    grid-template-columns: 100%
    grid-template-rows: 50px auto

    &__disaster
      font-size: 30px
      text-align: start

    &__title
      align-items: flex-end
      @extend .title-default

    &__td
      padding: 0 0 15px 0

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
      flex-grow: 0
      height: min-content

    &__tab-item
      text-align: start
      line-height: initial
      padding: 0 !important
      margin: 0 20px 20px 0
      width: auto !important
      color: $color-blue-light !important
      &:focus
        background-color: initial !important
      &.active
        color: $color-orange !important
        background-color: initial !important

    &__link
      @extend .title-cut
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
