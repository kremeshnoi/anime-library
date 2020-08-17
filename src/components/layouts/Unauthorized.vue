<template lang="pug">

	.content-wrapper
		nav-bar
		router-view
		main-footer

</template>

<script>

	import NavBar from "@/components/navigation/NavBar.vue";
	import MainFooter from "@/components/navigation/MainFooter.vue";

	export default {
		name: "Unauthorized",
		components: {
			NavBar,
			MainFooter
		},
		mounted() {
			M.AutoInit();
		}
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"

	.content-wrapper
		padding: 54px 0 0 0
		background-color: $color-white-pure
		+flex(initial, center, column)

</style>
