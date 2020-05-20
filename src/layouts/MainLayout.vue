<template lang="pug">

div
  MainNav

  MobileNav

  SideNav

  main
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



</style>
