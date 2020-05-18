<template lang="pug">

div
  nav.nav-main.blue.darken-1
    .nav-wrapper
      a(href="").logo AnimeList
      a(href="" data-target="nav-mobile").sidenav-trigger.sidenav-trigger-right
        i.material-icons menu

  ul.sidenav.nav-mobile#nav-mobile
    li
      a Home
    li
      a Search
    li
      a My Library

  ul#slide-out.sidenav.sidenav-fixed.sidenav-under
    li
      .user-view.user-top.blue.darken-1
        .background
          img
        a(href="")
          img.circle(src="@/assets/user.jpg")
    li
      span.name John Doe
    li
      .divider
    li
      a.waves-effect(href="") Home
    li
      a.waves-effect(href="") Search
    li
      a.waves-effect(href="") My Library

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

.sticky-footer
  position: fixed
  bottom: 0

.sidenav-trigger-right
  float: right !important

.sidenav-under
  margin-top: 64px !important

.user-top
  padding: 32px !important

.logo
  font-size: 1.7rem
  position: fixed
  left: 0
  margin: 0 18px

</style>
