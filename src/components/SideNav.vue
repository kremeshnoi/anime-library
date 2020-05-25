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
  router-link(v-for="link in links" :key="link.url" tag="li" :to="link.url")
    a.nav-links.waves-effect.waves-light.link-position {{link.title}}
      i.material-icons.icons-position.grey-text.library-icon(v-if="link.title === 'My Library'") view_module
  li
    .divider.devider-margin
  li
    .footer-copyright.subheader.copyright-text.grey-text
      .container © 2020 Anime Library
</template>

<script>

export default {
  name: "SideNav",
  data: () => ({
    links: [
      { title: "Home", url: "/" },
      { title: "Search", url: "/search" },
      { title: "My Library", url: "/library" }
    ]
  })
}

</script>

<style lang="sass" scoped>

.sidenav
  background-color: #1f1f23
  li
    a:hover
      background-color: rgba(255,255,255, 0.04)

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
    &:hover
      background-color: initial !important
  &-icon
    color: #efeff1

.name
  color: #efeff1
  font-family: 'Cairo', sans-serif

.devider-margin
  background-color: hsla(0, 0%, 100%, 0.1)
  margin: 0 !important

.shadow-circle
  height: 84px !important
  width: 84px !important
  box-shadow: 4px 4px 5px -1px rgba(0,0,0,0.65)

.nav-links
  color: #efeff1

.library-icon
  position: absolute
  right: 86px
</style>
