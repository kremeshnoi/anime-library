<template lang="pug">

  div.spinbutton
    b-form-spinbutton.spinbutton__form(
      inline
      min="0"
      size="sm"
      id="sb-inline"
      v-model="newCount"
      :max="count || 1000")

</template>

<script>

  import { BFormSpinbutton } from "bootstrap-vue"

  export default {
    name: "SpinButton",
    props: ["count"],
    components: {
      BFormSpinbutton
    },
    data() {
      return {
        newCount: 0
      }
    }
  }

</script>

<style lang="sass">

  @import "~/assets/styles/utils/vars"

  .spinbutton
    &__form
      border: none
      display: flex
      user-select: none
      box-shadow: none !important

</style>