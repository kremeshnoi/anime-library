<template lang='pug'>

	.content-wrapper
		navbar
		router-view(:key='this.$route.path')
		main-footer

</template>

<script>

	// IMPORTS

	import Navbar from '@/components/navigation/Navbar';
	import MainFooter from '@/components/navigation/MainFooter';

	// COMPONENT OPTIONS

	export default {
		name: 'Authorized',
		components: {
			Navbar,
			MainFooter
		},
		mounted() {
			M.AutoInit();
		}
	};

</script>

<style lang='sass' scoped>

	// IMPORTS

	@import '../../src/assets/styles/utils/vars'
	@import '../../src/assets/styles/utils/mixins'

	// AUTHORIZED STYLES

	.content-wrapper
		padding: 54px 0 0 0
		background-color: $color-white-pure
		margin: 0 auto
		+flex(initial, center, column)

</style>
