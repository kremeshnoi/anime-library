<template lang="pug">

  .layout-container
    .progress.auth-progress
      .indeterminate
    Nuxt

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
    const head = document.getElementsByTagName("head")[0]
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.src = "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit"
    head.appendChild(script)
  }
}
</script>

<style lang="sass" scoped>

  @import "~/assets/styles/utils/vars"
  @import "~/assets/styles/utils/mixins"

  .layout-container
    height: 100vh
    background: url("../assets/images/clouds.png"), $color-blue_light

  .auth-progress
    top: 0
    margin: 0
    height: 3px
    display: none
    color: #26A69A
    position: fixed

</style>
