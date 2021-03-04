<template lang="pug">

  .layout-container
    navbar
    router-view(:key="this.$route.path")
    Footer

</template>

<script>

  import Navbar from "@/components/navigation/Navbar"
  import Footer from "@/components/navigation/Footer"

  export default {
    name: "Authorized",
    components: {
      Navbar,
      Footer
    },
    mounted() {
      M.AutoInit()
    }
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.layout-container
		margin: 0 auto
		padding: 54px 0 0 0
		+flex(initial, center, column)
		background-color: $color-white-pure

</style>
