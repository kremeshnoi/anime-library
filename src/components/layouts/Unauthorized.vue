<template lang='pug'>

	.content-wrapper
		navbar
		router-view(:key='this.$route.path')
		main-footer

</template>

<script>

	import Navbar from '@/components/navigation/Navbar';
	import MainFooter from '@/components/navigation/MainFooter';
	import ActionButton from "@/components/navigation/ActionButton";

	export default {
		name: 'Unauthorized',
		components: {
			Navbar,
			MainFooter,
			ActionButton
		},
		mounted() {
			M.AutoInit();
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

</style>
