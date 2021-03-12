<template lang="pug">

  section.related
    .related__title
      | Related
    .related__content
      ul.related__tabs.tabs(v-if="wholeData.related")
        li.related__tab.tab(
          :key="name"
          v-for="(value, name, counter) in wholeData.related")

          a.related__tab-item(
            :href="`#` + counter"
            @click="computeType(name)")
            | {{ name }}

      .related__item(
        :key="name"
        :id="counter"
        v-for="(value, name, counter) in wholeData.related")
        table.related__table
          tbody.related__tbody
            tr.related__tr(
              :key="dataIndex"
              v-for="(resultItem, dataIndex) in value.slice(0, 1)")
              nuxt-link.related__link.related__link_more(
                v-if="value.length >= 2"
                :to="{ name: `${ relatedType }-id-title-related-type`, params: { id: wholeData.mal_id, title: $formatRouteTitle(wholeData.title), related: $formatRouteTitle(name), type: titleType } }")
                | More

              td.related__td
                nuxt-link.related__link(
                  :to="{ name: `${ titleType }-id-title`, params: { id: resultItem.mal_id, title: resultItem.name } }")
                  | {{ resultItem.name }}

      h4.related__disaster(v-if="wholeData.related.length === 0")
        | Not found

</template>

<script>

  export default {
    name: "Related",
    props: ["wholeData", "relatedType"],
    data() {
      return {
        titleType: this.relatedType,
        initialActiveTab: ""
      }
    },
    methods: {
      computeType(name) {
        if(name === "Adaptation" && this.relatedType !== "manga") this.titleType = "manga"
        else if(name === "Adaptation" && this.relatedType !== "anime") this.titleType = "anime"
        else this.titleType = this.relatedType
      }
    },
    async mounted() {
      const activeTab = await document.querySelectorAll(".related__tab-item")
      activeTab.forEach(element => {
        if(element.classList.contains("active")) this.initialActiveTab = element.textContent
      })

      if(this.initialActiveTab === "Adaptation" && this.relatedType !== "manga") this.titleType = "manga"
      else if(this.initialActiveTab === "Adaptation" && this.relatedType !== "anime") this.titleTyp = "anime"
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
    justify-content: start
    align-items: flex-start
    grid-template-columns: 100%
    grid-template-rows: 50px auto

    &__disaster
      font-size: 30px
      text-align: start

    &__title
      @extend .title-default
      align-items: flex-start

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
