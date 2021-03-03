<template lang='pug'>

  .related
    .related__title
      | Related
    .related__content
      ul.related__tabs.tabs(
        v-if='relatedData'
        )
        li.related__tab.tab(
          v-for='(value, name, counter) in relatedData',
          :key='name'
          )

          a.related__tab-item(
            :href='`#` + counter'
            )
            | {{ name }}

      .related__item(
        :id='counter',
        v-for='(value, name, counter) in relatedData',
        :key='name'
      )
        table.related__table
          tbody.related__tbody
            tr.related__tr(
              v-for='(resultItem, dataIndex) in value.slice(0, 1)',
              :key='dataIndex'
            )
              a.related__link.related__link_more.modal-trigger(
                v-if='value.length >= 2',
                @click='computeRouteByRelated({ wholeData, name })',
                @click.middle='computeRouteByRelated({ wholeData, name, clickType })')
                | More

              td.related__td
                a.related__link(
                  @click='computeRoute({ resultItem })'
                  @click.middle='computeRoute({ resultItem, clickType })')
                  | {{ resultItem.name }}

      h4.related__disaster(v-if='relatedLength === 0')
        | Not found

</template>

<script>

  import { mapActions } from 'vuex';

  export default {
    name: 'Related',
    props: ['wholeData', 'relatedData'],
    data() {
      return {
        clickType: "middle"
      }
    },
    computed: {
      relatedLength() {
        if (typeof this.relatedData === 'object') {
          const length = Object.keys(this.relatedData).length;
          return length;
        }
      },
    },
    methods: {
      ...mapActions({
        computeRoute: 'computeRoute',
        computeRouteByRelated: 'computeRouteByRelated'
      })
    }
  };

</script>

<style lang='sass' scoped>

  @import '~/assets/styles/utils/vars'
  @import '~/assets/styles/utils/mixins'
  @import '~/assets/styles/modules/titles'

  .related
    display: grid
    justify-content: start
    grid-gap: 20px
    grid-template-rows: 50px auto
    grid-template-columns: 100%
    text-align: start
    &__disaster
      text-align: start
      font-size: 30px
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
      height: initial !important
      flex-grow: 0
    &__tab-item
      width: auto !important
      padding: 0 !important
      margin: 0 24px 14px 0
      text-align: start
      line-height: initial
      color: $color-blue-light !important
      &:focus
        background-color: initial !important
      &.active
        background-color: initial !important
        color: $color-orange !important
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
