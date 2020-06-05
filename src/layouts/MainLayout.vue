<template lang="pug">

  div.global-wrapper
    MainNav

    MobileNav

    SideNav

    main.content-wrapper
      router-view

      MainFooter

</template>

<script>

  import MainNav from "../components/MainNav";
  import MobileNav from "../components/MobileNav";
  import SideNav from "../components/SideNav";
  import MainFooter from "../components/MainFooter";

  export default {
    components: {
      MainNav,
      MobileNav,
      SideNav,
      MainFooter
    },
    mounted() {
      M.AutoInit();
    }
  }

</script>

<style lang="sass" scoped>

  @import "../assets/styles/utils/index"

  .global-wrapper
    display: flex
    flex-direction: column
    align-items: flex-end

  .content-wrapper
    display: flex
    flex-direction: column
    align-items: center
    width: calc(100% - 300px)
    background-color: #ffffff
    height: 100%
    +mq(tablet-wide, max)
      width: 100%

</style>
