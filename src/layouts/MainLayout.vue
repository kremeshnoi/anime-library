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

	import MainNav from "@/components/navigation/MainNav.vue";
	import MobileNav from "@/components/navigation/MobileNav.vue";
	import SideNav from "@/components/navigation/SideNav.vue";
	import MainFooter from "@/components/navigation/MainFooter.vue";

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

	@import "../assets/styles/utils/vars.sass"
	@import "../assets/styles/utils/mixins.sass"

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
