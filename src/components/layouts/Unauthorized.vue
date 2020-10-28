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

	// IMPORTS

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	// UNAUTHORIZED STYLES

	.content-wrapper
		padding: 54px 0 0 0
		background-color: $color-white-pure
		margin: 0 auto
		+flex(initial, center, column)

</style>
