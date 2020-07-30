<template lang="pug">

	.content-wrapper
		NavBar
		router-view
		Footer

</template>

<script>

	import NavBar from "@/components/navigation/NavBar.vue";
	import Footer from "@/components/navigation/Footer.vue";

	export default {
		name: "Unauthorized",
		components: {
			NavBar,
			Footer
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
		background-color: $color-white-pure
		+flex(initial, center, column)

</style>
