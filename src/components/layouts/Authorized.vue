<template lang='pug'>

	.global-wrapper
		main-nav
		side-nav

		.content-wrapper
			router-view( :key='this.$route.path' )
			main-footer

</template>

<script>

	import MainNav from '@/components/navigation/NavBar';
	import SideNav from '@/components/navigation/SideNav';
	import MainFooter from '@/components/navigation/MainFooter';

	export default {
		name: 'Authorized',
		components: {
			MainNav,
			SideNav,
			MainFooter
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
		margin: 0 0 0 auto
		padding: 54px 0 0 0
		width: calc(100% - 60px)
		background-color: $color-white-pure
		+flex(initial, center, column)

</style>
