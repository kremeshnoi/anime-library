<template lang="pug">

	.base
		.loading-page(v-show="!loading")
			| loading...

		.layout-container(v-show="loading")
			Navbar
			Breadcrumb
			router-view(:key="this.$route.path")
			Footer

</template>

<script>

	import Navbar from "@/components/navigation/Navbar"
	import Footer from "@/components/navigation/Footer"
	import Breadcrumb from "@/components/elements/Breadcrumb"

	export default {
		name: "Base",
		components: {
			Navbar,
			Footer,
			Breadcrumb
		},
		data() {
			return {
				loading: false
			}
		},
		mounted() {
			M.AutoInit()
			this.loading = true
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

	.loading-page
		top: 0
		left: 0
		width: 100%
		height: 100%
		position: fixed
		font-size: 30px
		text-align: center
		padding-top: 200px
		font-family: sans-serif
		background: rgba(255, 255, 255, 0.8)

</style>
