<template lang="pug">

ul#slide-out.sidenav.sidenav-fixed.sidenav-under
  li
    .user-view.user-top
      a.tooltipped(href="", data-position="right", data-tooltip="Settings").settings-link
        i.material-icons.settings-icon settings
      .background
        img
      a(href="")
        img.circle.shadow-circle(src="@/assets/user.jpg")
  li
    .divider.devider-margin
  li
    span.name User
  li
    .divider.devider-margin
  li
    a.waves-effect.link-position(href="") Home
  li
    a.waves-effect.link-position(href="") Search
  li
    a.waves-effect.link-position(href="") My Library
      i.material-icons.icons-position view_module
  li
    .divider.devider-margin
  li
    .footer-copyright.subheader
      .container © 2020 Anime Library

</template>

<script>

export default {
  name: "SideNav"
}

</script>

<style lang="sass" scoped>

.icons-position
  margin: 0 0 0 6px !important
  float: initial !important

.link-position
  display: flex !important
  justify-content: center !important

.sidenav-under
  margin-top: 54px !important

.user-top
  padding: 32px !important

.settings
  &-link
    position: absolute
    bottom: 20px
    right: 20px
    height: 24px !important
  &-icon
    color: grey

.devider-margin
  margin: 0 !important

.shadow-circle
  height: 84px !important
  width: 84px !important
  box-shadow: 4px 4px 5px -1px rgba(0,0,0,0.65)

</style>
