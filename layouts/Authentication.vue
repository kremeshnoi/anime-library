<template lang="pug">

  .layout-container
    .progress.auth-progress
      .indeterminate
    router-view

</template>

<script>

import Messages from "@/utils/messages"

export default {
  name: "Authentication",
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fireBaseError) {
      this.$error(Messages[fireBaseError.code])
    }
  },
  mounted() {
    M.AutoInit()
  }
}
</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"

  .layout-container
    height: 100vh
    background: url("../assets/images/clouds.png"), $color-blue-light

  .auth-progress
    top: 0
    margin: 0
    height: 3px
    display: none
    color: #26A69A
    position: fixed

</style>
