<template lang="pug">

	nav.nav-global
		.nav-wrapper.nav-global-wrapper
			router-link.nav-global-logo.nav-global-link( to="/" )
				| Otaku Library

			.nav-global-logout
				router-link.nav-global-logout-link( to="/login" )
					| Sign in
					i.material-icons.nav-global-logout-icon exit_to_app

</template>

<script>

	export default {
		name: "NavBar"
	};

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"

	.nav
		&-global
			display: flex
			justify-content: center
			position: fixed
			height: 54px
			line-height: 54px
			background-color: $color-blue
			top: 0
			z-index: 99
			padding: 0 40px 0 40px

			&-wrapper
				width: 100%
				+flex(flex-end, initial, row)

			&-logo
				font-size: 24px
				color: $color-white
				position: absolute
				right: 50%
				transform: translateX(50%)
				font-family: "Days One", sans-serif

			&-logout
				display: flex
				justify-content: flex-end
				width: auto
				z-index: 999
				+mq(tablet-wide, max)
					display: none
				&-icon
					height: 54px
					line-height: 54px
					margin: 0 0 0 6px

				&-link
					display: flex
					align-items: center

					&:hover
						.nav-global-logout-icon
							transform: translateX(4px)

</style>
