<template lang="pug">

	.content-wrapper
		MainNav
		MobileNav
		SideNav
		router-view
		MainFooter

</template>

<script>

	import MainNav from "@/components/navigation/NavBar.vue";
	import MobileNav from "@/components/navigation/MobileNav.vue";
	import SideNav from "@/components/navigation/SideNav.vue";
	import MainFooter from "@/components/navigation/Footer.vue";

	export default {
		name: "Authorized",
		components: {
			MainNav,
			MobileNav,
			SideNav,
			MainFooter
		},
		mounted() {
			M.AutoInit();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars.sass"
	@import "../assets/styles/utils/mixins.sass"

	.content-wrapper
		padding: 54px 0 0 0
		background-color: $color-white-pure
		+flex(initial, center, column)

</style>
