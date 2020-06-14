<template lang="pug">

	ul#nav-mobile.sidenav.sidenav-fixed.sidenav-mobile-list
		li.sidenav-mobile-list-item
			.user-view.sidenav-user
				a.sidenav-mobile-list-link.sidenav-mobile-list-link-settings(data-position="right")
					i.material-icons.sidenav-icon-settings settings
				.background
					img
				a
					img.circle.sidenav-user-circle(src="@/assets/images/user.jpg")

		li.sidenav-mobile-list-item
			.divider.sidenav-divider

		li.sidenav-mobile-list-item
			span.sidenav-username User

		li.sidenav-mobile-list-item
			.divider.sidenav-divider

		router-link(v-for="link in links" tag="li" :to="link.url")
			a.nav-links.sidenav-mobile-list-link(v-bind:class="[link.title ==='My Library' ? 'sidenav-mobile-list-link-library': true]") {{ link.title }}
				i.material-icons.grey-text.sidenav-icon-library(v-if="link.title === 'My Library'") view_module

		li.sidenav-mobile-list-item
			.divider.sidenav-divider

		li.sidenav-mobile-list-item
			.sidenav-mobile-list-logout
				a.sidenav-mobile-list-logout-link Log out
					i.material-icons.sidenav-mobile-list-logout-icon-menu exit_to_app

		li.sidenav-mobile-list-item
			.footer-copyright.subheader.copyright-text.grey-text
				.container © 2020 Anime Library

</template>

<script lang="ts">

	export default {
		name: "MobileNav",
		data: () => ({
			links: [
				{ title: "Home", url: "/" },
				{ title: "Search", url: "/search" },
				{ title: "My Library", url: "/library" }
			]
		 })
	 }

</script>

<style lang="sass" scoped>

	@import "../../assets/styles/utils/vars.sass"
	@import "../../assets/styles/utils/mixins.sass"
	@import "../../assets/styles/modules/indentations.sass"

	.sidenav
		&-user
			padding: 32px !important

			&-circle
				height: 84px !important
				width: 84px !important
				box-shadow: 4px 4px 5px -1px rgba(0, 0, 0, 0.65)

		&-username
			color: $color-white
			font-family: "Cairo", sans-serif

		&-divider
			background-color: $color-grey
			margin: 0 !important

		&-mobile-list
			margin-top: 54px
			background-color: $color-dark
			+mq(tablet-small, max)
				width: 100%

			&-link
				display: flex
				justify-content: center
				color: $color-white

				&:hover
					opacity: 0.7

				&-library
					margin: 0 0 0 24px

				&-settings
					position: absolute
					bottom: 10px
					right: 20px
					height: 24px

					&:hover
						background-color: initial

			&-logout
				display: flex
				justify-content: center
				align-items: center
				margin: 14px 0 0 24px

				&-link
					margin: 0 20px
					display: flex
					align-items: center
					color: $color-white

				&-icon-menu
					display: initial
					margin: 0 0 0 6px
					color: $color-white

		&-icon
			&-settings
				color: $color-grey

			&-library
				margin: 0 0 0 6px !important

</style>
