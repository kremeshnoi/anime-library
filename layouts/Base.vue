<template lang="pug">

	.base-layout
		Navbar
		Breadcrumb
		Nuxt(:key="this.$route.path")
		TopCategories
		Footer

</template>

<script>

	import Navbar from "@/components/navigation/Navbar"
	import Footer from "@/components/navigation/Footer"
	import Breadcrumb from "@/components/elements/Breadcrumb"
	import TopCategories from "@/components/blocks/TopCategories"

	export default {
		name: "Base",
		components: {
			Navbar,
			Footer,
			Breadcrumb,
			TopCategories
		},
		mounted() {
			M.AutoInit()
		}
	}

</script>

<style lang="sass" scoped>

	@import "~/assets/styles/utils/vars"
	@import "~/assets/styles/utils/mixins"

	.base-layout
		margin: 0 auto
		padding: 54px 0 0 0
		+flex(initial, center, column)
		background-color: $color-white

</style>
