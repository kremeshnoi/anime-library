<template lang="pug">

div
  MainNav

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
      span.name User
    li
      .divider
    li
      a.waves-effect.link-position(href="") Home
    li
      a.waves-effect.link-position(href="") Search
    li
      a.waves-effect.link-position(href="") My Library
        i.material-icons.icons-position view_module
    li
      .divider
    li
      .footer-copyright.subheader
        .container © 2020 Anime Library

  main
    router-view

</template>

<script>

  import MainNav from "../components/MainNav";

  export default {
    components: {
      MainNav
    },
    mounted() {
      M.AutoInit();
    }
  }

</script>

<style lang="sass">

.icons-position
  margin: 0 0 0 6px !important
  float: initial !important

.link-position
  display: flex !important
  justify-content: center !important

.sidenav-trigger-right
  float: right !important

.sidenav-under
  margin-top: 64px !important

.user-top
  padding: 32px !important



</style>
