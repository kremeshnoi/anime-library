<template lang="pug">

	nav.nav-global
		.nav-wrapper.nav-global-wrapper
			router-link.nav-global-logo.nav-global-link(to="/") AnimeLibrary
			a(data-target="nav-mobile").sidenav-trigger.nav-global-trigger.nav-global-link
				i.material-icons.nav-global-icon-menu menu
			.nav-global-logout
				router-link.nav-global-logout-link(to="/login") Sign in
					i.material-icons.nav-global-logout-icon-menu exit_to_app

</template>

<script>

	export default {
		name: "NavBar"
	 }

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars"
	@import "../../assets/styles/utils/mixins"

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

			&-logo
				font-size: 1.7rem
				position: fixed
				left: 40px
				color: $color-white
				font-family: "Days One", sans-serif

			&-trigger
				height: 54px
				line-height: 54px
				margin: 0
				float: right !important

			&-icon-menu
				height: 54px
				line-height: 54px

			&-logout
				display: flex
				justify-content: flex-end
				align-items: center
				+mq(tablet-wide, max)
					display: none

				&-link
					display: flex
					align-items: center

					&:hover
						.nav-global-logout-icon-menu
							transform: translateX(4px)

				&-icon-menu
					display: initial
					line-height: 16px
					height: 16px
					margin: 0 0 0 6px

</style>
