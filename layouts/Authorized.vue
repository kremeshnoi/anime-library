<template lang="pug">

  .content-wrapper
    navbar
    router-view(:key="this.$route.path")
    main-footer

</template>

<script>

  import Navbar from "@/components/navigation/Navbar"
  import MainFooter from "@/components/navigation/MainFooter"

  export default {
    name: "Authorized",
    components: {
      Navbar,
      MainFooter
    },
    mounted() {
      M.AutoInit()
    }
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.content-wrapper
		margin: 0 auto
		padding: 54px 0 0 0
		+flex(initial, center, column)
		background-color: $color-white-pure

</style>
