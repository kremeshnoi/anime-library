<template lang="pug">

ul.sidenav.nav-mobile#nav-mobile
  li
    a Home
  li
    a Search
  li
    a My Library

</template>

<script>

export default {
  name: "MobileNav"
}

</script>

<style lang="sass" scoped>

.nav
  &-mobile
    width: 70%
    padding: 2rem 0

</style>
