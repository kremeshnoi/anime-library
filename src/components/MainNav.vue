<template lang="pug">

  nav.nav-main.blue.darken-1
    .nav-wrapper
      a(href="").logo Anime Library
      a(href="" data-target="nav-mobile").sidenav-trigger.sidenav-trigger-right
        i.material-icons menu
      .logout-wrapper
        a(href="").logout Logout
          i.material-icons.logout-icon exit_to_app

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

  .logo
    font-size: 1.7rem
    position: fixed
    left: 0
    margin: 0 18px

  .logout
    margin: 0 30px
    display: flex
    align-items: center

    &-icon
      display: initial
      line-height: 16px
      height: 16px
      margin: 0 0 0 6px

    &-wrapper
      display: flex
      justify-content: flex-end
      align-items: center



  .sticky-footer
    position: fixed
    bottom: 0

  .sidenav-trigger-right
    float: right !important

</style>
