<template lang="pug">

	div.global-wrapper
		SignUpBlock

		main.content-wrapper
			MainNav

			router-view

			MainFooter

</template>

<script lang="ts">

	import MainNav from "@/components/navigation/MainNav.vue";
	import MainFooter from "@/components/navigation/MainFooter.vue";
	import SignUpBlock from "@/components/blocks/SignUpBlock.vue";

	export default {
		name: "GuestLayout",
		components: {
			MainNav,
			MainFooter,
			SignUpBlock
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
			width: 100%
			background-color: $color-pure-white
			height: 100%
			+mq(tablet-wide, max)
				width: 100%

</style>
