<template lang="pug">

div
  nav.nav-main.blue.darken-1
    .nav-wrapper
      a(href="").logo Anime Library
      a(href="" data-target="nav-mobile").sidenav-trigger.sidenav-trigger-right
        i.material-icons menu

</template>

<script>

  export default {
    name: "MainNav"
  }

</script>

<style lang="sass" scoped>

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

.logo
  font-size: 1.7rem
  position: fixed
  left: 0
  margin: 0 18px

.sticky-footer
  position: fixed
  bottom: 0

</style>
