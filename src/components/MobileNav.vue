<template lang="pug">

ul#nav-mobile.sidenav.sidenav-mobile-list
  li.sidenav-mobile-list-item
    a.sidenav-mobile-list-link Home

  li.sidenav-mobile-list-item
    a.sidenav-mobile-list-link Search

  li.sidenav-mobile-list-item
    a.sidenav-mobile-list-link My Library

</template>

<script>

export default {
  name: "MobileNav"
}

</script>

<style lang="sass" scoped>

.sidenav
  &-mobile-list
    width: 70%
    padding: 2rem 0

</style>
