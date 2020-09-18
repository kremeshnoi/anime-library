<template lang='pug'>

	.content-wrapper
		navbar
		router-view(:key='this.$route.path')
		action-button
		main-footer

		.tap-target(data-target='action-button')
			.tap-target-content
				h5.tap-target__title
					| I am here ٩(◕‿◕｡)۶
				p.tap-target__description
					| I am your navigation menu. Use me to go to the key pages of the site. I will always be with you.

</template>

<script>

	import Navbar from '@/components/navigation/Navbar';
	import MainFooter from '@/components/navigation/MainFooter';
	import ActionButton from "@/components/navigation/ActionButton";

	export default {
		name: 'Authorized',
		components: {
			Navbar,
			MainFooter,
			ActionButton
		},
		mounted() {
			M.AutoInit();

			const tap = document.querySelector('.tap-target')
			const tap_init = M.TapTarget.init(tap)
			const tap_instance = M.TapTarget.getInstance(tap);
			tap_instance.open();
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.content-wrapper
		padding: 54px 0 0 0
		background-color: $color-white-pure
		box-shadow: 0px 0px 12px 6px rgba(0,0,0,0.4)
		max-width: 1300px
		margin: 0 auto
		+flex(initial, center, column)

	.tap-target
		background-color: $color-blue-light

		&__description
			margin: 14px 0 14px 0
			font-size: 16px

	.tap-target-content
		text-align: start
		padding-left: 80px !important
		padding-top: 120px !important
		color: $color-white


</style>
