<template lang="pug">

div
  nav.nav-main.blue.darken-1
    .nav-wrapper
      a(href="").logo AnimeList
      a(href="" data-target="nav-mobile").sidenav-trigger.sidenav-trigger-right
        i.material-icons menu

  ul.sidenav.nav-mobile#nav-mobile
    li
      a General
    li
      a Search
    li
      a My Library

  main
    router-view

</template>

<script>

  export default {
    mounted() {
      M.AutoInit();
    }
  }

</script>

<style lang="sass">

.nav
  &-main
    display: flex
    justify-content: center
    position: relative
  &-wrapper
    width: 100%
  &-mobile
    width: 70%
    padding: 2rem 0px

.sidenav-trigger-right
  float: right !important

.logo
  font-size: 1.7rem
  position: fixed
  left: 0
  margin: 0 18px

</style>
