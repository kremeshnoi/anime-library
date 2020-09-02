<template lang='pug'>

	nav.nav-global
		.nav-wrapper.nav-global-wrapper
			router-link.nav-global-logo.nav-global-link(to='/')
				| Otaku Library
			.nav-global-logout(v-if='!getUserInfo.length')
				router-link.nav-global-logout-link(to='/login')
					| Login
					i.material-icons.nav-global-logout-icon exit_to_app

</template>

<script>

	import { mapGetters } from "vuex";

	export default {
		name: 'NavBar',
		computed: {
			...mapGetters(['getUserInfo'])
		}
	};

</script>

<style lang='sass' scoped>

	@import '../../assets/styles/utils/vars'
	@import '../../assets/styles/utils/mixins'

	.nav
		&-global
			height: 54px
			line-height: 54px
			background-color: $color-blue
			top: 0
			position: fixed
			z-index: 99
			padding: 0 40px 0 40px

			&-wrapper
				width: 100%
				+flex(center, center, row)

			&-logo
				font-size: 24px
				color: $color-white
				font-family: 'Days One', sans-serif

			&-logout
				position: absolute
				right: 0
				top: 0

				&-link
					+flex(center, center, row)
					&:hover
						.nav-global-logout-icon
							transform: translateX(4px)
				&-icon
					margin: 0 0 0 6px
					height: 54px
					line-height: 54px

</style>
