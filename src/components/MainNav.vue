<template lang="pug">

nav.nav-main
  .nav-wrapper
    a(href="").logo Anime Library
    a(href="" data-target="nav-mobile").sidenav-trigger.sidenav-trigger-right
      i.material-icons.menu-icon menu
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
    height: 54px
    line-height: 54px
    box-shadow: none
    background-color: #18181b
  &-wrapper
    width: 100%

.logo
  font-size: 1.7rem
  position: fixed
  left: 0
  margin: 0 18px
  color: #efeff1

.logout
  margin: 0 30px
  display: flex
  align-items: center
  color: #efeff1 !important
  &:hover
    .logout-icon
      transform: translateX(4px)

  &-icon
    display: initial
    line-height: 16px
    height: 16px
    margin: 0 0 0 6px
    color: #efeff1


  &-wrapper
    display: flex
    justify-content: flex-end
    align-items: center

.sticky-footer
  position: fixed
  bottom: 0

.sidenav-trigger-right
  height: 54px
  line-height: 54px
  float: right !important

.menu-icon
  height: 54px
  line-height: 54px

</style>
