<template lang="pug">

	ul#slide-out.sidenav.sidenav-fixed.sidenav-list
		li.sidenav-list-item
			.user-view.sidenav-user
				a.sidenav-list-link.sidenav-list-link-settings.tooltipped(data-position="right" data-tooltip="Settings")
					i.material-icons.sidenav-icon-settings settings
				.background
					img
				a.sidenav-avatar
					img.circle.sidenav-user-circle(src="@/assets/images/user.jpg")

		li.sidenav-list-item
			.divider.sidenav-divider

		li.sidenav-list-item
			span.sidenav-username User

		li.sidenav-list-item
			.divider.sidenav-divider

		router-link(v-for="link in links" tag="li" :to="link.url")
			a.nav-links.sidenav-list-link(v-bind:class="[link.title === 'My Library' ? 'sidenav-list-link-library': true]") {{ link.title }}
				i.material-icons.grey-text.sidenav-icon-library(v-if="link.title === 'My Library'") view_module

		li.sidenav-list-item
			.divider.sidenav-divider

		li.sidenav-list-item
			.footer-copyright.subheader.copyright-text.grey-text
				.container © 2020 Anime Library

</template>

<script lang="ts">

	export default {
		name: "SideNav",
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

	.sidenav
		&-user
			padding: 32px !important

			&-circle
				height: 84px !important
				width: 84px !important
				box-shadow: 4px 4px 5px -1px rgba(0, 0, 0, 0.65)

		&-avatar
			cursor: default

		&-username
			color: $color-white

		&-divider
			opacity: 0.4
			margin: 0 !important
			background-color: $color-grey

		&-list
			margin-top: 54px
			background-color: $color-dark

		&-list-link
			display: flex
			justify-content: center
			color: $color-white

			&:hover
				opacity: 0.7

			&-library
				padding: 0 0 0 24px

			&-settings
				position: absolute
				bottom: 10px
				right: 20px
				height: 24px

				&:hover
					background-color: initial

		&-icon
			&-settings
				color: $color-light-grey

			&-library
				margin: 0 0 0 6px !important

</style>
