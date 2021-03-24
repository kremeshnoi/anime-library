<template lang="pug">

  .score
    b-form-rating(
      readonly
      no-border
      :value="compute_score"
      stars="5"
      size="lg"
      precision="2"
      variant="warning"
      id="rating-readonly rating-10")
    span.score__value {{ score }}

</template>

<script>

  import { BFormRating } from "bootstrap-vue"

  export default {
    name: "Score",
    props: ["score"],
    components: {
      BFormRating
    },
    computed: {
      compute_score() {
        return this.score / 2
      }
    }
  }

</script>

<style lang="sass" scoped>

  .score
    display: flex
    align-items: center
    &__value
      font-size: 18px
      font-weight: 700

</style>