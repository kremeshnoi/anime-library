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

.general-wrapper
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-end

.main-wrapper
  width: calc(100% - 300px)

</style>
