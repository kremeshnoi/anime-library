<template lang="pug">

	div.global-wrapper

		main.content-wrapper
			NavBar

			router-view

			Footer

</template>

<script>

	import NavBar from "@/components/navigation/NavBar.vue";
	import Footer from "@/components/navigation/Footer.vue";
	import SignUp from "@/views/SignUp.vue";

	export default {
		name: "Unauthorized",
		components: {
			NavBar,
			Footer,
			SignUp
		},
		mounted() {
			M.AutoInit();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../assets/styles/utils/vars"
	@import "../assets/styles/utils/mixins"

	.global-wrapper
		display: flex
		flex-direction: column
		align-items: flex-end

		.content-wrapper
			display: flex
			flex-direction: column
			align-items: center
			width: 100%
			background-color: $color-white-pure
			height: 100%
			+mq(tablet-wide, max)
				width: 100%

</style>
