<template lang='pug'>

	.content-wrapper
		nav-bar
		router-view(:key='this.$route.path')
		main-footer

</template>

<script>

	import NavBar from '@/components/navigation/NavBar';
	import MainFooter from '@/components/navigation/MainFooter';

	export default {
		name: 'Unauthorized',
		components: {
			NavBar,
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

	body
		background-color: $color-white-dark

	.navbar
		max-width: 1300px

	.content-wrapper
		padding: 54px 0 0 0
		background-color: $color-white-pure
		box-shadow: 0px 0px 12px 6px rgba(0,0,0,0.4)
		max-width: 1300px
		margin: 0 auto
		+flex(initial, center, column)

</style>
