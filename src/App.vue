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

  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    text-align: center
    height: 100%

</style>
