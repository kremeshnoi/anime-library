<template lang="pug">

  nav.nav-global
    .nav-wrapper.nav-global-wrapper
      a.nav-global-logo.nav-global-link AnimeLibrary
      a(data-target="nav-mobile").sidenav-trigger.nav-global-trigger.nav-global-link
        i.material-icons.nav-global-icon-menu menu
      .nav-global-logout
        a.nav-global-logout-link Logout
          i.material-icons.nav-global-logout-icon-menu exit_to_app

</template>

<script>

  export default {
    name: "MainNav"
  }

</script>

<style lang="sass" scoped>

  @import "../../assets/styles/utils/index"

  .nav
    &-global
      display: flex
      justify-content: center
      position: fixed
      height: 54px
      line-height: 54px
      background-color: rgb(35, 77, 173)
      top: 0
      z-index: 99

      &-wrapper
        width: 100%

      &-logo
        font-size: 1.7rem
        position: fixed
        left: 0
        margin: 0 20px
        color: #efeff1
        font-family: "Days One", sans-serif

      &-trigger
        height: 54px
        line-height: 54px
        float: right !important

      &-icon-menu
        height: 54px
        line-height: 54px

      &-logout
        display: flex
        justify-content: flex-end
        align-items: center
        +mq(tablet-wide, max)
          display: none

        &-link
          margin: 0 20px
          display: flex
          align-items: center
          color: #efeff1 !important
          &:hover
            .nav-global-logout-icon-menu
              transform: translateX(4px)

        &-icon-menu
          display: initial
          line-height: 16px
          height: 16px
          margin: 0 0 0 6px
          color: #efeff1

</style>
