<template lang="pug">

#app
  component(:is="layout")
    router-view

</template>

<script>

import MainLayout from "./layouts/MainLayout.vue"

export default {
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  },
  components: {
    MainLayout
  }
}

</script>

<style lang="sass">

@import "~materialize-css/dist/css/materialize.min.css"

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50

</style>
