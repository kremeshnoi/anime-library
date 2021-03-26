<template lang="pug">

  footer.footer
    footer-categories
    footer-info

</template>

<script>

  import FooterInfo from "@/components/blocks/FooterInfo"
  import FooterCategories from "@/components/blocks/FooterCategories"


  export default {
    name: "Footer",
    components: {
      FooterInfo,
      FooterCategories
    }
  }

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.footer
		width: 100%

</style>
