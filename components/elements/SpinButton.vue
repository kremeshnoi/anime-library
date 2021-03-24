<template lang="pug">

    b-form-spinbutton.spinbutton(
      inline
      size="sm"
      min="0"
      :max="count || 1000"
      id="sb-inline"
      v-model="newCount")

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
    border: none
    display: flex
    user-select: none
    box-shadow: none !important

    button
      height: auto
      padding: 10px
      background: none !important
      color: $color-blue !important

</style>