<template lang="pug">

  .related
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
              a.related__link.related__link_more.modal-trigger(
                v-if="value.length >= 2"
                @click="computeRouteByRelated({ wholeData, name })"
                @click.middle="computeRouteByRelated({ wholeData, name, clickType })")
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
    data() {
      return {
        clickType: "middle"
      }
    },
    computed: {
      relatedLength() {
        if (typeof this.relatedData === "object") {
          const length = Object.keys(this.relatedData).length
          return length
        }
      },
    },
    methods: {
      ...mapActions({
        computeRoute: "computeRoute",
        computeRouteByRelated: "computeRouteByRelated"
      })
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
    grid-template-columns: 100%
    grid-template-rows: 50px auto

    &__disaster
      font-size: 30px
      text-align: start

    &__title
      display: flex
      align-items: center
      @extend .title-default

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
      height: initial !important

    &__tab-item
      text-align: start
      line-height: initial
      padding: 0 !important
      margin: 0 24px 14px 0
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
