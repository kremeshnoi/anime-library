<template lang="pug">

div.general-wrapper
  MainNav

  MobileNav

  SideNav

  main.main-wrapper
    router-view

</template>

<script>

import MainNav from "../components/MainNav";
import MobileNav from "../components/MobileNav";
import SideNav from "../components/SideNav";

export default {
  components: {
    MainNav,
    MobileNav,
    SideNav
  },
  mounted() {
    M.AutoInit();
  }
}

</script>

<style lang="sass" scoped>

@import "../assets/styles/utils/index"

.general-wrapper
  display: flex
  flex-direction: column
  align-items: flex-end

.main-wrapper
  display: flex
  flex-direction: column
  align-items: center
  width: calc(100% - 300px)
  background-color: #0e0e10
  height: 100%
  +mq(tablet-wide, max)
    width: 100%

</style>
